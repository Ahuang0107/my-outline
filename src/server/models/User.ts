import {
  AllowNull,
  Column,
  DataType,
  Default,
  IsEmail,
  Table,
} from "sequelize-typescript";
import ParanoidModel from "./base/ParanoidModel";

@Table({ tableName: "users", modelName: "user" })
class User extends ParanoidModel {
  @IsEmail
  @Default(null)
  @AllowNull
  @Column(DataType.STRING)
  email: string | null;
}

export default User;
