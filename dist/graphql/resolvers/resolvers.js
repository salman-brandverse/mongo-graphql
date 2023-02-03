"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_controller_1 = require("../../controllers/task.controller");
const user_controller_1 = require("../../controllers/user.controller");
const usersController = new user_controller_1.UsersController();
const tasksController = new task_controller_1.TaskController();
const resolvers = {
    Query: {
        user: (_, args, ctx, _info) => {
            return usersController.getUser(args, ctx);
        },
        users: (_, args, ctx, _info) => {
            return usersController.getUsers(args, ctx);
        },
        tasks: (_, inputObject, ctx) => {
            return tasksController.getTasks(inputObject, ctx);
        },
    },
    Mutation: {
        addUser: (_, inputObject, ctx) => {
            return usersController.addUser(inputObject, ctx);
        },
        updateUser: (_, inputObject, ctx) => {
            return usersController.updateUser(inputObject, ctx);
        },
        addTask: (_, inputObject, ctx) => {
            return tasksController.addTask(inputObject, ctx);
        },
        updateTask: (_, inputObject, ctx) => {
            return tasksController.updateTask(inputObject, ctx);
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map