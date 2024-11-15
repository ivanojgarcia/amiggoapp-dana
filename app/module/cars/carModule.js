import { Timestamp} from "firebase/firestore";
import { addCarData, getCarById, getCarsCount } from "../../services/cars/carService";
import { carMapersResponse } from "@/app/mappers/carsMappers";

export async function addCarDataModule(data) {
    data.createdAt = Timestamp.now();
    return await addCarData(data);
}

export async function getCarByIdModule(id) {
    const car = await getCarById(id);
    return carMapersResponse(car)
}

export async function getCountModule() {
    return await getCarsCount();
}