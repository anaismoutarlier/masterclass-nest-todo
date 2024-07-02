import { Controller, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post("login")
  findOne(@Body() data: { username: string; password: string }) {
    return this.userService.findOne(data);
  }
}
