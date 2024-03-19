import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  try {
    const itemsRef = db.collection("users").doc(userId).collection("items");
    const snapshot = await itemsRef.get();

    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error; // Rethrow the error to handle it where the function is called
  }
}

export async function addItem(userId, item) {
  try {
    const itemsRef = db.collection("users").doc(userId).collection("items");
    const newItemRef = await itemsRef.add(item);

    return newItemRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error; // Rethrow the error to handle it where the function is called
  }
}
