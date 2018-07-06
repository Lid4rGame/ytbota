const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("NDY0Mjg1NzY2MzYxNjc3ODI0.Dh84dA.0AASRoL-sEIGFQQCmXCTVeKPcRU");

bot.on('message', message => {
    let responseObject = {
        "!Staff" : "Nossos Staffs gerais sao Master.G, Gerente.G, Admin.G Mod.G",
        "Qual site do servidor?" : "Ainda não existe mas obrigado por estar corioso!",
};

if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}

});         