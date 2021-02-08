const winston = require('winston');
const { createLogger, format, transports } = winston;
const { combine, printf, colorize } = format;
import moment from 'moment';


export abstract class Logging {
    static prettyJson = format.printf((info: any) => {
        if (info.message.constructor === Object)
            info.message = JSON.stringify(info.message, null, 4)

        return `${moment().format('YYYY-MM-DD THH:mm:ss.SSSZZ')} [${info.level}]: ${info.message}`;
    })

    static logger = createLogger({
        format: combine(
            format((info: any) => {
                info.level = info.level.toUpperCase();
                return info
            })(),
            printf((info: any) => {
                return `${moment().format('YYYY-MM-DD THH:mm:ss.SSSZZ')} [${info.level}]: ${info.message}`;
            })
        ),
        transports: [
            new transports.Console({
                level: "info",
                format: combine(
                    format((info: any) => {
                        info.level = info.level.toUpperCase();
                        return info;
                    })(),
                    colorize(),
                    Logging.prettyJson
                )
            })
        ],
        exitOnError: true
    });

}
