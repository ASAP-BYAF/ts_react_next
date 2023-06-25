import React, { useState, useRef } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;

const ImageUploader = () => {
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>("");

  const onClickText = () => {
    if (inputImageRef.current !== null) {
      console.log("Open the dialogue");
      inputImageRef.current.click();
    }
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
      console.log("New file is selected");
      fileRef.current = files[0];
    }
  };
  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      console.log("Now uploading...");
      await sleep(UPLOAD_DELAY);
      console.log("uploaded well");
      setMessage(`${fileRef.current.name} has been successfully uploaded`);
    }
  };

  return (
    <div>
      <p style={{ textDecoration: "underline" }} onClick={onClickText}>
        Upload images
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        onChange={onChangeImage}
        style={{ visibility: "hidden" }}
      />
      <br />
      <button onClick={onClickUpload}> Upload </button>
      {message !== null && <p>{message}</p>}
    </div>
  );
};

export default ImageUploader;
