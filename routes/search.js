const router = require('express').Router();
const http = require('https');

router.get('/' , async(request,response)=>{
const songName= request.query.songName;
    const options = {
        method: 'GET',
        hostname: 'spotify23.p.rapidapi.com',
        port: null,
        path: `/search/?q=${songName}&type=tracks&offset=0&limit=10&numberOfTopResults=5`,
        headers: {
            'X-RapidAPI-Key': '91494d9e2bmsh3928ea77414d0e9p163f23jsn6556cf59bade',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    const req = http.request(options, function (res) {
        const chunks = [];
    
        res.on('data', function (chunk) {
            chunks.push(chunk);
        });
    
        res.on('end', function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
            response.json(JSON.parse(body.toString()));
        });
    });
    
    req.end();
})

module.exports = router;