let autos = require("./autos")

let concesionaria = {
   autos: autos,

buscarAuto: function(patenteBuscada){
    let autos = this.autos;
    let autoBuscado = autos.filter(function(auto){
        return auto.patente === patenteBuscada
})
    if(autoBuscado.length === 0){
        return null
    } else{
        return autoBuscado[0]
    }
},

venderauto: function(patente){
    let auto = this.buscarAuto(patente);
    if(auto != null){
        return auto.vendido = true
    }
},

autosParaLaVenta: function(){
    let autos = this.autos;
    let autosEnVenta = autos.filter(function(auto){
       return auto.vendido === false
    })
    return autosEnVenta
},

autosNuevos:function(){
    let autos = this.autosParaLaVenta();
    let nuevos = autos.filter(function(auto){
        return auto.km < 100
    })
    return nuevos
},

listaDeVentas: function(){
    let lista = []
     this.autos.map(function(auto){
         if(auto.vendido === true){
             lista.push(auto.precio)
         }
     })
     return lista
     },
     
totalDeVentas: function(){
        let lista = this.listaDeVentas();
        if(lista.length > 0){
            return lista.reduce(function(acumulador,precio){
                return acumulador + precio
            })
        }
            else{
                return 0
            }
        },

//Duda existencial a hacer: resulta necesario el objeto o se brinda la info a traves de terminal
/*puedeComprar: function(unAuto, persona){
    let unAuto = this.autos
    let persona = require("./clientes");
    persona.forEach(function(persona){
     if(persona.capacidadDePagoEnCuotas >= autos.precio / autos.cuotas && persona.capacidadDePagoTotal >= autos.precio){
         return true
        } else {
            return false
            }
    })
}
*/
    

puedeComprar: function(auto,unaPersona){
    if((unaPersona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas) && (unaPersona.capacidadDePagoTotal >= auto.precio)){
       return true
    } else {
       return false
    }
   },

   autosQuePuedeComprar: function (persona){
    let autoQueLaPersonaPuedeComprar = this.autosParaLaVenta().filter((auto) => {
       return this.puedeComprar(auto,persona) === true;
    });
    return autoQueLaPersonaPuedeComprar
 },
};

module.exports = concesionaria




    
    

    

     
      
    
    








































