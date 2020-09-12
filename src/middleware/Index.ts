import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
  } from "./SharedComponents";
  
  export default [handleCors, handleBodyRequestParsing, handleCompression];