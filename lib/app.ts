import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as logger from "morgan";
import Routes from "./controllers/routers";

class App {
    public app :  express.Application;
    private router : Routes = new Routes();
    private mongoURL : string = "mongodb://thantoandoc83:lecam16T1@ds243441.mlab.com:43441/typescript";
    constructor() {
        this.connectDB();
        this.app = express();
        this.config();
        this.router.routers(this.app);
    }
    private connectDB() : void {
        mongoose.connect(this.mongoURL);
    }
    private config() : void {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended : false}));
    }
}

export default new App().app;