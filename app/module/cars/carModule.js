import { Timestamp} from "firebase/firestore";
import { addCarData, getCarById } from "../../services/cars/carService";
import { carMapersResponse } from "@/app/mappers/carsMappers";

export async function addCarDataModule(data) {
    data.createdAt = Timestamp.now();
    return await addCarData(data);
}

export async function getCarByIdModule(id) {
    const car = await getCarById(id);
    return carMapersResponse(car)
}