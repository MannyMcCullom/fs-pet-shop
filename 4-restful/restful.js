import express from 'express';
import pg from 'pg';

const client = new pg.Client({
    database: 'petshop',
    password: '1234'
});

await client.connect()

const app = express();

const port = 8000;


app.get('/pets', (req, res)=>{
    client.query('SELECT * FROM pets')
    .then((result)=>{
        res.send(result.rows)
    }) 
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`)

});