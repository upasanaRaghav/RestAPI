const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

app.get('/', (req, res) => {
    console.log("in route");
    res.send("hii");
});

//if multiple same route is using it
app.route('/api/users/:id')
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
})
.put((res,req)=>{})
.delete((req,res)=>{});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.email}</li>`).join("")}
    </ul>`;
    res.send(html);
});

// app.patch('/api/users/:id',(res,req)=>{
//     return res.json({status:"pending"})
// });

// app.delete('/api/users/:id',(res,req)=>{
//     return res.json({status:"pending"})
// });
