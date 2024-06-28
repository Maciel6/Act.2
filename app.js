const mongoose=require('mongoose') //instanciar
const url_bd = 'mongodb://localhost:27017/Empleados' //url mongodbcompass and name of the  database
mongoose.connect(url_bd) 
//Promesa(.then/catch)
.then (()=>{ 
 console.log('Sistema en linea')   
})
.catch((err)=>{
    console.log('El sistema no inicio correctamente')
})

const Libros=new mongoose.Schema(
    {name:{
    type:String
    },
    Second_name:{
    type:String
    },
    ID:{
    type:Number
    },
    Years:{
    type:Number
    },
    Level:{
    type:String
    },
    Section:{
    type:Number
    },
    Base:{
    type:Number
    },
    })

    //create colection
    const modelo_Empleados=new mongoose.model('Empleados',Libros)
    //create data
    modelo_Empleados.create(
        {
            name:"Andres",
            Second_name:"Guillermo",
            ID: 22304839,
            Years: 25,
            Level: "Gerent",
            Section: 6,
            Base: 34
        }
    )