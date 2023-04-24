import DataUriParser from 'datauri/parser.js';
import path from 'path';

const getDataUri = (file) => {
    const parser   = new DataUriParser();
    const extName  = path.extname(file.originalname).toString();

    console.log('Here is parserrr - --',parser);
    console.log('Here is extname- --',extName);
    return parser.format(extName,file.buffer);

}
export default getDataUri