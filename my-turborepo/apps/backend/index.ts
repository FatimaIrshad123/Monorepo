import express from 'express';
import {VALUE} from '@repo/common/config'

const app = express()
const port = 4000;

console.log(VALUE)

app.get('/',(req:any,res:any) => {
    res.json({msg:'Hello from fatima'})
})
app.listen(port, () => console.log(`App running on port ${port}`))