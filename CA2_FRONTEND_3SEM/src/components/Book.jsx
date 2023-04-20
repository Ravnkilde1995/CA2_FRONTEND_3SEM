import React, { useState, useEffect } from "react";
import facade from "../apiFacade";
import Table from "react-bootstrap/Table";

function Content() {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  // Bog data gemmes på en liste med useState
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    facade.fetchDataGoogle().then((res) => {
      //Hvis fetch respsonse har data, tilføjes det til bookList med setBookList
      if (res.items) {
        setBookList(res.items);
      }
      //console.log("I useEffect ", bookList);
      setDataFromServer(res.msg);
    });
  }, []);

  return (
    <div>
      <br></br>
      <h1>Books fetched from google</h1>
      <h3>{dataFromServer}</h3>

      {/*Vi mapper hvert item vi har fetchet */}

      {bookList.map((item) => {
        //console.log("hello hello", item);
        //console.log("Nummer 2", item.id);
        //console.log("Nummer 3", item.etag);

        return (
          <>
            <br />
            <Table bordered hover>
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>Title</th>
                  <th style={{ width: "12%" }}>Author</th>
                  <th style={{ width: "12%" }}>Category</th>
                  <th style={{ width: "50%" }}>Description</th>
                  <th style={{ width: "6%" }}>Rating</th>
                </tr>
              </thead>
              <tbody key={item.id}>
                <tr>
                  <td>{item.volumeInfo.title}</td>
                  <td>{item.volumeInfo.authors}</td>
                  <td>{item.volumeInfo.categories}</td>
                  <td>{item.volumeInfo.description}</td>
                  <td>{item.volumeInfo.averageRating}</td>
                </tr>
              </tbody>
            </Table>
          </>
        );
      })}
    </div>
  );
}
export default Content;
