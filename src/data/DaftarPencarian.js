import { daftarAirTerjun } from "../pages/wisata/AirTerjun";
import { daftarPegunungan } from "../pages/wisata/Pegunungan";
import { daftarPantai } from "../pages/wisata/Pantai";
import { daftarSavana } from "../pages/wisata/Savana";
import { daftarHutan } from "../pages/wisata/Hutan";
import { daftarDanau } from "../pages/wisata/Danau";

export const DaftarPencarian = [
    ...daftarAirTerjun.map((wisata) => ({
        ...wisata,
        kategori: "Air Terjun",
        route: "/wisata/air-terjun"
    })),

    ...daftarPegunungan.map((wisata) => ({
        ...wisata,
        kategori: "Pegunungan",
        route: "/wisata/pegunungan"
    })),

    ...daftarPantai.map((wisata) => ({
        ...wisata,
        kategori: "Pantai",
        route: "/wisata/pantai"
    })),

    ...daftarSavana.map((wisata) => ({
        ...wisata,
        kategori: "Savana",
        route: "/wisata/savana"
    })),

    ...daftarHutan.map((wisata) => ({
        ...wisata,
        kategori: "Hutan",
        route: "/wisata/hutan"
    })),

    ...daftarDanau.map((wisata) => ({
        ...wisata,
        kategori: "Danau",
        route: "/wisata/danau"
    })),
    
];