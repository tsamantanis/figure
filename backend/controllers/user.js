const User = require('../models/user')

// TODO: GET user, DELETE categories, PATCH user, POST sign in user

exports.getUserProfile = (req, res, next) => {
  User.findOne()
    .then(user => {
      returnUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        categories: user.categories
      }
      return res.status(200).json(returnUser)
    })
    .catch(err => {
      console.log(err)
    })
}

exports.postUser = (req, res, next) => {
  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const password = req.body.password
  const user = new User({
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password
  })
  user.save(err => console.log(err))
  res.status(201).json({ msg: 'User successfully created!', user: user })
}

exports.postUserCategories = (req, res, next) => {
  const categories = req.body.categories
  User.findOne()
    .then(user => {
      user.categories.push(...categories)
      user.save(err => console.log(err))
      res.status(201).json({ msg: 'User categories created!' })
    })
    .catch(err => console.log(err))
}
