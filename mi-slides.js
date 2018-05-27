var cmd = require('node-run-cmd');
var path = require("path");
var fs = require('fs');
var glob = require('glob-fs')({
    gitignore: true
});
var prompt = require('prompt');

var basepath = path.resolve(__dirname);
var path_slidedecks = "slidedecks";
var fullpath_slidedecks = basepath + "/" + path_slidedecks;

var theme = "custom-themes/medieninformatik-semantic.css";
var preprocessor = "core/reveal-md-pre.js";
var script = "core/reveal-md-add-icons.js";

var reveal_command = {};
reveal_command.tool = "node node_modules/reveal-md/bin/cli.js";
reveal_command.options = "-w";
reveal_command.scripts = "--scripts " + script;
reveal_command.preprocessor = "--preprocessor " + preprocessor;
reveal_command.theme = "--theme " + theme;
reveal_command.slides = "";


var walk = function (dir) {
    var results = []
    var list = fs.readdirSync(dir)
    list.forEach(function (file) {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else if (file.match(/\.md$/)) {
            results.push(file)
        }
    })
    return results
}

var slidedecks = {};
var count = 0;

walk(fullpath_slidedecks).forEach(path => {
    var slidedeck = {};
    count++;

    slidedeck.name = path.replace(fullpath_slidedecks + "/", "");
    slidedeck.fullpath = path;
    slidedeck.relpath = slidedeck.fullpath.replace(fullpath_slidedecks, "");
    slidedeck.relpath = slidedeck.relpath.replace(/(.*)\/.*/, '$1/');
    slidedecks[count] = slidedeck;

    console.log(count + ". " + slidedeck.name);
});

console.log("\na: abbrechen\n");

/* Create Reveal Command 
-----------------------------------------------------------------------------*/
function create_command(slidedeck) {

    var c = [];
    Object.keys(reveal_command).forEach(function (element) {
        c.push(reveal_command[element]);
    });

    return c.join(" ") + path_slidedecks + "/" + slidedeck.name;
}

/* Start the prompt 
-----------------------------------------------------------------------------*/
prompt.start();
prompt.get(['id'], function (err, result) {

    if (slidedecks[result.id]) {
        var c = create_command(slidedecks[result.id]);
        cmd.run(c);
        /*const { spawn } = require('child_process');
        const child = spawn(c, {
            stdio: 'inherit',
            shell: true
        });*/
        console.log(c);

    }

});