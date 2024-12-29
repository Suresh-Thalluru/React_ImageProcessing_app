import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageList.css';

const ImageList = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://your-api-id.execute-api.region.amazonaws.com/dev/images');
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            <h1>Processed Images</h1>
            <div className="image-list">
                {images.map(image => (
                    <div key={image.image_id} className="image-item">
                        <img src={image.s3_url} alt={image.description} />
                        <p><strong>Artist:</strong> {image.artist_name}</p>
                        <p><strong>Copyright:</strong> {image.copyright}</p>
                        <p><strong>Description:</strong> {image.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageList;