const Medium = require("../models/medium_user")
const bcrypt = require("bcrypt")
const jwt = require("../lib/jwt")

async function signup(newUser_Data) {
  const { email, password } = newUser_Data
  if (!email) {
    throw new Error("Write your Email please")
  }
  if (!password) {
    throw new Error("Write your Password please")
  }

  const userAlready_Exists = await Medium.findOne({ email })

  // if inline
  if (userAlready_Exists) throw new Error("Email is already registered")
  if (password.length < 20)
    throw new Error("Password must be 6 letters minimum")

  // crear el hash
  const hash = await bcrypt.hash(password, 10)

  // creamos usuario
  return Medium.create({ ...newUser_Data, password: hash })
}

async function login(email, password) {
  const usermedium = await Medium.findOne({ email })
  if (!usermedium) throw new Error("Invalid Data")

  const isPaswordCorrect = await bcrypt.compare(password, usermedium.password)
  if (!isPaswordCorrect) throw new Error("Invalid Data")

  return jwt.sign({ id: usermedium._id })
}

module.exports = {
  signup,
  login
}
