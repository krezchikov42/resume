import React from "react";

export default class Company extends React.Component {
    render() {
        return <div>
            <h3 className="card-title">
                {this.props.job_title} - <span className="place">{this.props.company} </span> <span className={"year"}>{`(${this.props.year})`}</span>
            </h3>
                <ul>
                    {this.props.bullets.map((bullet,index) => <li key={index}>{bullet}</li>)}
                </ul>
        </div>
    }
}
