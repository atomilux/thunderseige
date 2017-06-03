import React, {Component} from 'react';
import Player from './Player';

//stories of each player type
const lore = [
  {
    class:"Berzerker",
    lore:"Harkener - the Beast Slayer - known for his heroism during the tribal army’s great battle against a Demon Horde of terrible beasts. The dark beasts struck fear into many of the tribe’s warriors with their onslaught. Yet Harkener, with a will of forged steel, rallied the warriors and turned the tide of glorious battle. Their leathery demon flesh succumbed to tribal steel crafted to cleave even the largest of beasts. Harkener slew many a demon spawn that day. One after another they fell to his fierce blows and chilling battle cries until he conquered even their general. Demoralized and decimated, the demon horde retreated with unholy shrieks of terror. The fiery glow of their hellish doorway into our world faded until it was no more. Harkener earned the rank of Full Warrior that day. His flesh, scarred by Demon fire, is a reminder to all who ever questioned his loyalty to the tribe."
  },
  {
    class:"Sorcerer",
    lore:"Seraph - Subduer of Death - her story is legend amongst the river tribe. The villagers spoke of a fiery orange glow under the deep river that started as a flicker and grew slowly until it was strong enough to light the night sky. Then, the demon serpents bore outward from its depths and descended among the village killing many of its people. Seraph was on a moonlit hill that night, contemplating her recent betrothment. She witnessed this horror from afar. Many died before the warriors arose from their slumber. The demons slithered back into the night. Then, horror beset them all. Many wailed and clutched the lifeless bodies of their loved ones. Seraph and the healers used their gifts but could only save so many. Seraph was able to resurrect and heal many...except her betrothed whom she loved. One by one, the healers began to collapse from the exhaustive use of their powers Yet there were still so many yet to be healed. Seraph, barely conscious, tears streaming from her eyes was visited by a vision of her betrothed. 'Seraph, my love, don’t weep for me. I must go now with the River Goddess', he said. Seraph, distraught, pleaded with the Goddess to return her betrothed. Surprisingly, the River Goddess agreed but it came with a price. The Goddess told Seraph, 'One day a messenger will call upon my people for a champion. You must be that champion and leave your husband on this dangerous quest.' They both accepted the terms to be reunited. The Goddess continued,'I give you the Artifact of Great Healing. Go forth and prove yourself as the greatest healer of the village and resurrect my people.' Thus, the legend of Seraph was born."
  },
  {
    class:"Ranger",
    lore:"Ragna - Deliverer of Quiet Death. Little is known about this deadly, clever and hidden archer of the dark forest tribe save for one chilling tale. The demon horde descended upon the kingdom in the dark forest killing many of their tribe. After pushing them back, Ragna alone stalked the horde for days slowly reducing their numbers until a small paranoid band was left. Instead of killing them, he shot arrows at them strategically instilling further fear and herding them out of the forest. The demon horde never returned out of complete fear. "
  },
  {
    class:"Fairy",
    lore:"Talia - The Wind Rider - fast, clever and stronger than nearly all creatures in the realm. She volunteered out of boredom with eternal life accepting a bet against other fairies that she can’t be killed."
  }
];

//player details, stats and spells
const players = [
		{
			_id:1,
			class:"Berzerker",
			health:100,
			attack:40,
			attack_stun_chance:.4,
			speed:.1,
			vision:.1,
			cloaking:0,
			resist_poison:.8,
			resist_plague:.8,
			resist_stun:.5,
			damage_poison:0,
			damage_plague:0,
			damage_stun:0,
			current_realm:0,
			current_space:0,
			spells:[]
		},
		{
			_id:2,
			class:"Ranger",
			health:80,
			attack:20,
			attack_stun_chance:.25,
			speed:.3,
			vision:.4,
			cloaking:1,
			resist_poison:.2,
			resist_plague:.2,
			resist_stun:.25,
			damage_poison:0,
			damage_plague:0,
			damage_stun:0,
			current_realm:0,
			current_space:0,
			spells:[]
		},
		{
			_id:3,
			class:"Sorcerer",
			health:50,
			attack:0,
			attack_stun_chance:0,
			speed:.2,
			vision:.2,
			cloaking:0,
			resist_poison:.2,
			resist_plague:.2,
			resist_stun:.25,
			damage_poison:0,
			damage_plague:0,
			damage_stun:0,
			current_realm:0,
			current_space:0,
			spells:[
				{
					_spell_id:1,
					type:"heal",
					name:"Heal",
					target_attrs_keys:["health"],
          target_attrs_names:["Health"],
					turn_cooldown:1,
					target_class_ids:[1,2,3,4]
				},
				{
					_spell_id:2,
					type:"heal",
					name:"Heal Poison",
					target_attrs_keys:["damage_poison"],
          target_attrs_names:["Damage Poison"],
					turn_cooldown:1,
					target_class_ids:[1,2,3,4]
				},
				{
					_spell_id:3,
					type:"heal",
					name:"Heal Plague",
					target_attrs_keys:["damage_plague"],
          target_attrs_names:["Damage Plague"],
					turn_cooldown:1,
					target_class_ids:[1,2,3,4]
				},
				{
					_spell_id:4,
					type:"attack",
					name:"Poison Attack",
					target_attrs_keys:["damage_poison"],
          target_attrs_names:["Damage Poison"],
					turn_cooldown:1,
					target_class_ids:[5,6,7,8]
				},
				{
					_spell_id:5,
					type:"attack",
					name:"Plague Attack",
					target_attrs_keys:["damage_plague"],
          target_attrs_names:["Damage Plague"],
					turn_cooldown:1,
					target_class_ids:[5,6,7,8]
				}
			]
		},
		{
			_id:4,
			class:"Fairy",
			health:20,
			attack:0,
			attack_stun_chance:0,
			speed:1,
			vision:1,
			cloaking:5,
			resist_poison:1,
			resist_plague:1,
			resist_stun:0,
			damage_poison:0,
			damage_plague:0,
			damage_stun:0,
			current_realm:0,
			current_space:0,
			spells:[
				{
					_spell_id:1,
					type:"teleport",
					name:"Teleport",
					target_attrs_keys:["current_realm","current_space"],
          target_attrs_names:["Current Realm","Current Space"],
					turn_cooldown:3,
					target_class_ids:[1,2,3,4]
				},
				{
					_spell_id:2,
					type:"buff",
					name:"Speed Boost",
					target_attrs_keys:["speed"],
          target_attrs_names:["Speed"],
					turn_cooldown:3,
					target_class_ids:[4]
				},
				{
					_spell_id:3,
					type:"stun",
					name:"Stun Attack",
					target_attrs_keys:["damage_stun"],
          target_attrs_names:["Damage Stun"],
					turn_cooldown:1,
					target_class_ids:[5,6,7,8]
				}
			]
		}
	]//end players arr

