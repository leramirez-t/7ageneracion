const Medium = require('../models/medium')


function create (user_data) {
  return Medium.create(user_data)
}

function getAll (user_data) {
  return Medium.find(user_data)
}

function updateById (id, newUser_Data) {

  return Medium.findByIdAndUpdate(id, newUser_Data)
}

function deleteById (id, newUser_Data) {
  return Medium.findByIdAndRemove(id)
}

module.exports = {

  create,
  getAll,
  updateById,
  deleteById

}