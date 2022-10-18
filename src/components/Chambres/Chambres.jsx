import React from "react"
import "./Chambres.css";
import { FaSwimmer } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { Button } from "@mui/material";


export const Chambres = () => {
  return (
    <div>
      <div>
        <div className="linear">
        </div>
        <div >
          <h3>Chambres</h3>
        </div>
      </div>
      <div>
        <img src={"home"} alt="home" />
      </div>
      <div>
          <div className="chambre" >
            <h1>Chambres</h1>
            <p>Lit 3 places, séjour, baignoir</p>
            <div className="icons">
            <FaSwimmer size={30}/>
            <FaTv size={30}/>
            <FaUtensils size={30}/>
            <FaWifi size={30}/>
            </div>
          </div>

        </div>
      <div>
          <div className="prix" >
            <h1>Prix</h1>
            <div className="icons">
            <FaMoneyBillAlt size={30}/>
            <p>25.000Fcfa à 200.000Fcfa</p>
            </div>
          </div>

        </div>
        <div className="button">
      <Button variant="contained">Réserver</Button>
      </div>
    </div>

  )
}

export default Chambres