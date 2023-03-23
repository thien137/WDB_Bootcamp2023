import { ObjectId } from "mongodb";

export default class Docs {
  constructor(
    public id: number,
    public user_id: number,
    public title: string,
    public body: string,
    public created_at: Date,
  ) {}
}
