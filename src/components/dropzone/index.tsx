import React, { PropsWithChildren, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import './style.scss'
import UploadFilePNG from 'src/statics/images/upload-file.png'
import UploadFileBlackPNG from 'src/statics/images/upload-file-black.png'

interface DropzoneProps {}
function Dropzone({}: PropsWithChildren<DropzoneProps>) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles)
    console.log('path', acceptedFiles[0].path)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  })

  return (
    <div
      {...getRootProps()}
      className="dropzone-container w-full p-8 flex justify-center items-center text-center rounded-md"
      style={{ borderColor: isDragActive ? '#6419e6' : '#d4d4d4' }}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="active flex justify-center items-center flex-col">
          <img src={UploadFilePNG} alt="upload file png" />
          <p>Drop the files here ...</p>
        </div>
      ) : (
        <div className="inactive flex justify-center items-center flex-col">
          <img src={UploadFileBlackPNG} alt="upload file png" />
          <p>Drag n drop some files here, or click to select files</p>
        </div>
      )}
    </div>
  )
}
export default Dropzone
