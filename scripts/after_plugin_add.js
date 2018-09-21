
var androidHelper = require('./lib/android-helper');
var iosHelper = require("./lib/ios-helper");
var utilities = require("./lib/utilities");

module.exports = function(context) {

    var platforms = context.opts.cordova.platforms;

    // Modify the Gradle build file to add a task that will upload the debug symbols
    // at build time.
    if (platforms.indexOf("android") !== -1) {
      console.log("* * * * * * * * * * * * * * * * * * * * *");
      console.log("* * * * A  N  D  R  O  I  D * * * * * * *");
      console.log("* * * * *  H  O  O  K  S  * * * * * * * *");
      console.log("* * * * * * * * * * * * * * * * * * * * *");
        androidHelper.restoreRootBuildGradle();
        androidHelper.modifyRootBuildGradle();
    }

    // Add a build phase which runs a shell script that executes the Crashlytics
    // run command line tool which uploads the debug symbols at build time.
    if (platforms.indexOf("ios") !== -1) {
      console.log("* * * * * * * * * * * * * * * * * * * * *");
      console.log("* * * * *  *  I  O  S  * * * * * * * * *");
      console.log("* * * * *  H  O  O  K  S  * * * * * * * *");
      console.log("* * * * * * * * * * * * * * * * * * * * *");
        var xcodeProjectPath = utilities.getXcodeProjectPath(context);
        iosHelper.removeShellScriptBuildPhase(context, xcodeProjectPath);
        iosHelper.addShellScriptBuildPhase(context, xcodeProjectPath);
    }
};
