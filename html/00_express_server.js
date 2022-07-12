const express = require('express');
//const cors = require('cors');

const app = express();
const port = 5000;

//app.use(cors()); // CORS 미들웨어 등록
app.use(express.json());

app.get('/', (req, res) => res.send('Hello Express'));

app.post('/api/user', (req, res) => {
  const { name, age } = req.body;
  console.log(name, age);
  return res.json({ name: 'RKPOST', age: '31' });
});

app.listen(port, () => console.log('Example express'));

/*
fetch('/api/user', {
   method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
       name: 'RK' ,
       age: 30,
    }),
}).then(res=>res.json()).then(r=>console.log(r));
*/
