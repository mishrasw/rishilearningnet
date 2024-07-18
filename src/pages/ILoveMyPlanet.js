import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const ILoveMyPlanet = () => {
  const memoryURI = '/ILoveMyPlanet.pdf';
  return(
    <div>
       <h2> I Love My Plannet </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default ILoveMyPlanet;
