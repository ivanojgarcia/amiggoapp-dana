import { db } from "@/app/config/firebase";
import {
  collection,
  addDoc,
  limit,
  query,
  where,
  writeBatch,
  doc,
  Timestamp,
  getCountFromServer,
} from "firebase/firestore";
import { getDocs } from "firebase/firestore";

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

export async function getCarsCount() {
  const carsCollection = collection(db, "cars");
  const snapshot = await getCountFromServer(carsCollection);
  return snapshot.data().count;
}

export async function getCarById(id) {
  const q = query(
    collection(db, "cars"),
    where("indexSearch", "==", id),
    limit(1)
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const [doc] = querySnapshot.docs;
    const data = doc.data();
    return { id: doc.id, ...data };
  } else {
    return null;
  }
}

export async function batchAddCars(carsData) {
  const batchSize = 500;
  const carsCollection = collection(db, "cars");

  // Parse the desired date
  const dateString = "10/11/2024 10:18";
  const [day, month, yearAndTime] = dateString.split("/");
  const [year, time] = yearAndTime.split(" ");
  const [hour, minute] = time.split(":");

  const date = new Date(
    parseInt(year),
    parseInt(month) - 1, // months are zero-indexed
    parseInt(day),
    parseInt(hour),
    parseInt(minute),
    0, // seconds
    0 // milliseconds
  );
  try {
    const createdAtTimestamp = Timestamp.fromDate(date);

    for (let i = 0; i < carsData.length; i += batchSize) {
      const batch = writeBatch(db);
      const chunk = carsData.slice(i, i + batchSize);

      chunk.forEach((car) => {
        const carDocRef = doc(carsCollection);
        car.createdAt = createdAtTimestamp; // Add the createdAt field
        batch.set(carDocRef, car);
      });

      await batch.commit();
    }
    return true;
  } catch (error) {
    console.error("Error adding cars: ", error);
    throw new Error("Error adding cars: " + error.message)
  }
}
