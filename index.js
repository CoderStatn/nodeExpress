const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello To Tomal World!')
})

const users = [
    { id: 0, name: "Tomal", email: "samiatomal41@gmail.com" },
    { id: 1, name: "Samia", email: "samtomal41@gmail.com" },
    { id: 2, name: "Sameera", email: "borshatomal41@gmail.com" },
    { id: 3, name: "Sadia", email: "bornatomal41@gmail.com" },
    { id: 4, name: "Fouzia", email: "tamannatomal41@gmail.com" },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})