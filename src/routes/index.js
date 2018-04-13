const khoavien = require('./khoavien')
const admin = require('./admin')
const loaidoan = require('./loaidoan')
const trangthai = require('./trangthai')
const giangvien = require('./giangvien')
const home = require('./home')

module.exports = (app) => {
  app.use('/khoavien', khoavien)
  app.use('/admin', admin)
  app.use('/loaidoan', loaidoan)
  app.use('/trangthai', trangthai)
  app.use('/giangvien', giangvien)
  app.use('/', home)
}