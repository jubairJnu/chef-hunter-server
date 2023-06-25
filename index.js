const express = require('express')
const app = express();
const port = 5000;
const cors = require('cors')
const chefs = require('./data/chef-catagory.json')
const recipes = require('./data/recipes.json')


app.use(cors())
app.get('/', (req, res)=>{
  res.send('server is comming')
})
app.get('/chefs',(req,res)=>{
  res.send(chefs);
})



app.get('/chefs/:id',( req, res)=>{
  const id = parseInt(req.params.id);
const selectedId = chefs.find(n=> parseInt(n.id) === id)
  res.send(selectedId);
})

app.listen(port,()=>{
  console.log(`my server is running ${port}`)
})