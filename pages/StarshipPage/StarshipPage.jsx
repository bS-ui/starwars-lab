import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getStarshipsList } from "../../src/services/sw-api";

import './StarshipPage.css'

const StarshipPage = () => {
  const [starship, setStarship] = useState([])
  const { idx } = useParams()
  useEffect(() => {
    const fetchStarship = async () => {
      const starshipData = await getStarshipsList()
      setStarship(starshipData.results[idx])
    }
    fetchStarship()
  }, [])

  if (!starship.length) return <h1 className="loading">Loading details...</h1>

  return ( 
    <div className="detailsContainer">
      <div className="details">
        <h1>Name: {starship.name}</h1>
        <h1>Manufacturer: {starship.manufacturer}</h1>
        <div className="return">
          <Link to="/">Return</Link>
        </div>
      </div>
    </div>
  );
}

export default StarshipPage;