const express = require("express");
const app = express();
const cors = require("cors");
const port = 3003;
const mysql = require("mysql");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "parts",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

//Route
app.get("/", (req, res) => {
  res.send("Serveris veikia");
});

app.get("/parts", (req, res) => {
  const sql = `
        SELECT * 
        FROM parts
    `;
  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      msg: "OK",
      parts: result,
    });
  });
});

app.post("/parts/add", (req, res) => {
  const sql = `
        INSERT INTO
        parts
        (part_number, part_number_1,description)
        VALUES (?,?,?)
    `;
  con.query(
    sql,
    [req.body.part_number, req.body.part_number_1, req.body.description],
    (err) => {
      if (err) throw err;
      console.log(req.body);
      console.log("1 record inserted");
    }
  );
  res.json({
    msg: "OKi",
  });
});

app.delete("/parts/delete/:id", (req, res) => {
  const sql = `
          DELETE FROM parts
      WHERE id=? 
        `;
  con.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    console.log("1 record DELETED");
  });
  res.json({
    msg: "OKi",
  });
});

app.put("/parts/update/:id", (req, res) => {
  const sql = `
        UPDATE parts
  SET part_number = ?, part_number_1=?, description=?
  WHERE id=? 
      `;
  con.query(
    sql,
    [
      req.body.part_number,
      req.body.part_number_1,
      req.body.description,
      req.params.id,
    ],
    (err) => {
      if (err) throw err;
      console.log("1 record updated");
    }
  );
  res.json({
    msg: "OKi",
  });
});

app.get("/parts/filter/:f_value/:f_name", (req, res) => {
  let sql = `
    SELECT *
    FROM parts 
    `;
  let filterSQL = "";
  switch (req.params.f_name) {
    case "1":
      filterSQL = `WHERE part_number= ${req.params.f_value}`;
      break;
   
  }
  sql += filterSQL;
  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      msg: result,
      parts: result,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
