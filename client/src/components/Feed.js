import React from "react";

function Feed(props) {
  return (
    <div>
      <h1>Feed Page</h1>
      <p>{props.currentUser.username}</p>
      <p>{props.currentUser.useremail}</p>
      {props.data.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.username}</h2>
            <h3>{item.useremail}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Feed;
