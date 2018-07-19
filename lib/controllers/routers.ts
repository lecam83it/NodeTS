import {Response, Request, NextFunction, Router} from "express";
class Routes {
    public routers ( app ) : void {
        app.route('/')
        .get((req : Request, res : Response) => {
            res.json({"message" : "Hello I'm node js is built by Typescript"})
        });

        app.route('/home')
        .get((req : Request , res : Response) => {
            res.json({"message" : "Home Page"});
        })
    }
}
export default Routes;