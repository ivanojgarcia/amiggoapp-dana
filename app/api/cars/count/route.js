import { NextResponse } from "next/server"
import { getCountModule } from "@/app/module/cars/carModule";

export const GET = async (request) => {
    const plusCars = 6559
    try {
        const data = await getCountModule();
        const total = data + plusCars
        return NextResponse.json({ data: plusCars }, { status: 200 })
    } catch (error) {
        console.error("Error getting documents: ", error);
        return NextResponse.json({ message: "Error", error: error.message }, { status: 500 })
    }
}