"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_route_1 = __importDefault(require("./routes/task.route"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const error_middleware_1 = require("./middleware/error.middleware");
const not_found_middleware_1 = require("./middleware/not-found.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use('/tasks', task_route_1.default);
app.use(error_middleware_1.errorHandler);
app.use(not_found_middleware_1.notFoundHandler);
app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile("/Users/macbook/Development/fun/task-manager/server/src/public/index.html");
});
exports.default = app;
