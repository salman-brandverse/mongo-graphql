"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_controller_1 = __importDefault(require("../../controllers/task.controller"));
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const resolvers = {
    Query: {
        user: (root, { id }, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, user_controller_1.default)().userById({ id });
        }),
        users: (root, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, user_controller_1.default)().getUsers(args, ctx);
        }),
        tasks: (root, { id }, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            return yield task_controller_1.default.taskById({ id }, ctx);
        }),
    },
    Mutation: {
        addUser: (root, inputObject, ctx) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, user_controller_1.default)().addNewUser(inputObject, ctx); }),
        updateUser: (root, { id, input }, ctx) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, user_controller_1.default)().updateUser({ id, input }, ctx); }),
        addTask: (root, { id, input }, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            return yield task_controller_1.default.addNewTask({ id, input }, ctx);
        }),
        updateTask: (root, { id, input }, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            return yield task_controller_1.default.updateTask({ id, input }, ctx);
        }),
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map