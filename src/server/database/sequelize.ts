import { Sequelize } from "sequelize-typescript";
import Logger from "../logging/logger";
import * as models from "../models";

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: (msg) => Logger.debug("database", msg),
  typeValidation: true,
  models: Object.values(models),
});
