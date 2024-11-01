import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export  function Home() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid d-flex justify-content-center mt-5 pt-5" >
    <div className="text-dark card pb-4 px-4" style={{width: '35rem', }}>
    <div className="card-body text-center mt-5 animate__animated animate__fadeIn">
      <h1>Welcome to Kodigo Music</h1>
      <p>Explore your favorite songs and artists.</p>
      <Link to="/library">
      <button className="btn border-dark btn-outline mt-3 text-dark">Explore Now</button>
      </Link>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};


