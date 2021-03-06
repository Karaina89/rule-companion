

const db = require('quick.db');
module.exports = {
	name: 'leave-channel',
  usage: '`rcc.credits`',
	description: 'set leave message channel!',
  executableBy: "Administrator",
	execute(message, args, client) {
    const wc = new db.table('welcomeleavechannels');
    if (args[0] === undefined) {
      const channel = message.channel.id.replace(/!/g, /</g, />/g, /#/, "");
      console.log(channel);
      wc.set(`leave.${message.guild.id}`, `${channel}`);
      message.channel.send("Successfully set leave message channel to " + `#${message.channel.name}` + "!")
    } else {
      const channel = message.mentions.channels.first().id;
      wc.set(`leave.${message.guild.id}`, `${channel}`);
      message.channel.send("Successfully set leave message channel to " + `#${message.mentions.channels.first().name}` + "!")
    }
    
	},
};