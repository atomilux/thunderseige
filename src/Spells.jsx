import React, {Component} from 'react';

export default class Spells extends Component {

  //get path for spell icon images
  getIconURL (obj) {

    let tmp = "";

    switch(obj.name) {
      case"Heal":
        tmp = "images/icon_health_1024x1024.png";
      break;
      case"Heal Poison":
        tmp = "images/icon_heal_poison_1024x1024.png";
      break;
      case"Heal Plague":
        tmp = "images/icon_heal_plague_1024x1024.png";
      break;
      case"Poison Attack":
        tmp = "images/icon_poison_1024x1024.png";
      break;
      case"Plague Attack":
        tmp = "images/icon_plague_1024x1024.png";
      break;
      case"Teleport":
        tmp = "images/icon_teleport_1024x1024.png";
      break;
      case"Speed Boost":
        tmp = "images/icon_speed_boost_1024x1024.png";
      break;
      case"Stun Attack":
        tmp = "images/icon_stun_1024x1024.png";
      break;
      default:
      break;
    }

    return tmp;

  }//end f

  render() {

    let spellDatas = this.props.spellData;

    return (
      <div className="spells" hidden={this.props.hidden}>
          <h1>Spells</h1>
          {
            spellDatas.map(
              function(spell) {

                let spellIcon = this.getIconURL(spell);

                return(
                  <div key={spell.name} className="spell">
                    <img src={spellIcon} alt={spell.name} />
                    <div>Name: {spell.name}</div>
                    <div>Type: {spell.type}</div>
                    <div className="spell_attr">Applies to: {spell.target_attrs_names.toString()}</div>
                    <div>Cooldown: {spell.turn_cooldown}</div>
                  </div>
                );
              }
            ,this)
          }

      </div>

    )
  }//end render()


}//end class
