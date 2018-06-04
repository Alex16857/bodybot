const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'lungs') {
        const embed = new Discord.RichEmbed()
           .setTitle("How Lungs Work")
          
         
           .setImage(meme[index2])
           .setFooter("PizzaBot", "http://thecookielife.com/wp-content/uploads/2018/04/pizza-cartoon-cute-pizza-stickers-detourshirts-redbubble-space-clipart.jpg%22)
           .addField("Breathing Process", "Breathing starts at nose or mouth, you breath in from nose or mouth, and then goes down into the windpipe AKA trachea");
           .addField("Aevoli", "And then goes down into the windpipe AKA trachea, trachea divides into air passage called bronchial tubes, for lungs to perform the best the airways have to be open during the act of breathing in and out also have to be free from large amounts of mucus, bronchial tubes divide into smaller things as going through lungs called alveoli, there are over 300 million alveoli in your body, the alveoli are surrounded by a mesh of tiny blood vessels called capillaries, oxygen from the inhaled air passes through the alveoli walls and into the blood");

        message.channel.send({embed});
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
