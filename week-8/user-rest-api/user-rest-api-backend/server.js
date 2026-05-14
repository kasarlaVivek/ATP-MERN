import { config } from "dotenv";
import exp from "express";
import { connect } from "mongoose";
import { userApp } from "./APIs/userApi.js";
import cors from "cors";
config();


const App = exp();
// add cors
App.use(cors({
  origin: "*",
  credentials: true
}))
// json parser
App.use(exp.json());


// routing api
App.use("/user-api", userApp);

// root route
App.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the User REST API",
    status: "Server is running smoothly",
    endpoints: {
      users: "/user-api/users",
      userById: "/user-api/user/:id"
    }
  });
});

const Connection = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("Db connected successfully");
    App.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));
  } catch (err) {
    console.log(err.message);
  }
}

Connection();



// error handling middleware
App.use((err, req, res, next) => {
  console.log(err)
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});