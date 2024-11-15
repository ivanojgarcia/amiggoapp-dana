import { NextResponse } from "next/server"
import { isValidEuropeanPlate } from "@/app/lib/cars";
import { getCarByIdModule } from "@/app/module/cars/carModule";

export const GET = async (request) => {
    try {
        const { searchParams } = new URL(request.url)
        const licensePlate = searchParams.get('license-plate')
        if(!isValidEuropeanPlate(licensePlate)) return NextResponse.json({ message: "La matrícula no es válida" }, { status: 400 })
        if(!licensePlate) return NextResponse.json({ message: "La matrícula no puede ser vacía" }, { status: 400 })
        const data = await getCarByIdModule(licensePlate);
        return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        console.error("Error getting documents: ", error);
        return NextResponse.json({ message: "Error", error: error.message }, { status: 500 })
    }
}