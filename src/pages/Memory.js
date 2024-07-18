import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const Memory = () => {
  const memoryURI = '/TheMemoryTree.pdf';
  return(
    <div>
       <h2> The Memory Tree </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default Memory;
