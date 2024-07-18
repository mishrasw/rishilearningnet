import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";


const ChildrenHelping = () => {
  const memoryURI = '/ChildrenHelping.pdf';
  return(
    <div>
       <h2> Children Helping Children </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default ChildrenHelping;
