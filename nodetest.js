let http = require('http');
let data = {
    nom:'ilham',
    age:21,
}
let sever = http.createServer(function(req,res){
    if (req.url == '/test')
    {
        res.end(JSON.stringify(data))
    }
    else 
    {
        res.end('error')
    }

})

sever.listen(8080)
console.log("done")