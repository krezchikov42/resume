import React from "react";

export default class ProgressBar extends React.Component {
    render() {
        let skill_description = this.getSkillDescriptionText()
        let skill_level = this.getSkillLevel()

        return <div>
            {this.props.skill}
            <div className="level">
                {skill_description}
            </div>
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: `${skill_level}%`}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    }

    //skillLevel should be between 1 and 4
    getSkillDescriptionText(){
        let ret_value = ''
        if (this.props.skill_level == 1) {
            ret_value = 'Beginner'
        }
        else if (this.props.skill_level <= 3) {
            ret_value = 'Intermediate'
        }
        else {
            ret_value = 'Expert'
        }
        return ret_value
    }

    getSkillLevel() {
        let skill_percentage_map ={
            1: 30,
            2: 50,
            3: 70,
            4: 100
        }
        let skill_percent = skill_percentage_map[this.props.skill_level]
        return skill_percent
    }
}
