
import { NavLink } from "react-router-dom";
import "./footer.css";

function Footer() {
    const tahun = new Date().getFullYear();

    const kategoriWisata = [
        { nama: "Air Terjun", link: "/wisata/air-terjun" },
        { nama: "Pegunungan", link: "/wisata/pegunungan" },
        { nama: "Pantai", link: "/wisata/pantai" },
        { nama: "Savana", link: "/wisata/savana" },
        { nama: "Hutan", link: "/wisata/hutan" },
        { nama: "Danau", link: "/wisata/danau" },
    ];

    const kembaliKeAtas = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer-wisata">
            <div className="container">
                <div className="row g-4">

                    {/* Identitas Website */}
                    <div className="col-lg-4 col-md-6">
                        <NavLink to="/" className="footer-brand">
                            <span className="footer-logo">🌿</span>
                            <span>
                                Wisata Alam
                                <br />
                                <strong>di Banyuwangi</strong>
                            </span>
                        </NavLink>

                        <p className="footer-deskripsi">
                            Jelajahi keindahan alam Banyuwangi,
                            mulai dari pegunungan, pantai, air terjun,
                            hingga hutan yang memukau.
                        </p>

                        <p className="footer-slogan">
                            "Temukan keindahan alam di ujung timur Jawa."
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-judul">Navigasi</h5>

                        <ul className="footer-list">
                            <li><NavLink to="/">Beranda</NavLink></li>
                            <li><NavLink to="/tentang">Tentang Kami</NavLink></li>
                        </ul>
                    </div>

                    {/* Kategori Wisata */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-judul">Kategori Wisata</h5>

                        <ul className="footer-list">
                            {kategoriWisata.map((kategori) => (
                                <li key={kategori.link}>
                                    <NavLink to={kategori.link}>
                                        {kategori.nama}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Informasi */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-judul">Informasi</h5>

                        <ul className="footer-info">
                            <li>
                                <span>📍</span>
                                Banyuwangi, Jawa Timur, Indonesia
                            </li>
                            <li>
                                <span>🌏</span>
                                Jelajahi destinasi wisata alam Banyuwangi
                            </li>
                        </ul>

                        <button
                            className="btn-footer"
                            onClick={kembaliKeAtas}
                        >
                            ↑ Kembali ke Atas
                        </button>
                    </div>

                </div>

                <hr className="footer-garis" />

                <div className="footer-bawah">
                    <p>
                        © {tahun} Wisata Alam di Banyuwangi.
                        Seluruh hak cipta dilindungi.
                    </p>

                    <p>
                        Dibuat untuk memperkenalkan keindahan
                        alam Banyuwangi.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
