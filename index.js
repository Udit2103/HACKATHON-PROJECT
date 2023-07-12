const express = require('express');
const multer = require('multer');

// const image = require('./models/image');

const app = express();
app.use(express.static('casuals'));
app.use(express.static('ethenics'));
app.use(express.static('formals'));
app.use(express.static('westerns'));
app.use(express.static(__dirname));
const storage = multer.memoryStorage();
const upload = multer({ storage });
const mongoose = require('mongoose');
const body_parser=require("body-parser")
const fs = require('fs');
app.use(body_parser.urlencoded({extended:true}))
// app.use(body_parser.json)
mongoose.connect("mongodb://127.0.0.1:27017/fashify")
console.log("here")
app.get("/add",(req,res)=>{
  res.sendFile(__dirname+"/add.html")
})
app.get("/upper",(req,res)=>{
  res.sendFile(__dirname+"/z.html")
})
app.get("/lower",(req,res)=>{
  res.sendFile(__dirname+"/y.html")
})

app.get("/shoes",(req,res)=>{
  res.sendFile(__dirname+"/w.html")
})

app.get("/fashion",(req,res)=>{
  res.sendFile(__dirname+"/fashion.html")
})
app.get("/closet",(req,res)=>{
  res.sendFile(__dirname+"/closet.html")
})
app.get("/outfit",(req,res)=>{
  res.sendFile(__dirname+"/outfit.html")
})
app.get("/main",(req,res)=>{
  res.sendFile(__dirname+"/index.html")
})
// const outs = new mongoose.Schema({
//     uname:String,
//     password:String,
//     ethenics:[ins],
//     casuals:[ins],
//     western:[ins]
  
// // });
const ins=new mongoose.Schema({
    cname:String,
    fname: String, 
    data: Buffer,
    contentType: String,
    type:String
})
const dis=new mongoose.Schema({
  p_id:String,
  link:String,
  size:Number,
  padding:String,
  elastic:Boolean,
  tag:Boolean,
  button:String,
  comment:String,
  extra:String
})
const ad=new mongoose.Schema({
  p_id:Number,
  address:String,
  mobile:String,
  pin:String,
  city:String,
  state:String
})
const pay_s=new mongoose.SchemaType({
  payed:Array
})
console.log("here")
const et = mongoose.model('ethenics', ins);
const cs = mongoose.model('casuals', ins);
const fo = mongoose.model('formals', ins);
const we = mongoose.model('westerns', ins);
const cl=mongoose.model('collect',dis);
const ad1=mongoose.model('addresses',ad);
const pay1=mongoose.model('payed',pay_s);
console.log("here")
var id=[];
app.post('/add', upload.single('image'), async (req, res) => {
    try {
      // Create a new image document
      console.log("here image is posting")
      if(req.body.coll=="ethnics"){
        const newImage = new et();
        newImage.fname = req.file.originalname;
      newImage.data = req.file.buffer;
      newImage.contentType = req.file.mimetype;
      newImage.type=req.body.type;
      console.log(req.body.coll)
      newImage.cname=req.body.cname
      await newImage.save();
      }
      else if(req.body.coll=="casuals"){
        const newImage = new cs();
        newImage.fname = req.file.originalname;
      newImage.data = req.file.buffer;
      newImage.contentType = req.file.mimetype;
      newImage.type=req.body.type;
      console.log(req.body.coll)
      newImage.cname=req.body.cname
      await newImage.save();
      }
      else if(req.body.coll=="formals"){
        const newImage = new fo();
        newImage.fname = req.file.originalname;
      newImage.data = req.file.buffer;
      newImage.contentType = req.file.mimetype;
      newImage.type=req.body.type;
      console.log(req.body.coll)
      newImage.cname=req.body.cname
      await newImage.save();
      }
      else if(req.body.coll=="westerns"){
        const newImage = new we();
        newImage.fname = req.file.originalname;
      newImage.data = req.file.buffer;
      newImage.contentType = req.file.mimetype;
      newImage.type=req.body.type;
      console.log(req.body.coll)
      newImage.cname=req.body.cname
      await newImage.save();
      }
      
  
      res.status(201).send('Image uploaded successfully');
    } catch (error) {
      res.status(500).send('Error uploading image');
    }
  });

  app.post("/upper",async (req,res)=>{
    var p_id=Math.floor(Math.random() * 9000000) + 1000000;
    while(id.includes(p_id)){
      p_id=Math.floor(Math.random() * 9000000) + 1000000;
    }
    id.push(p_id)
    rand=p_id;
    var link=req.body.linki.value;
    var size=req.body.size.value;
    var padding=req.body.padding.value;
    if(padding.checked){
      var pad_c=req.body.padiding_c.value;

    }
    var but=req.body.but.value;
    var tag=req.body.tag.value;
    var comment=req.body.comment;
    var clu=new cl();
    clu.id=p_id
    clu.link=link
    clu.size=size
    clu.padding=pad_c
    clu.tag=tag
    clu.button=but
    clu.comment=comment
    clu.save();
    res.sendFile(__dirname+"address.html")
  })
  app.post("/lower",async (req,res)=>{
    var p_id=Math.floor(Math.random() * 9000000) + 1000000;
    while(id.includes(p_id)){
      p_id=Math.floor(Math.random() * 9000000) + 1000000;
    }
    id.push(p_id)
    rand=p_id;
    var link=req.body.linki.value;
    var size=req.body.size.value;
    var padding=req.body.padding.value;
    if(padding.checked){
      var pad_c=req.body.padding_c.value;

    }
    var but=req.body.but.value;
    var tag=req.body.tag.value;
    var comment=req.body.comment;
    var elastic=req.body.elastic;
    var clu=new cl();
    clu.id=p_id;
    clu.link=link
    clu.size=size
    clu.padding=pad_c
    clu.tag=tag
    clu.button=but
    clu.comment=comment
    clu.elastic=elastic
    clu.save();
    res.sendFile(__dirname+"/address.html")
  })
  app.post("/shoes",async (req,res)=>{
    var p_id=Math.floor(Math.random() * 9000000) + 1000000;
    while(id.includes(p_id)){
      p_id=Math.floor(Math.random() * 9000000) + 1000000;
    }
    id.push(p_id)
    rand=p_id;
    var link=req.body.linki.value;
    var size=req.body.size.value;
    var padding=req.body.padding.value;
    if(padding.checked){
      var pad_c=req.body.padding_c.value;

    }
    var but=req.body.but.value;
    // var tag=req.body.tag.value;
    var comment=req.body.comment;
    var elastic=req.body.elastic;
    var clu=new cl();
    clu.id=p_id;
    clu.link=link
    clu.size=size
    clu.padding=pad_c
    clu.tag=tag
    clu.button=but
    clu.comment=comment
    clu.elastic=elastic
    clu.save();
    res.sendFile(__dirname+"/address.html")
  })
