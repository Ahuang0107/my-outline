import { Transaction } from "sequelize";
import invariant from "invariant";
import randomString from "randomstring";
import Document from "../models/Document";

export default async function documentCreator({
  title = "",
  text = "",
  transaction,
}: {
  title: string;
  text: string;
  transaction: Transaction;
}): Promise<Document> {
  const document = await Document.create(
    {
      title,
      text,
      urlId: randomString.generate(10),
    },
    {
      transaction,
    }
  );
  invariant(document, "Document must exist");
  return document;
}
