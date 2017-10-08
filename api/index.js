const express = require('express')
const path = require('path')
const logger = require('morgan')
const routes = require('./routes')

const app = express()
app.use(logger('dev'))

app.use(express.static(path.join(__dirname, '../static')))

app.use(routes)
/// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.set('port', process.env.PORT || 3001)

const server = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + server.address().port)
})

module.exports = app