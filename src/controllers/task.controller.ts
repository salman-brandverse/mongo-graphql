import { UserParams } from "./user.controller"
import Tasks from "../models/tasks"

export type Task = {
  title: string
  completed: boolean
}

export type TasksParamsType = {
  input: Task
  id: string
}
export type TasksType = {
  title: string
  completed: string
  id?: string
  user?: UserParams
}

export default {
  taskById: async ({ id }: { id: string }, ctx: any): Promise<TasksType[]> =>
    await Tasks.find({ user: id }).populate({
      path: "user",
      model: "User",
    }),
  addNewTask: async ({ input, id }: TasksParamsType, ctx: any): Promise<Task> =>
    await Tasks.create({
      title: input.title,
      completed: input.completed,
      user: id,
    }),
  updateTask: async (
    { id, input }: { id: string; input: Task },
    ctx: any
  ): Promise<Task> => await Tasks.findOneAndUpdate({ _id: id }, input),
}
