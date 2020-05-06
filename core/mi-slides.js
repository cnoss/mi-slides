const
    cmd = require('node-run-cmd'),
    path = require("path"),
    //glob = require("glob"),
    prompt = require('prompt'),
    fs = require('fs-extra')

const basepath = path.resolve(__dirname) + "/..";
const path_slidedecks = "slidedecks";
const fullpath_slidedecks = basepath + "/" + path_slidedecks;
const static = "--static";
const staticDefaultOutput = "static";
const staticDirs = "custom-themes";
const staticAdditionalContent = ["examples", "images", "assignments", "links", "img"];

const theme = "custom-themes/medieninformatik-semantic.css";
const preprocessor = "core/reveal-md-pre.js";
const script = "core/reveal-md-add-icons.js";

let params = process.argv[3];

const reveal_command = {};
reveal_command.tool = "node node_modules/reveal-md/bin/reveal-md.js --highlight-theme Vs";
reveal_command.options = "-w";
reveal_command.scripts = "--scripts " + script;
reveal_command.preprocessor = "--preprocessor " + preprocessor;
reveal_command.theme = "--theme " + theme;
//reveal_command.static = (params === "static") ? " " + "--static-dirs=" + staticDirs + " " + static + " " + staticDefaultOutput : "";
reveal_command.static = (params === "static") ? " " + static + " " + staticDefaultOutput : "";
reveal_command.slides = "";


let walk = function (dir) {
    let results = []
    let list = fs.readdirSync(dir)
    list.forEach(function (file) {
        file = dir + '/' + file
        let stat = fs.statSync(file)

        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else if (!file.match(/\/assets\//) && file.match(/\.md$/)) {
            results.push(file)
        }
    })
    return results
}

let slidedecks = {};
let count = 0;

walk(fullpath_slidedecks).forEach(path => {
    let slidedeck = {};
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
    
    if(reveal_command["static"]){
      reveal_command["static"] += slidedeck.relpath
      reveal_command["options"] = "";
    }

    let c = [];
    Object.keys(reveal_command).forEach(function (element) {
        c.push(reveal_command[element]);
    });

    return c.join(" ") + path_slidedecks + "/" + slidedeck.name;
}


/* Copy Additional Content to static Folder
-----------------------------------------------------------------------------*/
function copyAdditionalContent(slidedeck) {

    let params = {};
    const path = slidedeck.fullpath.substring(0, slidedeck.fullpath.lastIndexOf("/"));

    staticAdditionalContent.forEach(function (folder) {
        folder = escape(folder);
        params.src =  path + "/" + folder;
      params.target = staticDefaultOutput + slidedeck.relpath + folder;
      console.log(params.src +"->"+params.target)
        if(fs.existsSync(params.src)){ fs.copySync(params.src, params.target); }
        
    });
}



/* Start the prompt 
-----------------------------------------------------------------------------*/
prompt.start();
prompt.get(['id'], function (err, result) {

    if (slidedecks[result.id]) {
        let c = create_command(slidedecks[result.id]);
        console.log(c);

        cmd.run(c).then(function (exitCodes) {
            console.log("ok");
          if (c.match(/static/)) {
            console.log("Create Static Version … ");
                copyAdditionalContent(slidedecks[result.id]);    
            }
            
        }, function (err) {
            console.log('Command failed to run with error: ', err);
        });

    }
});