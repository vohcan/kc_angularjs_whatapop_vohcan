angular
    .module("whatapop")
    .service("ServicioProductos", ["$http","Propiedades",function($http, Propiedades){
           
        //obtener productos del servidor
        this.obtenerProductos = function(){
               
               return $http.get(Propiedades.urlServidor + Propiedades.endpointProductos);
        
           };

        this.obtenRutaAbs = function (rutaRelativa) {
                return rutaRelativa ? (Propiedades.urlServidor + "/" + rutaRelativa)
                    :undefined;
            };


//obtener un producto a través de id
        this.obtenerDetalle = function (productId) {
            return $http.get(Propiedades.urlServidor + Propiedades.endpointProductos + "/" + productId);
        };
//para nuevos productos
        
        this.guardarProducto = function (productoNuevo,imagen) {

            var promesa;
            if(imagen) {
                //
                var datos = new FormData();
                datos.append("img", imagen);

                var config = {
                    "headers":{
                        "Content-Type": undefined
                    }
                };

                promesa = $http.post(Propiedades.urlServidor + Propiedades.endpointImagenes,datos,config).then(function (respuesta) {


                    productoNuevo.rutaImagen = respuesta.data.path;
                    return $http.post(Propiedades.urlServidor + Propiedades.endpointProductos,productoNuevo);
                });
            }
            else {
                promesa = $http.post(Propiedades.urlServidor + Propiedades.endpointProductos,productoNuevo);
            }


            return promesa;
        };
}]);
