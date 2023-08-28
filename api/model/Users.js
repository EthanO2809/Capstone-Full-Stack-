const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");

class Users {
  fetchUsers(req, res) {
    const query = `
            SELECT UserID, UserUrl, UserName, UserAge, EmailAdd, Userpass
            FROM USERS
        `;
    db.query(query, (err, data) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results: data,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
        SELECT UserID, UserUrl, UserName, UserAge, EmailAdd, UserPass
        FROM USERS
        WHERE UserID = ${req.params.UserID}
        `;
    db.query(query, (err, data) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results: data,
      });
    });
  }
  async login(req, res) {
    const { EmailAdd, UserPass } = req.body;
    // query
    const query = `
      SELECT UserName, UserAge, EmailAdd, UserPass
      FROM USERS
      WHERE EmailAdd = ?
    `;
    db.query(query, [EmailAdd], async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You are providing the wrong email",
        });
      } else {
        compare(UserPass, result[0].UserPass, (cerr, cresult) => {
          if (cerr) throw cerr;
          // Create a token
          const token = createToken({
            EmailAdd,
            UserPass,
          });
          // Save A token
          res.cookie("realUser", token, {
            expires: new Date(Date.now() + 259200000),
            httpOnly: true,
          });
          if (cresult) {
            res.json({
              msg: "Logged in!",
              token,
              cresult: cresult[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid login",
            });
          }
        });
      }
    });
  }
  async registerUser(req, res) {
    const data = req.body;
    data.UserPass = await hash(data.UserPass, 15);
    const user = {
      EmailAdd: data.EmailAdd,
      UserPass: data.UserPass,
    };
    const query = `
            INSERT INTO USERS SET ?
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      let token = createToken(user);
      // res.cookie("LegitUser", token, {
      //   expires: new Date(Date.now() + 259200000),
      //   httpOnly: true,
      // });
      res.json({
        status: res.statusCode,
        msg: "User registered successfully",
      });
    });
  }
  removeUser(req, res) {
    const query = `
            DELETE FROM USERS WHERE UserID = ${req.params.UserID}
        `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User record was removed successfully",
      });
    });
  }
  updateUser(req, res) {
    const query = `
            UPDATE USERS SET ? WHERE UserID = ${req.params.UserID}
        `;
    db.query(query, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User record was updated successfully",
      });
    });
  }
}

module.exports = {
    Users
};