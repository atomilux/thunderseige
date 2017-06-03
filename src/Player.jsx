import React, {Component} from 'react';
import StatWithIcon from './StatWithIcon';
import Spells from './Spells';

export default class Player extends Component {


  constructor() {
    super();

    this.state={
      cont_stat_hidden:false,
      cont_abilities_hidden:true,
      cont_lore_hidden:true,
      cont_spells_hidden:true,
      player_pic:"",
      nav_mode_statistics:"nav_bold",
      nav_mode_abilities:"nav_normal",
      nav_mode_lore:"nav_normal",
    }

  }//end f

  //hero img url
  setPicturePath(n) {
    switch(n) {
        case"Berzerker":
          this.player_pic = "images/Berzerker.jpg"
        break;
        case"Ranger":
          this.player_pic = "images/Ranger.jpg"
        break;
        case"Sorcerer":
          this.player_pic = "images/Sorcerer.jpg"
        break;
        case"Fairy":
          this.player_pic = "images/Fairy.jpg"
        break;
        default:
        break;
    }

  }//end f

  //visibility toggler, css class switcher
  clickHandler(id) {

    console.log(id + ":" + this.state.cont_stat_hidden);

    switch(id) {
      case"statictics":
        this.setState({
          cont_stat_hidden:false,
          cont_abilities_hidden:true,
          cont_lore_hidden:true,
          nav_mode_statistics:"nav_bold",
          nav_mode_abilities:"nav_normal",
          nav_mode_lore:"nav_normal",
        })
      break;
      case"abilities":
        this.setState({
          cont_stat_hidden:true,
          cont_abilities_hidden:false,
          cont_lore_hidden:true,
          nav_mode_statistics:"nav_normal",
          nav_mode_abilities:"nav_bold",
          nav_mode_lore:"nav_normal",
        })
      break;
      case"lore":
        this.setState({
          cont_stat_hidden:true,
          cont_abilities_hidden:true,
          cont_lore_hidden:false,
          nav_mode_statistics:"nav_normal",
          nav_mode_abilities:"nav_normal",
          nav_mode_lore:"nav_bold",
        })
      break;
      default:
      break;
    }

  }//end f


  render() {

    //Player data
    const player = this.props.player;

    //Stats
    const playerClass = player.class;
    const health = player.health;
    const attack = player.attack;
    const speed = player.speed;
    const vision = player.vision;
    const cloaking = player.cloaking;

    //Abilities
    const resistPoison = player.resist_poison;
    const resistPlague = player.resist_plague;
    const resistStun = player.resist_stun;

    let spellArr = [];

    //set default hidden to true
    this.state.cont_spells_hidden = true;

    //Check for spells, assign, show if needed
    if(player.spells.length > 0) {
      spellArr = player.spells;
      this.state.cont_spells_hidden = false;
    }

    const lore = this.props.lore;

    this.setPicturePath(playerClass);

    return (
      <div className="player">
        <div className="playerPicture">
          <img src={this.player_pic} alt={playerClass}/>
        </div>
        <div className="playerClassTitle">
          <h1>{player.class}</h1>
        </div>
        <div className="player_nav">
          <ul>
            <li className={this.state.nav_mode_statistics} onClick={this.clickHandler.bind(this,'statistics')}>Statistics</li>
            <li className={this.state.nav_mode_abilities} onClick={this.clickHandler.bind(this,'abilities')}>Abilities</li>
            <li className={this.state.nav_mode_lore} onClick={this.clickHandler.bind(this,'lore')}>Lore</li>
          </ul>
        </div>
        <div className="player_info player_stats" hidden={this.state.cont_stat_hidden}>
          <StatWithIcon name="Health" value={health}/>
          <StatWithIcon name="Attack" value={attack}/>
          <StatWithIcon name="Speed" value={speed}/>
          <StatWithIcon name="Vision" value={vision}/>
          <StatWithIcon name="Cloaking" value={cloaking}/>
        </div>
        <div className="player_info player_abilities" hidden={this.state.cont_abilities_hidden}>
          <StatWithIcon name="Resist Poison" value={resistPoison}/>
          <StatWithIcon name="Resist Plague" value={resistPlague}/>
          <StatWithIcon name="Resist Stun" value={resistStun}/>
          <Spells spellData={spellArr} hidden={this.state.cont_spells_hidden}/>
        </div>
        <div className="player_info player_lore" hidden={this.state.cont_lore_hidden}>
          {lore.lore}
        </div>

      </div>

    )
  }//end f

}//end c
