import React, { useState, useEffect } from "react"
import facade from "../apiFacade";

function Content(){
    const [dataFromServer, setDataFromServer] = useState("Loading...")
    useEffect(() => { 
        //const url = "https://www.googleapis.com/books/v1/volumes?q=:keyes&key=AIzaSyCZoXruFbr28UKR2Z6HXgtXqnpRA0shUTk"
        facade.fetchDataGoogle().then(res => {
            console.log(res);
            console.log(res.items);
          setDataFromServer(res.msg)});
      },[])
  
    return (
      <div>
        <h1>Books</h1>
        <h3>{dataFromServer}</h3>
        <h4>{}  {}</h4>
      </div>
    )
  }
export default Content;