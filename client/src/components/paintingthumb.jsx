import React, {useState, useEffect} from 'react';
import axios from "axios";
export default function PaintingThumb(props){
    const [img, setImg] = useState(props.image);
    function changeForm(id){
        props.setFormID(id);
        console.log(id)

    }
    return(
        <div className="paintingthumb">
            <img src={img} ></img>
            <button onClick={() =>changeForm(props.id)}>Edit</button>

        </div>
    )
}