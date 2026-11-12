import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Wisata.css"

export const daftarDanau = [
    {
        id: "rb",
        nama: "Telaga Rowo Bayu",
        lokasi: "Desa Bayu, Kecamatan Songgon, Banyuwangi, Jawa Timur.",
        deskripsi: "Telaga Rowo Bayu merupakan wisata alam yang berada di kawasan hutan dengan suasana sejuk dan tenang. Telaga ini dikelilingi pepohonan rindang serta memiliki pemandangan air yang indah, sehingga cocok untuk menikmati ketenangan alam.",
        gambar: "https://asset.tribunnews.com/HYWqkla_EYxFjYg78wG3E2p3V7U=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/aceh/foto/bank/originals/rowo-bayu-kkn-desa-penari.jpg",
        link: "https://www.yukbanyuwangi.co.id/penjaga-keramat-rowo-bayu-siapapun-tak-akan-kuat-melihatnya.html"
    },
    {
        id: "ws",
        nama: "Waduk Sidodadi",
        lokasi: "Desa Karangharjo, Kecamatan Glenmore, Banyuwangi, Jawa Timur.",
        deskripsi: "Waduk Sidodadi merupakan destinasi wisata air yang menawarkan pemandangan perairan luas dengan latar belakang pepohonan dan perkebunan. Pengunjung dapat menikmati suasana alam, bersantai, serta melakukan berbagai aktivitas rekreasi.",
        gambar: "https://cdn1-production-images-kly.akamaized.net/TnGHU3VJ9gEnkKFiVO6URB6---0=/1280x720/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/9007648/original/028007300_1782997472-1695176337706-ljmhm.jpg",
        link: "https://www.merdeka.com/jatim/read/8174550/pesona-waduk-sidodadi-glenmore-banyuwangi-suasana-sejuk-bikin-betah-pengunjung"
    },
]
function Danau() {
    const [danauAktif, setDanauAktif] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="danau">

            <div className="judul-danau">
                <h1>Wisata danau di Banyuwangi</h1>
                <p>Jelajahi keindahan sunset atau sunrise danau yang ada di Banyuwangi.</p>
            </div>

            <div className="row g-4">

                {daftarDanau.map((danau) => (
                    <div className="col-12 col-md-6 col-lg-4" key={danau.id}>

                        <div className="card card-wisata h-100">

                            <img
                                src={danau.gambar}
                                className="gambar-card"
                                alt={danau.nama}
                            />

                            <div className="card-body d-flex flex-column">

                                <h4 className="card-title">
                                    {danau.nama}
                                </h4>

                                <span className="text-success label-lokasi">
                                    {danau.lokasi}
                                </span>

                                <p className="card-text mt-3">
                                    {danau.deskripsi}
                                </p>

                                <button
                                    className="btn btn-success mt-auto"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailDanau"
                                    onClick={() => setDanauAktif(danau)}
                                >
                                    Lihat Detail
                                </button>

                            </div>
                        </div>

                    </div>
                ))}

            </div>

            {/* Popup Detail danau */}
            <div
                className="modal fade"
                id="detailDanau"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">
                                {danauAktif?.nama || "Detail danau"}
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body p-0">
                            {danauAktif?.link ? (
                                <iframe
                                    src={danauAktif.link}
                                    width="100%"
                                    height="600"
                                    title={danauAktif.nama}
                                    style={{ border: "none" }}
                                ></iframe>
                            ) : (
                                <div className="p-4 text-center">
                                    Link detail danau belum tersedia.
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

export default Danau