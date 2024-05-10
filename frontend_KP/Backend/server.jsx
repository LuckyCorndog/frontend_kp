const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'0660273384',
    database:'frontend_db'
})

app.use(express.json())

app.get('/',(re,res)=>{
    return res.json('From Backend');
})

app.get('/travel_blogs', (req,res)=>{
    const sql = "SELECT * FROM travel_blogs";
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/blogs', (req,res)=>{
    const sql = "INSERT INTO travel_blogs (`user_name`,`title`,`body`,`image`) VALUES (?)"
    const values =[
        req.body.name,
        req.body.title,
        req.body.text,
        req.body.image
    ];

    db.query(sql, [values], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log('listening');
})