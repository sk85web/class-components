const validateAvatar = (file: File | null) => {
  if (!file) return 'Please upload your avatar';
  const validExtensions = ['image/jpeg', 'image/png'];
  const maxSize = 2 * 1024 * 1024;

  if (!validExtensions.includes(file.type)) {
    return 'Only png and jpeg formats are allowed';
  }

  if (file.size > maxSize) {
    return 'File size should not exceed 2MB';
  }

  return true;
};

export default validateAvatar;
