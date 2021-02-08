import express from "express";
import limit from "express-rate-limit"
import "./tracer";
import routes from "@src/routes";

const slash = require('express-trailing-slash');
const StatsD = require('hot-shots');

const log = require("@src/core/logging").Logging.logger;

let app = express();

let dogstatsd = new StatsD({
    errorHandler: function(error: Error) {
        log.error(`Socket errors caught here:`);
        log.error(`${error}`);
    }
});


app.use(limit({
    message: {
        status: 429, message: "API Rate Limit Reached."
    },
    windowMs: 60 * 1000,
    max: 100
    })
);

app.use((req: any, res: express.Response, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Forwarded-For, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET');
    log.info(`[Client: ${req.headers['x-forwarded-for'] || req.ip}] - ${req.method}:${req.url} ${res.statusCode}`);
    dogstatsd.increment('page.views');
    next();
});

app.use("/", routes)

app.set("trust proxy", 1);

export default app;

