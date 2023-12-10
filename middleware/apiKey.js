function apiKey(req, res,next) {
    const api_key = "123456" 
    // console.log(req.query, api_key );

    const userApiKey = req.query.api_key;
    if(userApiKey && (userApiKey === api_key)) {
        next()
    } else{
        // res.json({message: "Error 404"});
        res.send({message: "Error 404"});

    }
}

module.exports = apiKey