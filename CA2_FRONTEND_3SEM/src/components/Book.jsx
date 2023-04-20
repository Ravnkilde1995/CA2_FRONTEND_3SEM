import React, { useState, useEffect } from "react"
import facade from "../apiFacade";

function Content(){
    const [dataFromServer, setDataFromServer] = useState("Loading...")
    let books = []
    useEffect(() => { 
        facade.fetchDataGoogle().then(res => {
            // console.log(res);
            console.log(res.items);
            if(res.items){
              res.items.map((item)=>{
                books.push(item);
              })
            }
            
            console.log("liste ", books)
          setDataFromServer(res.msg)});
      },[])
  
    return (
      <div>
        <h1>Books</h1>
        <h3>{dataFromServer}</h3>
        {books.length < 0 ? 
        
        <div>
          <h1>ikke nogen bøger</h1>
        </div>
        : <>
        <h1> der er bøger </h1>
        {books.map((item)=>{
          console.log("hello hello", item)
          return(
            <>
            <p>{item}</p>
            </>
          )
        })}
        
        </>
      }
        
      </div>
    )
  }
export default Content;