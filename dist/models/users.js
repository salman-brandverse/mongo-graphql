"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model("User", UserSchema);
//# sourceMappingURL=users.js.map