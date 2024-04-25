const express = require("express")
const db = require("../db")
const router = express.Router()
const utils = require("../utils")


router.get("/:train_number", (request, response) => {
    const train_number = request.params.train_number
    const statement = `SELECT * FROM train WHERE train_number=?`
    db.query(statement, [train_number], (error, result) => {
      response.send(utils.createResult(error, result))
      console.log(error)
    })
  })

  router.get("/", (request, response) => {
    const statement = `SELECT * FROM train`
    db.query(statement, (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })

  router.post("/addtrain", (request, response) => {
    const {train_number,train_name,source,destination,classtype,train_time,
    train_date,running_days,halt_time,distance} = request.body
    console.log(request.body)
    db.query(
      'INSERT INTO train(train_number,train_name, source, destination, classtype, train_time,train_date, running_days, halt_time, distance) VALUES(?,?,?,?,?,?,?,?,?,?)',
      [train_number, train_name, source, destination, classtype, train_time,
        train_date, running_days, halt_time, distance],
      (error, result) => {
        response.send(utils.createResult(error, result))
      }
    )
  })

/*
  router.put('/:train_number', (request, response) => {
    const { train_number } = request.params
    const { train_name,source,destination,classtype,train_time,train_date,running_days,halt_time,distance} = request.body
    const statement =
     "update train set train_name = ?,source = ?,destination = ?,classtype = ?,train_time = ?,train_date = ?,running_days = ?,halt_time = ?,distance = ? where train_number = ? ;
     db.query(
    statement, 
     [train_name,source,destination,classtype,train_time,train_date,running_days,halt_time,distance,train_number],
      (error, result) => {
        response.send(utils.createResult(error, result))
        console.log(result);
        console.log(error);
      }
    )
  })

*/

 

  router.put("/record", (request, response) => {
    const {train_name,source,destination,classtype,train_time,train_date,running_days,halt_time,distance,train_number} = request.body;
    const statement =
      "UPDATE train SET train_name = ?,source = ?,destination = ?,classtype = ?,train_time = ?,train_date = ?,running_days = ?,halt_time = ?,distance = ? WHERE train_number=?";
    db.query(
      statement,
      [train_name,source,destination,classtype,train_time,train_date,running_days,halt_time,distance,train_number],
      (error, result) => {
        if (error) {
          console.log("Error updating record:", error);
          response.send(utils.createErrorResult("Error updating record"));
        } else {
          console.log("Record updated successfully");
          response.send(utils.createResult(null, result));
        }
      }
    );
  });
  






router.delete('/canceltrain/:train_number', (request, response) => {
  const { train_number } = request.params
  db.query(`delete from train where train_number = ? `, [train_number], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

  
  module.exports = router