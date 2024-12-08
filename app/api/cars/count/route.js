import { NextResponse } from "next/server"
import { getCountModule } from "@/app/module/cars/carModule";

export const GET = async (request) => {
    try {
        const [data] = await getCountModule();
        return NextResponse.json({ data: data.cars }, { status: 200 })
    } catch (error) {
        console.error("Error getting documents: ", error);
        return NextResponse.json({ message: "Error", error: error.message }, { status: 500 })
    }
}