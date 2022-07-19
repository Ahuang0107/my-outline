import { Column, DataType, Table } from "sequelize-typescript";
import { FindOptions } from "sequelize";
import ParanoidModel from "./base/ParanoidModel";

@Table({ tableName: "documents", modelName: "document" })
class Document extends ParanoidModel {
  @Column(DataType.STRING)
  title: string;

  static async findByPk(id: string, options?: FindOptions<Document>) {
    return this.findOne({
      where: {
        id,
      },
      ...options,
    });
  }
}

export default Document;
