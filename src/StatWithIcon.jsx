import React, {Component} from 'react';

export default class StatWithIcon extends Component {
  render() {

    const stat_name = this.props.name;
    let stat_icon = '';
    const stat_value = this.props.value;

    let stat_percent = stat_value;

    //get the right icon path
    switch(this.props.name) {
      case "Health":
        stat_icon="images/icon_health_1024x1024.png";
        break;
      case "Attack":
        stat_icon="images/icon_attack_1024x1024.png";
        break;
      case "Speed":
        stat_icon="images/icon_speed_1024x1024.png";
        stat_percent = (stat_value*10);
        break;
      case "Vision":
        stat_icon="images/icon_vision_1024x1024.png";
        stat_percent = (stat_value*10);
        break;
      case "Cloaking":
        stat_icon="images/icon_cloak_1024x1024.png";
        stat_percent = (stat_value*10);
        break;
      case "Resist Poison":
        stat_icon="images/icon_resist_poison_1024x1024.png";
        stat_percent = (stat_value*100).toString()+"%";
        break;
      case "Resist Plague":
        stat_icon="images/icon_resist_plague_1024x1024.png";
        stat_percent = (stat_value*100).toString()+"%";
        break;
      case "Resist Stun":
        stat_icon="images/icon_resist_stun_1024x1024.png";
        stat_percent = (stat_value*100).toString()+"%";
        break;
      default:
        break;
    }

    return (
      <div className="stat">
        <img src={stat_icon} alt={stat_name}/>
        <div>
          <div className="stat_name">{stat_name}</div>
          <div className="stat_value">{stat_percent}</div>
        </div>
      </div>
    )
  }
}
