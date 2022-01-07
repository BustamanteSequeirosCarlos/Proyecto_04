/*Precio por artículo de cada unidad + IVA incluido (redondeado a 2 decimales
    y ordenado de menor a mayor precio)*/


db.ventas.aggregate([
    {$group: 
        {
                _id: "$articulo",
                precioUnit: {$sum: "$precioUnit"},
                IVA: {$sum: {$divide: [{$multiply: ["$precioUnit", "$IVA%"]}, 100]}}         
        }
    },
    {$project:
        {
            "precio+IVA": {$add: ["$precioUnit", "$IVA"]}, 
        }
    },
    {$project:
        {
            "precio+IVA": {$round: ["$precio+IVA", 2]}
        }
    },
    {$sort: 
        {
            "precio+IVA": 1
        }
    }
])


/*Precio total de todas las venta con descuentos incluidos a la tienda el Corte Inglés*/


db.ventas.aggregate([
    {$match:
        {
            cliente: "elCorteInglés"
        }
    },
    {$group:
        {
            _id: "$articulo",
            Precio: {$sum: "$precioUnit"},
            Unidades: {$sum: "$numeroUnit"},
            Descuento: {$sum: "$descuento.porcentaje"},
            IVA: {$sum: {$divide: [{$multiply: ["$precioUnit", "$IVA%"]}, 100]}},
        }
    },
    {$project:
        {
            Precio: 1,
            Unidades: 1,
            Descuento: 1,
            precioconIVA: {$add: ["$Precio", "$IVA"]},
        }
    },
    {$project:
        {
            Precio: 1,
            Unidades: 1,
            Descuento: 1,
            precioconIVA: 1,
            precioTotal: {$multiply: ["$precioconIVA", "$Unidades"]}
        }
    },
    {$project:
        {
            Precio: 1,
            Unidades: 1,
            Descuento: 1,
            precioconIVA: 1,
            precioTotal: 1,
            descuentoPedido: {$divide: [{$multiply: ["$precioTotal", "$Descuento"]}, 100]}
        }
    },
    {$project:
        {
            Precio: 1,
            Unidades: 1,
            Descuento: 1,
            precioconIVA: 1,
            precioTotal: 1,
            PrecioFinalPedido: {$subtract: ["$precioTotal", "$descuentoPedido"]} 
        }
    },
    {$project:
        {
            Precio: 1,
            Unidades: 1,
            Descuento: 1,
            precioconIVA: {$round: ["$precioconIVA", 2]},
            precioTotal: {$round: ["$precioTotal", 2]},
            PrecioFinalPedido: {$round: ["$PrecioFinalPedido", 2]}
        }
    }
])


/*Años en stock de los productos con un número de unidades mayor a 30*/


db.ventas.aggregate([
    {$match:
        {
            numeroUnit: {$gt: 30}
        }
    },
    {$project:
        {
            articulo: "$articulo",
            Unidades: "$numeroUnit",
            añoCompra: {$year: "$fechaCompra"},
            añoVenta: {$year: "$fechaVenta"}
        }
    },
    {$project:
        {
            articulo: 1,
            Unidades: 1,
            añosEnStock: {$subtract: ["$añoVenta", "$añoCompra"]}
        }
    }
])


/*Número de articulos comprados de media por cada comprador*/


db.ventas.aggregate([
    {$group:
        {
            _id: "$cliente",
            mediaArtComprados: {$avg: "$numeroUnit"}
        }
    },
    {$project:
        {
            mediaArtComprados: {$round: ["$mediaArtComprados", 2]}
        }
    }
])


/*Ordenar vendedores por número de compras realizadas*/


db.ventas.aggregate([
    {$group:
        {
            _id: "$vendedor",
            compras: {$sum: 1}
        }
    },
    {$sort:
        {
            "compras": -1
        }
    }
])
