import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function EditForm(props) {
    const [currentForm, setCurrentForm] = useState({});
    const [formData, setFormData] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8080/paintings/${props.FormID}`)
            .then((response) => {
                setCurrentForm(response.data);
                setFormData(response.data)
                console.log(currentForm)
            })
            .catch((error) => {
                console.error("Error fetching painting:", error);
            });
    }, [props.FormID]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios({
          url: `http://localhost:8080/painting`,
          method: 'POST',
          data: formData, // Send formData directly
          headers: {
            "Content-Type": "application/json",
         },
        });
      };
      
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Painting ID:
            <input type="number" name="PaintingID" value={formData.PaintingID || ''} onChange={handleChange} required />
          </label>
          
          <label>
            Artist ID:
            <input type="number" name="ArtistID" value={formData.ArtistID || ''} onChange={handleChange} required />
          </label>
          
          <label>
            First Name:
            <input type="text" name="FirstName" value={formData.FirstName || ''} onChange={handleChange} />
          </label>
          
          <label>
            Last Name:
            <input type="text" name="LastName" value={formData.LastName || ''} onChange={handleChange} />
          </label>
          
          <label>
            Image File Name:
            <input type="text" name="ImageFileName" value={formData.ImageFileName || ''} onChange={handleChange} />
          </label>
          
          <label>
            Title:
            <input type="text" name="Title" value={formData.Title || ''} onChange={handleChange} />
          </label>
          
          <label>
            Gallery ID:
            <input type="number" name="GalleryID" value={formData.GalleryID || ''} onChange={handleChange} />
          </label>
          
          <label>
            Gallery Name:
            <input type="text" name="GalleryName" value={formData.GalleryName || ''} onChange={handleChange} />
          </label>
          
          <label>
            Gallery City:
            <input type="text" name="GalleryCity" value={formData.GalleryCity || ''} onChange={handleChange} />
          </label>
          
          <label>
            Gallery Country:
            <input type="text" name="GalleryCountry" value={formData.GalleryCountry || ''} onChange={handleChange} />
          </label>
          
          <label>
            Latitude:
            <input type="number" step="any" name="Latitude" value={formData.Latitude || ''} onChange={handleChange} />
          </label>
          
          <label>
            Longitude:
            <input type="number" step="any" name="Longitude" value={formData.Longitude || ''} onChange={handleChange} />
          </label>
          
          <label>
            Shape ID:
            <input type="number" name="ShapeID" value={formData.ShapeID || ''} onChange={handleChange} />
          </label>
          
          <label>
            Museum Link:
            <input type="text" name="MuseumLink" value={formData.MuseumLink || ''} onChange={handleChange} />
          </label>
          
          <label>
            Accession Number:
            <input type="text" name="AccessionNumber" value={formData.AccessionNumber || ''} onChange={handleChange} />
          </label>
          
          <label>
            Copyright Text:
            <input type="text" name="CopyrightText" value={formData.CopyrightText || ''} onChange={handleChange} />
          </label>
          
          <label>
            Description:
            <textarea name="Description" value={formData.Description || ''} onChange={handleChange}></textarea>
          </label>
          
          <label>
            Excerpt:
            <textarea name="Excerpt" value={formData.Excerpt || ''} onChange={handleChange}></textarea>
          </label>
          
          <label>
            Year Of Work:
            <input type="number" name="YearOfWork" value={formData.YearOfWork || ''} onChange={handleChange} />
          </label>
          
          <label>
            Width:
            <input type="number" name="Width" value={formData.Width || ''} onChange={handleChange} />
          </label>
          
          <label>
            Height:
            <input type="number" name="Height" value={formData.Height || ''} onChange={handleChange} />
          </label>
          
          <label>
            Medium:
            <input type="text" name="Medium" value={formData.Medium || ''} onChange={handleChange} />
          </label>
          
          <label>
            Cost:
            <input type="number" name="Cost" value={formData.Cost || ''} onChange={handleChange} />
          </label>
          
          <label>
            MSRP:
            <input type="number" name="MSRP" value={formData.MSRP || ''} onChange={handleChange} />
          </label>
          
          <label>
            Wiki Link:
            <input type="text" name="WikiLink" value={formData.WikiLink || ''} onChange={handleChange} />
          </label>
          
          <label>
            Json Annotations:
            <textarea name="JsonAnnotations" value={JSON.stringify(formData.JsonAnnotations) || ''} onChange={handleChange}></textarea>
          </label>
          
          <label>
            Shape Name:
            <input type="text" name="ShapeName" value={formData.ShapeName || ''} onChange={handleChange} />
          </label>
    
          <button type="submit">Submit</button>
        </form>
      );
}
