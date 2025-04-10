import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import axios from 'axios';

function Home() {

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [enhanceImage, setEnhanceImage] = useState(null);
    const BASE_URL = "https://techhk.aoscdn.com";

    
    const handleImage = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(URL.createObjectURL(file));
        postImage(file);
    };
    console.log("Image :", image);

    const postImage = async (file) => {
        const formData = new FormData();
        formData.append("image_file", file);
        console.log(formData);

        try {
            setLoading(true);
            const response = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
                headers: {
                    'Content-Type': "multipart/form-data",
                    'X-API-KEY': "wx0d7haby7idfua05"
                }
            });
            if (response.status === 200) {
                console.log(response);
                const taskId = response.data.data.task_id;
                console.log(taskId);
                setTimeout(() => {
                    EnhanceImage(taskId);
                }, 5000);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const EnhanceImage = async (taskid) => {
        const response = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskid}`, {
            headers: {
                "X-API-KEY": "wx0d7haby7idfua05"
            }
        });
        if (response.status === 200) {
            console.log("Enhance Data :", response);
            console.log("Data in data result :", response.data.data);
            setEnhanceImage(response.data.data.image);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <ImageUpload handleImage={handleImage} />
            </div>
            <ImagePreview image={image} loading={loading} enhanceImage={enhanceImage} />
        </>
    );
}

export default Home;
