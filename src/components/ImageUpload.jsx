import React from 'react'

function ImageUpload({ handleImage }) {
    return (
        <>
            <div className="h-96">
                <div className="flex flex-col gap-4 justify-center p-4 sm:w-[40vw] h-40 items-center text-center border shadow-lg rounded-xl mt-12">
                    <input type='file' className='hidden' id='img' onChange={handleImage} />
                    <label className='cursor-pointer border text-white bg-red-400 p-4 m-4 rounded-xl' htmlFor='img'>Upload Image</label>
                </div>
            </div>
        </>
    )
}

export default ImageUpload
