angular
    .module("whatapop")
    .component("misProductos", {
        templateUrl: "views/mis-productos.html",
        controller: ["ServicioProductos", "$filter", function(ServicioProductos, $filter) {

            var self = this;
            var productos;
            //var datos;

            self.$onInit = function() {
                ServicioProductos.obtenerProductos().then(function(respuesta) {
                    productos = respuesta.data;
                    self.productos = productos;

                });

            };

            self.mostrarPorCategoria = function(idCategoria) {
                self.productos = idCategoria ? $filter("filter") : productos;
                self.productos = $filter("filter")(productos, {
                    "category": {
                        "id": idCategoria
                    }
                });
            };

            self.obtenerRutaImg = ServicioProductos.obtenRutaAbs;
            
        }]
    });

