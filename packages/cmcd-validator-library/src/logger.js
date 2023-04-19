// import * as winston from 'winston';
// import { createLogger, format, transports } from 'winston';

const winston = require('winston');
// const winstonBrowser = require('winston-browser');

// import { createLogger, transports } from 'winston';
// import winston, { transports } from 'winston';

// import { createLogger } from 'winston';
// import { transports } from 'winston/transports'
// import { format } from 'winston/lib/winston/format';

const {
  combine, timestamp, json, errors,
} = winston.format;

// winston.add(winstonBrowser.create());

export const logger = winston.createLogger({
  level: 'info',
  format: combine(errors({ stack: true }), timestamp(), json()),
  transports: [new winston.transports.Console()],
});

// import * as bunyan from 'bunyan'
// const bunyan = require('bunyan');
// export const logger = bunyan.createLogger({name: "myapp"});
