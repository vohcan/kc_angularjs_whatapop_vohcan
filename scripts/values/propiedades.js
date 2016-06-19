angular
    .module("whatapop")
    .value("Propiedades", {
        urlServidor: "http://localhost:8000",
        endpointProductos: "/api/products",
        endpointImagenes: "/upload"
    });