# HTTP

hyper text transfer protocole

Protocolo de transferencia de hiper-texto

Nos ayuda a comunicar una computadora con otra

Nos ayuda a transferir hiper texto 

Palabra importante : TEXTO

Nos ayuda a mandar texto de un punto A a un punto B 

## SOLO SE TRANSPORTA TEXTO

HTTP utiliza TCP internamente 
al hablar de HTTP a su vez también está involucrado TCP

# Modelo Cliente servidor

pc --> request/Petición --> Server

server --> response /Respuesta --> pc

request --> es como crear una carta con todos los datos tanto de destino como la información que trae por defecto
response --> el servidor crea igual una carta con los datos de destino y la información de vuelta

## Mensajes HTTP

Headers --> contiene la información de indentificación del archivo (content-Type) el valor sería un -->  MIMEtypes (tipo/formato) => image/png
Body  --> El cuerpo del texto 


ejemplo:
_________________________________________
|
|content-Type: image/png (MIMETypes)
|
|________________________________________
|
|fsdjifsdkfsdopsdjwieopfjweuifenidsjf
|fwefjiwjnuidjfiosdjpfsdiop
|fd,lfsdkfdiopsjfsdiofjpsdiopsjfd
|dfsdfsdjuif
|
|
|________________________________________


para saber que está pasando procedemos a abrir el navegador --> inspeccionamos y en el apartado de web viene toda la data de peticiones y respuestas

con curl se pueden hacer peticiones a internet.

por ejemplo curl google.com

y me va a regresar todo el HTML que se encuentra en el archivo :D!

postman también ayuda a hacer peticiones
también insomnia

tamibń está:
hoppscotch.io 
ya sea en web o lo baamos :3
en donde podemos hacer peticiones :D!
rappidApi

## Peticiones ( métodos HTP o verbos HTTP)

GET --> Obtener información (NO tienen cuerpo por convección)
POST --> Postear información
PUT--> Lo que estoy mandando quiero que se guarde en lugar de lo que tengo actualmente en el servidor (cambia TODO)
PATCH --> Actualizar la información específica
DELETE --> Elimina algo en el servidor
HEAD--> Información gengerar de lo que hace el servicio
OPTIONS --> Se responde con todas las opciones / operaciones que tiene el servidor (son las opciones que se pueden utilizar)

Se pueden crear peticiones propias pero no es taaan recomendable

## Status

Las respuestas deben tener un código de status (si es que falló o si se completó)
1XX (100 al 199) informativos
2xx (200 a l299) exito
3xx (300 al 399) redirecciones
4xx (400 al 499) error del cliente
5xx (500 al 599) error del servidor

Aprender de preferencia los 2XX pq son muy importantes :D!

307,308
400,401,402, 403,404,409,408

leer DOC's HTTP en Node

vamos a implementar lo de los koders pero esta vez desde HTTP servidor web