const Discord = require("discord.js");
const client = new Discord.Client();
const {
	JsonDatabase
} = require("wio.db");
const db = new JsonDatabase("db");
var kanal = "884845299699449907"; // SOL TARAFA HANGI KANALA MESAJIN ATILMASINI İSTİYORSANIZ O KANALIN ID'SINI GIRIN
var sahip = "880159709502513232"; // SOL TARAFA HESABINIZIN ID'SINI GIRIN

client.on("ready",()=>{
	console.log("ArdaDemr - Youtube Kanalına Ait Owo Para Kasma Botu v2");
});

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo h");
	};
},15500);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo b");
	};
},20500);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo");
	};
},10000);

client.on("message",message=>{
	if(message.channel.id==kanal){
		if(message.author.id=="408785106942164992"){
			if(message.content.includes("Beep Boop") || message.content.includes("Please DM me")){
				db.set("owodg","1");
				message.channel.send("Owo para kasma sistemi doğrulamaya takıldığı için kapatıldı. `ArdaDemr - Youtube`");
			};
		};
	};

	if(message.author.id == sahip){
		if(message.content == "!aç"){
			db.set("owodg","0");
			message.channel.send("Owo para kasma sistemi açıldı. `ArdaDemr - Youtube`");
		};
		if(message.content == "!kapat"){
			db.set("owodg","1");
			message.channel.send("Owo para kasma sistemi kapatıldı. `ArdaDemr - Youtube`");
		};
	};
});

client.login("ODgwMTU5NzA5NTAyNTEzMjMy.YTeaMw.Xc1shzrEHUGGO_VFIs4E7k1cWyo"); // SOL TARAFA HESABINIZIN TOKENINI GIRIN