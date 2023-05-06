import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useEffect, useState } from "react";
import styles from "./InformationSection.module.css";
import { AiOutlineUpload } from "react-icons/ai";

const ImageDropzoneWithPreview = ({ photoUrl, onEditPhoto }) => {
  const [files, setFiles] = useState([]);
  let imageUrl = "";
  files.length == 0
    ? (imageUrl = photoUrl)
    : (imageUrl = files.map((file) => {
        return URL.createObjectURL(file);
      }));
 
  useEffect(()=>{onEditPhoto(imageUrl)}, [files, setFiles])
  return (
    <div className={styles.container}>
      <Dropzone
        accept={IMAGE_MIME_TYPE}
        onDrop={setFiles}
        className={`${styles.cv__img__photo} ${styles.cv_image_dropzone}`}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            className={`${styles.cv__img__photo} ${styles.cv__img__photo_dropzone}`}
          />
        )}
        <AiOutlineUpload size={70} color="#333330" />
      </Dropzone>
    </div>
  );
};

export default ImageDropzoneWithPreview;
