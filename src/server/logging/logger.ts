import winston from "winston";
import { isEmpty } from "lodash";
import chalk from "chalk";

type LogCategory = "lifecycle" | "http" | "database";
type Extra = Record<string, any>;

class Logger {
  output: winston.Logger;

  constructor() {
    this.output = winston.createLogger();
    this.output.add(
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.printf(
            ({ message, level, label, ...extra }) =>
              `${level}: ${label ? chalk.bold(`[${label}] `) : ""}${message} ${
                isEmpty(extra) ? "" : JSON.stringify(extra)
              }`
          )
        ),
      })
    );
  }

  info(label: LogCategory, message: string, extra?: Extra) {
    this.output.info(message, { ...extra, label });
  }

  debug(label: LogCategory, message: string, extra?: Extra) {
    this.output.debug(message, { ...extra, label });
  }
}

export default new Logger();
