import React from 'react';

function ImagePreview({ image, enhanceImage, loading }) {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = enhanceImage;
        link.download = 'enhanced-image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return (
            <div className='flex justify-center items-center text-center h-[100vh] z-50 inset-0 bg-gray-100'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    return (
        <div>
            {loading && <p>Processing image... Please wait.</p>}

            {image && (
                <div className='font-extrabold text-2xl'>
                    <h3 className='mb-4'>Original Image</h3>
                    <img src={image} alt="Original" style={{ maxWidth: '100%', marginBottom: '20px' }} />
                </div>
            )}

            {enhanceImage && (
                <div className='font-extrabold text-2xl'>
                    <h3 className='mb-4'>Enhanced Image</h3>
                    <img src={enhanceImage} alt="Enhanced" style={{ maxWidth: '100%', marginBottom: '20px' }} />
                    <button
                        onClick={handleDownload}
                        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Download Enhanced Image
                    </button>
                </div>
            )}
        </div>
    );
}

export default ImagePreview;