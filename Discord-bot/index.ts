import DiscordJS, { Intents, Interaction } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
})

client.on('ready', () => {
    console.log('The bot is loading')
})


client.on('ready', () => {
    console.log('Loading 100%')
})


client.on('messageCreate', (msg) => {
    if (msg.content === '?rooster') {
        msg.reply({
            content: 'https://sa-nijmegen.xedule.nl/',
        })
    }
})

const AntiSpam = require('discord-anti-spam');

client.on('message', (message) => antiSpam.message(message));

const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    muteThreshold: 10, // Amount of messages sent in a row that will cause a mute
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
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

client.on('messageCreate', (msg) => {
    if (msg.content === '?help') {
        msg.reply({
            content: '- ?rooster',
        })
    }
})
client.on('messageCreate', (msg) => {
    if (msg.content === '?help') {
        msg.reply({
            content: '- Meer komt eraan!',
        })
    }
})

client.on('messageCreate', (msg) => {
    if (msg.content === '?kaasbroodje') {
        msg.reply({
            content: 'Lekker',
        

        })
    }
})

client.login(process.env.TOKEN)
