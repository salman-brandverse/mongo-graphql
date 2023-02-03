// import { Context } from '../models/context';

const Users = require("../models/users");

export class UsersController {
  getUser(args: any, ctx: any) {
    return (
      Users.findOne({ _id: args["id"] })
        //   .populate({
        //     path: "user",
        //     model: "User",
        //   })
        .then((user: any) => {
          console.log("users", user);
          return user;
        })
    );
  }
  getUsers(args: any, ctx: any) {
    return (
      Users.find()
        //   .populate({
        //     path: "user",
        //     model: "User",
        //   })
        .then((user: any) => {
          return user;
        })
        .catch((err: any) => {
          console.log("mongoerr", err);
        })
    );
  }

  addUser(inputObject: any, ctx: any) {
    return Users.create(inputObject.input).then((userInfo: any) => {
      return userInfo;
    });
  }

  updateUser(inputObject: any, ctx: any) {
    return Users.findOneAndUpdate({ _id: inputObject.id }, inputObject.input, {
      new: true,
    }).then((userInfo: any) => {
      return userInfo;
    });
  }
}
