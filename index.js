const Discord = require('discord.js');

const client = new Discord.Client ();

const PREFIX = '!';



client.once('ready', () => {
    console.log('This bot is Online!')
    client.user.setActivity('Breaking Bedrock!');
})

client.on('message', message=>{

let args = message.content.substring(PREFIX.length).split(" ");

switch(args[0]){
case 'mobfarm':
    if (args[1] === 'info'){
        message.reply('\n Perimiter: Done \n Decoration: Done \n Bedrock breaking: WIP \n Farm: Not Started \n location: Nether Portal: 541, 70 Overworld: 4326, 566');
    }else{
        message.reply('invalid command');
    }
    break;
    
case 'perimiter':
        if (args[1] === 'info'){
            message.reply('\n Perimiter: Done \n Decoration: Not Started \n TBD\n Farm: Not planned \n location: Nether Portal: -323, -197 Overworld: -2965, -5411');
        }else{
            message.reply('invalid command');
        }
    break;
    
case 'slimefarm':
        if (args[1] === 'info'){
            message.reply('\n Perimiter: Done \n Decoration: Done \n Bedrock breaking: Not needed (TBD) \n Farm: Done (TBD) \n location: Nether Portal: 26, -629 Overworld: 220, -5023');
        }else{
            message.reply('invalid command');
        }
    break;
    
case 'guardianfarm':
        if (args[1] === 'info'){
            message.reply('\n Perimiter: Not Started \n Decoration: TBD \n Bedrock breaking: Not needed (TBD) \n Farm: Not Started (Temporary farm) \n location: Nether Portal:289, -178 Overworld: 2340,-1413');
        }else{
            message.reply('invalid command');
        }
    break;
    
case 'raidfarm':
        if (args[1] === 'info'){
            message.reply('\n Perimiter: Done \n Decoration: Not Started \n Bedrock breaking: (TBD) \n Farm: Done \n location: Nether Portal: -281, -197 Overworld: 141, -1579');
        }else{
            message.reply('invalid command');
        }
    break;
    
case 'icefarm':
        if (args[1] === 'info'){
            message.reply('\n Perimiter: Not Started \n Decoration: (TBD) \n Bedrock breaking: (TBD) \n Farm: Not started \n location: Nether Portal: (TBD) Overworld: (TBD');
        }else{
            message.reply('invalid command');
        }
    break;
   
case 'witherfarm':
        if (args[1] === 'info'){
            message.reply('\n Perimiter: Not started (1.16) \n Decoration: Not started \n Bedrock breaking: Not Started \n Farm: Not Started \n location: Nether (TBD)');
        }else{
            message.reply('invalid command');
        }
    break;
   
case 'mushroomcowfarm':
        if (args[1] === 'info'){
            message.reply('\n Perimiter: Not Needed \n Decoration: Not Started (El Dorado City of Gold) \n Bedrock breaking: Not Started \n Farm: Not Started \n location: Nether Portal: (TBD) Overworld: (TBD');
        }else{
            message.reply('invalid command');
        }
    break;
case 'witchfarm':
        if (args[1] === 'info'){
            message.reply('\n Perimiter: Done \n Decoration: (WIP) \n Bedrock breaking: Not Needed \n Farm: Done \n location: Nether Portal: -1, 186 Overworld: -62, 1465');
        }else{
            message.reply('invalid command');
        }
    break;
    
case 'storage':
        if (args[1] === 'info'){
            message.reply('\n Perimiter:(WIP) \n Decoration: Not Started \n Bedrock breaking: (TBD) \n Farm: Not Started \n location: Nether Portal: -539, -388  Overworld: -4328, -3104');
        }else{
            message.reply('invalid command');
        }
    break;
    
    
case 'server':
        if (args[1] === 'info'){
            message.reply('\n IP: 54.36.230.35  \n Seed:-763922862008843532 \n Server Version: 1.15.2 \n Server Mods: Carpet Mod, Multiplayer sleep \n Server location: London (UK)');
        }else{
            message.reply('invalid command');
        }
    break;
case 'clear':
    if (!args [1]) return message.reply('Error Please define command.')
    message.channel.bulkDelete(args[1]);
    break;

        }
})




client.login(process.env.token);
