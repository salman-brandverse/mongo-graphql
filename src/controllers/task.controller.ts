// import { Context } from '../models/context';

const Tasks = require("../models/tasks");

export class TaskController {
  getTasks(args: any, ctx: any) {
    return Tasks.find({ user: args["id"] })
      .populate({
        path: "user",
        model: "User",
      })
      .then((user: any) => {
        console.log("users", user);
        return user;
      });
  }

  addTask(inputObject: any, ctx: any) {
    return Tasks.create({
      title: inputObject.input.title,
      completed: inputObject.input.completed,
      user: inputObject.id,
    }).then((taskInfo: any) => {
      return taskInfo;
    });
  }

  updateTask(inputObject: any, ctx: any) {
    console.log("inputObject", inputObject);
    return Tasks.findOneAndUpdate({ user: inputObject.id }, inputObject.input)
      .then((userInfo: any) => {
        console.log("work", userInfo);
        return userInfo;
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  }
}
