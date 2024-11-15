import { db } from "@/app/config/firebase";
import { collection, addDoc, limit, query, where } from "firebase/firestore";
import { getDocs } from 'firebase/firestore';

export async function addCarData(data) {
    const doc = await addDoc(collection(db, "cars"), data);
    return doc.id;
}

export async function getCars() {
  const querySnapshot = await getDocs(collection(db, "cars"));
  const cars = [];
  querySnapshot.forEach((doc) => {
    cars.push({ id: doc.id, ...doc.data() });
  });
  return cars;
}

export async function getCarById(id) {
  const q = query(collection(db, 'cars'), where('indexSearch', '==', id), limit(1));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const [doc] = querySnapshot.docs;
    const data = doc.data();
    return { id: doc.id, ...data };
  } else {
    return null;
  }
}