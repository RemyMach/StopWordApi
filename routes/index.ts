import {Express} from "express";
import roomRouter from './text';

export function buildRoutes(app: Express) {
    app.use("/texts", roomRouter);
}
