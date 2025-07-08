const express  = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

const data = [
    {
        name: "Sample1",
        age: "20",
        email: "sample1@sample.com"
    },
    {
        name: "Sample2",
        age: "22",
        email: "sample2@sample.com"
    },
]

app.get('/get',(req, res)=>{
    res.status(200).send({
        message: 'Hello this is express server', 
        data: data
    });
})

app.post('/post', (req, res)=>{
    const newData = req.body;
    data.push(newData);
    res.status(200).send({
        message: "Data received successfully",
        updatedData: data,
    }) 
})



const PORT = 4000;
app.listen(PORT, ()=>{
    console.log('Server is running in the PORT 4000')
})