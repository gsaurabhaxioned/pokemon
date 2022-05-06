module.exports = function(eleventyconfig) {

    eleventyconfig.addPassthroughCopy("./assets/css/");
    eleventyconfig.addWatchTarget("./assets/css/");
    eleventyconfig.addPassthroughCopy("./images");
    eleventyconfig.addWatchTarget("./images");
    eleventyconfig.addPassthroughCopy("./src/scripts");
    eleventyconfig.addWatchTarget("./src/scripts");
    return {
        dir: {
            input: "src",
            output: "_site",
            include: "_includes",
            data: "_data"
        }
    }
  }

//   var md = require('markdown-it')()
//             .use(require('markdown-it-container'), 'blog');