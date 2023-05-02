import React from "react";
import "./pr.css";
import { Link } from "react-router-dom";

const RiderPage = () => {
  return (
    <div>
      <div className="title">
        <h1>Welcome To This Page</h1>
      </div>
      <Link to="/email">
      <div className="image">
        <div>
        <img src="https://cdn1.vectorstock.com/i/1000x1000/63/15/stylish-young-man-avatar-or-userpic-in-flat-design-vector-17126315.jpg" alt=""/>
         <p>Abhineet Nayak</p>
      </div>
      <div>
        <img src="https://cdn1.vectorstock.com/i/1000x1000/63/15/stylish-young-man-avatar-or-userpic-in-flat-design-vector-17126315.jpg" alt=""/>
         <p>Pratik Pradhan</p>
         </div>
      <div>
        <img src="https://cdn1.vectorstock.com/i/1000x1000/63/15/stylish-young-man-avatar-or-userpic-in-flat-design-vector-17126315.jpg" alt=""/>
         <p>Abhineet samal</p>
         </div>
      <div>
        <img src="https://cdn1.vectorstock.com/i/1000x1000/63/15/stylish-young-man-avatar-or-userpic-in-flat-design-vector-17126315.jpg" alt=""/>
         <p>Hari das</p>
         </div>
      </div>
      </Link>
    </div>
  );
};

export default RiderPage;
