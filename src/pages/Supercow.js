import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const Supercow = () => {
  const SupercowURI = '/Supercow.pdf';
  return(
    <div>
       <h2> Supercow</h2>
       <PdfViewer file={SupercowURI} />

    </div>
  )
 };

export default Supercow;
