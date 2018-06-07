const Discord = require('discord.js');
const client = new Discord.Client();
var facts = [""];

var lungpics = ["http://www.nanotechmag.com/wp-content/uploads/2015/08/lungs.jpg", "https://spectrum.ieee.org/image/MjcyNDE4Mg.jpeg", "http://weziwezi.com/wp-content/uploads/2018/01/%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2-%D8%A7%D9%84%D8%AA%D9%86%D9%81%D8%B3%D9%8A-%D8%A7%D9%84%D8%A3%D9%83%D8%AB%D8%B1-%D8%A7%D9%86%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D9%8B.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPwkFl8VgjwCRApnHbTdP9dVv6UxC9PPyx9r31jHrKjCHwri5"];
var lungs = ["Breathing starts at nose or mouth", "You breath in from nose or mouth", "And then goes down into the windpipe AKA trachea", "Trachea divides into air passage called bronchial tubes", "For lungs to perform the best the airways have to be open during the act of breathing in and out", "The lungs also have to be free from large amounts of mucus", "Bronchial tubes divide into smaller things as going through lungs called alveoli", "There are over 300 million alveoli in your body", "The alveoli are surrounded by a mesh of tiny blood vessels called capillaries", "Oxygen from the inhaled air passes through the alveoli walls and into the blood", "After absorbing oxygen blood leaves lungs and carries to heart", "The heart then pumps blood through body to provide oxygen to cells of tissues and organs", "Inhalation and exhalation are the processes the body brings in oxygen and breathe out carbon dioxide", "The process is helped by a large dome-shaped muscle under the lungs called the diaphragm", "When breathe in diaphragm contracts downward making vacuum that causes rush of fresh air into lungs",  "The opposite occurs when exhaling", "The diaphragm relaxes upwards, pushing on the lungs, allowing them to deflate"];
var brain = ["The brain contains billions of nerve cells arranged in patterns that coordinate thought, emtion, behaviour, and sensation", "Nerves connect your brain to the rest of your body so communication can occur in split seconds", "All the parts of your brain work together. Each part of brain is responsible for a certain function like your heart rate and your mood", "The outermost layer of the cerebrum (biggest part of the brain)  is the cerebral cortex", "The frontal lobes control thinking, planning, organizing, problem solving, short-term memory and movement", "The parietal lobes interpret sensory information, such as taste, temperature and touch", "The occipital lobes process images from your eyes and link that information with images stored in memory", "The temporal lobes process information from your senses of smell, taste and sound. They also play a role in memory storage", "The cerebellum is a wrinkled ball of tissue below and behind the rest of brain it works to combine sensory information from eyes, ears and muscles to help coordinate movement", "The brainstem links the brain to the spinal cord", " It controls many functions vital to life, such as heart rate, blood pressure and breathingarea is also important for sleep", "The brainstem links the brain to the spinal cord, it controls many functions vital to life, such as heart rate, blood pressure and breathing area is also important for sleep", "Structures deep within the brain control emotions and memories. Known as the limbic system, these structures come in pairs", "The thalamus acts as a gatekeeper for messages passed between the spinal cord and the cerebral hemispheres", "The hypothalamus controls emotions. It also regulates your body's temperature and controls crucial urges — such as eating or sleeping", "The hippocampus sends memories to be stored in appropriate sections of the cerebrum and then recalls them when necessary", "Each part of this system is duplicated in the opposite half of the brain"];
var heart = ["The heart a muscle that pumps blood at the centre of your circulatory system which is network of blood vessels that delivers blood to every part of body", "Blood carries oxygen and other important nutrients all body organs need to stay healthy and to work properly", "Heart is separated into 2 pumping systems the right side and the left side", "The right side of heart receives oxygen-poor blood from veins and pumps it to lungs where it picks up oxygen and gets rid of carbon dioxide", "The left side of heart receives oxygen-rich blood from lungs and pumps it through your arteries to rest of body", "The right atrium receives oxygen-poor blood from body and pumps to right ventricle through tricuspid valve and pulmonary valve", "The left atrium receives oxygen-rich blood from lungs and pumps it to left ventricle through mitral valve"]
var ilung = 0;
var ibrain = 0;
var ilungpics = 0;
var iheart = 0;
var prefix = 'b>';
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


client.on('ready', () => {  
    console.log('I am ready!');
    shuffle(lungs);
});

client.on('message', message => {
    
    if (message.content === prefix + 'lung') {
        if(ilungpics == lungpics.length - 1){
            ilungpics = 0;
            shuffle(lungspics);
        }
        if(ilung == lung.length - 1){
            ilung = 0;
            shuffle(lungs);
        }
        const embed = new Discord.RichEmbed()
            .setTitle("Step " + ilung + 1)
            .setDescription(lungs[ilung]);
            .setColor(getRandomColor());
            .setImage(lungspics[ilungpics]);
        message.channel.send({embed});
        
        ilung++;
        ilungpics++;
  	}
});
client.on('message', message => {
    
    if (message.content === prefix + 'brain') {
        message.channel.send(brain[ibrain]);
        
        ibrain++;
        
  	}
});
client.on('message', message => {
    
    if (message.content === prefix + 'heart') {
        message.channel.send(heart[iheart]);
        
        iheart++;
        
  	}
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
