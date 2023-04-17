import { createLogger, format, transports, Logger } from 'winston';
const { combine, timestamp, label, prettyPrint, simple } = format;

const logger = createLogger({
    level: 'silly',
    format: format.json(),
    transports: [new transports.Console()],
});

const name = 'JSON Logger';

console.log(`************************** ${name.padStart(20).padEnd(40)} **************************`)
logger.error(`An error message for the ${name}`);
logger.warn(`A warning for the ${name}`);
logger.info(`Some information for the ${name}`);
logger.http(`And this is HTTP logging for the ${name}`);
logger.verbose(`Verbosity is not a virtue for the ${name}`);
logger.debug(`Debugging is important for the ${name}`);
logger.silly(`Being silly is fun for the ${name}`);