// app.get("/address",(req,res)=>{
//   sendFile(__dirname+"/address.html")
// })
app.post("/addreas",async (req,res)=>{
  var addd=new ad1()
  addd.p_id=rand;
  addd.address=req.body.address;
  addd.mobile=req.body.mobile;
  addd.pin=req.body.pin
  addd.city=req.body.city
  addd.state=req.body.state
  await addd.save()
  res.sendFile(__dirname+"/payment.html")

}
)
app.get("/payment",(req,res)=>{
  res.sendFile(__dirname+"/payment.html")
})
app.post("/payment",(req,res)=>{
  res.send("ACcept Payment on the requested app")
})
app.get("/check_c",(req,res)=>{
    res.sendFile(__dirname+"/comp_sh.html")
})
//   app.get("/wes",(req,res)=>{
//     async function get(){
//       res.set('Content-Type', 'text/html');
//       var r="<html><style>body{align:center;background-color:grey;color:white}#cen{font-size:30px}</style>"
//       r+="<body><h1>WESTERN</h1><ul>"
//       we.find({}).then((documents) => {
//         console.log(documents)
//         for (var i in documents){
//           // console.log(i)
//           const img= documents[i]["cname"];
        
//         r+="<li id='cen'><a href='/picwes?message="+img+"'>"+img+"</a></li>"
//         }
//         r+="</ul>"
//         res.send(r)
//         })
//       }
  
//     get()
// })

//   app.get("/for",(req,res)=>{
//     async function get(){
//       res.set('Content-Type', 'text/html');
//       var r="<html><style>body{align:center;background-color:grey;color:white}#cen{font-size:30px}</style>"
//       r+="<body><h1>FORMALS</h1><ul>"
//       fo.find({}).then((documents) => {
//         console.log(documents)
//         for (var i in documents){
//           // console.log(i)
//           const img= documents[i]["cname"];
        
//         r+="<li id='cen'><a href='/picfor?message="+img+"'>"+img+"</a></li>"
//         }
//         r+="</ul>"
//         res.send(r)
//         })
//       }
  
