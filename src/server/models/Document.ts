import {
  Column,
  DataType,
  Length,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { FindOptions } from "sequelize";
import ParanoidModel from "./base/ParanoidModel";

@Table({ tableName: "documents", modelName: "document" })
class Document extends ParanoidModel {
  @PrimaryKey
  @Column(DataType.STRING)
  urlId: string;

  @Length({
    min: 0,
    max: 100,
    msg: `Document title must be less than ${100} characters`,
  })
  @Column(DataType.STRING)
  title: string;

  @Column(DataType.TEXT)
  text: string;

  static async findByPk(id: string, options: FindOptions<Document> = {}) {
    return this.findOne({
      where: {
        id,
      },
      ...options,
    });
  }
}

export default Document;
