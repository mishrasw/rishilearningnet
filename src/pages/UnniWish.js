import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const UnniWish = () => {
  const memoryURI = '/UnniWish.pdf';
  return(
    <div>
       <h2> Unni's Wish </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default UnniWish;
