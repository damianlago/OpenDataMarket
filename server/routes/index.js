module.exports = app => {

    // Base URLS
    app.use('/api', require('./categories.routes.js'))
    app.use('/api', require('./auth.routes.js'))
}