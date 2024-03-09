const express = require("express");
const taskRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middlewares/notFound");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.static('./public'));

//routes
app.use("/api/v1/tasks", taskRouter);

//middlewares
app.use(notFoundMiddleware);

const port = process.env.port || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server started running on port ${port}...`);
    });
   
  } catch (error) {
    console.log(error);
  }
};

start();
