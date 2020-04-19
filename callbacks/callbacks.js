
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