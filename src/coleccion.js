//Tienda de ropa

db.ventas.insertOne({
    _id: 1,
    articulo: "camiseta",
    precioUnit: 10.20,
    numeroUnit: 40,
    "IVA%": 21,
    fechaCompra: new Date ("2018-11-20"),
    fechaVenta: new Date ("2018-12-26"),
    precioCompra: 3.95,
    descuento: {porcentaje: 20, motivo: "blackFriday"},
    cliente: "elCorteInglés",
    vendedor: "ToyMachine"
})

db.ventas.insertMany([
    {_id: 2, articulo: "bañador", precioUnit: 5.30, numeroUnit: 25, "IVA%": 21, fechaCompra: new Date ("2016-7-8"), fechaVenta: new Date ("2016-9-15"), precioCompra: 2.20, cliente: "elCorteInglés", vendedor: "quiksilver"},
    {_id: 3, articulo: "sudadera", precioUnit: 35.99, numeroUnit: 60, "IVA%": 21, fechaCompra: new Date ("2020-9-20"), fechaVenta: new Date ("2021-10-6"), precioCompra: 20.20, descuento: {porcentaje: 35, motivo: "blackFriday"}, cliente: "carrefour", vendedor: "quiksilver"},
    {_id: 4, articulo: "chaqueta", precioUnit: 75, numeroUnit: 20, "IVA%": 21, fechaCompra: new Date ("2015-5-31"), fechaVenta: new Date ("2017-11-4"), precioCompra: 36, cliente: "elCorteInglés" , vendedor: "burberry"},
    {_id: 5, articulo: "pantalon", precioUnit: 20.60, numeroUnit: 40, "IVA%": 21, fechaCompra: new Date ("2018-3-4"), fechaVenta: new Date ("2018-5-8"), precioCompra: 15.50, descuento: {porcentaje: 12, motivo: "rebajasPrimavera"}, cliente: "metromar" , vendedor: "levi's" },
    {_id: 6, articulo: "calcetin", precioUnit: 1.10, numeroUnit: 70, "IVA%": 21, fechaCompra: new Date ("2019-9-26"), fechaVenta: new Date ("2020-5-10"), precioCompra: 0.45, cliente: "carrefour" , vendedor: "adidas"},
    {_id: 7, articulo: "jersey", precioUnit: 10.30, numeroUnit: 55, "IVA%": 21, fechaCompra: new Date ("2017-10-3"), fechaVenta: new Date ("2020-8-29"), precioCompra: 8.60, cliente: "lagoh" , vendedor: "milano" },
    {_id: 8, articulo: "abrigo", precioUnit: 55.80, numeroUnit: 38, "IVA%": 21, fechaCompra: new Date ("2007-3-15"), fechaVenta: new Date ("2010-1-10"), precioCompra: 48, cliente: "lagoh" , vendedor: "adidas"},
    {_id: 9, articulo: "guantes", precioUnit: 4.30, numeroUnit: 40, "IVA%": 21, fechaCompra: new Date ("2018-5-20"), fechaVenta: new Date ("2018-9-27"), precioCompra: 3.10, descuento: {porcentaje: 30, motivo: "Black Friday"}, cliente: "elCorteInglés", vendedor: "adidas"},
    {_id: 10, articulo: "zapatos", precioUnit: 22.10, numeroUnit: 63, "IVA%": 21, fechaCompra: new Date ("2012-6-17"), fechaVenta: new Date ("2016-3-30"), precioCompra: 20.10, cliente: "metromar", vendedor: "burberry" },
    {_id: 11, articulo: "cinturones", precioUnit: 6.10, numeroUnit: 30, "IVA%": 21, fechaCompra: new Date ("2019-7-12"), fechaVenta: new Date ("2020-7-19"), precioCompra: 5.20, descuento: {porcentaje: 15, motivo: "rebajasPrimavera"}, cliente: "metromar", vendedor: "toyMachine" }
])

