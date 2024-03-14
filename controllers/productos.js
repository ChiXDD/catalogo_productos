// controllers/productos.js
const productos = [
    { id: 1, nombre: 'Bob Cholo', descripcion: 'Playera de Bob Esponja Cholo', cantidad: 8, precio: 250, imagen: 'bobcholo.jpg' },
    { id: 2, nombre: 'Patricio Cholo', descripcion: 'Playera de Patricio Estrella Cholo', cantidad: 10, precio: 250, imagen: 'patriciocholo.jpg' },
    { id: 3, nombre: 'Perro Minion', descripcion: 'Playera de Perro Minion', cantidad: 20, precio: 200, imagen: 'perrominion.jpg' },
    { id: 4, nombre: 'Gallo Schnauzer', descripcion: 'Playera de Gallo Schnauzer', cantidad: 7, precio: 230, imagen: 'gallo.jpg' },
    { id: 5, nombre: 'Calaca Baño', descripcion: 'Playera de Calaca en baño', cantidad: 15, precio: 150, imagen: 'baño.jpg' },
    { id: 6, nombre: 'Jesus Fortnite', descripcion: 'Playera de Jesus en Fortnite', cantidad: 10, precio: 280, imagen: 'jesusfort.jpg' },
    { id: 7, nombre: 'Calaca AMLOver', descripcion: 'Playera de una calaca seguidora de AMLO', cantidad: 8, precio: 250, imagen: 'lopezobrador.jpg' },
    { id: 8, nombre: 'Calaca "Tenian Razon"', descripcion: 'Playera de Calaca "Tenian Razon"', cantidad: 9, precio: 190, imagen: 'tenianrazon.jpg' },
    { id: 9, nombre: 'Tsuru', descripcion: 'Playera de un aficionado a los Tsurus', cantidad: 5, precio: 220, imagen: 'tsurus.jpg' }
  ];
  
  function getProductos() {
    return productos;
  }
  
  function getProductoPorId(id) {
    return productos.find(producto => producto.id === parseInt(id));
  }
  
  module.exports = {
    getProductos,
    getProductoPorId
  };
  