let globalCurrentPlayer = "Berzerker";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayerName: "Berzerker",
      currentPlayerUIstate: null,
      currentPlayer: null,
      currentPlayerLore:null,
      playerClasses:null,
      showEditPlayer: false,
      navMode_berzerker:"nav_bold",
      navMode_ranger:"nav_normal",
      navMode_sorcerer:"nav_normal",
      navMode_fairy:"nav_normal",
     };

     this.breakDownPathName();

     this.currentPlayer = this.getPlayerObjByName(this.state.currentPlayerName);
     this.currentPlayerLore = this.getPlayerLoreByName(this.state.currentPlayerName);
     this.playerClasses = this.getPlayerList();

     //bind for child component use - i think this is ugly
     this.setUIstate = this.setUIstate.bind(this);

  }//end constructor


  //for later
  setUIstate(str) {
    this.state.currentPlayerUIstate = str;
  }//end f


  //for main and sub hash urls
  breakDownPathName() {

    //check for url
    let urlClean = this.props.location.search.replace('?','');
    //let urlClean = "Berzerker";

    if (urlClean.length > 0) {
      this.state.currentPlayerName = urlClean;
      globalCurrentPlayer = urlClean;
      //console.log("Updating player type");
    }

  }//end f


  //pull player lore data by name
  getPlayerLoreByName(n) {

    for (let i=0; i < lore.length; i++) {

      if (n === lore[i].class) {
        return lore[i];
      }
    }

  }//end f


  //pull player data object by name string
  getPlayerObjByName(n) {

    for (let i=0; i < players.length; i++) {

      if (n === players[i].class) {
        return players[i];
      }
    }
  }


  //pull all player data for array
  getPlayerList() {

    var tmp = [];

    for (let i=0; i < players.length; i++) {
      tmp[i] = {"player":players[i].class};
    }

    return tmp;

  }//end f


  //gather/assign obj data for update
  classNameClickHandler(n) {

    let obj1 = this.getPlayerObjByName(n);
    let obj2 = this.getPlayerLoreByName(n);

    this.currentPlayerName = n;
    this.currentPlayer = obj1;
    this.currentPlayerLore = obj2;

  }//end f


  render() {

    return (
      <div id="page">

        <div id="header">

          <div className="logo">
            <img src="images/logo_ts.png" alt="logo"/>
          </div>

          <div className="mainNavContainer">
            <div className="ui_style_left">
              <img src="images/ui_style_stickDiamond_left.png" alt="ui"/>
            </div>
            <ul>
              {this.playerClasses.map((p) => {
                let url = "?" + p.player;
                let str = p.player;

                let navModeKey = "nav_normal";

                if (this.state.currentPlayerName === str) {
                  navModeKey = "nav_bold";
                }

                return <li key={str} className={"headerNav " + navModeKey}><a href={url} onClick={this.classNameClickHandler.bind(this,str)} rel="noopener noreferrer">{str}</a></li>
              })}
            </ul>
            <div className="ui_style_right">
              <img src="images/ui_style_stickDiamond_right.png" alt="ui"/>
            </div>
          </div>

        </div>

        <div id="content">
            <div className="col s12 m7"><Player player={this.currentPlayer} lore={this.currentPlayerLore} navClick={this.setUIstate}/></div>
        </div>

        <div id="footer">
          <div>
            Created by <a href="http://www.korporeal.com" target="_blank" rel="noopener noreferrer">Korporeal Games</a>
          </div>
          <div>
            Open source <a href="https://bitbucket.org/korporeal/thunderseige/overview" target="_blank" rel="noopener noreferrer">content hosted</a> at <a href="http://www.bitbucket.org" target="_blank" rel="noopener noreferrer">BitBucket</a>
          </div>
        </div>
      </div>
    )

  }//end render

}//end App
