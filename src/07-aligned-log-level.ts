import { createLogger, format, transports } from 'winston';
const { combine } = format;

const alignedWithColorsAndTime = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

const logger = createLogger({
  level: 'silly',
  format: alignedWithColorsAndTime,
  transports: [new transports.Console()]
})

const name = 'Log level in color and aligne with a tab';
console.log(`************************** ${name.padStart(20).padEnd(40)} **************************`)

logger.error(`An error message for the ${name}`);
logger.warn(`A warning for the ${name}`);
logger.info(`Some information for the ${name}`);
logger.http(`And this is HTTP logging for the ${name}`);
logger.verbose(`Verbosity is not a virtue for the ${name}`);
logger.debug(`Debugging is important for the ${name}`);
logger.silly(`Being silly is fun for the ${name}`);



