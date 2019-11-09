const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./db/words.json');
const db = low(adapter);

const app = express();

app.get('/', (req, res) => {
    const ret = {
        msg: 'hello from products api'
    }
    res.json(ret);
})

app.get('/translate', (req, res) => {
    const word = req.query.word | "hello";
    const lang = req.query.lang | "vi";
    var ret = "";
    // const words = db.get("words");
    // if (lang = "vi") {
    //     ret = words.find(w => w.vi == word);
    // } else {
    //     ret = words.find(w => w.en == word);
    // }

    res.json(ret)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API runing on port ${PORT}`);
});