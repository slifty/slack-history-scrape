var Bot = require('slackbots');
var jsonfile = require('jsonfile')

// setup
var bot_settings = {}
var admin_settings = {}
var config_file = 'config.json';
obj = jsonfile.readFileSync(config_file);
bot_settings = obj['bot_settings'];
admin_settings = obj['admin_settings'];

var admin_bot = new Bot(admin_settings, false);
var bot = new Bot(bot_settings, true);

console.log("bot started");