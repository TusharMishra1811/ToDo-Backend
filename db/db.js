import mongoose from "mongoose";

export const dataBase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "todoApp",
    })
    .then(() => {
      console.log(
        `The database is successfully connected to ${process.env.MONGO_URI}`
      );
    })
    .catch((e) => {
      console.log(e);
    });
};
