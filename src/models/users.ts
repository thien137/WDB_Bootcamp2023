import { ObjectId } from "mongodb";

export default class Users {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email: string,
  ) {}
}