//     get()
// })
app.get("/wes",(req,res)=>{
    async function get(){
      res.set('Content-Type', 'text/html');
      var r="<!DOCTYPE html>\
      <html>\
      <title>WESTERN</title>\
      <script src='https://kit.fontawesome.com/e296fc494b.js' crossorigin='anonymous'></script>\
      \
    <link rel='preconnect' href='https://fonts.googleapis.com'>\
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>\
    <link href='https://fonts.googleapis.com/css2?family=Alkatra:wght@700&family=Carter+One&family=Concert+One&family=Kanit:wght@500&family=Lobster&family=Lobster+Two:ital@1&family=Londrina+Solid:wght@100&family=Mirza:wght@600&family=Sigmar&family=Vina+Sans&display=swap' rel='stylesheet'>\
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>\
      <head>\
      <style>\
      * {\
        margin:6px;\
        padding:3px;\
        box-sizing:border-box;\
        font-family: 'Sigmar', cursive;\
        font-size: 30px;\
        }\
      body {\
          text-align: center;\
          background-color: rgb(51, 63, 63);\
          color: white;\
          background-image: url(pex.jpg);\
        }\
      \
        #header {\
          width: 100%;\
          height: 120vh;\
          \
          background-size: cover;\
          background-image: url(pex.jpg);\
          background-position: center;\
          \
      }\
        h1 {\
          color: #fff;\
          font-size: 100px;\
        }\
        \
        ul {\
          list-style-type: none;\
        }\
        \
        \
        \
        li {\
          margin-bottom: 10px;\
          color:hsl(340 50% 50%)\
        }\
        \
      </style>\
      </head>\
      <body>\
      \
      </body>\
      </html>"
      r+="<body><h1>WESTERN</h1><ul>"
      we.find({}).then((documents) => {
        console.log(documents)
        for (var i in documents){
          // console.log(i)
          const img= documents[i]["cname"];
        
        r+="<li id='cen'><a href='/picwes?message="+img+"'>"+img+"</a></li>"
        }
        r+="</ul>"
        res.send(r)
        })
      }
  
    get()
})

  app.get("/for",(req,res)=>{
    async function get(){
      res.set('Content-Type', 'text/html');
      var r="<!DOCTYPE html>\
      <html>\
      <title>FORMALS</title>\
      <script src='https://kit.fontawesome.com/e296fc494b.js' crossorigin='anonymous'></script>\
      \
    <link rel='preconnect' href='https://fonts.googleapis.com'>\
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>\
    <link href='https://fonts.googleapis.com/css2?family=Alkatra:wght@700&family=Carter+One&family=Concert+One&family=Kanit:wght@500&family=Lobster&family=Lobster+Two:ital@1&family=Londrina+Solid:wght@100&family=Mirza:wght@600&family=Sigmar&family=Vina+Sans&display=swap' rel='stylesheet'>\
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>\
      <head>\
      <style>\
      * {\
        margin:6px;\
        padding:3px;\
        box-sizing:border-box;\
        font-family: 'Sigmar', cursive;\
        font-size: 30px;\
        }\
      body {\
          text-align: center;\
          background-color: rgb(51, 63, 63);\
          color: white;\
          background-image: url(pex.jpg);\
        }\
      \
        #header {\
          width: 100%;\
          height: 120vh;\
          \
          background-size: cover;\
          background-image: url(pex.jpg);\
          background-position: center;\
          \
      }\
        h1 {\
          color: #fff;\
          font-size: 100px;\
        }\
        \
        ul {\
          list-style-type: none;\
        }\
        \
        \
        \
        li {\
          margin-bottom: 10px;\
          color:hsl(340 50% 50%)\
        }\
        \
      </style>\
      </head>\
      <body>\
      \
      </body>\
      </html>"
      r+="<body><h1>FORMALS</h1><ul>"
      fo.find({}).then((documents) => {
        console.log(documents)
        for (var i in documents){
          // console.log(i)
          const img= documents[i]["cname"];
        
        r+="<li id='cen'><a href='/picfor?message="+img+"'>"+img+"</a></li>"
        }
        r+="</ul>"
        res.send(r)
        })
      }
  
    get()
})
//   app.get("/cas",(req,res)=>{
//     async function get(){
//       res.set('Content-Type', 'text/html');
//       var r="<html><style>body{align:center;background-color:grey;color:white}#cen{font-size:30px}</style>"
//       r+="<body><h1>CASUALS</h1><ul>"
//       cs.find({}).then((documents) => {
//         console.log(documents)
//         for (var i in documents){
//           // console.log(i)
//           const img= documents[i]["cname"];
        
