const express = require("express")
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth,addemployee } = require("./Auth/auth.js");
const path = require('path')
const app = express()
const PORT = 5000

app.use(express.json())
app.use("/api/auth", require("./Auth/route"))
app.use(cookieParser());

app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")

const connectDB = require("./db");

//Connecting the Database
connectDB();

// app.get("/", (req, res) => res.render("home"))
app.get("/", (req, res) => res.render("login"))
// app.get("/register", (req, res) => res.render("register"))
app.get("/admin", adminAuth, (req, res) => res.render("admin"))
app.get("/basic", userAuth, (req, res) => res.render("user"))
app.get("/add", addemployee, (req, res) => res.render("addemployee"))
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" })
  res.redirect("/")
})

const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
)
// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})