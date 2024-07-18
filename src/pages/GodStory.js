import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const GodStory = () => {
  const memoryURI = '/GodStory.pdf';
  return(
    <div>
       <h2> God's Story Book </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default GodStory;
