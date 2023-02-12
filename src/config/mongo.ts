import 'dotenv/config';
import mongoose from 'mongoose';

async function dbConnect(): Promise<void>{
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://desarrollo:arica123@cluster0.zrtxt.mongodb.net/?retryWrites=true&w=majority');
        console.log("Conectado a la base de datos");
    } catch (error:any) {
        console.log(error);
        console.log("Error al conectar con la base de datos");
    }
}

export default dbConnect;