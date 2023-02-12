import { Request, Response } from 'express';
import { deleteCar, getCar, getCars, insertCar, updateCar } from '../services/item';
import { handleHttp } from '../utils/error.handle';


const getItem = async(req: Request, res: Response) => {
    try {
        const response = await getCar(req.params.id);
        const data = response ? response : "NOT_FOUND"     
        res.status(200).json(data);
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}

const getItems = async(req: Request, res: Response) => {
    try {
        
        const response = await getCars();
        res.status(200).json(response);

    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const updateItem = async(req: Request, res: Response) => {
    try {
        
        const responseItem = await updateCar(req.params.id, req.body);
        res.status(200).json(responseItem);

    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

const postItem = async(req: Request, res: Response) => {
    try {
        
        const responseItem = await insertCar(req.body);
        res.status(200).json(responseItem);


    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error);
    }
}

const deleteItem = async(req: Request, res: Response) => {
    try {
        
        const responseItem = await deleteCar(req.params.id);
        res.status(200).json(responseItem);

    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}