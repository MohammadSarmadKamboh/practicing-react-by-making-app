import "./Movies.css";



const Movies = () => {
    return (
        <div className="movies">

            {/* <img src={Vector} alt="Vector" /> */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <img src={'/CinemaLandingPage/logo.svg'} />
                <h3 style={{ color: "orange" }}>Cinema</h3>

            </div>



        </div>
    );
};


export default Movies;