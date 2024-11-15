import { NextResponse } from "next/server"
import { batchAddCars } from "@/app/services/cars/carService";
export const POST = async (request) => {
    try {
        const data = await request.json();
        const carRef = await batchAddCars(data);
        if(!carRef) {
            return NextResponse.json({ message: "!Ups! No hemos podido registrar el coche." }, { status: 500 })
        }
        return NextResponse.json({ message: `Coches registrado con éxito.` }, { status: 201 })
    } catch (error) {
        console.error("Error adding document: ", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}