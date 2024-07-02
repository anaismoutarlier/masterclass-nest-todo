import { Injectable } from "@nestjs/common";
import { users } from "./users.mock";

@Injectable()
export class UsersService {
  findOne({ username, password }: { username: string; password: string }) {
    const user = users.find(
      (user) => user.username === username && user.password === password,
    );
    return { user };
  }
}
