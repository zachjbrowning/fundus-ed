const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const DIST_DIR = path.join(__dirname, './dist');
const APP_ENTRY = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

//Listening for requests
app.post("/*", (req, res) => {
    console.log(req, res);
    res.write(JSON.dumps("YEET"))
}
)
app.get("/*", (req, res) => {
    console.log(req, res);
    res.write(JSON.dumps("YEET"))
}
)
app.put("/*", (req, res) => {
    console.log(req, res);
    res.write(JSON.dumps("YEET"))
}
)

app.listen(port, () => {
    console.log('Listening on port' + port);
})