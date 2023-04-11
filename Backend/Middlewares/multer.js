import multer from 'multer';

const storage = multer.memoryStorage();

const singleupload = multer({storage}).single("file");

export default  singleupload;