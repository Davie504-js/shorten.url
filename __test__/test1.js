const discord = require('discord.js');
const client = new discord.Client()

const {short} = require('./index');

client.on('ready', () => console.log(client.user.tag))

client.on('message', async (message) => {
if(message.content.startsWith('!short')) {

  const [command, ...args] = message.content.split(' ')

  if(!args[0]) message.channel.send('Please enter a url')

  const url = await short(args[0])

  message.channel.send(`${url}`)
}
}) 

client.login("Your bot token");