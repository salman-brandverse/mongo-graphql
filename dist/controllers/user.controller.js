"use strict";
// import { Context } from '../models/context';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const Users = require("../models/users");
class UsersController {
    getUser(args, ctx) {
        return (Users.findOne({ _id: args["id"] })
            //   .populate({
            //     path: "user",
            //     model: "User",
            //   })
            .then((user) => {
            console.log("users", user);
            return user;
        }));
    }
    getUsers(args, ctx) {
        return (Users.find()
            //   .populate({
            //     path: "user",
            //     model: "User",
            //   })
            .then((user) => {
            return user;
        })
            .catch((err) => {
            console.log("mongoerr", err);
        }));
    }
    addUser(inputObject, ctx) {
        return Users.create(inputObject.input).then((userInfo) => {
            return userInfo;
        });
    }
    updateUser(inputObject, ctx) {
        return Users.findOneAndUpdate({ _id: inputObject.id }, inputObject.input, {
            new: true,
        }).then((userInfo) => {
            return userInfo;
        });
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=user.controller.js.map