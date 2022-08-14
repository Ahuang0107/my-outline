import { Sequelize } from "sequelize-typescript";
import Logger from "../logging/logger";
import * as models from "../models";
import env from "../env";

export const sequelize = new Sequelize(env.DATABASE_URL, {
  logging: (msg) => Logger.debug("database", msg),
  typeValidation: true,
  models: Object.values(models),
});
