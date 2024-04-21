import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./navbar";


function Home() {
  const [data, setBlogList] = useState([]);

  useEffect(() => {
    axios.get("https://apitest.reachstar.io/blog/list").then(function(response) {
      setBlogList(response.data);
    }).catch(function(error){
      console.log(error);
    })
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="cl-6">
            {
              data.map((item,index)=>
              <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">{item.title}</h3>
                  </div>
                  <div className="card-body">
                    <p>{item.description}</p>
                  </div>
              </div>)
            }
          </div>
        </div>
      </div>

 
      
    </React.Fragment>
  );
}

export default Home;

