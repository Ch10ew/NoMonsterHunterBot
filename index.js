const { Client, Events, GatewayIntentBits, Intents } = require('discord.js');
const { token, clientId, messageTemplate } = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, message => {
    if (message.author.id == clientId) {
        return;
    }

    console.log("MessageCreate: " + message.content);
    if (message.content.toLowerCase().indexOf("wild") >= 0) {
        message.reply(messageTemplate);
    }
});

client.login(token);
