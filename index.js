const bcrypt = require("bcryptjs")
const argv = require("yargs").argv

const password = argv.password || "password"
bcrypt.hash(password, 10, (err, hash) => {
  console.log("Your hashed password:")
  console.log(hash)
})