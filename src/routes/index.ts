import { Router } from 'express';
import { readdirSync } from 'fs';

// Raiz del directorio de rutas
const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * Borra la extensión .ts de un archivo y retorna el nombre del archivo
 * @param fileName 
 * @returns 
 */
const cleanFileName = (fileName: string) => fileName.replace('.ts', '');

// Recorrer todos los archivos del directorio de rutas
readdirSync(PATH_ROUTER).forEach((fileName) => {
    const cleanName = cleanFileName(fileName);

    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});

export { router }