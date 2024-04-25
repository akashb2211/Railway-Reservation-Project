const express = require("express")
const db = require("../db")
const utils = require("../utils")
const router = express.Router()




router.get("/", (request, response) => {
  const statement = `SELECT * FROM users`
  db.query(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})



router.post("/register", (request, response) => {
  const {first_Name,last_Name,email_id,gender,dob,address,phone_no,password} = request.body
  db.query(
    "INSERT INTO users(first_name,last_name,email_id,gender,dob,address,phone_no,password) VALUES(?,?,?,?,?,?,?,?)",
    [first_Name,last_Name,email_id,gender,dob,address,phone_no,password],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.post("/login", (request, response) => {
  const { email_id, password } = request.body
  const statement = "SELECT * FROM users WHERE email_id=? and password=?"
  db.query(statement, [email_id, password], (error, result) => {
    response.send(utils.createResult(error, result))
    console.log(error)
    console.log(result)
  })
})


router.get('/viewprofile/:user_id', (request, response) => {

  const { user_id } = request.params
   db.query(
    `Select * from users
      WHERE
      user_id = ?;
    `,
    [user_id],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})


router.put('/change_password/:user_id', (request, response) => {
  console.log(request);
  const { user_id } = request.params
  const { password } = request.body
  //const encryptedPassword = String(cryptoJs.SHA256(password))
  db.query(
    `update users set password = ? where user_id = ?`,
    [password, user_id],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})



router.put('/profile/:user_id', (request, response) => {
  console.log("putmethode called");
  const { user_id } = request.params
  const {first_Name,last_Name, email_id,gender,dob,address,phone_no,password} = request.body
  //const encryptedPassword = String(cryptoJs.SHA256(password))
  console.log(""+first_Name,last_Name, email_id,gender,dob,address,phone_no,password,user_id);
  db.query(
    `UPDATE users
    SET
      first_Name = ?,last_Name = ?,email_id = ?,gender = ?,dob = ?,address = ?,phone_no = ? ,password = ?
    WHERE
      user_id = ?;
    `,
    [first_Name,last_Name,email_id,gender,dob,address,phone_no,password,user_id],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})







module.exports = router
