
import SearchBar from "../../Components/Searchbar/SearchBar";
import "./Homepage.scss";

function HomePage() {
  return (
    <div className="homepage">

      <div className="textcontainer">
        <div className="wrappper">

          <h1 className="title">Find Real Estate and Get Your Dream Place</h1>
          <p>Welcome to DreamFinders Realty, where your journey to finding the perfect home begins. Specializing in discovering prime real estate, we are dedicated to matching you with your dream place. Whether you are looking for a cozy apartment, a spacious family home, or a luxurious estate, our expert team is here to guide you every step of the way. Experience a seamless and personalized home-buying process with DreamFinders Realty.</p>
          
       <SearchBar/>
        

        <div className="boxes" >

          <div className="box" >
            <h1>120+</h1>
            <h2>Years of Experience</h2>
          </div>

          <div className="box" >
            <h1>120</h1>
            <h2>Awards won</h2>
          </div>

          <div className="box" >
            <h1>2000+</h1>
            <h2>Properties</h2>
          </div>

          </div>

        </div>
        
      </div>
      
      <div className="imgcontainer">
        <img src="./bg.png" alt="bg" />
      </div>

    </div>
  );
}

export default HomePage