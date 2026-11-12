import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Wisata.css";

const daftarPegunungan = [
    {
        id: "ijen",
        nama: "Kawah Ijen",
        lokasi: "Perbatasan Kabupaten Banyuwangi dan Kabupaten Bondowoso, Jawa Timur.",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2023/12/DJI_0126_1200.jpg",
        deskripsi: "Kawah Ijen merupakan destinasi wisata pegunungan yang terkenal dengan danau kawah berwarna biru kehijauan dan fenomena api biru (blue fire). Pengunjung dapat menikmati panorama alam pegunungan yang menakjubkan.",
        link: "https://www.yukbanyuwangi.co.id/akhirnya-kawah-ijen-kembali-dibuka-untuk-wisatawan.html",
    },
    {
        id: "raung",
        nama: "Gunung Raung",
        lokasi: "Wilayah perbatasan Kabupaten Banyuwangi, Bondowoso, dan Jember, Jawa Timur.",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2026/01/Gunung-Raung-Dok.-Istimewa.webp",
        deskripsi: "Gunung Raung merupakan salah satu gunung berapi tertinggi di Jawa Timur. Gunung ini memiliki pemandangan alam yang megah dan dikenal dengan kaldera besar yang menjadi daya tarik tersendiri.",
        link: "https://www.yukbanyuwangi.co.id/pendakian-tersulit-di-jawa-timur-gunung-raung-bikin-ciut-mental.html"
    },
    {
        id: "rante",
        nama: "Gunung Rante",
        lokasi: "Kawasan Pegunungan Ijen, Kecamatan Licin, Kabupaten Banyuwangi, Jawa Timur.",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxj1RFGahuPllL4_YH76-KFzuWJ25x4fSaQ3IkdCo9vw&s=10",
        deskripsi: "Gunung Ranti menawarkan pemandangan alam pegunungan yang indah dengan hamparan perbukitan dan udara sejuk. Tempat ini cocok bagi pengunjung yang menyukai suasana alam dan kegiatan pendakian.",
        link: "https://id.wikipedia.org/wiki/Gunung_Ranti"
    },
]

function Pegunungan() {
    const [pegunungan, setPegunungan] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="pegunungan">

            <div className="judul-gunung">
                <h1>pegunungan di banyuwangi</h1>
                <p>Jelajahi keindahan pegunungan yang ada di Banyuwangi</p>
            </div>

            <div className="row g-4">

                {daftarPegunungan.map((gunung) => (
                    <div className="col-md-6 col-lg-4" key={gunung.id}>
                        <div className="card card-wisata h-100">

                            <img
                                src={gunung.gambar}
                                className="gambar-card"
                                alt={gunung.nama}
                            />

                            <div className="card-body d-flex flex-column">

                                <h4 className="card-title">
                                    {gunung.nama}
                                </h4>

                                <span className="text-success label-lokasi">
                                    {gunung.lokasi}
                                </span>

                                <p className="card-text mt-3">
                                    {gunung.deskripsi}
                                </p>

                                <button
                                    className="btn btn-success mt-auto"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailGunung"
                                    onClick={() => setPegunungan(gunung)}
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Detail gunung */}
            <div
                className="modal fade"
                id="detailGunung"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">
                                {pegunungan?.nama || "Detail Gunung"}
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body p-0">
                            {pegunungan?.link ? (
                                <iframe
                                    src={pegunungan.link}
                                    width="100%"
                                    height="600"
                                    title={pegunungan.nama}
                                    style={{ border: "none" }}
                                ></iframe>
                            ) : (
                                <div className="p-4 text-center">
                                    Link detail Pegunungan belum tersedia.
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
    )
}

export default Pegunungan