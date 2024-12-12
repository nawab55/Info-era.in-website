const uploadFile = async (file, fileType) => {
  const fileData = new FormData();
  fileData.append("file", file, file.name);
  fileData.append("fileType", fileType);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/upload`,
      { method: "POST", body: fileData }
    );

    const { fileId, success, message } = await response.json();
    return { success, fileId, message };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export default uploadFile;
