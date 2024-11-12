import React, {useState, useEffect} from 'react';
import axios from "axios";
export default function PaintingThumb(props){
    const [img, setImg] = useState("");
    const [imgName, setImgName] = useState(props.image)
    const [title, setTitle] = useState(props.title)
    function changeForm(id){
        props.setFormID(id);
        console.log(id)

    }
    useEffect(() => {
        try {
            const imagePath = require(`../images/${imgName}`);
            setImg(imagePath);
        } catch (error) {
            setImg("/logo192.png");
        }
    }, [imgName]);
    return(
        <div className="paintingthumb">
            <span>
            <img src={img} ></img>
            <h2>{title}</h2>
            </span>
            <button onClick={() =>changeForm(props.id)}>Edit</button>

        </div>
    )
}