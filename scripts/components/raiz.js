angular
    .module("whatapop")
    .component("raiz", {
   $routeConfig:[{
       name:"MisProductos",
       path:"/mis-productos",
       component:"misProductos",
       useAsDefault: true
   },  {
       name:"DetalleProducto",
       path:"/products/:id",
       component:"detalleProducto"
   }
   ],
    templateUrl:"views/raiz.html"
});