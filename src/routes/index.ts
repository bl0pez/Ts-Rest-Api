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
readdirSync(PATH_ROUTER).forEach((file) => {
    // Ignorar el archivo index.ts
    if (file === 'index.ts') return;

    // Importar el archivo de ruta
    import(`./${cleanFileName(file)}`)
        .then(({ route }) => {
            // Agregar la ruta al router
            router.use(`/${cleanFileName(file)}`, route);
        });
});

export { router }