import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Wisata.css";

const daftarAirTerjun = [
    {
        id: "jagir",
        nama: "Air Terjun Jagir",
        lokasi: "Kampung Anyar, Glagah",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2020/10/jagir1.jpg",
        deskripsi: "Air terjun yang memiliki beberapa aliran air dalam satu kawasan dengan suasana alam yang sejuk dan asri.",
        link: "https://www.yukbanyuwangi.co.id/info-lengkap-wisata-air-terjun-jagir-banyuwangi.html"
    },
    {
        id: "lider",
        nama: "Air Terjun Lider",
        lokasi: "Sumberarum, Songgon",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2025/09/2885229599.webp",
        deskripsi: "Air terjun yang terkenal dengan aliran tinggi dan pemandangan hutan alami di sekitarnya.",
        link: "https://www.yukbanyuwangi.co.id/air-terjun-lider-surga-tersembunyi-begini-cara-ke-sana.html"
    },
    {
        id: "telunjuk-raung",
        nama: "Air Terjun Telunjuk Raung",
        lokasi: "Sumberarum, Songgon",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2026/06/69e0234357264-hempasan-air-deras-di-tebing-air-terjun-telunjuk-raung_bali.webp",
        deskripsi: "Air terjun dengan bentuk aliran yang khas dan panorama alam di kawasan kaki Gunung Raung.",
        link: "https://www.yukbanyuwangi.co.id/lokasi-air-terjun-telunjuk-raung-hidden-gem-di-banyuwangi.html"
    },
    {
        id: "kalibendo",
        nama: "Air Terjun Kalibendo",
        lokasi: "Glagah",
        gambar: "http://yukbanyuwangi.co.id/wp-content/uploads/2026/01/61a450dd6b60a-3199737260.jpg",
        deskripsi: "Destinasi alam yang dikelilingi pepohonan rindang dan suasana perkebunan yang sejuk.",
        link: "https://www.yukbanyuwangi.co.id/air-terjun-kalibendo-tenang-dan-sejuk-cocok-lepas-penat.html"
    }
];

function AirTerjun() {
    const [wisataAktif, setWisataAktif] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="air-terjun">

            <div className="judul-air">
                <h1>Wisata Air Terjun Banyuwangi</h1>
                <p>Jelajahi keindahan air terjun yang ada di Banyuwangi.</p>
            </div>

            <div className="row g-4">

                {daftarAirTerjun.map((wisata) => (
                    <div className="col-12 col-md-6 col-lg-4" key={wisata.id}>

                        <div className="card card-wisata h-100">

                            <img
                                src={wisata.gambar}
                                className="gambar-card"
                                alt={wisata.nama}
                            />

                            <div className="card-body d-flex flex-column">

                                <h4 className="card-title">
                                    {wisata.nama}
                                </h4>

                                <span className="text-success label-lokasi">
                                    {wisata.lokasi}
                                </span>

                                <p className="card-text mt-3">
                                    {wisata.deskripsi}
                                </p>

                                <button
                                    className="btn btn-success mt-auto"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailWisata"
                                    onClick={() => setWisataAktif(wisata)}
                                >
                                    Lihat Detail
                                </button>

                            </div>
                        </div>

                    </div>
                ))}

            </div>

            {/* Popup Detail Wisata */}
            <div
                className="modal fade"
                id="detailWisata"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">
                                {wisataAktif?.nama || "Detail Wisata"}
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body p-0">
                            {wisataAktif?.link ? (
                                <iframe
                                    src={wisataAktif.link}
                                    width="100%"
                                    height="600"
                                    title={wisataAktif.nama}
                                    style={{ border: "none" }}
                                ></iframe>
                            ) : (
                                <div className="p-4 text-center">
                                    Link detail wisata belum tersedia.
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            <div className="text-center mb-4">
                <button onClick={() => navigate("/")} className="btn btn-outline-success mb-4 kembali">
                    ← Kembali ke Halaman Utama
                </button>
            </div>
        </div>
    );
}

export default AirTerjun;
