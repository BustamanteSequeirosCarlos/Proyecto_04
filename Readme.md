# Ejercicio de realizar consultas con el metodo aggregation

En este proyecto he hecho una pequeña base de datos para realizarle consultas con el metodo *aggregation*.

He utilizado los operadores de etapa:

- $match
- $group
- $project
- $sort

Y los operadores:

- $sum
- $subtract
- $add
- $multiply
- $divide
- $round
- $year
- $avg

## Información de la DB
He hecho una pequeña base de datos que registra las ventas realizadas por los diferentes comercios a nuestra empresa que han sido compradas previamente a las marcas que la producen.
- Cada articulo tiene un ID que lo identifica.
- Nombre del articulo.
- Precio por unidad sin IVA
- Numero de articulos que vienen en el pedido
- El IVA que se le aplica
- Fecha de compra al fabricante por nuestra empresa
- Fecha de venta 
- Precio al que nosotros compramos el articulo
- El descuento que se le aplica al pedido y el motivo
- El cliente
- El provedor

## Intencionalidad

El principal objetivo de este proyecto es familiarizarnos con el funcionamiento de las etapas del metodo
aggregation y aprender a usar operadores para realizar calculos numericos.
