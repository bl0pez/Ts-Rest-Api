import { Response } from 'express';

const handleHttp = (res: Response, error: string, errowRaw?:any) => {
    console.log(errowRaw);
    res.status(500);
    res.send({error});
};

export {
    handleHttp
}