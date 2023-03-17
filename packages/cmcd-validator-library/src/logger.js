import { createLogger, format as _format, transports as _transports } from 'winston';

const { combine, timestamp, json, errors } = _format;

export const logger = createLogger({
    level: 'info',
    format: combine(errors({ stack: true }), timestamp(), json()),
    transports: [new _transports.Console], 
});

