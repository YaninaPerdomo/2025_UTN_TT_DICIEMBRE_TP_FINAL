import React from "react";
import { useState } from "react";

let nombre = "";

function InputControlado () {
    const [nombre, setNombre] = useState ("");
    return(
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <input 
            type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>
    );
}

export default InputControlado;