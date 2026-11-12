import { useState } from "react";
import "./Wisata.css"

const daftarSavana = [
    {
        id: "",
        nama: "",
        lokasi: "",
        deskripsi: "",
        link: ""
    },
]

function Savana() {
    const [savanaAktif, setSavanaAktif] = useState(null);

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

                        <div className="modal-body p-0"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Savana