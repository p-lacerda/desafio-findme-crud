"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
const cors = require("cors");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(accessControl);
        this.app.use('/cliente', routes_1.clienteRouter);
        this.app.use('/colaborador', routes_1.colaboradorRouter);
        this.app.use('/ordens', routes_1.ordensRouter);
    }
    start(PORT) {
        this.app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map