const express = require("express")
const db = require("../db")
const utils = require("../utils")
const router = express.Router()

/*
router.post("/booktkt", (request, response) => {
    const { uid, tno} = request.body
    const statement = `INSERT INTO ticket(uid,tno) VALUES(?,?)`
    db.query(statement, [uid, tno], (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })

  router.get("/:user_id", (request, response) => {
    const user_id = request.params.user_id
    const statement = `SELECT t.* FROM train tn INNER JOIN ticket t on tn.user_id=t.tno WHERE t.uid=?`
    db.query(statement, [user_id], (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })
  */
  module.exports = router