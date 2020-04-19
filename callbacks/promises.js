/*constructor de promesa
Promise((resolve,reject)=>{

    if(rodo ok){

        resolve('ok')
        return
    }
        reject('error')
    
})
*/
// si quiero crear una promesa
/* const miPrimerPromesa = new Promise((resolve,reject) => {

    if(todo ok){

        reject('ok')
        return
    }
    resolve('ok')
})

miPrimerPromesa
    .then((resultado)=>{//recibe lo que se pasa en resolve

        console.log('resultado : ' , resultado)//resultado:ok

    })
    .cathch((error)=>{

        console.log('error:',error)//error:'todo mal'
    })


function construir (m){


}

*/
function construir (muroAConstruir,callback){

    setTimeout(()=>{
        let error = null
        muroAConstruir.estaConstruido = true
        if(muroAConstruir.estaConstruido===false){
            error='no se pudo construir el muro'
        }
        callback(error,muroAConstruir)
    },3000)
}

function aplanar (muroAAplanar,callback){

    setTimeout(()=>{

        muroAAplanar.estaAplanado=true
        let error = muroAAplanar.estaAplanado
            ? null //false
            : 'no se pudo aplanar' //true

            callback(error,muroAAplanar)
    },3000)
}

function pintar (muroAPintar,callback){

    setTimeout(()=>{

        muroAPintar.estaPintado=true
        let error = muroAPintar.estaPintado
            ? null
            : 'no se pudo pintar'
        callback(error,muroAPintar)
    },300)
}

//PROMIFICACION
// El proceso de wrappear una funcion que hace uso de callbacks para que ahora sea un promesa
/*
function construirPromificada (muroAConstruir){

    return new Promise((resolve,reject)=>{

        construir(muroAConstruir,(error,muroConstruido)={

            if(error){

                reject(error)
                return
            }
            resolve(muroConstruido)

        })

    })
}

fuction aplanarPromificada(muroAAplanar){

    return new Promise((resolve,reject)=>{

        aplanar(muroAAplanar,(error,muroAplanado)=>{

            if(error){

                reject(error)
                return
            }
            resolve(muroAplanado)
        })
    })
}
construirPromificada(muro)
    .then((muroConstruido)=>{

        console.log('muroConstruido: ' , muroConstruido)
    })
    .catch(error=>{
        console.error('error:',error)
    })*/