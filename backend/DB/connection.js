const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Ameer123:Ameershah123@cluster0.ctwe0.mongodb.net/Employeemern?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connection established"))
  .catch(() => console.log("connection not established"));

//   const mongoose = require("mongoose");

// mongoose
//   .connect(
//     "mongodb+srv://Alan_23:Alan_23_2002@cluster0.slgzu.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => console.log("connection established"))
//   .catch(() => console.log("connection not established"));