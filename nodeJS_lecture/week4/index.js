var figlet = require('figlet');
const express = require('express');
const cors = require('cors');

figlet('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.log(err);
        return;
    }
    console.log(data);
});
/*
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello Express World!!!')
})

app.listen(3000)
*/

const app = express()
const port = 3000

// app.use(cors())
app.use(
    cors()
)
app.get('/', (req, res) => {
    res.send('Hello Express World!!!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)

    if(name == "dog") {
        res.json({'sound': '멍멍!!'})
    } else if (name == "cat") {
        res.json({'sound': '야옹!!'})
    } else if (name == "pig") {
        res.json({'sound': '꿀꿀!'})
    } else {
        res.json({'sound': '알 수 없는 동물입니다.'})
    }
})
/*
app.get('/user/:id', (req, res) => {

    // parameters
    const q = req.params
    // console.log(q.id)

    //query
    const q = req.query
    console.log(q.id)

    res.json({'user name': q.name})
})
*/
app.get('/dog', (req, res) => {
    // res.send('강아지!!!')
    res.send({'sound': '멍멍!!!'})
})

app.get('/cat', (req, res) => {
    // res.send('고양이!!!')
    res.json({'sound': '야옹!!!'})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})