//         r+="<li id='cen'><a href='/piccas?message="+img+"'>"+img+"</a></li>"
//         }
//         r+="</ul>"
//         res.send(r)
//         })
//       }
  
//     get()
//   })
app.get("/cas",(req,res)=>{
    async function get(){
      res.set('Content-Type', 'text/html');
      var r="<!DOCTYPE html>\
      <html>\
      <title>CASUAL</title>\
      <script src='https://kit.fontawesome.com/e296fc494b.js' crossorigin='anonymous'></script>\
      \
    <link rel='preconnect' href='https://fonts.googleapis.com'>\
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>\
    <link href='https://fonts.googleapis.com/css2?family=Alkatra:wght@700&family=Carter+One&family=Concert+One&family=Kanit:wght@500&family=Lobster&family=Lobster+Two:ital@1&family=Londrina+Solid:wght@100&family=Mirza:wght@600&family=Sigmar&family=Vina+Sans&display=swap' rel='stylesheet'>\
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>\
      <head>\
      <style>\
      * {\
        margin:6px;\
        padding:3px;\
        box-sizing:border-box;\
        font-family: 'Sigmar', cursive;\
        font-size: 30px;\
        }\
      body {\
          text-align: center;\
          background-color: rgb(51, 63, 63);\
          color: white;\
          background-image: url(pex.jpg);\
        }\
      \
        #header {\
          width: 100%;\
          height: 120vh;\
          \
          background-size: cover;\
          background-image: url(pex.jpg);\
          background-position: center;\
          \
      }\
        h1 {\
          color: #fff;\
          font-size: 100px;\
        }\
        \
        ul {\
          list-style-type: none;\
        }\
        \
        \
        \
        li {\
          margin-bottom: 10px;\
          color:hsl(340 50% 50%)\
        }\
        \
      </style>\
      </head>\
      <body>\
      \
      </body>\
      </html>"
      r+="<body><h1>CASUALS</h1><ul>"
      cs.find({}).then((documents) => {
        console.log(documents)
        for (var i in documents){
          // console.log(i)
          const img= documents[i]["cname"];
        
        r+="<li id='cen'><a href='/piccas?message="+img+"'>"+img+"</a></li>"
        }
        r+="</ul>"
        res.send(r)
        })
      }
      get()
    })
  app.get("/piceth",(req,res)=>{
  const mssg=req.query.message
  console.log(mssg)
  et.find({cname:mssg}).then((documents)=>{
    res.set('Content-Type', "image/jpeg");
    console.log(documents)
    img=documents[0].data
    console.log("hellpo "+img)
    fs.writeFile('output.jpg', img, 'binary', (err) => {
        if (err) {
          console.error('Error saving image:', err);
          return;
        }
        console.log('Image saved successfully.');
        res.sendFile(__dirname+"/output.jpg")
        
        // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
      });

      }

  )
    })
    app.get("/eth",(req,res)=>{
        async function get(){
          res.set('Content-Type', 'text/html');
          // var r="<html><style>\
          // body{text-align: center;\
          //   background: rgb(10,97,108);\
          //   \background-image: url('image1.jpg');color: white;font-family=sans-serif;font-size:30px}\
          //   #header{\
          //     width: 100%;\
          //     height: 120vh;\
          //     \
          //     background-size: cover;\
          //   background-position: center;\
          //   }\
          //   </style>"
          var r="<!DOCTYPE html>\
          <html>\
          <title>ETHNIC</title>\
          <script src='https://kit.fontawesome.com/e296fc494b.js' crossorigin='anonymous'></script>\
          \
        <link rel='preconnect' href='https://fonts.googleapis.com'>\
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>\
        <link href='https://fonts.googleapis.com/css2?family=Alkatra:wght@700&family=Carter+One&family=Concert+One&family=Kanit:wght@500&family=Lobster&family=Lobster+Two:ital@1&family=Londrina+Solid:wght@100&family=Mirza:wght@600&family=Sigmar&family=Vina+Sans&display=swap' rel='stylesheet'>\
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>\
          <head>\
          <style>\
          * {\
            margin:6px;\
            padding:3px;\
            box-sizing:border-box;\
            font-family: 'Sigmar', cursive;\
            font-size: 30px;\
            }\
          body {\
              text-align: center;\
              background-color: rgb(51, 63, 63);\
              color: white;\
              background-image: url(pex.jpg);\
            }\
          \
            #header {\
              width: 100%;\
              height: 120vh;\
              \
              background-size: cover;\
              background-image: url(pex.jpg);\
              background-position: center;\
              \
          }\
            h1 {\
              color: #fff;\
              font-size: 100px;\
            }\
            \
            ul {\
              list-style-type: none;\
            }\
            \
            \
            \
            li {\
              margin-bottom: 10px;\
              color:hsl(340 50% 50%)\
            }\
            \
          </style>\
          </head>\
          <body>\
          \
          </body>\
          </html>"
          r+="<body><h1>ETHNIC</h1><ul>"
          et.find({}).then((documents) => {
            console.log(documents)
            for (var i in documents){
              // console.log(i)
              const img= documents[i]["cname"];
            
            r+="<li id='hd' id='cen'><a href='/piceth?message="+img+"'>"+img+"</a></li>"
            }
            r+="</ul></html>"
            res.send(r)
            })
          }
      
        get()
      })
