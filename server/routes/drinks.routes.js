import { Router } from "express";
import {
    getDrinks,
    getDrink,
    createDrink,
    updateDrink,
    deleteDrink
} from '../controllers/drinks.controller.js';

const router = Router();


router.get("/drinks", getDrinks);

router.get("/drink/:id", getDrink);

router.post("/drinks", createDrink);

router.put("/drinks/:id", updateDrink);

router.delete("/drink/:id", deleteDrink);

export default router;
