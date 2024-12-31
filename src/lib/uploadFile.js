import axios from "axios";

const uploadFile = async (file, fileType) => {
  const fileData = new FormData();
  fileData.append("file", file, file.name);
  fileData.append("fileType", fileType);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/upload`,
      fileData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const { fileId, success, message } = response.data;
    console.log(fileId, success, message);
    return { success, fileId, message };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

export default uploadFile;
