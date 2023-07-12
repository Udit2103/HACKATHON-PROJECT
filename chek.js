const mongoose = require('mongoose');
const fs = require('fs');
mongoose.connect("mongodb://127.0.0.1:27017")
const imageSchema = new mongoose.Schema({
  name: String, // optional: include additional fields for metadata
  data: Buffer,
  contentType: String
});

const image1 = mongoose.model('Image', imageSchema);

module.exports = image1;
const express = require('express');
const multer = require('multer');
// const image = require('./models/image');

const app = express();
app.use(express.static('images'));

// Set up multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Handle file upload
app.get("/upload",(req,res)=>{
    res.sendFile(__dirname+"/a.html")
})
app.get("/",(req,res)=>{
  async function get(){
    res.set('Content-Type', 'text/html');
    image1.find({name:"_DSC0017.JPG"}).then((documents) => {
      const img= documents[0].data;
      fs.writeFile('image.jpg', img, 'binary', (err) => {
        if (err) {
          console.error('Error saving image:', err);
          return;
        }
        console.log('Image saved successfully.');
        
        res.send("<img src='http://localhost:3000/output.jpg'></img>")
      });
      







      })
      .catch(err => {
    // Handle any errors that occur during the conversion process
      console.error('Error converting binary data to JPEG:', err);
  });
    
    }

  get()
})
var iop
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Create a new image document
    const newImage = new image1();
    newImage.name = req.file.originalname;
    newImage.data = req.file.buffer;
    newImage.contentType = req.file.mimetype;
    iop=newImage.data
    // Save the image to the database
    await newImage.save();

    res.status(201).send('Image uploaded successfully');
  } catch (error) {
    res.status(500).send('Error uploading image');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

