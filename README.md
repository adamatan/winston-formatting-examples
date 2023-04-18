# Winston Log formatting
A set of self-contained examples of winston logging formats.

## Running

```bash
yarn install
yarn log
```

## Usage

Copy the examples from the `src` directory, adapt and use.

## Output Example

```bash
node dist/01-simple.js
error: An error message for the Simple Logger
warn: A warning for the Simple Logger
info: Some information for the Simple Logger
http: And this is HTTP logging for the Simple Logger
verbose: Verbosity is not a virtue for the Simple Logger
debug: Debugging is important for the Simple Logger
silly: Being silly is fun for the Simple Logger


node dist/02-json.js
{"level":"error","message":"An error message for the JSON Logger"}
{"level":"warn","message":"A warning for the JSON Logger"}
{"level":"info","message":"Some information for the JSON Logger"}
{"level":"http","message":"And this is HTTP logging for the JSON Logger"}
{"level":"verbose","message":"Verbosity is not a virtue for the JSON Logger"}
{"level":"debug","message":"Debugging is important for the JSON Logger"}
{"level":"silly","message":"Being silly is fun for the JSON Logger"}


node dist/03-pretty-json.js
{ message: 'An error message for the JSON Logger', level: 'error' }
{ message: 'A warning for the JSON Logger', level: 'warn' }
{ message: 'Some information for the JSON Logger', level: 'info' }
{
  message: 'And this is HTTP logging for the JSON Logger',
  level: 'http'
}
{
  message: 'Verbosity is not a virtue for the JSON Logger',
  level: 'verbose'
}
{
  message: 'Debugging is important for the JSON Logger',
  level: 'debug'
}
{ message: 'Being silly is fun for the JSON Logger', level: 'silly' }


node dist/04-combined.js
error: An error message for the Combined Logger - text and timstamp {"timestamp":"2023-04-17T05:55:43.811Z"}
warn: A warning for the Combined Logger - text and timstamp {"timestamp":"2023-04-17T05:55:43.811Z"}
info: Some information for the Combined Logger - text and timstamp {"timestamp":"2023-04-17T05:55:43.811Z"}
http: And this is HTTP logging for the Combined Logger - text and timstamp {"timestamp":"2023-04-17T05:55:43.811Z"}
verbose: Verbosity is not a virtue for the Combined Logger - text and timstamp {"timestamp":"2023-04-17T05:55:43.811Z"}
debug: Debugging is important for the Combined Logger - text and timstamp {"timestamp":"2023-04-17T05:55:43.811Z"}
silly: Being silly is fun for the Combined Logger - text and timstamp {"timestamp":"2023-04-17T05:55:43.811Z"}


node dist/05-color.js
************************** Logger with colorful log level           **************************
[31merror[39m: An error message for the Logger with colorful log level
[33mwarn[39m: A warning for the Logger with colorful log level
[32minfo[39m: Some information for the Logger with colorful log level
[32mhttp[39m: And this is HTTP logging for the Logger with colorful log level
[36mverbose[39m: Verbosity is not a virtue for the Logger with colorful log level
[34mdebug[39m: Debugging is important for the Logger with colorful log level
[35msilly[39m: Being silly is fun for the Logger with colorful log level


node dist/06-color-entire-line.js
************************** Logger with the entire line in color     **************************
[31merror[39m: [31mAn error message for the Logger with the entire line in color[39m
[33mwarn[39m: [33mA warning for the Logger with the entire line in color[39m
[32minfo[39m: [32mSome information for the Logger with the entire line in color[39m
[32mhttp[39m: [32mAnd this is HTTP logging for the Logger with the entire line in color[39m
[36mverbose[39m: [36mVerbosity is not a virtue for the Logger with the entire line in color[39m
[34mdebug[39m: [34mDebugging is important for the Logger with the entire line in color[39m
[35msilly[39m: [35mBeing silly is fun for the Logger with the entire line in color[39m


node dist/07-aligned-log-level.js
************************** Log level in color and aligne with a tab **************************
2023-04-17T05:55:44.025Z [31merror[39m: 	An error message for the Log level in color and aligne with a tab
2023-04-17T05:55:44.025Z [33mwarn[39m: 	A warning for the Log level in color and aligne with a tab
2023-04-17T05:55:44.026Z [32minfo[39m: 	Some information for the Log level in color and aligne with a tab
2023-04-17T05:55:44.026Z [32mhttp[39m: 	And this is HTTP logging for the Log level in color and aligne with a tab
2023-04-17T05:55:44.026Z [36mverbose[39m: 	Verbosity is not a virtue for the Log level in color and aligne with a tab
2023-04-17T05:55:44.026Z [34mdebug[39m: 	Debugging is important for the Log level in color and aligne with a tab
2023-04-17T05:55:44.026Z [35msilly[39m: 	Being silly is fun for the Log level in color and aligne with a tab
```
