import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Wisata.css"

export const daftarPantai = [
    {
        id: "pm",
        nama: "Pulau Merah",
        lokasi: "Desa Sumberagung, Kecamatan Pesanggaran, Kabupaten Banyuwangi, Jawa Timur.",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2025/02/rei-Sehari-Pulau-Merah-Dikunjungi-500-Orang-Selama-Liburan-2493065719.webp",
        deskripsi: "Pantai Pulau Merah terkenal dengan bukit kecil berwarna kemerahan yang berada tidak jauh dari bibir pantai. Pantai ini memiliki hamparan pasir luas dan pemandangan matahari terbenam yang indah.",
        link: "https://www.yukbanyuwangi.co.id/harga-tiket-masuk-pulau-merah-2025-terbaru-murah-banget.html"
    },
    {
        id: "wi",
        nama: "Wedi Ireng",
        lokasi: "Dusun Pancer, Desa Sumberagung, Kecamatan Pesanggaran, Kabupaten Banyuwangi, Jawa Timur.",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2026/02/wedi-ireng_1323352370.jpg",
        deskripsi: "Pantai Wedi Ireng merupakan pantai yang memiliki perpaduan pasir putih dan hitam. Keindahan alamnya masih terlihat alami dengan bebatuan karang dan suasana pantai yang relatif tenang.",
        link: "https://www.yukbanyuwangi.co.id/keindahan-pantai-wedi-ireng-surga-tersembunyi-di-banyuwangi.html"
    },
    {
        id: "th",
        nama: "Teluk Hijau",
        lokasi: "Desa Sarongan, Kecamatan Pesanggaran, Kabupaten Banyuwangi, Jawa Timur.",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2025/01/t_5d17417397ba7.webp",
        deskripsi: "Teluk Hijau merupakan pantai yang terkenal dengan warna air lautnya yang kehijauan. Dikelilingi pepohonan dan perbukitan, tempat ini menawarkan panorama alam yang indah di kawasan Taman Nasional Meru Betiri.",
        link: "https://www.yukbanyuwangi.co.id/siap-siap-terpukau-pesona-pantai-teluk-hijau-yang-tak-ada-duanya.html"
    },
    {
        id: "sm",
        nama: "Sukomade",
        lokasi: "Desa Sarongan, Kecamatan Pesanggaran, Kabupaten Banyuwangi, Jawa Timur.",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2019/07/pantai-sukamade-sunset.jpg",
        deskripsi: "Pantai Sukamade merupakan kawasan wisata alam yang berada di Taman Nasional Meru Betiri. Pantai ini dikenal sebagai habitat penyu yang datang untuk bertelur dan menjadi bagian penting dari kawasan konservasi.",
        link: "https://www.yukbanyuwangi.co.id/pantai-sukamade.html"
    },
    {
        id: "G-land",
        nama: "Plengkung",
        lokasi: "Kawasan Taman Nasional Alas Purwo, Kecamatan Tegaldlimo, Kabupaten Banyuwangi, Jawa Timur.",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2025/11/Pantai-Plengkung-3357774936.webp",
        deskripsi: "Pantai Plengkung atau G-Land dikenal karena karakter ombaknya yang besar dan menjadi salah satu destinasi selancar terkenal. Pantai ini juga memiliki pemandangan alam yang dikelilingi hutan tropis.",
        link: "https://www.yukbanyuwangi.co.id/pantai-plengkung-viral-lagi-harga-tiket-masuknya-bikin-kaget.html"
    },
    {
        id: "thr",
        nama: "Boom Marina",
        lokasi: "Kelurahan Kampung Mandar, Kecamatan Banyuwangi, Kabupaten Banyuwangi, Jawa Timur.",
        gambar: "https://www.gresiksatu.com/wp-content/uploads/2024/05/pantai-boom-banyuwangi-02.jpg",
        deskripsi: "Pantai Boom Marina merupakan wisata pantai yang berada dekat pusat Kota Banyuwangi. Pengunjung dapat menikmati pemandangan laut, suasana pelabuhan, dan panorama Selat Bali.",
        link: "https://www.yukbanyuwangi.co.id/malam-hari-di-pantai-boom-marina-lebih-hidup-suasananya-beda.html"
    },
    {
        id: "cacalan",
        nama: "Cacalan",
        lokasi: "Lingkungan Sukowidi, Kelurahan Klatak, Kecamatan Kalipuro, Kabupaten Banyuwangi, Jawa Timur.",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPrCrcdFjDDcqaGjDJxvSfhKnH4NugnUhEGv3vHm1YMMDQKxSzophyj0&s=10",
        deskripsi: "Pantai Cacalan menawarkan suasana pantai yang nyaman dengan pemandangan laut dan pepohonan di sekitarnya. Tersedia beberapa fasilitas rekreasi seperti kano dan area bersantai.",
        link: "https://www.yukbanyuwangi.co.id/pantai-cacalan-banyuwangi.html"
    },
    {
        id: "grajagan",
        nama: "Grajagan",
        lokasi: "Desa Grajagan, Kecamatan Purwoharjo, Kabupaten Banyuwangi, Jawa Timur.",
        gambar: "https://sidita.disbudpar.jatimprov.go.id/storage/foto-dtw/3da52_1671676942.jpg",
        deskripsi: "Pantai Grajagan memiliki pemandangan laut yang luas dengan kawasan perbukitan dan hutan di sekitarnya. Pantai ini juga dikenal sebagai salah satu pintu menuju kawasan wisata laut dan hutan di Banyuwangi selatan.",
        link: "https://geopark-ijen.jatimprov.go.id/detail-geosite/-pantai-grajagan.html"
    },
    {
        id: "wd",
        nama: "Watu Dodol",
        lokasi: "Kecamatan Kalipuro, Kabupaten Banyuwangi, Jawa Timur.",
        gambar: "https://www.yukbanyuwangi.co.id/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-06-at-14.56.43-scaled.jpeg",
        deskripsi: "Pantai Watu Dodol merupakan destinasi wisata pesisir yang berada di jalur utara Banyuwangi. Pantai ini menawarkan pemandangan Selat Bali dengan latar belakang perbukitan dan panorama alam yang menarik.",
        link: "https://www.yukbanyuwangi.co.id/misteri-dan-sejarah-batu-besar-watu-dodol-yang-bikin-merinding.html"
    },
]
function Pantai() {
    const [PantaiAktif, setPantaiAktif] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="pantai">

            <div className="judul-pantai">
                <h1>Wisata Pantai di Banyuwangi</h1>
                <p>Jelajahi keindahan sunset atau sunrise pantai yang ada di Banyuwangi.</p>
            </div>

            <div className="row g-4">

                {daftarPantai.map((pantai) => (
                    <div className="col-12 col-md-6 col-lg-4" key={pantai.id}>

                        <div className="card card-wisata h-100">

                            <img
                                src={pantai.gambar}
                                className="gambar-card"
                                alt={pantai.nama}
                            />

                            <div className="card-body d-flex flex-column">

                                <h4 className="card-title">
                                    {pantai.nama}
                                </h4>

                                <span className="text-success label-lokasi">
                                    {pantai.lokasi}
                                </span>

                                <p className="card-text mt-3">
                                    {pantai.deskripsi}
                                </p>

                                <button
                                    className="btn btn-success mt-auto"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailPantai"
                                    onClick={() => setPantaiAktif(pantai)}
                                >
                                    Lihat Detail
                                </button>

                            </div>
                        </div>

                    </div>
                ))}

            </div>

            {/* Popup Detail pantai */}
            <div
                className="modal fade"
                id="detailPantai"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">
                                {PantaiAktif?.nama || "Detail Pantai"}
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body p-0">
                            {PantaiAktif?.link ? (
                                <iframe
                                    src={PantaiAktif.link}
                                    width="100%"
                                    height="600"
                                    title={PantaiAktif.nama}
                                    style={{ border: "none" }}
                                ></iframe>
                            ) : (
                                <div className="p-4 text-center">
                                    Link detail pantai belum tersedia.
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

export default Pantai