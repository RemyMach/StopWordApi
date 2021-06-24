import express from "express";
import {removeStopwords} from "stopword";

const router = express.Router();


router.post("/",async  function(req, res) {
    let data = req.body.data

    if(data === undefined || data === '') {
        return res.status(400).json({ "error": "data have to be provide and wan't be empty" }).end();
    }

    data = data.replace(/[^0-9a-z ']/gi, ' ');
    let finalResult = "";

    for (let i = 0;i<data.length-1; i++) {
        if(!(data[i] === ' ' && data[i + 1] === ' '))
            finalResult += data[i];
    }
    if(data[data.length-1] !== ' ')
        finalResult += data[data.length-1];

    const resultArray = removeStopwords(finalResult.split(' '));
    const result = resultArray.join(' ');

    
    if(result === null) {
        return res.status(400).json({ "error": "error when getting stop word" }).end();
    }


    res.status(200);
    return res.json({"text": result}).end();
});

export default router;
