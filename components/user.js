
import { useEffect, useState } from "react";

function User(props) {
    const { nombre, address } = props;
  
    return (
      <div className="flex justify-center flex-row">
        <h2 className="">{nombre}</h2>
        <br />
        <p>Tu cartera: {address}</p>
        
      </div>
    );
  }
  
  export default User;