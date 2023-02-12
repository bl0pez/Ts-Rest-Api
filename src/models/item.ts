import { Schema, model } from 'mongoose';
import { Car } from '../interfaces/car.interface';

const ItemSchema = new Schema<Car>({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    gas: {
        type: String,
        required: true,
        // Valores permitidos
        enum: ['gasoline', 'diesel', 'electric'],
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model<Car>('Item', ItemSchema);