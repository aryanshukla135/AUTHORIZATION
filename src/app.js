const express = require("express");
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
// line 7 - 9  are middleware functions that are used to parse incoming requests with JSON payloads and cookies.
module.exports = app ;

// cookie ek aese trah ka stroge h jise server 
// directly access kr skta h aurr sever uss data ko modify 
// bhi kar skta h 
// cookies storage ka server access rhega server ke pass 
// cookies ha data har request pe sever pe jata hi jata h