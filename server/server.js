const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const toolRoute = require("./routes/toolRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/tools", toolRoute);


// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Middleware
app.use(errorHandler);


// Connect to DB and start server
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/catoologue', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
      
    });
  })
  .catch((err) => console.log(err));
  


  