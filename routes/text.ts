import express from "express";

const router = express.Router();


router.post("/",async  function(req, res) {
    const data = req.body.data

    if(data === undefined || data === '') {
        return res.status(400).json({ "error": "data have to be provide and wan't be empty" }).end();
    }

    const result = data;

    
    if(result === null) {
        return res.status(400).json({ "error": "wrong format for date param, you need to provide a date in the format ISO 8601" }).end();
    }

    if(result === false) {
        res.status(200);
        return res.json({"available": false}).end();
    }

    res.status(200);
    return res.json({"available": true}).end();
});

export default router;
