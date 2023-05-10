"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Server_1 = require("./server/Server");
Server_1.server.listen(process.env.SERVER_PORT, () => console.log(`Server ready and running at PORT: ${process.env.SERVER_PORT}`));
