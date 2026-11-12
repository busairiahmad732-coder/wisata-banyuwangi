
function Hutan() {
    return (
        <div className="hero-card row mb-2">
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
                    <div className="col-12 col-md-auto">
                        <img
                            className="gambar-card"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4yoXzbnJ0C1hjgnz3MzwwQJPjRj60rx6vel4tdTZjRy5uZLCg-U7ttD8&s=10"
                            alt="air terjun jagir" />
                    </div>
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">
                            Air Terjun
                        </strong>
                        <h3 className="mb-2">Pesona Air Terjun Banyuwangi</h3>
                        <p className="card-text mb-3">
                            Temukan berbagai destinasi air terjun dengan panorama alam
                            yang indah dan suasana yang menyegarkan.
                        </p>
                        <NavLink
                            to="#"
                            className="icon-link gap-1 icon-link-hover stretched-link"
                        >
                            Jelajahi Air terjun
                            <svg className="bi" aria-hidden="true">
                                <use href="#chevron-right"></use>
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hutan