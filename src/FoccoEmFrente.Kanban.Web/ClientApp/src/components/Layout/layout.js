import React from "react";
import Logo from "../../assets/logo-ATT.png";
import ParticlesBG from "./particles"
import '../../App.css';

export default function Layout(props) {
   return (
      <>
      <ParticlesBG />
       <div className="form-container">
          <img src={Logo} alt="Sunday" />
          <div className="content">
             {props.children}
          </div>
       </div>
       </>
   )
}
