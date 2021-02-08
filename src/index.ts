import "./tracer";
import app from "./app";
const log = require("@src/core/logging").Logging.logger;

const server = app.listen(4000, () => {
    log.info(`API is now listening on port 4000`);
});
