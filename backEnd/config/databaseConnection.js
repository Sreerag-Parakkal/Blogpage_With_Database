// const mongoose = require("mongoose");

// const databaseConnection = ()=>{
//     mongoose.connect(process.env.DB_URI,{
//         newUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then((data)=>{
//         console.log(`server connected with${data.connection.host}`);
//     })
//     .catch((error)=>console.log(error.message));
// }
// module.exports = databaseConnection