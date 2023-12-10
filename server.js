const { render } = require('ejs');
const express = require('express');
const path = require('path')

const app = express();

app.set('view engine', 'ejs'); 
console.log(app.get('view engine'));

const mainRouter = require('./routes/index')

const apikeyMiddleware = require('./middleware/apiKey')

app.use(mainRouter)

app.use(apikeyMiddleware)

app.listen(3000)

// app.get('/about' , (req,res) => {
//     res.sendFile(path.resolve(__dirname) + '/about.html')
// })

// app.use(express.static('public'));
// app.listen(3000)
