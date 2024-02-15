import  express  from "express";
const router = express.Router()
import {createTour,getTours,getTour} from "../controllers/tour.js";

router.post("/", createTour);
router.get("/", getTours);
router.get("/:id", getTours);
router.get("/userTours/:id", auth, getToursByUser)

// router.delete("/:id",auth, deleteTour);
// router.patch("/:id",auth, updateTour);


export default router;