import { Car } from '../interfaces/car.interface';
import Item from '../models/item';


const insertCar = async(item:Car) => {
    const responseInsert = await Item.create(item);
    return responseInsert;
}

const getCars = async() => {
    const responseItems = await Item.find();
    return responseItems;
}

const getCar = async(id:string) => {
    const responseItem = await Item.findOne({_id:id});
    return responseItem;
}

const updateCar = async(id:string, data:Car) => {
    const responseItem = await Item.findByIdAndUpdate({_id:id}, data, {new:true});
    return responseItem;
}

const deleteCar = async(id:string) => {
    const responseItem = await Item.remove({_id:id});
    return responseItem;
}

export {
    deleteCar,
    getCar,
    getCars,
    insertCar,
    updateCar,
}