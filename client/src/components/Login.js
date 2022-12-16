import React, { useState } from "react";

function Login(props) {
  const [currentUser, setCurrentUser] = useState({});

  function submitData() {
    alert("Hello your form is submitted");

    const username = document.querySelector(".username").value;
    const useremail = document.querySelector(".useremail").value;

    setCurrentUser({
      username: username,
      useremail: useremail,
    });
    console.log(currentUser);

    props.setFeedSection();
  }

  return (
    <div className="box">
      <div className="form-container">
        <div className="item">
          <p className="item-label">Name</p>
          <input
            className="username"
            type="text"
            name="username"
            placeholder="Name"
          />
        </div>
        <div className="item">
          <p className="item-label">Email</p>
          <input
            className="useremail"
            type="email"
            name="useremail"
            placeholder="Email"
          />
        </div>
        <div className="item">
          <button onClick={submitData}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
