import { GraphQLResolveInfo } from "graphql";
// import { Context } from '../../models/';
import { makeExecutableSchema } from "graphql-tools";
import { TaskController } from "../../controllers/task.controller";
import { UsersController } from "../../controllers/user.controller";

const usersController = new UsersController();
const tasksController = new TaskController();
const resolvers = {
  Query: {
    user: (_: void, args: any, ctx: any, _info: any) => {
      return usersController.getUser(args, ctx);
    },
    users: (_: void, args: any, ctx: any, _info: any) => {
      return usersController.getUsers(args, ctx);
    },
    tasks: (_, inputObject, ctx: any) => {
      return tasksController.getTasks(inputObject, ctx);
    },
  },
  Mutation: {
    addUser: (_, inputObject, ctx: any) => {
      return usersController.addUser(inputObject, ctx);
    },
    updateUser: (_, inputObject, ctx: any) => {
      return usersController.updateUser(inputObject, ctx);
    },

    addTask: (_, inputObject, ctx: any) => {
      return tasksController.addTask(inputObject, ctx);
    },
    updateTask: (_, inputObject, ctx: any) => {
      return tasksController.updateTask(inputObject, ctx);
    },
  },
};

export default resolvers;
