import cors from "cors";
import express from "express";
const app = express();

console.log("started: ");
const recordedMessages = [];

//setup auto-parsing of http request body as json
app.use(express.json());
app.use(cors());

app.get("/messages", (_req, res) => {
    res.json(recordedMessages);
});

app.get("/", (req, res) => {
    // console.log("req: ", req.headers);
    console.log(req.query);
    const queryParams = req.query;
    if (queryParams.name === "neill") {
        res.json("hello Neill!");
    } else {
        res.json("hello");
    }
});

app.post("/messages", (req, res) => {
    const msg = req.body;
    if (msg) {
        recordedMessages.push(msg);
        const len = recordedMessages.length;
        res.json("message recorded! " + len);
    } else {
        res.json("no message supplied!");
    }
});

app.listen(3001, () => {
    console.log("running", new Date());
});
