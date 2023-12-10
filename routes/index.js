const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('index', {
        title: 'myHomePage'
    });
})

router.get('/about', (req,res) => {
    res.render('about' , {
        title: "MyAboutPage"
    })
})
router.get('/api/products', (req,res) => {
     res.json([
    {
        id: '123',
        name: "Sara",
    },
    { 
        id: "420",
        name: "JAveria"
    }
    ]); 
})

module.exports = router;

// http://localhost:3000/api/products?api_key=123456