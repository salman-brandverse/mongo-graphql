// import { Context } from '../models/context';

const Users = require("../models/users")

export type UserupdateType = {
  name: string
  email: string
  phone: string
}
export type UserParams = { id?: string; createdAt?: string } & UserupdateType

const UsersController = () => {
  const userById = async ({ id }: { id: string }): Promise<UserParams> =>
    await Users.findOne({ _id: id })

  const getUsers = async (args: any, ctx: any): Promise<UserParams[]> => {
    return await Users.find()
  }
  const addNewUser = async (
    inputObject: { input: UserParams },
    ctx: any
  ): Promise<UserParams> => await Users.create(inputObject.input)

  const updateUser = async (
    { id, input }: { id: string; input: UserupdateType },
    ctx: any
  ): Promise<UserParams> => await Users.findOneAndUpdate({ _id: id }, input)

  return { userById, addNewUser, getUsers, updateUser }
}
export default UsersController
