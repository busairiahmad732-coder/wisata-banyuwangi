import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import './Beranda.css'

function Beranda() {
    const [slideAktif, setSlideAktif] = useState(0);
    const navigate = useNavigate();

    const gambarSlide = [
        'https://www.yukbanyuwangi.co.id/wp-content/uploads/2023/12/DJI_0126_1200.jpg',
        'https://www.yukbanyuwangi.co.id/wp-content/uploads/2025/09/2885229599.webp',
        'https://www.yukbanyuwangi.co.id/wp-content/uploads/2025/02/rei-Sehari-Pulau-Merah-Dikunjungi-500-Orang-Selama-Liburan-2493065719.webp',
    ]

    const slideSebelumnya = () => {
        setSlideAktif((sebelumnya) =>
            (sebelumnya - 1 + gambarSlide.length) % gambarSlide.length
        )
    }

    const slideBerikutnya = () => {
        setSlideAktif((sebelumnya) =>
            (sebelumnya + 1) % gambarSlide.length
        )
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideAktif((sebelumnya) => (sebelumnya + 1) % gambarSlide.length)
        }, 5000)

        return () => clearInterval(interval)
    }, []);

    return (
        <>
            {/* HALAMAN UTAMA */}
            <div className="hero-banner">
                {/* Background slideshow */}
                <div className="background-slideshow">
                    {gambarSlide.map((gambar, index) => (
                        <img
                            key={gambar}
                            src={gambar}
                            alt={`Wisata Banyuwangi ${index + 1}`}
                            className={`gambar-slide ${index === slideAktif ? 'aktif' : ''}`}
                        />
                    ))}
                </div>

                <button
                    className="tombol-slide kiri"
                    onClick={slideSebelumnya}
                >
                    <span className="tombol-panah">‹</span>
                </button>

                <button
                    className="tombol-slide kanan"
                    onClick={slideBerikutnya}
                >
                    <span className="tombol-panah">›</span>
                </button>


                {/* Teks di atas slideshow */}
                <div className="isi-beranda">
                    <h1 className="display-4 fst-italic">
                        Jelajahi Keindahan Alam Banyuwangi
                    </h1>

                    <p className="lead my-3">
                        Temukan pesona wisata alam Banyuwangi yang memukau. Mulai dari
                        air terjun yang menyegarkan, pegunungan yang menawan, hingga
                        hamparan savana yang memanjakan mata.
                    </p>

                    <div className="container-button">
                        <button onClick={() => navigate("/tentang")} className="button-nav">
                            Tentang Kami →
                        </button>
                    </div>
                </div>
            </div>

            {/*CARD DAFTAR WISATA*/}
            < div className="hero-posisi row mb-2" >

                {/*AIR TERJUN*/}
                <div div className="col-md-6" >
                    <div className="hero-card row g-0 border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div className="col-12 col-lg p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">
                                Air Terjun
                            </strong>
                            <h3 className="mb-2">Pesona Air Terjun Banyuwangi</h3>
                            <p className="card-text mb-3">
                                Temukan berbagai destinasi air terjun dengan panorama alam
                                yang indah dan suasana yang menyegarkan.
                            </p>
                            <NavLink
                                to="/wisata/air-terjun"
                                className="icon-link gap-1 icon-link-hover stretched-link"
                            >
                                Jelajahi Air terjun
                                <svg className="bi" aria-hidden="true">
                                    <use href="#chevron-right"></use>
                                </svg>
                            </NavLink>
                        </div>
                        <div className="col-12 col-lg-auto">
                            <img
                                className="gambar-card"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4yoXzbnJ0C1hjgnz3MzwwQJPjRj60rx6vel4tdTZjRy5uZLCg-U7ttD8&s=10"
                                alt="air terjun jagir" />
                        </div>
                    </div>
                </div >

                {/*PEGUNUNGAN*/}
                <div div className="col-md-6" >
                    <div className="hero-card row g-0 border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div className="col-12 col-lg p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">
                                Pegunungan
                            </strong>
                            <h3 className="mb-2">Keindahan Pegunungan Banyuwagi</h3>
                            <p className="card-text mb-3">
                                Jelajahi berbagai destinasi pegunungan dengan
                                pemandangan menakjubkan dan udara yang sejuk.
                            </p>
                            <NavLink
                                to="/wisata/pegunungan"
                                className="icon-link gap-1 icon-link-hover stretched-link"
                            >
                                Jelajahi Pegunungan
                                <svg className="bi" aria-hidden="true">
                                    <use href="#chevron-right"></use>
                                </svg>
                            </NavLink>
                        </div>
                        <div className="col-12 col-lg-auto">
                            <img
                                className="gambar-card"
                                src="https://asset.kompas.com/crops/c7IIWhOLHM1R9voULMgcrr83iEw=/0x0:750x500/1200x800/data/photo/2025/09/02/68b6dd4625175.jpg"
                                alt="gunung ijen" />
                        </div>
                    </div>
                </div >

                {/*PANTAI*/}
                <div div className="col-md-6" >
                    <div className="hero-card row g-0 border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div className="col-12 col-lg p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">
                                Pantai
                            </strong>
                            <h3 className="mb-2">Pesona Pantai Banyuwangi</h3>
                            <p className="card-text mb-3">
                                Nikmati beragam pantai dengan keindahan laut, pasir,
                                dan panorama pesisir yang memukau.
                            </p>
                            <NavLink
                                to="/wisata/pantai"
                                className="icon-link gap-1 icon-link-hover stretched-link"
                            >
                                Jelajahi Pantai
                                <svg className="bi" aria-hidden="true">
                                    <use href="#chevron-right"></use>
                                </svg>
                            </NavLink>
                        </div>
                        <div className="col-12 col-lg-auto">
                            <img
                                className="gambar-card"
                                src="https://img.cnt.traveloka.com/tvlk/blog/2024/07/shutterstock_1489205639.jpg?tr=q-70,c-at_max,w-1000,h-600"
                                alt="pantai pulau merah" />
                        </div>
                    </div>
                </div >

                {/*SAVANA*/}
                <div div className="col-md-6" >
                    <div className="hero-card row g-0 border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div className="col-12 col-lg p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">
                                Savana
                            </strong>
                            <h3 className="mb-2">Eksotisme Savana Banyuwangi</h3>
                            <p className="card-text mb-3">
                                Temukan hamparan padang rumput luas dengan pemandangan
                                alam yang unik.
                            </p>
                            <NavLink
                                to="/wisata/savana"
                                className="icon-link gap-1 icon-link-hover stretched-link"
                            >
                                Jelajahi Savana
                                <svg className="bi" aria-hidden="true">
                                    <use href="#chevron-right"></use>
                                </svg>
                            </NavLink>
                        </div>
                        <div className="col-12 col-lg-auto">
                            <img
                                className="gambar-card"
                                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/01/f1/6d/savana-bekol-taman-nasional.jpg?w=1200&h=1200&s=1"
                                alt="savana bekol" />
                        </div>
                    </div>
                </div >
                {/*HUTAN*/}
                <div div className="col-md-6" >
                    <div className="hero-card row g-0 border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div className="col-12 col-lg p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">
                                Hutan
                            </strong>
                            <h3 className="mb-2">Keasrian Hutan Banyuwangi</h3>
                            <p className="card-text mb-3">
                                Jelajahi kawasan hutan dengan pepohonan rindang
                                dan suasana alam yang menenangkan.
                            </p>
                            <NavLink
                                to="/wisata/hutan"
                                className="icon-link gap-1 icon-link-hover stretched-link"
                            >
                                Jelajahi Hutan
                                <svg className="bi" aria-hidden="true">
                                    <use href="#chevron-right"></use>
                                </svg>
                            </NavLink>
                        </div>
                        <div className="col-12 col-lg-auto">
                            <img
                                className="gambar-card"
                                src="https://www.yukbanyuwangi.co.id/wp-content/uploads/2019/02/jawatan-1024x653.jpg"
                                alt="de jawatan" />
                        </div>
                    </div>
                </div >
                {/*DANAU*/}
                <div div className="col-md-6" >
                    <div className="hero-card row g-0 border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div className="col-12 col-lg p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">
                                Danau
                            </strong>
                            <h3 className="mb-2">Keindahan Danau Banyuwangi</h3>
                            <p className="card-text mb-3">
                                Temukan destinasi perairan dengan pemandangan
                                alam yang indah dan suasana damai.
                            </p>
                            <NavLink
                                to="/wisata/danau"
                                className="icon-link gap-1 icon-link-hover stretched-link"
                            >
                                Jelajahi Danau
                                <svg className="bi" aria-hidden="true">
                                    <use href="#chevron-right"></use>
                                </svg>
                            </NavLink>
                        </div>
                        <div className="col-12 col-lg-auto">
                            <img
                                className="gambar-card"
                                src="https://www.yukbanyuwangi.co.id/wp-content/uploads/2025/07/penari-gandrung-di-Waduk-Bajulmati-1-2103202065.webp"
                                alt="waduk bajul mati" />
                        </div>
                    </div>
                </div >


            </div >

        </>
    )
}

export default Beranda