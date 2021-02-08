import { Router, Request, Response } from "express";
import checkNum from "@src/core/checkNum";
const log = require("@src/core/logging").Logging.logger;

const router = Router();

router.get('/*', async (req: Request, res:Response) => {
    let input: string | number = decodeURI(req.originalUrl.substr(1)).trim();
    if (!input.match(/^\d+$/)) {
        return res.json({
            status: 416,
            message: "that's not a number, you fucking wanker."
        })
    } else if (input.length > 17) {
        return res.json({
            status: 413,
            message: "too many fucking numbers"
        })
    } else if (Number(input) > Number.MAX_SAFE_INTEGER) {
        return res.json({
            status: 413,
            message: "number's too fucking big"
        });
    } else if (Number(input) < Number.MIN_SAFE_INTEGER) {
        return res.json({
            status: 413,
            message: "number's too fucking small"
        })
    }

    await checkNum(Number(input))
        .then(numberType => {
            res.json({
                status: 200,
                number: input,
                type: numberType
            });
        })
        .catch(err => res.status(err.status || 400).send(err))
});

export default router;
