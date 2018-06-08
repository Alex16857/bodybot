const Discord = require('discord.js');
const client = new Discord.Client();
var facts = ["http://i0.kym-cdn.com/photos/images/newsfeed/001/224/377/111", "https://i.imgflip.com/207hf5.jpg", "https://i.pinimg.com/originals/9b/17/0c/9b170c3637e88b61b9efca77ab5ee1c3.jpg", "https://images3.memedroid.com/images/UPLOADED92/5a5f65794eabf.jpeg"];

var lungpics = ["http://www.nanotechmag.com/wp-content/uploads/2015/08/lungs.jpg", "https://spectrum.ieee.org/image/MjcyNDE4Mg.jpeg", "http://weziwezi.com/wp-content/uploads/2018/01/%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2-%D8%A7%D9%84%D8%AA%D9%86%D9%81%D8%B3%D9%8A-%D8%A7%D9%84%D8%A3%D9%83%D8%AB%D8%B1-%D8%A7%D9%86%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D9%8B.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPwkFl8VgjwCRApnHbTdP9dVv6UxC9PPyx9r31jHrKjCHwri5"];
var brainpics = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABUFBMVEX7+/u7u7sAAAD7vZP////8/PzAwMDBwcG6urrExMT/wJX7vZK2trb/xJlxcXHOzs6Li4t+fn7/xZ3t7e2wsLCKiopaWlp1dXWjo6OUlJROTk5VVVUUFBRHR0esrKxnZ2eampo/Pz8iIiIzMzPX19coKCh7e3scHBxCQkL/yKHl5eU2NjYNDQ3T09MAAAjd3d3KqZL/yJjdro3ruZb/zqd3X0mmiHVeUktmUUWUe1/YsJ0tIBs3Lir/wqN1Wk3stY/AmoXsvp2/oY4kMzWbi4OOb1q4kXRJOC5RR0O0h3Wed2GNenJfX08AABN4Y1IeJyvKl3ajjnrrxa2FbmbhtJ1cSEKfgXZsTEuHa1U6LCNxY1zJmYI2HxESGR/Yrp/AkHP/17yifVomHBNMMyxEO0C5pJnZv60kIRjTpHxpTTlXRk/etItcT0HtsZcNGBjSsZIJO+b1AAASRklEQVR4nO1d+0MaSbaWpmnohuJRPARfgAxgi4nyiGGiBnEjccysMTOZbKI3Nzuzd+Y6u8nM///b1jlV/VIwaujNVsuXiUEemfTnOae+86jqubkZZphhhhlmmGGGGYKPiI2v/S/5L0ZE5ZjLCsyJJ2akucFpym4m0o1CXXFhdSGZXkllZ4wJAFGRzUR+cUmZiHqyuBm593wBA6nS4mSaXEiG5u4xX4ypbK58yYaWC+VGPo3IN8qFhfqGmy/9ftLFmFqvrLmIqJYzlYSmR6OaB3o0UWkUVq13LVWy940usKmVZZunWjm9ojGSQuOhaVE9l7Z9tXG/6FLntIJ16RuFUkKfTJTDWFSrWB+av0d0qQlbGSSLzO0+x5PDVyhf4x8sRdSvfRX/EUTUnAg/yRUPUeBtOotZOn4db2tatLKAH26m7oNxRdQMXu1ixctUNFZKLrZqq0tLS/VadbGcTBch3GtXSIsWebCbD75xqVm81IWY7iEglHcvjDZWF8qZUjEW1T2U6RVU+c1vAs6W+oAvaB6q9ER5HFNuWZEs5fSoywy5dRaD7IoRdYVfZNRFVTThrIz49fDwpP9x9wphzXJFt+1Ly1XhuWRw2Yqo83CFrZjmpkpY1cbJ6NMLfPSEUkLatNs53X770ZswJhO2SeoNeGJtLqCuqGYxLpVdLhiNJTkLR/ttSkb48K9mOM5ADMNgnL2Fp87e2XQtFK2PR4vIfDaQbKnreLVp/SpVP3WoEQ7vwcPt0YA9tGEcw5PPevT0+Lmgay2nW64Icb4+F0BPFFytaLHLVD3ugC2FDTCsfeKmCtg6h7e8ZlZGByPBVyEk/DgGErUWPLbULFxmPWGFKy1mr4AnI7CrMGVUHPUskuLWA9KBWEWQONJ5xD9SsswTwvxa0KJ8ZG4VAoxFVdQrFv7oGGFjAE5IhT3RwYBSA62MHLIXetzgDDI4wU8sCraiwNZCwNhSFzhXMY9VNUfbgq5umBywP/4UXA1AOdTPRpT5pwGmtU9J2KLrJ7RRyxVb7Jv5QAV5tcIuaVVEKz3NCaqPiEGOH/UfwnpHCFv3HprCBS2T2wKDauPDN2bcoouvmsKjY2CypQCxpW7C1eVEtOKFqeo5i1TMbgghELdNk339J4nbjocYgT21uUBd2xOxP07+teOwpWFargWGrYgKa3xJWALmdbtbbWovePvsiU8gHN5wOijj4uPF6EQ5GgJ59BfOXG1oxIV1mb8jQ5x8sFplPShsoRNaWhS8hgVyAy8bQziqg+6p5XWcrFdtQkwK5MQh8p+BLb0fDUXoIgTYqqW4W0OiWAtIkI+AaljiZqBDPK4PmVWBx5EOqtHwH8rRHvO1P/a44VAWwldNwpiCNxnfsY/8QITGekM4WchWkv8AdFg98sEwLRXWvgqSFQUd2jJF8IGYXu+AVw2GwMW2teLBGvmYineZjMaXTLYKtno8yBMCKdCKEKeQgQeiYKN+w65kmdsAFB02LK7CFLLkE2JQggpi17QEKYEXql2MagQSnmdsLTB42B/iJw8P98A766mYHbYC4YgosXKa7S/nhqXOCQjM/v6I60yWIYpcJ04wx2GRjRCKySEGejI8PT58wt4Sb7NPrPVAQaSFd6Pxym9aWO4rOIb1kTh534XixYntoB/w+/f9ExQJB4YlsQjkQQYsBsqzNjhmSuQEYItZ6U0LIxY3LA0iVseVKVNLwCs7/NFOF1+NG/T8ocPhG4vDeJwA1Zws5e+njiDRSkGI8REoNixww4oy2bCxb3shWNAW5C67P25Rcv4RCHjYtYwobCvTA9P1Cf6x7+DNW2BarZQrSZTdtFTIbYr8gngLzI7jyIlJw6bZZgwR8xTWtF1qu1x49Pbx8tkrE2U9W/6I+2O/MD9EZ7VycygFSp71RFRYs7hhaXluKQP7mi1BzgsyZLCjOIUHoAQUglDtj573/3Qc2ADd+oyEHT8M6WBaci+Iqs4uISPiSsFFFiaFhrfSh3nPiUOW431YGFS2nCfoBugJwpy4wNUDlw9yp4gqxPSE+Nk3BVkGmMao3396Tj1kxelz5eFrh6HBwPZJJKvVs8jFFOhXA4rOGw9EMSNal7xWE4mAILUaX+wxC/HKp3gYa1RckXrooiZ14j8TFn/7ZFUDD4/Y21+YwhZNkGY/xHFZFJYV0qB1JDNZ6IVCOGII/pGLB/qTWOl4hoONHHRLRp4tWbGEvC/YbBMI/2dsLYByPHBVbvO6oN2DhL9/XeKghXMN1k8e4vuf/PrxasFWnhO27BkX2yf9fv/k7fHotMuMi1IwOF7je9wWjke4uDobjUbYHmOGxUvRCYuskORBS2VuVxU/eg3Uqcm05gmzju5Jf9Q7guICvXiqePBwY7d/CJkP6TD7ewWGRCmzN6HqLfwKisJDVrQlddBCRTovvDC6zAypdwZBi0lO0qY9piyrnXfKWHwcgs11OqYx6C9tsLSRsbX1//bL9d+Y/xLaZQ9tw4IEoSYvWTi1JhRpSN8AXQAp8pHJMmRiHru4+Uvh++8f775304V5UdxaCqDATOn+R8iC3p9tmUacfjrcgYzQbtpqzOeXJSYL5hEsiQ3EbVMTItXu6Hx0/NKm5cetIYw3MHS7p6PtF2fwHqXJKzQ7NncUZD01u12TQOdMtBDt1RDJWpSYrJqdF4ZCIBpZKBq6MmTEt0PUD3H8z+ATDl3oUbwyuH5QznA5cGdJPFohCh7LKkhLVmSOXUxDcy5F6TI2XlfdVB0NiVONd/ToHvPZqikKDD/geMhrW4BZvX4Feh+VUDDIwhpp0Yrvi5hDM1Lo6DF7/q/oa0xmEtTupxdCrcMEDQtVQAYURYGsfZQIrwh72uZ0b0dJ/vDG7YWSxyyM7/bCzh6/FVZEzKHZAxp+FNUXqLq/7bC4ZXGB9DBBhhXmoUFq0IcNk/MPH7pMumKDbGDCe8p6UMjK2xUHrq/3hWEwzuLtPrM00c4Ji95N/eRC1GHiIAq24d2dN6+Z0PgbBC2Cimx3myBbBqYBWswhKwljD1/7ou8KtcCWJ0uSwsLYFdzEQQYAG8RqyduVvhPKCzfEIgujGdDU6tH/EW/aDrMkcQ+oyziGhapX4pi1qihJK2SxYLzrLt8JP7OSmW1rm+E+zxYv3C9jntgyiV2FVpQDNLOqE7F4VCzLShYuhnnNEQ7bjkRgTsRynaFdYoib5nBrGwJ/34SMmn7LHj7xkFXtxYnZ7WzzyYc66K+mmytMEdLSkgXJTkVzvPATtLbCgwG3neHW0KUXQA4YGMf2Tx4dHoLifOnU3gnLjL6HABdni8O+Nclc9wyIh3S2FqzISpaaUuyeMXbBnj59jvW/p8hW3IhfGokMhxU3DmwnBTNUXvDSFrHH/wopD1dY4k9JS1ZMsWsCWtpNA71MEkiBPeaabnX/zJbscQrxf8sA/UWswdJ60eODohsm7XypWnRkVtQ9z/6XMWQZ3x0z3Y4OVl9bW3784gm1nNDA9mKtxxSpuf0L/ytalVTIyxXKrKashsXJEiGLN3aOzl5sHxwcDK9yBRMN/S1gdGmrZ/ZMqB+L3g/poC39xnLGnwXl5Vzq6p4xyZUD84sNQdYqzKL1TNgJYBiXe6bASF9Y3cuhyHiEB7YHvDb4qxk/5rtVWiVdv2xVaLwFmWt/IOAFWUK+i9VvDFlW2er/9ryvivnRl7+ZQrYujzMqTtaizF1WGPjjZKFwoJdIIpS6VkNjixnf+22WV7usz+DFhear3x7ZVI1nCshakJosO8BDOHlueskyLt7tdNzf0+Gw16aDiw8Mp50hVgP57OjZPzhVC9dQxS2rIS9ZoK34sBlLcTd6YQ+gkNB3FfSMNvl0/Nx1iMO75/3+766ddEDVmFDlkMV+IlV5yYKmIc5zowQaeSUogdzm2wFhFgQVUjI8dtoRY5CMXU+VWHGlnaPhtT9+JezRDvGQJUJ68+jpiOU5F/3rmCoUdf1aohBQPZM2aGEinXYGb4/bdtCCCI77TxCPPghVvpSs5EKpVIpRkyuW8plGozGfruRS+oQF0Asddl9LOw+vLtklGg24+BevTxESPv1wYYTNJ0ce+1ksoiqIiXKepmnR6C1OfeACpSXr1JHK1qcFXvzDgaB3lOV2g59/XwVqOvSR4s6BGqEbeNr1AFkqrS4FCW/NbeA88bF5au1HVc4HLqaYKr+FBU1GU96whTUauyEN9uSMNSxT0+o/1xsJlr9cv9TdDBpu7pezpuXtG+YsntaeHfw5NOPx4cGrV/C9Hr2egtuwBbYs6SgN7BewhmhCUTynQHk27MGcKK96toGtlWuv/3bgp2NIuTMFNbw9EoRjkv9LxaQ7fsWqXuK6q78tdNylLqM2xSp8xt5DDiviIXa/jMEIhmQM6A6uffEq6AEuiVUZBYS6xlY655AP2D9HYRYSdsXBtOQ/puyFyBYctSHjZgv0Q5sNNK1jOuL1lmOKG74y0zUsAE5tyccW7sss26sdyIeNX/iaWDaxz7p2XdXlbuACQsLWBc7BO9MIJVs+HJhxnGubhry6DFwSJSzH4wY6J8RzslZfPOkZ8TCUHTLT01guYEotoTZVq4wcJ5UBrs7+zqdFYbx0ZSpZzhXgCYzyFSBUqDekbUpQa33XNsLsl3tP15SBJixhAQLOdKg7zobBt39KiNFmgnRp+kshh74opX7A8b+SY1p4ZIXSfPoz6IaCLyELAfphUza2IlACrDvuphddpZmKT27IHBH+N8uqbAICz3DNO6xoelocY+uMffsALKDpsoUtNK0lzwGuqVy6XGutpX3kKoSOWJaNLB61Gl6H0/RUalIffkqAqZq6dGThgnilEDOV0uh1XMF5PqsSkqV7MkS/AU2h2EoGNnLI2M5Xl30oxUxgSitmClWrbZT92ld+B2CG6OfS53CVd7XXFuU88NV1KpS/XFVspmoZWU+Mx/pyzf+ohafdLJXFfY1kvX0W7izP+25aUIDPSH/HLH6Und9c4dRcAA4dw0MS5/02LZzRakjPFiY9020RjmULRgfnpWdLDflbkhFkYeE6I6VkcAOVafHz1/tl4GcRJ2RnC88MrvquTPW8pI0wL1A+lHyXDzjtkJPdtHACyX/5gK1cWef/HGAzP+m7jodpX2m3/zqAE0Ssk879ghZN1IJzwKu/1QetVJN1QOsycPTB1+oDqlIZZ2iuAlPEuq9RS5FzKGQcMEVs+GhaeD6QvPvKPYjAwRi+pojYxA1AfAdg82LBT0eE7qp8Uw7jAQfU+Brj4dxgCWezxgJjfNM/srDuEATlgOBlQN8cMaEEIdmxEPFVx2t1RdmQvubgAHX8sj86Hrbgy7kbZRLwRE5fYnw0EOUZD7BW0/QjaoHGkvYIrQnAISQfprrhuDGJj3WdABj49mG/QCIwmY4bGOOnPoSEkw4BWgkt4KTItFNESKJbgTMsce/f8pTlAzTvA1BPvgr3nUCmBT4W8rWvzAfgENKUmxdwV6diEMniUWuqXIXgQMYHwSTrwbQntvR5mU9IvB5qS1Fqdw7x4qAaF3DKQfohhwnAg9vuVnzQtJVSo15bKyST8wwZwHwrOJ2Kq8Aq4F3qWtFcsqmMxXIAFakAnCdyBz/EIduxKEo/xDYZ6Ie3llpYsVKWFjP5XK6Szs8nOeZLqbkAc8UHtm47goR9wcKmOgYBpooBbhRZvi1ZG0zLBp2YcQBduna7CI+FhcD0bm4DPHz5dmRB+hdYfXAtcEPw7UqAcCuMYKZ/n4Nz6uuNEQtkLfQmcJ/6ekPIfnfMuyNya7KC1Zu/FTynTd6MrHwwq+w3AHbEbrUbWO7Dpr8IOCLymXwnlnDv00c3DFR3/sbAOvy1mXQsoa+rWdfZ5jnl3kqH5rWWFYslHmTVSERV16MJOJ6a/YY7hwSv53wDYEFrYqs1ltA2sY4QAbrmsuubgPXCfQ1a2LMY2zxkRpXKurPliADuaAnElPttEVEVpbmRu1J3sI3qKviacB/J4mfcLXnYYjYVY5FqAh2YIClynm3xxcAT45WSuJ0AC+CJ0IPsxIpnhHP14B5WsxCcrXo+Bl0t/cFmduLRFSzKZxu4Ikh7uMWXIoL39YN9BOXFTOIbZlWTMJdCqpTWfaVqDtjKXurWrFaXC4VyI11ZgRulIBKV5Jp4tfC1/8FfF4yu0oQ+4FXk7mu8ssHC0WaxvPpZpmrFQHe7bgyMSuupBNyaaL68UK1fJqqeLG5CU2dGFgekNa4mYHb9m5SOSKXWOZszjAfmNg51M4OaYYYZZrgb/g1SuMRGizhzLAAAAABJRU5ErkJggg==", "https://pixel.nymag.com/imgs/daily/selectall/2017/03/15/15-exploding-brain-meme.w710.h473.jpg", "https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2014/05/20/23/web-brain-getty-c-DONTUSEAGAIN.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonkRoPyeRp3IgeKF8k741aJZ5fCTXQ3BuNZf26pEi4rbLIeC_"]
var brainmemes = ["http://i0.kym-cdn.com/photos/images/newsfeed/001/224/377/111"]
var lungs = ["Breathing starts at nose or mouth", "You breath in from nose or mouth", "And then goes down into the windpipe AKA trachea", "Trachea divides into air passage called bronchial tubes", "For lungs to perform the best the airways have to be open during the act of breathing in and out", "The lungs also have to be free from large amounts of mucus", "Bronchial tubes divide into smaller things as going through lungs called alveoli", "There are over 300 million alveoli in your body", "The alveoli are surrounded by a mesh of tiny blood vessels called capillaries", "Oxygen from the inhaled air passes through the alveoli walls and into the blood", "After absorbing oxygen blood leaves lungs and carries to heart", "The heart then pumps blood through body to provide oxygen to cells of tissues and organs", "Inhalation and exhalation are the processes the body brings in oxygen and breathe out carbon dioxide", "The process is helped by a large dome-shaped muscle under the lungs called the diaphragm", "When breathe in diaphragm contracts downward making vacuum that causes rush of fresh air into lungs",  "The opposite occurs when exhaling", "The diaphragm relaxes upwards, pushing on the lungs, allowing them to deflate"];
var brain = ["The brain contains billions of nerve cells arranged in patterns that coordinate thought, emtion, behaviour, and sensation", "Nerves connect your brain to the rest of your body so communication can occur in split seconds", "All the parts of your brain work together. Each part of brain is responsible for a certain function like your heart rate and your mood", "The outermost layer of the cerebrum (biggest part of the brain)  is the cerebral cortex", "The frontal lobes control thinking, planning, organizing, problem solving, short-term memory and movement", "The parietal lobes interpret sensory information, such as taste, temperature and touch", "The occipital lobes process images from your eyes and link that information with images stored in memory", "The temporal lobes process information from your senses of smell, taste and sound. They also play a role in memory storage", "The cerebellum is a wrinkled ball of tissue below and behind the rest of brain it works to combine sensory information from eyes, ears and muscles to help coordinate movement", "The brainstem links the brain to the spinal cord", " It controls many functions vital to life, such as heart rate, blood pressure and breathingarea is also important for sleep", "The brainstem links the brain to the spinal cord, it controls many functions vital to life, such as heart rate, blood pressure and breathing area is also important for sleep", "Structures deep within the brain control emotions and memories. Known as the limbic system, these structures come in pairs", "The thalamus acts as a gatekeeper for messages passed between the spinal cord and the cerebral hemispheres", "The hypothalamus controls emotions. It also regulates your body's temperature and controls crucial urges — such as eating or sleeping", "The hippocampus sends memories to be stored in appropriate sections of the cerebrum and then recalls them when necessary", "Each part of this system is duplicated in the opposite half of the brain"];
var heart = ["The heart a muscle that pumps blood at the centre of your circulatory system which is network of blood vessels that delivers blood to every part of body", "Blood carries oxygen and other important nutrients all body organs need to stay healthy and to work properly", "Heart is separated into 2 pumping systems the right side and the left side", "The right side of heart receives oxygen-poor blood from veins and pumps it to lungs where it picks up oxygen and gets rid of carbon dioxide", "The left side of heart receives oxygen-rich blood from lungs and pumps it through your arteries to rest of body", "The right atrium receives oxygen-poor blood from body and pumps to right ventricle through tricuspid valve and pulmonary valve", "The left atrium receives oxygen-rich blood from lungs and pumps it to left ventricle through mitral valve"]
var ilung = 0;
var ibrain = 0;
var ilungpics = 0;
var iheart = 0;
var ibrainpics = 0;
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
shuffle(brainpics);
shuffle(lungpics);
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
    
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'lungs')) {
      if(ilungpics == lungpics.length - 1){
         
          ilungpics = 0;
      } 
      if(ilung == lungs.length - 1){
          shuffle(lungs);
          ilung = 0;
      } 
      const embed = new Discord.RichEmbed()
           .setTitle("The Lungs")
           .setColor(getRandomColor())
           .setDescription(lungs[ilung])
           .setImage(lungpics[ilungpics])
           
      message.channel.send({embed});
      ilungpics++;
      ilung++;
    }
});
client.on('message', message => {
    
    if (message.content === prefix + 'brain') {
       if(ibrainpics == brainpics.length ){
          
          ibrainpics = 0;
      } 
      if(ibrain== brain.length - 1){
          shuffle(brain);
          ibrain = 0;
      } 
      const embed = new Discord.RichEmbed()
           .setTitle("The Brain")
           .setColor(getRandomColor())
           .setDescription(brain[ibrain])
           .setImage(brainpics[ibrainpics])
           
      message.channel.send({embed});
      ibrainpics++;
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
