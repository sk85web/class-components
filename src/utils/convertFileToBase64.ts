const convertFileToBase64 = (
  file: File,
  callback: (result: string | ArrayBuffer | null) => void,
) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
};

export default convertFileToBase64;
