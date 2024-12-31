import express from "express";
import { addMovie,allMovies,deleteMovie,updateMovie,searchMovies} from "../controllers/movieController.js";
import protect from "../middlewares/auth.js";
import protectAdmin from "../middlewares/admin.js";
const router = express.Router();
 

router.get('/movies',protect,allMovies);
router.get('/search',protect, searchMovies);
router.post('/movies',protectAdmin,addMovie);
router.put('/movies/:id',protectAdmin, updateMovie);
router.delete('/movies/:id',protectAdmin, deleteMovie);

export default router;