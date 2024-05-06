import { useEffect } from "react";
import { getStarshipsList } from "../../src/services/sw-api";
import { useState } from "react";
import { Link } from "react-router-dom";

import './Starships.css'

const Starships = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipsList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  if (!starshipList.length) return <h1 className="loading">Loading details...</h1>
  return ( 
    <div className="starshipContainer">
      {starshipList.map((starship,idx) =>
        <Link className="container" key={starship.name} to={`/${idx}`}>
          <h1 className="starship">{starship.name}</h1>
        </Link>
      )}
    </div>
  )
}

export default Starships