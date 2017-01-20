import * as minimist from 'minimist';
import fetch from "node-fetch/index";
import * as jsb from "js-beautify";
import {writeFileSync} from "fs";

const args = minimist(process.argv.slice(2));

if(args._.length != 1) {
    console.error('Please provide version number!');
    process.exit(2);
}

const version = args._[0];

(async () => {
    let req = await fetch(`http://generals.io/generals-bundle-prod-v${version}.js`);
    if(req.status !== 200) {
        console.error('Cannot fetch generals.io engine!');
        process.exit(3);
    }
    let jsFile = await req.text();
    let formattedFile = jsb(jsFile);

    const changeset = [
        [/(case \w+\.ACTION_UPDATE:\n*\s*var \w+;)(\n*\s*)return/m, '$1$2var x;\n'],
        [/(Object\.assign\(.., \w+, \w+\);\n*)(\s*case \w+\.ACTION_LOSE:)/m, 'x = $1window.ai.applyUpdate(x);\nreturn x;\n$2'],
        [/(\w+)(\.exports = {\n\s*isConnected: (.*\n)*\s+leaveTeam: \w+\n\s+}\n*)/m, '$1$2\nwindow.gameCtrl = $1.exports;\n']
    ];

    let n = 0;
    for(const change of changeset) {
        if(!formattedFile.match(<any>change[0])) {
            console.error(`patch ${n} failed!`);
            process.exit(4);
        }
        formattedFile = formattedFile.replace(<any>change[0], <string>change[1]);
        n++;
    }

    writeFileSync("../generals.js", formattedFile, (e) => {
        console.error(e);
        process.exit(5);
    });

    console.log(`engine updated to ${version} successfully :)`);

})();
