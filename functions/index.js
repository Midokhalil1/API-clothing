import express from "express";
import {
  createClothing,
  getAllClothing,
  updateClothing,
  deleteClothing,
  getOneClothing,
} from "./src/clothing.js";
const app = express();
app.use(express.json());
app.post("/clothing", createClothing);
app.get("/clothing", getAllClothing);
app.patch("/clothing/:uid", updateClothing);
app.delete("/clothing/:uid", deleteClothing);
app.get("/clothing/:uid", getOneClothing);
//app.get ("/clothes/delete/:objectId", deleteItem)
//app.get ("/clothes/search/:search", getOneclothingItem)
app.listen(3036, () => console.log("listening on http://localhost:3036..."));
