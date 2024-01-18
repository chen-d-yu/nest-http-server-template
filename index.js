const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const upload = multer({ dest: "uploadFiles/" });
const app = express();

//读取json配置
app.use(bodyParser.json({ limit: "1mb" }));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.get('/query', (req, res) => {
    console.log(req.query)
    res.send('query')
})

app.get('/param/:id', (req, res) => {
    console.log(req.params)
})

app.get('/urlencoded', (req, res) => {
    console.log(req.body)
})

app.post('/urlencoded', (req, res) => {
    console.log(req.body)
})

app.post('/json', (req, res) => {
    console.log(req.body)
})

app.post('/form-data', upload.single('cover'), (req, res) => {
    // req.file 记录了文件上传的信息
    // req.body 记录了其它普通参数（非文件）的信息
    console.log(req.file)
    console.log(req.body)
})

app.listen(3500, () => {
    console.log("服务启动端口3500");
});
