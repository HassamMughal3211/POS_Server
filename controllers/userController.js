const bcrypt = require("bcryptjs/dist/bcrypt")
const User = require("../models/userSchema")

exports.createUser = async (req, res) => {
  try {
    var { userName } = req.body;
    var name = await User.findOne({ userName })
    console.log("name",name)
    if (name) {
      res.status(200).json({
        success: "false",
        error: "username already exists!"
      })
    }
    const data = await User.create(req.body)
    console.log(data)

    res.status(200).json({
      success: "true",
      data
    })
  } catch (error) {
    // console.log("error", error)
    res.status(200).json({
      success: "false",
      error
    })
  }
}
exports.signIn = async (req, res) => {
  try {
    var { userName, password } = req.body;
    if (!userName || !password) {
      res.status(200).json({
        success: false,
        msg: "invalid username or password"
      })
    }

    var user = await User.findOne({ userName })
    var userVerfied = await bcrypt.compare(password, user.password);

    if (!userVerfied || !user) {
      res.status(200).json({
        success: false,
        msg: "invalid username or password"
      })
    }

    var { password, __v, ...modifiledUser } = user.toObject();

    res.status(200).json({
      success: "true",
      user: modifiledUser
    })


  } catch (error) {
    console.log("error", error)

  }
}