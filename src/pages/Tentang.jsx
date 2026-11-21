import "./wisata/Wisata.css";

function Tentang() {
    return (
        <div className="tentang container py-5">
            <div className="row align-items-center g-4">
                <div className="col-12">
                    <h1 className="judul-tentang mb-3">
                        Tentang Wisata Banyuwangi
                    </h1>

                    <p className="text-muted">
                        Banyuwangi merupakan salah satu kabupaten
                        di Provinsi Jawa Timur yang dikenal dengan
                        keindahan alamnya. Daerah ini memiliki
                        beragam destinasi wisata yang menarik,
                        mulai dari pegunungan, pantai, air terjun,
                        danau, hingga kawasan hutan dan savana.
                        Keindahan alam tersebut menjadikan
                        Banyuwangi sebagai salah satu tujuan
                        wisata yang menarik untuk dijelajahi.
                    </p> <br />

                    <p className="text-muted">
                        Website Wisata Banyuwangi merupakan
                        website yang dibuat untuk memperkenalkan
                        berbagai destinasi wisata alam yang
                        terdapat di Banyuwangi. Website ini
                        menyediakan informasi mengenai berbagai
                        kategori wisata sehingga pengunjung dapat
                        mengenal keindahan alam Banyuwangi dengan
                        lebih mudah.
                    </p> <br />

                    <p className="text-muted">
                        Melalui website ini, pengunjung dapat
                        menjelajahi berbagai kategori wisata,
                        seperti air terjun, pegunungan, pantai,
                        danau, hutan, dan savana. Setiap kategori
                        menyediakan daftar destinasi wisata yang
                        dapat dipilih untuk melihat informasi
                        lebih lanjut mengenai tempat wisata
                        tersebut.
                    </p> <br />

                    <p className="text-muted">
                        Website ini juga dibuat sebagai media
                        pembelajaran dalam pengembangan aplikasi
                        berbasis React JS. Dengan memanfaatkan
                        React Router, website memiliki beberapa
                        halaman yang saling terhubung melalui
                        navigasi. Pengunjung dapat berpindah
                        dari halaman beranda ke halaman kategori
                        wisata maupun halaman informasi lainnya.
                    </p> <br />

                    <p className="text-muted">
                        Diharapkan website ini dapat membantu
                        pengunjung menemukan destinasi wisata
                        alam yang menarik serta menambah
                        pengetahuan mengenai kekayaan alam
                        Banyuwangi. Dengan adanya website ini,
                        keindahan alam Banyuwangi dapat dikenal
                        lebih luas oleh masyarakat.
                    </p> <br />


                    <img
                        src="https://www.yukbanyuwangi.co.id/wp-content/uploads/2023/12/DJI_0126_1200.jpg"
                        alt="Keindahan alam Banyuwangi"
                        className="img-fluid rounded shadow w-100"
                    />
                </div>
            </div>
        </div>
    );
}

export default Tentang;
