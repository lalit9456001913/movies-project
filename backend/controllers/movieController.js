import Movie from "../models/movie.js";

export const addMovie= async(req,res)=>{
  try{
    const {
        name,
        title,
        genre,
        rating,
        streamingLink,
    }=req.body;

    if(!name || !title || !genre || !rating || !streamingLink)
        res.status(400).json({message:"All field are required like name,title,genre,rating,streamingLink"})

    const newMovie=new Movie({
        name:name,
        title:title,
        genre:genre,
        rating:rating,
        streamingLink:streamingLink
    })

    await newMovie.save();
    res.status(200).json({message:"movie added successfull"});
}
catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'An error occurred while adding movie.' });
}
}

export const allMovies=async (req,res)=>{
    try{
        const movies=await Movie.find();
        
        res.status(200).json({message:"fetch successfull",movies});
    }
    catch(err)
    {
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const updateMovie = async (req, res) => {
    const { id } = req.params; 
    const{
        name,
        title,
        genre,
        rating,
        streamingLink
    }=req.body;

    try {
        
        if(!name || !title || !genre || !rating || !streamingLink)
            res.status(400).json({message:"All field are required like name,title,genre,rating,streamingLink"})
        

        const updatedMovie = await Movie.findByIdAndUpdate(
            id,               
            {
             name,
             title,
             genre,
             rating,
             streamingLink
            },     
            { new: true }   
        );

        if (!updatedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        res.status(200).json({
            message: "Movie updated successfully",
            movie: updatedMovie,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteMovie = async (req, res) => {
    const { id } = req.params; 
    try {

        const deletedMovie = await Movie.findByIdAndDelete(id);        

        if (!deletedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        res.status(200).json({
            message: "Movie deleted successfully",
            movie: deletedMovie,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const searchMovies = async (req, res) => {
    const { q } = req.query;

    if (!q) {
        return res.status(400).json({ message: "Query parameter 'q' is required" });
    }

    try {
        const movies = await Movie.find({
            $or: [
                { title: { $eq: q } },
                { genre: { $eq: q } }, 
            ],
        });

        if (movies.length === 0) {
            return res.status(404).json({ message: "No movies found" });
        }

        res.status(200).json({
            message: "Search successful",
            movies,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
