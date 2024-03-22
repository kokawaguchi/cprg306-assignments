//services holds the functions for all the db tasks

import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const items = [];
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsCollectionRef);

    itemsSnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });

    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    return [];
  }
};

export const addItem = async (userId, item) => {
  const itemsCollectionRef = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsCollectionRef, item);
  return docRef.id;
};
