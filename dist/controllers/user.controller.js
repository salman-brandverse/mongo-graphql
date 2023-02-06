"use strict";
// import { Context } from '../models/context';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users = require("../models/users");
const UsersController = () => {
    const userById = ({ id }) => __awaiter(void 0, void 0, void 0, function* () { return yield Users.findOne({ _id: id }); });
    const getUsers = (args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
        return yield Users.find();
    });
    const addNewUser = (inputObject, ctx) => __awaiter(void 0, void 0, void 0, function* () { return yield Users.create(inputObject.input); });
    const updateUser = ({ id, input }, ctx) => __awaiter(void 0, void 0, void 0, function* () {
        return yield Users.findOneAndUpdate({ _id: id }, input, {
            new: true,
        });
    });
    return { userById, addNewUser, getUsers, updateUser };
};
exports.default = UsersController;
//# sourceMappingURL=user.controller.js.map