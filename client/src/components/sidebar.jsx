import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaintingThumb from './paintingthumb';

export default function Sidebar(props) {
    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/paintings")
            .then((response) => {
                setPaintings(response.data); // Access the data from the response
            })
            .catch((error) => {
                console.error("Error fetching paintings:", error); // Handle any errors
            });
    }, []);

    console.log(paintings); // This should log the array of paintings

    return (
        <div className='scroll'>
            {paintings.map((p, index) => (
                <PaintingThumb key={index} image={p.ImageFileName} id = {p.PaintingID} setFormID={props.setFormID} /> // Return the component and add a key
            ))}
        </div>
    );
}
