import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const WalkwithGandhi = () => {
  const memoryURI = '/WalkwithGandhi.pdf';
  return(
    <div>
       <h2> Walk With Gandhi </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default WalkwithGandhi;