//   app.get("/eth",(req,res)=>{
//     async function get(){
//       res.set('Content-Type', 'text/html');
//       var r="<html><style>body{align:center;background-color:grey;color:white}#cen{font-size:30px}</style>"
//       r+="<body><h1>ETHNIC</h1><PANTS><ul>"
//       et.find({type:"pant"}).then((documents) => {
//         console.log(documents)
//         for (var i in documents){
//           // console.log(i)
//           const img= documents[i]["cname"];
        
//         r+="<li id='cen'><a href='/piceth?message="+img+"'>"+img+"</a></li>"
//         }
//         r+="</ul><h1>SHIRTS</h1>"
//         res.send(r)
//         })
      
//       et.find({type:"shirt"}).then((documents) => {
//         console.log(documents)
//         for (var i in documents){
//           // console.log(i)
//           const img= documents[i]["cname"];
        
//         r+="<li id='cen'><a href='/piceth?message="+img+"'>"+img+"</a></li>"
//         }
//         r+="</ul>"
//         res.send(r)
//         })
//       }
  
//     get()
//   })
  app.get("/piccas",(req,res)=>{
    const mssg=req.query.message
    console.log(mssg)
    cs.find({cname:mssg}).then((documents)=>{
      res.set('Content-Type', "image/jpeg");
      console.log(documents)
      img=documents[0].data
      console.log("hellpo "+img)
      fs.writeFile('output.jpg', img, 'binary', (err) => {
          if (err) {
            console.error('Error saving image:', err);
            return;
          }
          console.log('Image saved successfully.');
          res.sendFile(__dirname+"/output.jpg")
          
          // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
        });
  
        }
  
    )
      })
      app.get("/picwes",(req,res)=>{
        const mssg=req.query.message
        console.log(mssg)
        we.find({cname:mssg}).then((documents)=>{
          res.set('Content-Type', "image/jpeg");
          console.log(documents)
          img=documents[0].data
          console.log("hellpo "+img)
          fs.writeFile('output.jpg', img, 'binary', (err) => {
              if (err) {
                console.error('Error saving image:', err);
                return;
              }
              console.log('Image saved successfully.');
              res.sendFile(__dirname+"/output.jpg")
              
              // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
            });
      
            }
      
        )
          })
app.get("/picfor",(req,res)=>{
  const mssg=req.query.message
  console.log(mssg)
  fo.find({cname:mssg}).then((documents)=>{
    res.set('Content-Type', "image/jpeg");
    console.log(documents)
    img=documents[0].data
    console.log("hellpo "+img)
    fs.writeFile('output.jpg', img, 'binary', (err) => {
        if (err) {
          console.error('Error saving image:', err);
          return;
        }
        console.log('Image saved successfully.');
        res.sendFile(__dirname+"/output.jpg")
        
        // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
      });

      }

  )
    })

app.get("/piceth",(req,res)=>{
  const mssg=req.query.message
  console.log(mssg)
  et.find({cname:mssg}).then((documents)=>{
    res.set('Content-Type', "image/jpeg");
    console.log(documents)
    img=documents[0].data
    console.log("hellpo "+img)
    fs.writeFile('output.jpg', img, 'binary', (err) => {
        if (err) {
          console.error('Error saving image:', err);
          return;
        }
        console.log('Image saved successfully.');
        res.sendFile(__dirname+"/output.jpg")
        
        // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
      });

      }

  )
    })
