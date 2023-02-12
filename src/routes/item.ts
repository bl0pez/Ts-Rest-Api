import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/items";

const router = Router();

/**
 * http://localhost:3000/api/item [GET]
*/

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };