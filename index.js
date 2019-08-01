
/**
* Copyright 2017-present, Facebook, Inc. All rights reserved.
*
* This source code is licensed under the license found in the
* LICENSE file in the root directory of this source tree.
*
* Messenger Platform Quick Start Tutorial
*
* This is the completed code for the Messenger Platform quick start tutorial
*
* https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start/
*
* To run this code, you must do the following:
*
* 1. Deploy this code to a server running Node.js
* 2. Run `npm install`
* 3. Update the VERIFY_TOKEN
* 4. Add your PAGE_ACCESS_TOKEN to your environment vars
*
*/

'use strict';
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
// Imports dependencies and set up http server
const
request = require('request'),
express = require('express'),
body_parser = require('body-parser'),
app = express().use(body_parser.json()); // creates express http server

app.set('view engine', 'ejs');

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())


//const nodeyourmeme = require('nodeyourmeme');


//app.use('/img', express.static(__dirname + '/Images'));
//app.use('/img', express.static(__dirname + '/images'));

//var publicDir = require('path').join(__dirname,'/public');
//app.use(express.static(publicDir));

app.use(express.static('public'))

//const myModule = require('./pokemonManager.js');

//import pokemonManager from 'pokemonManager';

var currentPokemon = "current";

//console.log(myModule.testFunction());





/*
var map = new Map([['100000' ,["bulbasaur", "ivysaur"]]]);
console.log(map.get(100000));

map.set('500', ['bulbasaur']);*/

var currentMap = new Map([['100000' ,"bulbasaur"]]);
console.log(currentMap.get(100000));

//map.set('2674269505918135', ["bulbasaur", "venusaur"]);






























const MongoClient = require('mongodb').MongoClient;
const uri = process.env.URI;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


var mongoose = require('mongoose');
mongoose.connect(uri, {useNewUrlParser: true});
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected!')
});

var pokedexSchema = new mongoose.Schema({
  id: String,
  pokemon: Array
});

var Pokedex = mongoose.model('Pokedex', pokedexSchema);


var currentSchema = new mongoose.Schema({
  id: String,
  currentPokemon: String
});

var Current = mongoose.model('Current', currentSchema);

var tradeSchema = new mongoose.Schema({
  id: String,
  tradingPokemon: String
});

var Trade = mongoose.model('Trade', tradeSchema);


class newMap {

  constructor() {

  }

  has(id){
    //return true;
    id = String(id);
    let boolean;
    var query = Pokedex.findOne({id: id}, function(err, data){
      if(err){
        boolean = false;
      }
      console.log("got data!")
      console.log(data)

      if (data.length == 0){
        boolean = false
      }
      boolean =  true;
    });

    var promise = query.exec();




    return boolean
  }

  get(id){
    id = String(id);
    id = String(id);
    Pokedex.findOne({id: id}, function(err, data){
      if(err){
        return undefined;
      }
      console.log("got data!")
      console.log(data)
      return data.pokemon;
    });
  }

  set(id, array){
    id = String(id);

    if (this.has(id)) {
      this.updateTrainerArray(id, arr)
    } else {
      var pokedex = new Pokedex({
        id: id,
        pokemon: array
      });

      pokedex.save(function(err, updatedPokedex) {
        if(err){
          console.log(err);
          return;
        }
        console.log(updatedPokedex);
        console.log('successfully saved')
      });
    }
  }

  getTrainerArray(id) {
    id = String(id);
    Pokedex.findOne({id: id}, function(err, data){
      if(err){
        return undefined;
      }
      console.log("got data!")
      console.log(data)
      return data.pokemon;
    });
  }

  updateTrainerArray(id, arr) {
    id = String(id);
    Pokedex.findOneAndUpdate({id: id}, {$set:{pokemon:arr}}, {new: true}, (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }

      console.log(doc);
    });
  }

}

var map = new newMap();



//console.log(getTrainerArray('2674269505918135'));







//const request = require('request');
/*
var poop = 'catch probopass.   .'
var substring = poop.substring(6).trim();

var regex = /[.,\s]/g;

substring = substring.replace(regex, '');
console.log(substring)
*/



function catchPokemon(id) {
  //var pc;

  let pc = [];

  Pokedex.findOne({id: id}, function(err, data){
      if(err){
        
      }

      console.log("got data!")
      console.log(data)
      if (pc && pc.length != 0) {
        pc = data.pokemon;
      } 

      if (data) {
        pc = data.pokemon;
        pc.push(currentMap.get(id).charAt(0).toUpperCase() + currentMap.get(id).slice(1) )
        Pokedex.findOneAndUpdate({id: id}, {$set:{pokemon:pc}}, {new: true}, (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }

      console.log(doc);
    });

      } else {
        var pokedex = new Pokedex({
        id: id,
        pokemon: pc
      });
        pokedex.save(function(err, updatedPokedex) {
        if(err){
          console.log(err);
          return;
        }
        console.log(updatedPokedex);
        console.log('successfully saved')
      });
      }
      



      
      
    });





/*
  if (map.has(id)) {
    pc = map.get(id);
    //pc.push(currentPokemon);
  } else {
    pc = []
  }
*/
  //change this back to just "currentPokemon" if you wanna make easy duplicates
  //if (!pc.includes(currentMap.get(id).charAt(0).toUpperCase() + currentMap.get(id).slice(1))) {
  
  //}
/*
  console.log('here is PC')
  console.log(pc)
  var pokedex = new Pokedex({
        id: id,
        pokemon: pc
      });

  Pokedex.findOne({id: id}, function(err, data){
      if(err){
        
      }
      if (data) {
        
      } else {
        pokedex.save(function(err, updatedPokedex) {
        if(err){
          console.log(err);
          return;
        }
        console.log(updatedPokedex);
        console.log('successfully saved')
      });
      }
*/
/*
      console.log("got data!")
      console.log(data)
      if (pc && pc.length != 0) {
        pc = data.pokemon;
      } */
      
   // });

      

  //map.set(id, pc);
  console.log(map)
  resetCurrentPokemon(id);
}




//old adding
//catchPokemon('100000');
//console.log(map.get(100000))


function resetCurrentPokemon(id) {
  var number = Math.floor(Math.random() * 803);
  var pokemon = ["Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch’d",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
  "Chikorita",
  "Bayleef",
  "Meganium",
  "Cyndaquil",
  "Quilava",
  "Typhlosion",
  "Totodile",
  "Croconaw",
  "Feraligatr",
  "Sentret",
  "Furret",
  "Hoothoot",
  "Noctowl",
  "Ledyba",
  "Ledian",
  "Spinarak",
  "Ariados",
  "Crobat",
  "Chinchou",
  "Lanturn",
  "Pichu",
  "Cleffa",
  "Igglybuff",
  "Togepi",
  "Togetic",
  "Natu",
  "Xatu",
  "Mareep",
  "Flaaffy",
  "Ampharos",
  "Bellossom",
  "Marill",
  "Azumarill",
  "Sudowoodo",
  "Politoed",
  "Hoppip",
  "Skiploom",
  "Jumpluff",
  "Aipom",
  "Sunkern",
  "Sunflora",
  "Yanma",
  "Wooper",
  "Quagsire",
  "Espeon",
  "Umbreon",
  "Murkrow",
  "Slowking",
  "Misdreavus",
  "Unown",
  "Wobbuffet",
  "Girafarig",
  "Pineco",
  "Forretress",
  "Dunsparce",
  "Gligar",
  "Steelix",
  "Snubbull",
  "Granbull",
  "Qwilfish",
  "Scizor",
  "Shuckle",
  "Heracross",
  "Sneasel",
  "Teddiursa",
  "Ursaring",
  "Slugma",
  "Magcargo",
  "Swinub",
  "Piloswine",
  "Corsola",
  "Remoraid",
  "Octillery",
  "Delibird",
  "Mantine",
  "Skarmory",
  "Houndour",
  "Houndoom",
  "Kingdra",
  "Phanpy",
  "Donphan",
  "Porygon2",
  "Stantler",
  "Smeargle",
  "Tyrogue",
  "Hitmontop",
  "Smoochum",
  "Elekid",
  "Magby",
  "Miltank",
  "Blissey",
  "Raikou",
  "Entei",
  "Suicune",
  "Larvitar",
  "Pupitar",
  "Tyranitar",
  "Lugia",
  "Ho-Oh",
  "Celebi",
  "Treecko",
  "Grovyle",
  "Sceptile",
  "Torchic",
  "Combusken",
  "Blaziken",
  "Mudkip",
  "Marshtomp",
  "Swampert",
  "Poochyena",
  "Mightyena",
  "Zigzagoon",
  "Linoone",
  "Wurmple",
  "Silcoon",
  "Beautifly",
  "Cascoon",
  "Dustox",
  "Lotad",
  "Lombre",
  "Ludicolo",
  "Seedot",
  "Nuzleaf",
  "Shiftry",
  "Taillow",
  "Swellow",
  "Wingull",
  "Pelipper",
  "Ralts",
  "Kirlia",
  "Gardevoir",
  "Surskit",
  "Masquerain",
  "Shroomish",
  "Breloom",
  "Slakoth",
  "Vigoroth",
  "Slaking",
  "Nincada",
  "Ninjask",
  "Shedinja",
  "Whismur",
  "Loudred",
  "Exploud",
  "Makuhita",
  "Hariyama",
  "Azurill",
  "Nosepass",
  "Skitty",
  "Delcatty",
  "Sableye",
  "Mawile",
  "Aron",
  "Lairon",
  "Aggron",
  "Meditite",
  "Medicham",
  "Electrike",
  "Manectric",
  "Plusle",
  "Minun",
  "Volbeat",
  "Illumise",
  "Roselia",
  "Gulpin",
  "Swalot",
  "Carvanha",
  "Sharpedo",
  "Wailmer",
  "Wailord",
  "Numel",
  "Camerupt",
  "Torkoal",
  "Spoink",
  "Grumpig",
  "Spinda",
  "Trapinch",
  "Vibrava",
  "Flygon",
  "Cacnea",
  "Cacturne",
  "Swablu",
  "Altaria",
  "Zangoose",
  "Seviper",
  "Lunatone",
  "Solrock",
  "Barboach",
  "Whiscash",
  "Corphish",
  "Crawdaunt",
  "Baltoy",
  "Claydol",
  "Lileep",
  "Cradily",
  "Anorith",
  "Armaldo",
  "Feebas",
  "Milotic",
  "Castform",
  "Kecleon",
  "Shuppet",
  "Banette",
  "Duskull",
  "Dusclops",
  "Tropius",
  "Chimecho",
  "Absol",
  "Wynaut",
  "Snorunt",
  "Glalie",
  "Spheal",
  "Sealeo",
  "Walrein",
  "Clamperl",
  "Huntail",
  "Gorebyss",
  "Relicanth",
  "Luvdisc",
  "Bagon",
  "Shelgon",
  "Salamence",
  "Beldum",
  "Metang",
  "Metagross",
  "Regirock",
  "Regice",
  "Registeel",
  "Latias",
  "Latios",
  "Kyogre",
  "Groudon",
  "Rayquaza",
  "Jirachi",
  "Deoxys",
  "Turtwig",
  "Grotle",
  "Torterra",
  "Chimchar",
  "Monferno",
  "Infernape",
  "Piplup",
  "Prinplup",
  "Empoleon",
  "Starly",
  "Staravia",
  "Staraptor",
  "Bidoof",
  "Bibarel",
  "Kricketot",
  "Kricketune",
  "Shinx",
  "Luxio",
  "Luxray",
  "Budew",
  "Roserade",
  "Cranidos",
  "Rampardos",
  "Shieldon",
  "Bastiodon",
  "Burmy",
  "Wormadam",
  "Mothim",
  "Combee",
  "Vespiquen",
  "Pachirisu",
  "Buizel",
  "Floatzel",
  "Cherubi",
  "Cherrim",
  "Shellos",
  "Gastrodon",
  "Ambipom",
  "Drifloon",
  "Drifblim",
  "Buneary",
  "Lopunny",
  "Mismagius",
  "Honchkrow",
  "Glameow",
  "Purugly",
  "Chingling",
  "Stunky",
  "Skuntank",
  "Bronzor",
  "Bronzong",
  "Bonsly",
  "Mime Jr.",
  "Happiny",
  "Chatot",
  "Spiritomb",
  "Gible",
  "Gabite",
  "Garchomp",
  "Munchlax",
  "Riolu",
  "Lucario",
  "Hippopotas",
  "Hippowdon",
  "Skorupi",
  "Drapion",
  "Croagunk",
  "Toxicroak",
  "Carnivine",
  "Finneon",
  "Lumineon",
  "Mantyke",
  "Snover",
  "Abomasnow",
  "Weavile",
  "Magnezone",
  "Lickilicky",
  "Rhyperior",
  "Tangrowth",
  "Electivire",
  "Magmortar",
  "Togekiss",
  "Yanmega",
  "Leafeon",
  "Glaceon",
  "Gliscor",
  "Mamoswine",
  "Porygon-Z",
  "Gallade",
  "Probopass",
  "Dusknoir",
  "Froslass",
  "Rotom",
  "Uxie",
  "Mesprit",
  "Azelf",
  "Dialga",
  "Palkia",
  "Heatran",
  "Regigigas",
  "Giratina",
  "Cresselia",
  "Phione",
  "Manaphy",
  "Darkrai",
  //"Shaymin",
  "Arceus",
  "Victini",
  "Snivy",
  "Servine",
  "Serperior",
  "Tepig",
  "Pignite",
  "Emboar",
  "Oshawott",
  "Dewott",
  "Samurott",
  "Patrat",
  "Watchog",
  "Lillipup",
  "Herdier",
  "Stoutland",
  "Purrloin",
  "Liepard",
  "Pansage",
  "Simisage",
  "Pansear",
  "Simisear",
  "Panpour",
  "Simipour",
  "Munna",
  "Musharna",
  "Pidove",
  "Tranquill",
  "Unfezant",
  "Blitzle",
  "Zebstrika",
  "Roggenrola",
  "Boldore",
  "Gigalith",
  "Woobat",
  "Swoobat",
  "Drilbur",
  "Excadrill",
  "Audino",
  "Timburr",
  "Gurdurr",
  "Conkeldurr",
  "Tympole",
  "Palpitoad",
  "Seismitoad",
  "Throh",
  "Sawk",
  "Sewaddle",
  "Swadloon",
  "Leavanny",
  "Venipede",
  "Whirlipede",
  "Scolipede",
  "Cottonee",
  "Whimsicott",
  "Petilil",
  "Lilligant",
  "Basculin",
  "Sandile",
  "Krokorok",
  "Krookodile",
  "Darumaka",
  "Darmanitan",
  "Maractus",
  "Dwebble",
  "Crustle",
  "Scraggy",
  "Scrafty",
  "Sigilyph",
  "Yamask",
  "Cofagrigus",
  "Tirtouga",
  "Carracosta",
  "Archen",
  "Archeops",
  "Trubbish",
  "Garbodor",
  "Zorua",
  "Zoroark",
  "Minccino",
  "Cinccino",
  "Gothita",
  "Gothorita",
  "Gothitelle",
  "Solosis",
  "Duosion",
  "Reuniclus",
  "Ducklett",
  "Swanna",
  "Vanillite",
  "Vanillish",
  "Vanilluxe",
  "Deerling",
  "Sawsbuck",
  "Emolga",
  "Karrablast",
  "Escavalier",
  "Foongus",
  "Amoonguss",
  "Frillish",
  "Jellicent",
  "Alomomola",
  "Joltik",
  "Galvantula",
  "Ferroseed",
  "Ferrothorn",
  "Klink",
  "Klang",
  "Klinklang",
  "Tynamo",
  "Eelektrik",
  "Eelektross",
  "Elgyem",
  "Beheeyem",
  "Litwick",
  "Lampent",
  "Chandelure",
  "Axew",
  "Fraxure",
  "Haxorus",
  "Cubchoo",
  "Beartic",
  "Cryogonal",
  "Shelmet",
  "Accelgor",
  "Stunfisk",
  "Mienfoo",
  "Mienshao",
  "Druddigon",
  "Golett",
  "Golurk",
  "Pawniard",
  "Bisharp",
  "Bouffalant",
  "Rufflet",
  "Braviary",
  "Vullaby",
  "Mandibuzz",
  "Heatmor",
  "Durant",
  "Deino",
  "Zweilous",
  "Hydreigon",
  "Larvesta",
  "Volcarona",
  "Cobalion",
  "Terrakion",
  "Virizion",
  "Tornadus",
  "Thundurus",
  "Reshiram",
  "Zekrom",
  "Landorus",
  "Kyurem",
  "Keldeo",
  "Meloetta",
  "Genesect",
  "Chespin",
  "Quilladin",
  "Chesnaught",
  "Fennekin",
  "Braixen",
  "Delphox",
  "Froakie",
  "Frogadier",
  "Greninja",
  "Bunnelby",
  "Diggersby",
  "Fletchling",
  "Fletchinder",
  "Talonflame",
  "Scatterbug",
  "Spewpa",
  "Vivillon",
  "Litleo",
  "Pyroar",
  //"Flabébé",
  "Floette",
  "Florges",
  "Skiddo",
  "Gogoat",
  "Pancham",
  "Pangoro",
  "Furfrou",
  "Espurr",
  "Meowstic",
  "Honedge",
  "Doublade",
  "Aegislash",
  "Spritzee",
  "Aromatisse",
  "Swirlix",
  "Slurpuff",
  "Inkay",
  "Malamar",
  "Binacle",
  "Barbaracle",
  "Skrelp",
  "Dragalge",
  "Clauncher",
  "Clawitzer",
  "Helioptile",
  "Heliolisk",
  "Tyrunt",
  "Tyrantrum",
  "Amaura",
  "Aurorus",
  "Sylveon",
  "Hawlucha",
  "Dedenne",
  "Carbink",
  "Goomy",
  "Sliggoo",
  "Goodra",
  "Klefki",
  "Phantump",
  "Trevenant",
  "Pumpkaboo",
  "Gourgeist",
  "Bergmite",
  "Avalugg",
  "Noibat",
  "Noivern",
  "Xerneas",
  "Yveltal",
  "Zygarde",
  "Diancie",
  //"Hoopa",
  "Volcanion",
  "Rowlet",
  "Dartrix",
  "Decidueye",
  "Litten",
  "Torracat",
  "Incineroar",
  "Popplio",
  "Brionne",
  "Primarina",
  "Pikipek",
  "Trumbeak",
  "Toucannon",
  "Yungoos",
  "Gumshoos",
  "Grubbin",
  "Charjabug",
  "Vikavolt",
  "Crabrawler",
  "Crabominable",
  "Oricorio",
  "Cutiefly",
  "Ribombee",
  "Rockruff",
  "Lycanroc",
  "Wishiwashi",
  "Mareanie",
  "Toxapex",
  "Mudbray",
  "Mudsdale",
  "Dewpider",
  "Araquanid",
  "Fomantis",
  "Lurantis",
  "Morelull",
  "Shiinotic",
  "Salandit",
  "Salazzle",
  "Stufful",
  "Bewear",
  "Bounsweet",
  "Steenee",
  "Tsareena",
  "Comfey",
  "Oranguru",
  "Passimian",
  "Wimpod",
  "Golisopod",
  "Sandygast",
  "Palossand",
  "Pyukumuku",
  //"Type: Null",
  "Silvally",
  "Minior",
  "Komala",
  "Turtonator",
  "Togedemaru",
  "Mimikyu",
  "Bruxish",
  "Drampa",
  "Dhelmise",
  "Jangmo-o",
  "Hakamo-o",
  "Kommo-o",
  "Tapu Koko",
  "Tapu Lele",
  "Tapu Bulu",
  "Tapu Fini",
  "Cosmog",
  "Cosmoem",
  "Solgaleo",
  "Lunala",
  "Nihilego",
  "Buzzwole",
  "Pheromosa",
  "Xurkitree",
  "Celesteela",
  "Kartana",
  "Guzzlord",
  "Necrozma",
  "Magearna",
  "Marshadow",
  "Poipole",
  "Naganadel",
  "Stakataka",
  "Blacephalon",
  "Zeraora",
  "Meltan",
  "Melmetal"];



  var string = pokemon[number];

  //let currentPersonPokemon = new Current({id: id, currentPokemon: string})

  currentMap.set(id, string.toLowerCase());
  console.log("your pokemon is:::" +string.toLowerCase());
  currentPokemon = string.toLowerCase();

}
resetCurrentPokemon(10000);




/*
async function printAbout() {
//var promise = ;
var yeehaw = nodeyourmeme.search('knuckles'.substring(7));
console.log(yeehaw.about);
}
var yeehaw = nodeyourmeme.search('knuckles'.substring(7));
*/
function printPokemon() {
  var num = Math.floor(Math.random() * 803);
  //console.log("https://img.pokemondb.net/artwork/large/" + pokemon[num] + ".jpg")
}
printPokemon();
console.log("currentPokemon is" + currentPokemon)
/*  while (!(yeehaw.about)) {
console.log('waiting');
}*/
console.log('hey');
//console.log(yeehaw.about);


//let result = await promise.about
//wait(5000);
//printAbout();
//console.log('nico:::' + promise.about)

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

// Accepts POST requests at /webhook endpoint
app.post('/webhook', (req, res) => {

  // Parse the request body from the POST
  let body = req.body;

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {

    body.entry.forEach(function(entry) {

      // Gets the body of the webhook event
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);


      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log('Sender ID: ' + sender_psid);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);
      } else if (webhook_event.postback) {

        handlePostback(sender_psid, webhook_event.postback);
      }

    });
    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Accepts GET requests at the /webhook endpoint
app.get('/webhook', (req, res) => {

  /** UPDATE YOUR VERIFY TOKEN **/
  const VERIFY_TOKEN = "nicostoken";

  // Parse params from the webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Check if a token and mode were sent
  if (mode && token) {

    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

function handleMessage(sender_psid, received_message) {
  let response;

  // Checks if the message contains text
  if (received_message.text) {
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    /* if (received_message.text.startsWith('Search:')) {
    //console.log(search)
    var text = nodeyourmeme.search(received_message.text.substring(7))
    while (!text) {

  }
  var text2 = await text.about;

  response = {
  "text": text2
}
} else {*/


if (received_message.text.toLowerCase() === 'start catching' || received_message.text.toLowerCase() === 'play again' || received_message.text.toLowerCase() === 'get started' || received_message.text.toLowerCase() === 'catch pokemon' || received_message.text.toLowerCase() === 'catch pokémon') {

  console.log("https://img.pokemondb.net/artwork/large/" + currentMap.get(sender_psid) + ".jpg")

  if (!currentMap.has(sender_psid)){
    currentMap.set(sender_psid, "bulbasaur");
    resetCurrentPokemon(sender_psid);
  }

  response = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [{
          "title": "‌‌A wild pokémon has appeared!",
          "subtitle": 'Guess the pokémon name correctly and type "catch <pokémon name>" to catch it!',
          "image_url": "https://img.pokemondb.net/artwork/large/" + currentMap.get(sender_psid) + ".jpg",
        }]
      }
    }
  }
} else if (received_message.text.toLowerCase().startsWith("catch")) {
  handleCatching(received_message.text, sender_psid)
  return

  } else if (received_message.text.toLowerCase().startsWith("show caught pokemon") || received_message.text.toLowerCase().startsWith("show caught pokémon")) {
    handleShowCaughtPokemon(sender_psid);
    return;
  }else if (received_message.text.toLowerCase().startsWith("show ")) {
    console.log("showing pokemon")
    var pokeName = received_message.text.toLowerCase().substring(5);

    if (map.has(sender_psid) && map.get(sender_psid).includes(pokeName.charAt(0).toUpperCase() + pokeName.slice(1))) {

      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": [{
              "title": 'Your '+ received_message.text.substring(5) +"!",
              "image_url": "https://img.pokemondb.net/artwork/large/" + pokeName + ".jpg",
            }]
          }
        }
      }

    } else {
      response = {
        "text" : 'You do not have a ' + received_message.text.substring(5) + "!"
      }
    }
  } else if (received_message.text.startsWith("oh ma")) {
    response = {
      "text" : "be proud of the cow"
    }
  } else if (received_message.text.toLowerCase().startsWith("begin trade")) {
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "OK, start the trade by clicking the button below.",
          buttons: [{
            type: "web_url",
            url: "https://nicoswebhook.herokuapp.com/trade?id=" + sender_psid,
            title: "Begin trade",
            webview_height_ratio: "compact",
            messenger_extensions: true
          }]
        }
      }
    };
  } else if (received_message.text.toLowerCase().trim() === 'help'){
    response = {
      "text" : 'Commands:\n- Start Catching\n- Show caught pokémon\n- Show <pokémon you have caught>\n- Begin trade'
    }
  }
  else {
    response = {

      "text" : 'Unknown command! Type "help" for a list of commands'
    }

  }}

  /*
  else {
  response = {
  "text": `You sent the message: "${received_message.text}". Now send me an attachment!`
}
}
//}
} else if (received_message.attachments) {
// Get the URL of the message attachment
let attachment_url = received_message.attachments[0].payload.url;
response = {
"attachment": {
"type": "template",
"payload": {
"template_type": "generic",
"elements": [{
"title": "Is this the right picture?",
"subtitle": "Tap a button to answer.",
"image_url": attachment_url,
"buttons": [
{
"type": "postback",
"title": "Yes!",
"payload": "yes",
},
{
"type": "postback",
"title": "No!",
"payload": "no",
}
],
}]
}
}
}
} */

// Send the response message
callSendAPI(sender_psid, response);
}

function handleShowCaughtPokemon(sender_psid) {
  console.log(sender_psid+ "This is handleshowaught")
  console.log(typeof sender_psid)
  sender_psid = String(sender_psid);
  Pokedex.findOne({id: sender_psid}, function(err, data){
    if(err){

      let response = {
        "text" : "You haven't caught any Pokémon!"
      }
      callSendAPI(sender_psid, response)
    }
    console.log("got data!")
    console.log(data)

    if (!data || data.length == 0) {
      let response = {
        "text" : "You haven't caught any Pokémon!"
      }
      callSendAPI(sender_psid, response)
    } else {
      let response;
      var stringMess = "You've caught:"
      data.pokemon.forEach(function(item){
        stringMess = stringMess + "\n";
        stringMess = stringMess + item;
      });



      response = {
        "text" : stringMess
      }
      callSendAPI(sender_psid, response)
    }

  });

}

function handleCatching(text, sender_psid) {
  let response;
  if (!currentMap.has(sender_psid)){
    response = {
      "text" : 'Say "Start catching" to start catching!'
    }
    callSendAPI(sender_psid, response)
    return;
  }

  if (checkPokemonName(text, sender_psid)) {
  response = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [{
          "title": "Congratulations! You caught a " + currentMap.get(sender_psid).charAt(0).toUpperCase() + currentMap.get(sender_psid).slice(1) +"!",

          "buttons": [
            {
              "type": "postback",
              "title": "Play again",
              "payload": "Play again",
            },
            {
              "type": "postback",
              "title": "Show caught pokémon",
              "payload": "Show caught pokémon",
            }

          ],
        }]
      }
    }
  }
  catchPokemon(sender_psid);
 
} else if (text.toLowerCase().startsWith("catch")) {

    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Darn! The " + currentMap.get(sender_psid).charAt(0).toUpperCase() + currentMap.get(sender_psid).slice(1) + " got away!",

            "buttons": [
              {
                "type": "postback",
                "title": "Play again",
                "payload": "Play again",
              },
              {
                "type": "postback",
                "title": "Show caught pokémon",
                "payload": "Show caught pokémon",
              }

            ],
          }]
        }
      }
    }

    resetCurrentPokemon(sender_psid);}
    callSendAPI(sender_psid, response);
  }





function handlePostback(sender_psid, received_postback) {
  console.log('ok')
  let response;
  // Get the payload for the postback
  let payload = received_postback.payload;
  console.log(payload + "<-- payload")

  // Set the response based on the postback payload
  if (payload === 'yes') {
    response = { "text": "Thanks!" }
  } else if (payload === 'no') {
    response = { "text": "Oops, try sending another image." }
  } else if (payload === 'Show caught pokémon' || payload === 'Show caught Pokémon') {
    handleShowCaughtPokemon(sender_psid)
    return
    /*
    console.log("this is map.has(" + sender_psid+ "):" + map.has(sender_psid))

    if (!map.has(sender_psid)) {
      response = {
        "text" : "You haven't caught any Pokémon!"
      }
    } else {
      var stringMess = "You've caught:"
      map.get(sender_psid).forEach(function(item){
        stringMess = stringMess + "\n";
        stringMess = stringMess + item;
      });



      response = {
        "text" : stringMess
        //"text" : 'poop'
      }

    }*/
  } else if (payload === 'Play again' || payload === "Start Catching" || payload === 'Start catching' || payload === 'Get started') {
    if (!currentMap.has(sender_psid)){
      currentMap.set(sender_psid, "bulbasaur");
      resetCurrentPokemon(sender_psid);
    }
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "‌‌A wild pokémon has appeared!",
            "subtitle": 'Guess the pokémon name correctly and type "catch <pokémon name>" to catch it!',
            "image_url": "https://img.pokemondb.net/artwork/large/" + currentMap.get(sender_psid) + ".jpg",
          }]
        }
      }
    }
  } else if (payload === 'Begin trade') {
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "OK, start the trade by clicking the button below.",
          buttons: [{
            type: "web_url",
            url: "https://nicoswebhook.herokuapp.com/trade?id=" + sender_psid,
            title: "Begin trade",
            webview_height_ratio: "compact",
            messenger_extensions: true
          }]
        }
      }
    };
  }
  //  console.log(response);
  //console.log('^^ response')
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  });
}



/*
function capitalizeFirstLetter(string) {
  return currentPokemon.charAt(0).toUpperCase() + currentPokemon.slice(1)
}





function threeNum(num) {
  if (num < 10) {
    return "00"+num;
  } else if (num < 100){
    return "0"+num;
  } else {
    return ""+num;
  }
}
*/

function checkPokemonName(string, id) {

  var substring = string.substring(6).trim();

  var regex = /[.,\s]/g;

  substring = substring.replace(regex, '');

  console.log(currentMap)
  console.log(id)
  console.log(substring)
  return (substring.toLowerCase() === currentMap.get(id) && substring.length === currentMap.get(id).length)
}



Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};




app.get('/home_url', function(req, res){







  res.header('X-Frame-Options: ALLOW-FROM https://www.messenger.com/');

  res.header('X-Frame-Options: ALLOW-FROM https://www.facebook.com/');
  res.sendFile( __dirname + "/public/" + "home_url.html" );
});




var tradeMap = new Map();
//console.log(map.get(100000));








app.get('/trade', function(req, res){
  res.header('X-Frame-Options: ALLOW-FROM https://www.messenger.com/');
  res.header('X-Frame-Options: ALLOW-FROM https://www.facebook.com/');

  var id = req.query.id;



  console.log(map.get(100000));
  console.log("id=" + id);





  ///TESTIGN------------
  var home = "broadcast"

  if ("home" in req.query) {
    home = "current_thread";
    console.log("there is a home")
  } else {
    console.log("no home")
  }
  //-----------










  if (tradeMap.has(id)) {



    var name = "Trainer";

    request('https://graph.facebook.com/v2.7/' + id + '?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token='+PAGE_ACCESS_TOKEN, { json: true }, (err, response, body) => {
      if (err) { return console.log(err);
        //name = "Trainer"

        console.log("name is : " + name);
        res.render('tradeRecieving',{
          title: name + ' would like to trade!',
          user: name,
          poke : tradeMap.get(id),
          home : home,
          id: id
        } ) ;

      }
      //console.log(res);

      if (body.first_name != undefined){
        name = body.first_name;
        console.log("here's what you got" + body.first_name);
        console.log(name);
      }

      res.render('tradeRecieving',{
        title: name + " would like to trade!",
        user:name,
        poke: tradeMap.get(id),
        home:home,
        id: id

      } ) ;





    });

    /*

    res.render('tradeRecieving',{
    title: name + " would like to trade!",
    user:name,
    //itemList:arr,
    //id : id
  } ) ;
  */


  //if trademap hs it
} else {
  console.log(tradeMap);

  var arr = [];


  console.log(map.has(id));
  if (map.has(id)) {
    map.get(id).forEach(function(item){
      arr.push(item);
    } )

    // arr = ['nico', 'poop'];

    var name = "Trainer";

    request('https://graph.facebook.com/v2.7/' + id + '?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token='+PAGE_ACCESS_TOKEN, { json: true }, (err, response, body) => {
      if (err) { return console.log(err);
        //name = "Trainer"
        console.log("name is : " + name);
        res.render('trade',{
          title: 'Select a Pokémon to trade, ' +name + "!",
          user: name,
          itemList:arr,
          id : id
        } ) ;
        //return;
      }
      //console.log(res);

      if (body.first_name != undefined){
        name = body.first_name;
        console.log("here's what you got" + body.first_name);
        console.log(name);
      }

      res.render('trade',{
        title: 'Select a Pokémon to trade, ' +name + "!",
        user:name,
        itemList:arr,
        id : id
      } ) ;





    });

    console.log(name);




  } else {
    console.log(map)
    res.sendFile( __dirname + "/public/" + "noPokemon.html" );

  }

}

});








app.post('/trade', (req, res) => {

  var home = "broadcast"

  console.log('this is req.query');
  console.log(JSON.stringify(req.query));


  if ("home" in req.query) {
    home = "current_thread";
    console.log("there is a home")
  } else {
    console.log("no home")
  }






  if (req.body.isTrading === "true") {
    console.log("isTrading true")

    console.log("body is" + JSON.stringify(req.body))

    //if (tradeMap.)




    ///TESTIGN------------
    var home = "broadcast"

    console.log('this is req.query');
    console.log(JSON.stringify(req.query));


    if ("home" in req.query) {
      home = "current_thread";
      console.log("there is a home")
    } else {
      console.log("no home")
    }
    //-----------







    // Parse the request body from the POST
    var pokemonName = req.body.name;

    //tradeMap.set(req.query.id, pokemonName);

    console.log(pokemonName);
    console.log(tradeMap);

    var name = JSON.stringify(req.body);

    console.log(name)

    console.log("is trading"+ req.body.isTrading)




    var idOfSender = JSON.stringify(req.body.user_psid);
    idOfSender = idOfSender.substring(1, idOfSender.length -1);
    console.log(idOfSender)

    if (idOfSender === req.query.id) {

      console.log(map.get(idOfSender))

      res.sendFile( __dirname + "/public/" + "selfTrade.html" );

    } else {



      var pokemonToTrade = JSON.stringify(req.body.pokemonName);
      pokemonToTrade = pokemonToTrade.substring(1, pokemonToTrade.length -1);
      pokemonToTrade = pokemonToTrade.toLowerCase();
      pokemonToTrade = pokemonToTrade.charAt(0).toUpperCase() + pokemonToTrade.slice(1)
      console.log(map);
      console.log(idOfSender)
      var arr = map.get(idOfSender);
      console.log('array is:vvvvv')
      console.log(arr);
      if (!map.has(idOfSender) ){//|| arr === undefined){
        res.sendFile( __dirname + "/public/" + "noPokemon.html" );
        return;
      }
      if (!arr.includes(pokemonToTrade)){

        console.log('pokemon to Trade');
        console.log(pokemonToTrade)


        res.render('noSuchPokemon',{
          fakepoke: pokemonToTrade,//name + " would like to trade!",
          // user:"getname"//name,
          //itemList:arr,
          //id : id
        } ) ;


      }

      else {

        //trading begins
        console.log('map before')
        console.log(map);

        var trader1Arr = map.get(req.query.id)
        var trader2Arr = map.get(idOfSender)

        console.log(tradeMap)

        var otherPoke = tradeMap.get(req.query.id)

        trader1Arr.remove(otherPoke);
        tradeMap.delete(req.query.id);
        trader2Arr.remove(pokemonToTrade);
        trader1Arr.push(pokemonToTrade);
        trader2Arr.push(otherPoke);




        map.set(req.query.id, trader1Arr);
        map.set(idOfSender, trader2Arr);

        console.log('map after')
        console.log(map)


        res.sendFile( __dirname + "/public/" + "successfulTrade.html" );


        var name = "Trainer";

        request('https://graph.facebook.com/v2.7/' + idOfSender + '?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token='+PAGE_ACCESS_TOKEN, { json: true }, (err, response, body) => {
          if (err) { console.log(err);

            var message = name + " just traded you their " + pokemonToTrade + " for your " + otherPoke + "!"
            var responseMessage = {
              "text" : message
            }
            console.log(req.query.id + " is the query, Error");
            callSendAPI(req.query.id, responseMessage);
          }

          if (body.first_name != undefined){
            name = body.first_name;
            //console.log(response)

            console.log("here's what you got" + body.first_name);
            console.log(name);


            var message = name + " just traded you their " + pokemonToTrade + " for your " + otherPoke + "!"
            var responseMessage = {
              "text" : message
            }
            console.log(req.query.id + " is the query, have name");
            callSendAPI(req.query.id, responseMessage);
          } else {
            console.log('YOU REACHED THE ELSE! no callSendAPI');

            var message = name + " just traded you their " + pokemonToTrade + " for your " + otherPoke + "!"
            var responseMessage = {
              "text" : message
            }
            console.log(req.query.id + " is the query, don't name");
            callSendAPI(req.query.id, responseMessage);
          }




        });





      }
    }



  } else {


    //here!!!


    console.log("body is" + JSON.stringify(req.body))
    var idOfSender = JSON.stringify(req.body.idOfSender);
    idOfSender = idOfSender.substring(1, idOfSender.length -1);
    var poke = JSON.stringify(req.body.name);
    poke = poke.substring(1, poke.length -1);

    console.log('poke is' + poke)

    tradeMap.set(idOfSender, poke);
    console.log(tradeMap)


    if (idOfSender != req.query.id) {
      console.log("wrong PSID! ")

      console.log(parseInt(idOfSender) + "vs " + req.query.id)


      res.sendFile( __dirname + "/public/" + "forceTrade.html" );

    } else {
      console.log("right psid!!")





      var name = 'Trainer'
      request('https://graph.facebook.com/v2.7/' + idOfSender + '?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token='+PAGE_ACCESS_TOKEN, { json: true }, (err, response, body) => {
        if (err) { return console.log(err);
          //name = "Trainer"
          console.log("name is : " + name);
          res.render('tradeRecieving',{
            title: name + " would like to trade!",//name + " would like to trade!",
            user:name,
            poke:tradeMap.get(idOfSender),//name,,
            home: home,
            id : idOfSender
            //itemList:arr,
            //id : id
          } ) ;

        }
        //console.log(res);

        if (body.first_name != undefined){
          name = body.first_name;
          console.log("here's what you got" + body.first_name);
          console.log(name);
        }

        res.render('tradeRecieving',{
          title: name + " would like to trade!",
          user:name,
          poke:tradeMap.get(idOfSender),//name,
          home: home,
          id : idOfSender
          //itemList:arr,
          //id : id
        } ) ;




      });







    }
  }




});
