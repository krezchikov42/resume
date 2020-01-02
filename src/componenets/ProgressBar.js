import React from "react";

export default class ProgressBar extends React.Component {
    render() {
        let skill_description = this.getSkillDescriptionText()

        return <div>
            {this.props.skill}
            <div className="float-right">
                {skill_description}
            </div>
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: `${this.props.skill_level}%`}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    }

    //skillLevel should be between 0 and 100
    getSkillDescriptionText(){
        let ret_value = ''
        if (this.props.skill_level < 40) {
            ret_value = 'Beginner'
        }
        else if (this.props.skill_level < 70) {
            ret_value = 'Intermediate'
        }
        else {
            ret_value = 'Expert'
        }
        return ret_value
    }
}
