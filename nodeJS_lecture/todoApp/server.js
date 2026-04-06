const express = require('express');
const app = express();

app.listen(8888, () => {
  console.log('Server is running on port 8888');
});

// 누군가가 /pet 으로 방문하면 pet 관련된 HTML 파일을 보여주도록 설정
app.get('/pet', (req, res) => {
//   res.sendFile(__dirname + '/views/pet.html');
    res.send('Pet 용품을 쇼핑할 수 있는 페이지입니다.');
});

// 뷰티용품 페이지 추가(숙제)
app.get('/beauty', (req, res) => {
    res.send('뷰티(beauty) 용품을 쇼핑할 수 있는 페이지입니다.');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/write', (req, res) => {
    res.sendFile(__dirname + '/write.html');
})