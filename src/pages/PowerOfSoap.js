import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const PowerOfSoap = () => {
  const memoryURI = '/ThePowerofSoap.pdf';
  return(
    <div>
       <h2> Power Of Soap </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default PowerOfSoap;
