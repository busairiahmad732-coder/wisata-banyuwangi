import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Collapse } from "bootstrap";
import { DaftarPencarian } from "../data/DaftarPencarian";
import "./Navbar.css";

function Navbar() {
    const [sembunyi, setSembunyi] = useState(false);

    useEffect(() => {
        let scrollTerakhir = window.scrollY;

        const handScroll = () => {
            const scrollSekarang = window.scrollY;

            if (scrollSekarang < 80) {
                setSembunyi(false);
            } else if (scrollSekarang > scrollTerakhir) {
                setSembunyi(true);
                //tutup navbar
                if (window.innerWidth < 992) {
                    const menuNavbar = document.getElementById(
                        "navbarSupportedContent"
                    );
                    if(menuNavbar?.classList.contains("show")) {
                        const collapse = Collapse.getOrCreateInstance(
                            menuNavbar,
                            {toggle: false}
                        );

                        collapse.hide();
                    }
                }
            } else {
                setSembunyi(false);
            }

            scrollTerakhir = scrollSekarang;
        };

        const handleMouse = (e) => {
            if (e.clientY < 80) {
                setSembunyi(false);
            }
        };
        const handleTouch = (e) => {
            if (e.touches[0].clientY < 80) {
                setSembunyi(false);
            }
        };

        window.addEventListener("scroll", handScroll);
        window.addEventListener("mousemove", handleMouse);
        window.addEventListener("touchstart", handleTouch);

        return () => {
            window.removeEventListener("scroll", handScroll);
            window.removeEventListener("mousemove", handleMouse);
            window.removeEventListener("touchstart", handleTouch);
        };
    }, []);

    const navigate = useNavigate();

    const [pencarian, setPencarian] = useState("");

    const hasilPencarian = DaftarPencarian.filter((wisata) => {
        const kataKunci = pencarian.toLowerCase().trim();

        return (
            wisata.nama.toLowerCase().includes(kataKunci) ||
            wisata.lokasi.toLowerCase().includes(kataKunci) ||
            wisata.kategori.toLowerCase().includes(kataKunci)
        );
    }).slice(0, 6);

    const pilihWisata = (wisata) => {
        navigate(wisata.route);
        setPencarian("");
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top ${sembunyi ? "navbar-sembunyi" : ""}`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Wisata alam di banyuwangi</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink end className="nav-link" to="/">Halaman Utama</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Wisata
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/wisata/air-terjun">Air Terjun</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/wisata/pegunungan">Pegunungan</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/wisata/pantai">Pantai</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/wisata/savana">Savana</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/wisata/hutan">Hutan</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/wisata/danau">Danau</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink end className="nav-link" to="/tentang">Tentang</NavLink>
                            </li>

                        </ul>

                        <div className="form position-relative pencarian-navbar">
                            <form
                                className="d-flex"
                                role="search"
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    if (hasilPencarian.length > 0) {
                                        pilihWisata(hasilPencarian[0]);
                                    }
                                }}
                            >
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Cari wisata..."
                                    value={pencarian}
                                    onChange={(e) => setPencarian(e.target.value)}
                                    aria-label="Cari wisata"
                                    required
                                />

                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>

                            {pencarian.trim() !== "" && (
                                <div className="hasil-pencarian">
                                    {hasilPencarian.length > 0 ? (
                                        hasilPencarian.map((wisata) => (
                                            <button
                                                key={`${wisata.kategori}-${wisata.id}`}
                                                type="button"
                                                className="item-pencarian"
                                                onClick={() => pilihWisata(wisata)}
                                            >
                                                <span>{wisata.nama}</span>
                                                <small>{wisata.kategori}</small>
                                            </button>
                                        ))
                                    ) : (
                                        <div className="pencarian-kosong">
                                            Wisata tidak ditemukan.
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar