import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const Fossils = () => {
  const memoryURI = '/Fossils.pdf';
  return(
    <div>
       <h2> Fossils: Tales of Long Ago </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default Fossils;
