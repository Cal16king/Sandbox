module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("_src/_includes/");
    eleventyConfig.addPassthroughCopy("./_src/css/");
    eleventyConfig.addPassthroughCopy("./_src/main.js");
    //eleventyConfig.addNunjucksFilter('getTopicKeys', require('./_src/parsekeys.js').getTopicKeys);

    return{
        dir: {
            input: "_src",
            output: "_site"
        },
    };
};