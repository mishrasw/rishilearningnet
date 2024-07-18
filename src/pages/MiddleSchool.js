import React, {useState} from "react";
import "../style/About.css"
import PdfViewer from "../components/PdfViewer";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";


const MiddleSchool = () => {
  const memoryURI = '/MiddleSchool.pdf';
  return(
    <div>
       <h2> Middle School </h2>
       <PdfViewer file={memoryURI} />

    </div>
  )
 };

export default MiddleSchool;
