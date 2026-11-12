import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Wisata.css"

export const daftarSavana = [
    {
        id: "ss",
        nama: "Savana Sadengan",
        lokasi: "Taman Nasional Alas Purwo, Tegaldlimo, Banyuwangi.",
        deskripsi: "Savana Sadengan merupakan padang rumput luas yang menjadi tempat berkumpulnya berbagai satwa liar seperti banteng, rusa, dan burung. Tempat ini menawarkan pemandangan alam yang indah dan cocok untuk menikmati kehidupan satwa di habitat aslinya.",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1alx7vk5c76VM1rm-Ang-h013B-5CI5OtTvH32iba2g&s=10",
        link: "https://www.yukbanyuwangi.co.id/inilah-kenapa-padang-savana-sadengan-viral-di-media-sosial.html"
    },
    {
        id: "sb",
        nama: "Savana Bekol",
        lokasi: "Taman Nasional Baluran, Situbondo, Jawa Timur.",
        deskripsi: "Savana Bekol merupakan hamparan padang rumput luas dengan latar belakang Gunung Baluran. Kawasan ini memiliki pemandangan khas Afrika dan menjadi habitat berbagai satwa liar seperti rusa, banteng, dan merak.",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2025/03/641004dbc0597.jpeg",
        link: "https://www.yukbanyuwangi.co.id/bingung-lokasi-taman-nasional-baluran-ini-panduan-lengkapnya.html"
    },
    {
        id: "spp",
        nama: "Savana Pantai Pakem",
        lokasi: "Kertosari, Banyuwangi, Jawa Timur.",
        deskripsi: "- Savana Pantai Pakem menawarkan pemandangan hamparan rumput hijau yang berpadu dengan suasana pesisir. Tempat ini cocok untuk menikmati keindahan alam dan bersantai.",
        gambar: "https://cdn-jpr.jawapos.com/images/9/2026/08/13/lanskap-savana-beach-pakem-di-banyuwangi-menghadirkan-perpaduan-pohon-meranggas-hamparan-rumput-dan-panorama-pesisir-destinasi-yang-ditata-secara-swadaya-ini-mulai-ramai-setelah-viral-di-media-sosial-mayang-untuk-radar-banyuwangi-oyZrt.webp",
        link: "https://radarbanyuwangi.jawapos.com/travelling/2608130059/savana-beach-pakem-banyuwangi-viral-hidden-gem-dengan-pohon-meranggas-dan-lanskap-savana-pesisir-yang-bikin-wisatawan-penasaran"
    },
]

function Savana() {
    const [savanaAktif, setSavanaAktif] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="savana">

            <div className="judul-savana">
                <h1>Wisata Savana di banyuwangi</h1>
                <p>Jelajahi wisata Savana yang ada di Banyuwangi</p>
            </div>

            <div className="row g-4">

                {daftarSavana.map((savana) => (
                    <div className="col-12 col-md-6 col-lg-4" key={savana}>

                        <div className="card card-wisata h-100">
                            <img
                                src={savana.gambar}
                                className="gambar-card"
                                alt={savana.nama}
                            />

                            <div className="card-body d-flex flex-column">

                                <h4 className="card-title">
                                    {savana.nama}
                                </h4>

                                <span className="text-success label-lokasi">
                                    {savana.lokasi}
                                </span>

                                <p className="card-text mt-3">
                                    {savana.deskripsi}
                                </p>

                                <button
                                    className="btn btn-success mt-auto"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailSavana"
                                    onClick={() => setSavanaAktif(savana)}
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pop up Detail savana*/}
            <div
                className="modal fade"
                id="detailSavana"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">
                                {savanaAktif?.nama || "Detail Savana"}
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="close"
                            ></button>
                        </div>

                        <div className="modal-body p-0">
                            {savanaAktif?.link ? (
                                <iframe
                                    src={savanaAktif.link}
                                    width="100%"
                                    height="600"
                                    title={savanaAktif.nama}
                                    style={{ border: "none" }}
                                ></iframe>
                            ) : (
                                <div className="p-4 text-center">
                                    Link detail savana belum tersedia
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

export default Savana