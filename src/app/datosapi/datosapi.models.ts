import { DatetimeOptions } from '@ionic/core'

export interface datosplasticos{
    cantidad: number
    dia: string
    fecha: Date
}

export class datosplasticos{
    cantidad: number
    dia: string
    fecha: Date
    constructor(datos?: datosplasticos){
        if(datos != null ){
            this.cantidad=datos.cantidad
            this.dia=datos.dia
            this.fecha=datos.fecha
            return
        }
            this.cantidad=this.cantidad
            this.dia=this.dia
            this.fecha=this.fecha
            return
    }
}

export interface deposito_metales{
    kilos: number
    dia: string
    fecha_ingreso: Date
}

export class deposito_metales{
    kilos: number
    dia: string
    fecha_ingreso: Date
    constructor(datos?: deposito_metales){
        if(datos != null ){
            this.kilos=datos.kilos
            this.dia=datos.dia
            this.fecha_ingreso=datos.fecha_ingreso
            return
        }
            this.kilos=this.kilos
            this.dia=this.dia
            this.fecha_ingreso=this.fecha_ingreso
            return
    }
}

export interface contenedor{
    cantKg: number
    dia: string
    fecha: Date
}

export class contenedor{
    cantKg: number
    dia: string
    fecha: Date
    constructor(datos?: contenedor){
        if(datos != null){
            this.cantKg = datos.cantKg
            this.dia = datos.dia
            this.fecha = datos.fecha
            return
        }
        this.cantKg = datos.cantKg
        this.dia = datos.dia
        this.fecha = datos.fecha
        return
    }

}