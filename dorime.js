const http = require('http')
const port = 4000
const fs = require('fs')
http.createServer((req, res) => {
    res.writeHead(200, {'content-Type':'text/html'})
    // res.write("This is the dark web,a no go area.Back off")
    fs.readFile('./got.html', null, (error, data)=>{
        if(error){
            response.writeHead('404');
            response.writeHead('Whoops! File not found')
        }else{
            res.write(data);
        }
        res.end()
    })
    
    
})
.listen(port,()=>{
    console.log(`connected on 192.168.130.122:${port}`)
}
    )


