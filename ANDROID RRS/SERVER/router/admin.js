const express = require("express")
const db = require("../db")
const utils = require("../utils")
const router = express.Router()

router.post("/register", (request,response) => {
    const { name,address, email_id,phone_no,password } = request.body
    db.query(
      "INSERT INTO admin(name,address,email_id,phone_no,password) VALUES(?,?,?,?,?)",
      [name,address, email_id, phone_no,password],
      (error, result) => {
        response.send(utils.createResult(error, result))
  
      }
    )
  })

  router.post("/login", (request, response) => {
    const { email_id, password } = request.body
    const statement = "SELECT * FROM admin WHERE email_id=? and password=?"
    db.query(statement, [email_id, password], (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })


  router.put('/profile/:admin_id', (request, response) => {
    console.log("putmethode called");
    const { admin_id } = request.params
    const {name,address,email_id,phone_no,password} = request.body
    //const encryptedPassword = String(cryptoJs.SHA256(password))
    console.log(""+name,address, email_id,phone_no,password);
    db.query(
      `UPDATE admin
      SET
      name = ?,address = ?,email_id = ?,phone_no = ?,password = ?
      WHERE
      admin_id = ?;
      `,
      [name,address,email_id,phone_no,password,admin_id],
      (error, result) => {
        response.send(utils.createResult(error, result))
      }
    )
  })
  
  
  router.put('/change_password/:admin_id', (request, response) => {
    console.log(request);
    const { admin_id } = request.params
    const { password } = request.body
    //const encryptedPassword = String(cryptoJs.SHA256(password))
    db.query(
      `update admin 
      set password = ? 
      where admin_id = ?`,
      [password, admin_id],
      (error, result) => {
        response.send(utils.createResult(error, result))
      }
    )
  })
  
  
  

  router.put('/schedule/:train_number', (request, response) => {
    const { train_number } = request.params
    const { train_time,train_date,running_days,halt_time} = request.body
    db.query(
     ` update train set train_time = ?,train_date = ?,running_days = ?,halt_time = ? where train_number = ? `,
      [train_time,train_date,running_days,halt_time,train_number],
      (error, result) => {
        response.send(utils.createResult(error, result))
      }
    )
  })
 




module.exports = router