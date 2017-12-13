module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: ['test/*.spec.js'],
        browsers: ['Chrome']
    })
};