import * as winston  from 'winston';

const { combine, timestamp, json, errors } = winston.format;

export const logger = winston.createLogger({
    level: 'info',
    format: combine(errors({ stack: true }), timestamp(), json()),
    transports: [new winston.transports.Console], 
});

