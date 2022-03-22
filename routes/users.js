const express = require('express')
const router = express.router

const users = [{name: "Serge", email: "serge@email.com"},{name: "Andrea", email: "andrea@email.com"}]

router.get("/", (req, res) => {
    res.send("Serge's Express router")
})

router.get("/users", (req, res) => {
    res.json({ok: true, users})
})

router.get('/user/:name', (req,res) =>{
    const {name} = req.params;
    const user = users.filter((user)=> user.name === name)[0]
    res.json({ok:true, user})
})

router.post("/adduser", (req, res) => {
    const {name, email} = req.body;
    if (name && email) {
        users.push({name,email})
        res.json({ok: true, users})
    }
})



module.exports = router