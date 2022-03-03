"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importStar(require("discord.js"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ],
});

// const command = require('./command')

client.on('ready', function () {
    console.log('The bot is loading');
});
client.on('ready', function () {
    console.log('Loading 100%');
});
client.on('ready', function () {
    console.log('Bot is klaar voor gebruik');
});
client.on('messageCreate', function (msg) {
    if (msg.content === '?rooster') {
        msg.reply({
            content: 'https://sa-nijmegen.xedule.nl/',
        });
    }
});

const AntiSpam = require('discord-anti-spam');

client.on('message', (message) => antiSpam.message(message));

const antiSpam = new AntiSpam({
    warnThreshold: 5, // Amount of messages sent in a row that will cause a warning.
    muteThreshold: 10, // Amount of messages sent in a row that will cause a mute
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Wil jij godverdomme stoppen met spammen danku.', // Message that will be sent in chat upon warning a user.
    muteMessage: '{user_tag} has been muted for spamming.',// Message that will be sent in chat upon muting a user.
    maxDuplicatesWarning: 6, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesMute: 8, // Ammount of duplicate message that trigger a mute.
    ignoredPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredMembers: [], // Array of User IDs that get ignored.
    muteRoleName: "Muted", // Name of the role that will be given to muted users!
    removeMessages: false // If the bot should remove all the spam messages when taking action on a user!
    // And many more options... See the documentation.
});

client.on('message', (message) => antiSpam.message(message)); 

client.on('message', function (message) { return antiSpam.message(message); });
client.on('messageCreate', function (msg) {
    if (msg.content === '?help') {
        msg.reply({
            content: '- ?rooster',
        });
    }
});


client.on('messageCreate', function (msg) {
    if (msg.content === '?help') {
        msg.reply({
            content: '- Meer komt eraan!',
        });
    }
});

client.on('messageCreate', function (msg) {
    if (msg.content === '?kiki') {
        msg.reply({
            content: 'https://www.youtube.com/watch?v=_uPTHKobAAc&t=19s&ab_channel=PrimeOption',
        });
    }
});


client.login(process.env.TOKEN);
