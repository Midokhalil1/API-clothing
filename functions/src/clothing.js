import dbConnect from "./dbConnect.js";
export function createClothing(req, res) {
  const db = dbConnect();
  db.collection("clothing")
    .add(req.body)
    .then((doc) =>
      res
        .status(210)
        .send({ success: true, message: "Clothing created: " + doc.id })
    )
    .catch((err) => res.status(500).send({ success: false, message: err }));
}
export function getAllClothing(req, res) {
  const db = dbConnect();
  db.collection("clothing")
    .get()
    .then((collection) => {
      const clothingList = collection.docs.map((doc) => doc.data());
      res.send(clothingList);
    })
    .catch((err) => res.status(500).send({ success: false, message: err }));
}
export async function updateClothing(req, res) {
  const { uid } = req.params;
  const db = dbConnect();
  const doc = await db
    .collection("clothing")
    .doc(uid)
    .update(req.body)
    .catch((err) => res.status(500).send({ success: false, message: err }));
  res
    .status(202)
    .send({ success: true, message: "Clothing Updated " + doc.id });
}
export async function deleteClothing(req, res) {
  const { uid } = req.params;
  const db = dbConnect();
  const doc = await db
    .collection("clothing")
    .doc(uid)
    .delete()
    .catch((err) => res.status(500).send({ success: false, message: err }));
  res.status(202).send({ success: true, message: "Clothing Deleted" });
}
export async function getOneClothing(req, res) {
  const { uid } = req.params;
  const db = dbConnect();
  const doc = await db
    .collection("clothing")
    .doc(uid)
    .get()
    .catch((err) => res.status(500).send({ success: false, message: err }));
  res.status(202).send({ success: true, message: doc.data() });
}
// or
// export async function deleteItem(req, res) {
//   const db = dbConnect();
//   const { objectId } = req.params;
//   await db
//     .collection("clothes")
//     .doc(objectId)
//     .delete()
//     .catch((err) => {
//       res.status(500).send({ success: false, message: err });
//       return;
//     });
//   res.status(201).send({ message: "Item deleted" });
// }
// export async function getOneClothingItem(req, res) {
//   const db = dbConnect();
//   const clothesCollection = db.collection("clothes");
//   const { search } = req.params;
//   const result = await clothesCollection
//     .doc(search)
//     .get()
//     .catch((err) => {
//       res.status(500).send({ success: false, message: err });
//       return;
//     });
//   res.status(201).send({ success: true, message: result.data() });
// }
