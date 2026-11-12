import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Wisata.css"

export const daftarHutan = [
    {
        id: "dj",
        nama: "De Djawatan",
        lokasi: "Benculuk, Kecamatan Cluring, Banyuwangi, Jawa Timur.",
        deskripsi: "De Djawatan merupakan kawasan wisata hutan dengan pepohonan trembesi berukuran besar yang memiliki akar dan cabang menjuntai. Suasananya menyerupai hutan dalam negeri dongeng dan cocok untuk menikmati keindahan alam serta berfoto.",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3DS-2o2o4uGHH147Qid2Y4k55efeg4_BK1SkUD_djg&s=10",
        link: "https://www.yukbanyuwangi.co.id/fakta-menarik-di-balik-djawatan-banyuwangi-yang-jarang-diketahui.html"
    },
    {
        id: "ap",
        nama: "Taman Nasional Alas Purwo",
        lokasi: "Tegaldlimo dan Purwoharjo, Banyuwangi, Jawa Timur.",
        deskripsi: "Taman Nasional Alas Purwo merupakan kawasan konservasi alam yang memiliki hutan tropis, hutan mangrove, serta beragam flora dan fauna. Tempat ini menawarkan suasana hutan alami yang masih terjaga.",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2024/12/wisata-alas-purwo-alas-purwo-banyuwangi-paket-tour-banyuwangi-tourbanyuwangi.com-08979671512.jpg",
        link: "https://www.yukbanyuwangi.co.id/inilah-mengapa-taman-nasional-alas-purwo-dijuluki-hutan-mistis.html"
    },
    {
        id: "ps",
        nama: "Hutan Pinus Songgon",
        lokasi: "Sumberbulu, Kecamatan Songgon, Banyuwangi, Jawa Timur.",
        deskripsi: "Hutan Pinus Songgon merupakan kawasan wisata alam yang dipenuhi pepohonan pinus tinggi dan rindang. Suasananya sejuk dan tenang sehingga cocok untuk bersantai, menikmati udara segar, dan berfoto.",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZ4qFkqtsz8hK-VdbTmj3I4F1M5BKf7NT_MlD7ET9IXZG8zQdQfAdc4A&s=10",
        link: "https://www.yukbanyuwangi.co.id/harga-tiket-hutan-pinus-songgon-murah-banget-untuk-healing.html"
    },
]
function Hutan() {
    const [hutanAktif, setHutanAktif] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="hutan">

            <div className="judul-hutan">
                <h1>Wisata Hutan di Banyuwangi</h1>
                <p>Jelajahi keindahan Hutan yang ada di Banyuwangi.</p>
            </div>

            <div className="row g-4">

                {daftarHutan.map((hutan) => (
                    <div className="col-12 col-md-6 col-lg-4" key={hutan.id}>

                        <div className="card card-wisata h-100">

                            <img
                                src={hutan.gambar}
                                className="gambar-card"
                                alt={hutan.nama}
                            />

                            <div className="card-body d-flex flex-column">

                                <h4 className="card-title">
                                    {hutan.nama}
                                </h4>

                                <span className="text-success label-lokasi">
                                    {hutan.lokasi}
                                </span>

                                <p className="card-text mt-3">
                                    {hutan.deskripsi}
                                </p>

                                <button
                                    className="btn btn-success mt-auto"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailHutan"
                                    onClick={() => setHutanAktif(hutan)}
                                >
                                    Lihat Detail
                                </button>

                            </div>
                        </div>

                    </div>
                ))}

            </div>

            {/* Popup Detail hutan */}
            <div
                className="modal fade"
                id="detailHutan"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">
                                {hutanAktif?.nama || "Detail Hutan"}
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body p-0">
                            {hutanAktif?.link ? (
                                <iframe
                                    src={hutanAktif.link}
                                    width="100%"
                                    height="600"
                                    title={hutanAktif.nama}
                                    style={{ border: "none" }}
                                ></iframe>
                            ) : (
                                <div className="p-4 text-center">
                                    Link detail hutan belum tersedia.
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

export default Hutan