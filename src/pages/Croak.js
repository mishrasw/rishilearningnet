import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const Croak = () => {
  const memoryURI = '/automation-app/Croak.pdf';
  return(
    <div>
       <h2> Croak </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default Croak;
