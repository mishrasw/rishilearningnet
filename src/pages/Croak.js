import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const Croak = () => {
  const memoryURI = '/Croak.pdf';
  return(
    <div>
       <h2> Croak </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default Croak;
