const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const fs= require("fs")
const storageBucket = require('../config/fireStore.conf'); 
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  //limits: { fileSize: maxSize },
}).single("file"); 


//fire store
async function uploadPDFToFS(pdfFilePath,pdfFilename){
  try{
    const fileBuffer = fs.readFileSync(pdfFilePath);
    const file=storageBucket.file(pdfFilename)
    const options = file.createWriteStream({
      metadata: {
        contentType: 'pdf'
      }
    });
    await file.save(fileBuffer, options);
    
    const downloadUrl = await file.getSignedUrl({
        version: 'v4', // Utilisez la version v4 de l'URL signée
        action: 'read', // Spécifiez l'action pour laquelle vous voulez obtenir l'URL signée (lecture du fichier)
        expires: Date.now() + 1000 * 60 * 60,
    })
    console.log("file uploaded successfully to fire store and the URL is "+ downloadUrl[0])
    return downloadUrl[0]
  }
  catch(err){
    console.error('Error storing:', err);
  }
}

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = {uploadFileMiddleware,uploadPDFToFS};