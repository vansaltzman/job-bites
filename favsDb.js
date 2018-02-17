//Mongodb Shema for storing favs
const mongoose = require('mongoose')

let urlstring = process.env.MONGOLAB || 'mongodb://localhost/jobbites';

mongoose.connect(urlstring)

let jobSchema = mongoose.Schema({
  id: {type: String, unique: true},
  created_at: String,
  title: String,
  location: String,
  type: String,
  company: String,
  company_logo: String,
  url: String,
  foods: Array
})

let Job = mongoose.model('Job', jobSchema);

let getFavs = () => {
  return Job.find({}).exec()
}

let save = (job) => {
  return Job.create(job, (err, favRecord) => {
    if (err) console.log('Err writing to db: ', err)
  })
}

let remove = (id) => {
  return Job.findOneAndRemove({id: id}).exec()
}

module.exports.save = save
module.exports.getFavs = getFavs
module.exports.remove = remove