app.get("/textbox",(req,res)=>{
    res.sendFile(__dirname+"/textbox1.html")
})
app.get("/plain",(req,res)=>{
  et.find({type:'pant'}).then((documents)=>{
    // res.set('Content-Type', "image/jpeg");
    console.log(documents)
    for( var i in documents){
      img=documents[i].data
      // console.log("hellpo "+img)
      fs.writeFile("eth/ethnic_pant/"+documents[i].fname, img, 'binary', (err) => {
          if (err) {
            console.error('Error saving image:', err);
            return;
          }
          console.log('Image saved successfully.');
          
          
          // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
        });
  
    }
    
      }

  )
  et.find({type:'shirt'}).then((documents)=>{
    // res.set('Content-Type', "image/jpeg");
    console.log(documents)
    for( var i in documents){
      img=documents[i].data
      // console.log("hellpo "+img)
      fs.writeFile("eth/ethnic_shirt/"+documents[i].fname, img, 'binary', (err) => {
          if (err) {
            console.error('Error saving image:', err);
            return;
          }
          console.log('Image saved successfully.');
          
          
          // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
        });
  
    }
    
      }
  )

  fo.find({type:'pant'}).then((documents)=>{
    // res.set('Content-Type', "image/jpeg");
    console.log(documents)
    for( var i in documents){
      img=documents[i].data
      console.log("hellpo "+img)
      fs.writeFile("for/formal_pant/"+documents[i].fname, img, 'binary', (err) => {
          if (err) {
            console.error('Error saving image:', err);
            return;
          }
          console.log('Image saved successfully.');
          
          
          // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
        });
  
    }
    
      }

  )
  fo.find({type:'shirt'}).then((documents)=>{
    // res.set('Content-Type', "image/jpeg");
    console.log(documents)
    for( var i in documents){
      img=documents[i].data
      console.log("hellpo "+img)
      fs.writeFile("for/formal_shirt/"+documents[i].fname, img, 'binary', (err) => {
          if (err) {
            console.error('Error saving image:', err);
            return;
          }
          console.log('Image saved successfully.');
          
          
          // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
        });
  
    }
    
      }
  )
  we.find({type:'pant'}).then((documents)=>{
    // res.set('Content-Type', "image/jpeg");
    console.log(documents)
    for( var i in documents){
      img=documents[i].data
      console.log("hellpo "+img)
      fs.writeFile("wes/western_pant/"+documents[i].fname, img, 'binary', (err) => {
          if (err) {
            console.error('Error saving image:', err);
            return;
          }
          console.log('Image saved successfully.');
          
          
          // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
        });
  
    }
    
      }

  )
  we.find({type:'shirt'}).then((documents)=>{
    // res.set('Content-Type', "image/jpeg");
    console.log(documents)
    for( var i in documents){
      img=documents[i].data
      console.log("hellpo "+img)
      fs.writeFile("wes/western_shirt/"+documents[i].fname, img, 'binary', (err) => {
          if (err) {
            console.error('Error saving image:', err);
            return;
          }
          console.log('Image saved successfully.');
          
          
          // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
        });
  
    }
    
      }
  )
  cs.find({type:'pant'}).then((documents)=>{
    // res.set('Content-Type', "image/jpeg");
    console.log(documents)
    for( var i in documents){
      img=documents[i].data
      console.log("hellpo "+img)
      fs.writeFile("cas/casual_pant/"+documents[i].fname, img, 'binary', (err) => {
          if (err) {
            console.error('Error saving image:', err);
            return;
          }
          console.log('Image saved successfully.');
          
          
          // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
        });
  
    }
    
      }

  )
  cs.find({type:'shirt'}).then((documents)=>{
    // res.set('Content-Type', "image/jpeg");
    console.log(documents)
    for( var i in documents){
      img=documents[i].data
      console.log("hellpo "+img)
      fs.writeFile("cas/casual_shirt/"+documents[i].fname, img, 'binary', (err) => {
          if (err) {
            console.error('Error saving image:', err);
            return;
          }
          console.log('Image saved successfully.');
          
          
          // r+="<img src='http://localhost:3000/'"+i.name+".jpg'></img>"
        });
  
    }
    
      }
  )
  res.sendFile(__dirname+"/plain1.html")
})


app.listen(3000, () => {
  console.log('Server listening on port 3000');
})