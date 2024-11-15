// services/carService.js
import { setDocument } from '../config/firebase';
import { db } from '../config/firebase';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  Timestamp,
} from 'firebase/firestore';

const carCollection = collection(db, 'cars');

// Car Verify by license plate
export const checkCarExistsByMatricula = async (matricula) => {
//   const q = query(carCollection, where('matricula', '==', matricula));
//   const querySnapshot = await getDocs(q);
//   return !querySnapshot.empty;
return false;
};

// Car Verify by VIN
export const checkCarExistsByBastidor = async (bastidor) => {
//   const q = query(carCollection, where('bastidor', '==', bastidor));
//   const querySnapshot = await getDocs(q);
//   return !querySnapshot.empty;
return false;
};

const carsId = (data) => {
  if (data.licensePlate) {
    return data.licensePlate;
  } else if (data.vinNumber) {
    return data.vinNumber;
  }
}