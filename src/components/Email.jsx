import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Email = () => {

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm("service_y8qj1vr", "template_12zwndp",e.target,"q76RbfJRdIBq5rSpf"
).then(res=>{
    console.log(res);
}).catch(err=> console.log(err));
}

  return (
    <div
      className="container border"
      style={{
        marginT: "50px",
        width: "50%",
        backgroundImage: `url("https://w0.peakpx.com/wallpaper/440/206/HD-wallpaper-black-background-car-cars-vehicles.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Enter Details</h1>
      <form className="row" style={{ margin: "25px 85px 75px 100px" }} onSubmit={sendEmail}>
        <Label>name</Label>
        <input type="text" name="name" className="form-control" />
        <Label>email</Label>
        <input type="email" name="user_email" className="form-control" />
        <Label>phone_no</Label>
        <input type="number" name="ph_no" className="form-control" />
        <Label>current location</Label>
        <input type="text" name="location" className="form-control" />
        <Label>destination</Label>
        <input type="text" name="destination" className="form-control" />
        <input
          type="submit"
          value="send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};

const Label = styled.div`
  color: white;
`;

export default Email;
