const http = require('node:http')
//recibe un callback siendo una función anónima la cual va a tener 2 argumentos (la petición y la respuesta)

function listarKoders (){
    return[]
}

const server = http.createServer((request, response)=>{
    console.log('request', request)
    const method = request.method
    const url = request.url

    if(url.startsWith('/koders')){
        if(method==='GET'){
            const koders = listarKoders()
        }
    }
/*
    if(method ==='GET' && url === '/koders'){
        console.log(('listado de koders'))
    }else if(method ==='POST' && url === '/koders'){

    }
    */
    response.end(`${method} : ${url}`)

    
})

server.listen(8081,()=>{
    console.log('server is listening on port 8081')
})



/*
    Methods:

    Get => obtener (no llevan cuerpo)
    POST => Crear
    DELETE => Eliminar
    PATCH => Actualizar
    PUT => Reemplazar
*/

//URL https://api.kodemia.mx/koders

//Get https://api.kodemia.mx/koders --> Listado de koders
//Post https://api.kodemia.mx/koders --> Crear Koder
//Delete https://api.kodemia.mx/koders/koder --> Eliminar un Koder

//URL https://api.kodemia.mx/mentors

//GET https://api.kodemia.mx/mentors --> lista de mentores

//GET https://api.kodemia.mx/mentors/123/bottcamps --> lista de bootcamps del mentor correspondiente

/*
//Creación de un segundo host
const otroServer = http.createServer((request, response)=>{
    response.end('Hola desde otro server')
})

otroServer.listen(8082,()=>{
    console.log('server is listening on port 8082')
})
*/