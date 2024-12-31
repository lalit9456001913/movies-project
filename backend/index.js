import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js"
import connectDB from "./db/index.js";
import authRoutes from "./routes/authRoutes.js"
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());


app.use('/healthCheck',(req,res)=>{
  res.status(200).json({
      success:true,
      status:"api server is running"
  })
})


app.use("/api/movie",routes);
app.use("/api/auth",authRoutes);

app.use(errorHandler);

const startServer = async () => {
  try {
      await connectDB();
      app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
      });
  } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
  }
};

startServer();
