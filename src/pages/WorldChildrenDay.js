import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const WorldChildrenDay = () => {
  const memoryURI = '/WorldChildrenDay.pdf';
  return(
    <div>
       <h2> World Children's Day </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default WorldChildrenDay;
