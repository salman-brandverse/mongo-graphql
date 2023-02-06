import TaskController, {
  Task,
  TasksParamsType,
} from "../../controllers/task.controller"
import UsersController, {
  UserParams,
  UserupdateType,
} from "../../controllers/user.controller"

const resolvers = {
  Query: {
    user: async (root: any, { id }: { id: string }, ctx: any) => {
      return await UsersController().userById({ id })
    },
    users: async (root: any, args: {}, ctx: any) => {
      return await UsersController().getUsers(args, ctx)
    },
    tasks: async (root: any, { id }: { id: string }, ctx: any) => {
      return await TaskController.taskById({ id }, ctx)
    },
  },
  Mutation: {
    addUser: async (root: any, inputObject: { input: UserParams }, ctx: any) =>
      await UsersController().addNewUser(inputObject, ctx),
    updateUser: async (
      root: any,
      { id, input }: { id: string; input: UserupdateType },
      ctx: any
    ) => await UsersController().updateUser({ id, input }, ctx),
    addTask: async (root: any, { id, input }: TasksParamsType, ctx: any) => {
      return await TaskController.addNewTask({ id, input }, ctx)
    },
    updateTask: async (
      root: any,
      { id, input }: { id: string; input: Task },
      ctx: any
    ) => {
      return await TaskController.updateTask({ id, input }, ctx)
    },
  },
}

export default resolvers
