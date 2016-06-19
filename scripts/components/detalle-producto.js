angular
    .module("whatapop")
    .component("detalleProducto",{
        bindings:{
            $router:"<"
        },
        templateUrl: "views/detalle-producto.html",
        controller: ["ServicioProductos", "$sce", function (ServicioProductos,$sce) {
            
            var self = this;

            self.$routerOnActivate = function(next) {

                var productId = next.params.id;

                // datos del product ID cogido con params.
                ServicioProductos.obtenerDetalle(productId).then(function(respuesta) {
                    self.producto = respuesta.data;
                });
                self.validarHtml = function (texto) {
                    return $sce.trustAsHtml(texto);
                };
            };

            // Obtenemos la ruta absoluta de la imagen.
            self.obtenerRutaImg = ServicioProductos.obtenRutaAbs;


        }]
    });