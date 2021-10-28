const inquirer = require("inquirer");

var ui = new inquirer.ui.BottomBar();

ui.log.write('something just happened.');
ui.log.write('Almost over, standby!');

ui.updateBottomBar('new bottom bar content');
