import mongoose from "mongoose";


const connect = async () =>{
    try {
        mongoose.connect(process.env.MONGO_DB_URL)
        .then(()=>console.log('Mongodb connected..'))
    } catch (error) {
        console.log(error)
    }
}

export default connect;