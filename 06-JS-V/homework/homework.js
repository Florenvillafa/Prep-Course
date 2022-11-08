// No cambies los nombres de las funciones.

const { GitConstructError } = require("simple-git");

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
   function Usuario (opciones){// funcion se les pasn los parametros 
     this.usuario= opciones.usuario;
     this.nombre= opciones.nombre;
     this.email= opciones.email;
     this.password= opciones.password;
    }
     Usuario.prototype.saludar= function (){ // un funcion constructor,  objeto.prototype. nombre del metodo 
      return "Hola, mi nombre es "+ this.nombre;// concatenacion ${nombre}
    }
       return Usuario;}


function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar=function (){ // parametro es constructor, prototype 
  return "Hello World!";                     //para heredar lo q nos pasan por  y saludar es el metodo 
}}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse=function(){// metoo al prototype del q nos pasa String, q devuvelve lo misma cadena pero invertida
   var palabraInvertida =""; // var vacia nos guarda la palabra de atras para adelante 
   // H O L A
   //       i 
   for (var i = this.length; i!=0; i--){// recorre toda la palabra 
    palabraInvertida+= this.charAt(i-1)  // utlizamos un metodo , a c/ constructor podemos pasarle metodos para borrar sumar agregar, dividir la palabras
    // palabraInvertida le va sumando en cada interacion la letra de atras para delante
   }// palabra Invertidao ALOH
   return palabraInvertida
}}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona { //recibe los parametros de afuera, toma cada uno de los elementos q les pasasamos par aarmarse, estructura basica de como crear una clase
    constructor(nombre,apellido,edad,domicilio) {// como una funcion lo reibimos por parametro
      // declarar donde se van a aguardar los elementos 
     this.nombre=nombre; //this hace referencia a propio de cada uno
     this.apellido=apellido;
     this.edad=edad;
     this.domicilio=domicilio;
     this.detalle= function(){
    return {
      Nombre: this.nombre,
      Apellido : this.apellido,
      Edad: this.edad,
      Domicilio: this.domicilio
    }} // declaramos una funcion dentro de la clase persona esa funcion va  aactuar en funcion del contenido, 
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a {crear una nueva persona} a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  return new Persona(nombre, apellido, edad, dir);
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"

Persona.prototype.datos=function(){

//return this.nombre + ", "+ this.edad
return `${this.nombre}, ${this.edad} años` }}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
