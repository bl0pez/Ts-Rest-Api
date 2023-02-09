import 'dotenv/config';
import { connect } from 'mongoose';

async function dbConnect(): Promise<void>{
    const DB_URI = <string>process.env.MONGO_URL;

    try {
        await connect(DB_URI)
        console.log("Conectado a la base de datos");
    } catch (error:any) {
        console.log("Error al conectar con la base de datos");
    }

}