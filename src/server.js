import express from 'express';
import {dbConnect} from "./database";
import router from "./routes";

const app = express();

app.use(express.json());

app.use(router);

dbConnect().then(async () => {
  app.listen(process.env.PORT || 3333, () => {
    console.log(`Server is running on port ${process.env.PORT || 3333}`);
  });
});