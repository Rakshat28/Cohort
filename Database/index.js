

  const express = require("express")
  const mongoose = require("mongoose");
  const app = express();
  
  app.use(express.json())
  
  mongoose.connect("mongodb+srv://rakshatpratapsingh:2b7si3X9uMskx8Bi@cluster0.cm10h.mongodb.net/")
  
  const User = mongoose.model('Users', { name: String, email: String, password: String });
  
  app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    const existingUser = await User.findOne({ email: username });
    // CRUD => create, update, delete, Read
    if (existingUser) {
      return res.status(400).send("Username already exists");
    }
    
    const user = new User({ 
      name: name, 
      email: username, 
      password: password
    });
  
    user.save();
    res.json({
      "msg":"User created successfully"
    })
    
  })
  
  app.listen(3000);