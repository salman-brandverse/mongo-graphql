"use strict";
// import { Context } from '../models/context';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const Tasks = require("../models/tasks");
class TaskController {
    getTasks(args, ctx) {
        return Tasks.find({ user: args["id"] })
            .populate({
            path: "user",
            model: "User",
        })
            .then((user) => {
            console.log("users", user);
            return user;
        });
    }
    addTask(inputObject, ctx) {
        return Tasks.create({
            title: inputObject.input.title,
            completed: inputObject.input.completed,
            user: inputObject.id,
        }).then((taskInfo) => {
            return taskInfo;
        });
    }
    updateTask(inputObject, ctx) {
        console.log("inputObject", inputObject);
        return Tasks.findOneAndUpdate({ user: inputObject.id }, inputObject.input)
            .then((userInfo) => {
            console.log("work", userInfo);
            return userInfo;
        })
            .catch((err) => {
            console.log("error", err);
        });
    }
}
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map