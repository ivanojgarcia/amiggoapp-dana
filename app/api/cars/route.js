import { NextResponse } from "next/server"
import { addCarDataModule } from "@/app/module/cars/carModule"
export const POST = async (request) => {
    try {
        const data = await request.json();
        const carRef = await addCarDataModule(data);
        if(!carRef) {
            return NextResponse.json({ message: "!Ups! No hemos podido registrar el coche." }, { status: 500 })
        }
        return NextResponse.json({ message: `Coche ${data.indexSearch} fue registrado con éxito.` }, { status: 201 })
    } catch (error) {
        console.error("Error adding document: ", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}

export const GET = async (request) => {
    try {
        const { searchParams } = new URL(request.url)
        const searchTerm = searchParams.get('id')
        if(!searchTerm) return NextResponse.json({ message: "La matrícula o Bastidor no pueden ser vacío" }, { status: 400 })
        return NextResponse.json({ message: "good" }, { status: 200 })
    } catch (error) {
        console.error("Error getting documents: ", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}