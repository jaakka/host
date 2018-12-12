

var Discord = require('discord.js');
var botd = new Discord.Client();
domain="sandbox.jaakkagames.net:81";



const { Client, Attachment } = require('discord.js');

const client = new Client();

client.on('ready', () => {
  console.log("JaakkaGames >> Olen valmis!");
});



client.on('message', message => {
 
  const args = message.content.slice("!".length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === 'link' || command == 'levelup'){
	 
	 if (command === 'link'){
message.delete();
let oglink = args[0];
      message.channel.send(""+message.member.user.tag+" >> "+oglink);
		console.log(message.member.user.tag+' lisäsi linkin '+oglink);
  }
  if (command === 'levelup'){
  if (message.author.id=== "159985870458322944"){
    

let username = args[0];
let level = args[1];
let teksti = username+"+pääsi+"+level+"+tasolle.";
const attachment = new Attachment('http://'+domain+'/newmessagesystem/bot.php?text='+teksti+'&test=.png');
      message.channel.send(attachment);
	  
		console.log(username+" Pääsi uudelle tasolle "+level+".");
		
  }message.delete();}
  
  
  if (command === 'newvideo'){
  if (message.author.id!= "159985870458322944"){
    

let username = args[0];
let linkvideo = args[1];
let teksti = username+"+julkaisi+juuri+uuden+videon!";
const attachment = new Attachment('http://'+domain+'/newmessagesystem/bot.php?text='+teksti+'&test=.png');
      message.channel.send(attachment);
	  message.channel.send(linkvideo);
		console.log(username+" Pääsi uudelle tasolle "+level+".");
		
  }message.delete();}
  
  
  }
 else
	
 if (message.content === '!jghelp' || message.content==='!time' || message.content==='!ip' || message.content==='!help' || message.content==='!jg' || message.content==='!meme'){
 if (message.content === '!jghelp') { /*SendMessage*/
//message.author.send("Voit muokata tekstilaatikkoasi osoitteessa http://jaakkagames.000webhostapp.com/message/edit.php?user="+message.member.user.tag+"  Jos linkissä on väli nimessäsi korjaa se + merkillä! Esimerkiksi ?user=Hacker man >> ?user=Hacker+man");
secret=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		
		message.author.send('Hei '+message.member.user.tag+'! Voit muokata tekstilaatikkoasi osoitteessa http://'+domain+'/message/edit.php?key='+secret+'&user='+message.author.id +" ```muista että aina kun pyydät uutta linkkiä komennolla !jghelp vanha linkkisi vanhenee.``` Palvelun tarjoaa http://jaakkagames.net `jos sinulla on kysyttävää tai haluat ilmoittaa bugeista tai muusta voit lähettää sähköpostia tänne` support@jaakkagames.net");
		

console.log(" JaakkaGames >> Lähetin "+message.member.user.tag+":lle muokkausohjeet. Loin koodin "+secret+".");
message.delete();
}

if (message.content === '!time'){
	console.log(" JaakkaGames || "+message.member.user.tag+" >> Pyysi ajan tietoja.");
	const attachment = new Attachment('http://'+domain+'/newmessagesystem/time?test=.png');
        message.channel.send(attachment);
	message.delete();
}

if (message.content === '!meme'){
	console.log(" JaakkaGames || "+message.member.user.tag+" >> Pyysi memen.");
	const attachment = new Attachment('http://'+domain+'/newmessagesystem/meme?test=.png');
        message.channel.send(attachment);
	message.delete();
}

if (message.content === '!ip'){
	console.log(" JaakkaGames || "+message.member.user.tag+" >> Pyysi ip tietoja.");
	const attachment = new Attachment('http://'+domain+'/ip?test=.png');
        message.channel.send(attachment);
	message.delete();
}



}


else

	if(message.author.id==="458022186599448587" || message.author.id=== "159985870458322944") 
{
	/*nothing*/
	
	//if (message.author.id=== "159985870458322944"){
	  //}
	
}
	else
{
      client.user.setPresence({
        game: {
            name: client.uptime ,//message.content,
        }
    });
       message.delete();
       /*test="@"+message.member.user.tag+": "+message.content;*/
        const attachment = new Attachment('http://'+domain+'/newmessagesystem/index.php?text='+message.content +'&id='+message.author.id+'&test.png');
        message.channel.send(attachment);
		console.log(message.member.user.tag+' >> '+message.content);


}

}




);
client.login('NDU4MDIyMTg2NTk5NDQ4NTg3.Drx4Qg.KcBz1PwQHOPj4e-tGO71Y5RH848');