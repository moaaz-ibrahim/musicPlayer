const express= require('express');
const app = express();

const searchRoutes = require('./routes/search')
app.use('/search' , searchRoutes)
app.use(express.json());
app.use(express.static('public'))

app.get('/' , (req,res)=>{
    res.sendFile(__dirname  + '/views/index.html')
})

app.listen(3000 , ()=>{
    console.log('On 3000...')
})