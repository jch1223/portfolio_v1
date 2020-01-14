const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const stream = require('stream');

const UPLOAD_DIR = path.join(process.cwd(), process.env.UPLOAD_DIR);
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, 0o775);
}
console.log('UPLOAD_DIR', UPLOAD_DIR);

const parseFormBody = req => {
  return new Promise((resolve, reject) => {
    if (!req.headers['content-type'].startsWith('multipart/form-data')) {
      reject(new Error('Error: not multipart/form-data'));
      return;
    }
    const form = new formidable.IncomingForm();
    form.uploadDir = UPLOAD_DIR;
    form.multiples = false;
    form.parse(req, (err, fields, file) => {
      if (err) {
        reject(err);
        return;
      }
      // console.log(file);
      resolve(file);
      // let i = 0;
      // let incomingFiles = [];
      // while (files[i]) {
      //   incomingFiles = [...incomingFiles, files[i++]];
      // }
      // resolve(incomingFiles);
    });
  });
};

module.exports.handleFiles = async (req, res, next) => {
  try {
    const { news_img } = await parseFormBody(req);
    const file_url = path.basename(news_img.path);
    return res.status(201).send({ file_path: file_url });
  } catch (e) {
    res.status(500).send('file upload failed: ' + JSON.stringify(e));
  }
};

module.exports.getImg = async (req, res, next) => {
  try {
    return res.sendFile(path.join(UPLOAD_DIR, req.params.name));
  } catch (e) {
    res.status(500).send();
  }
};
