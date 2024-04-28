const express = require('express')
const sequelize = require('./db')
const appRoutes = require('./routes')
const app = express()

sequelize.sync().then(() => {
    console.log('Sequelize initialized');
})
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({msg: 'This Api is used for recording Students data'})
})
app.use(appRoutes)


app.listen(3000, () =>console.log('App running on port 3000'))