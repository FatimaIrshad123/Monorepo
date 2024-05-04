import express from 'express';
const app = express()
const port = 4000;

app.get('/',(req:any,res:any) => {
    res.json({msg:'Hello from fatima'})
})
app.listen(port, () => console.log(`App running on port ${port}`))