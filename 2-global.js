// GLOBALS Variable - No Window Object in NodeJS //

// __dirname    - display current directory name
// __filename   - display file name
// require      - function for use module (commonJS)
// module       - information about current module (file)
// process      - information about env where the program is being executed

console.log(__dirname);
console.log(__filename);

//invalid callback for setInterval Function
function showFilename(){
    return __filename
}

//allow: arrow function & anony function to callback function
setInterval(function(){
    console.log(__filename)
}, 1000);