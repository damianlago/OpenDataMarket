module.exports = app => {

    // Base URLS
    app.use('/api', require('./categories.routes.js'))
}