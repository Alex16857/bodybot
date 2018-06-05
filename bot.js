const Discord = require('discord.js');
const client = new Discord.Client();
var facts = [];
var lungs = ["1. Breathing starts at nose or mouth", "2. You breath in from nose or mouth", "3. And then goes down into the windpipe AKA trachea", "Trachea divides into air passage called bronchial tubes", "For lungs to perform the best the airways have to be open during the act of breathing in and out", "The lungs also have to be free from large amounts of mucus", "Bronchial tubes divide into smaller things as going through lungs called alveoli", "There are over 300 million alveoli in your body", "The alveoli are surrounded by a mesh of tiny blood vessels called capillaries", "Oxygen from the inhaled air passes through the alveoli walls and into the blood", "After absorbing oxygen blood leaves lungs and carries to heart", "The heart then pumps blood through body to provide oxygen to cells of tissues and organs", "Inhalation and exhalation are the processes the body brings in oxygen and breathe out carbon dioxide", "The process is helped by a large dome-shaped muscle under the lungs called the diaphragm", "When breathe in diaphragm contracts downward making vacuum that causes rush of fresh air into lungs", "The opposite occurs when exhaling", "The diaphragm relaxes upwards, pushing on the lungs, allowing them to deflate"];
var index = 0;
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    if (message.content === 'lung') {
        message.channel.send(lungs[index]);
        
        index++;
        
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
