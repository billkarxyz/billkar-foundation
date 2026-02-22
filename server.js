const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// CONNECT DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/billkarDB")
.then(() => console.log("MongoDB Connected 🔥"))
.catch(err => console.log(err));

// BUAT SCHEMA USER
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model("User", userSchema);

// REGISTER
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.send("Username sudah terdaftar ❌");
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.send("Register berhasil & tersimpan di database ✅");
});

// LOGIN
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (user) {
        res.send("Login berhasil 🔥");
    } else {
        res.send("Login gagal ❌");
    }
});

app.listen(3000, () => {
    console.log("Server jalan di http://localhost:3000");
});