import express, {Express} from "express";
import {buildRoutes} from "./routes";
import {app} from './app';


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is Listening on port ' + port);
});
