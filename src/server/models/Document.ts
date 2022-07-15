import { Column, DataType, Table } from "sequelize-typescript";
import ParanoidModel from "./base/ParanoidModel";

@Table({ tableName: "documents", modelName: "document" })
class Document extends ParanoidModel {
  @Column(DataType.STRING)
  title: string;
}

export default Document;
