import React from "react";
import PropTypes from 'prop-types';

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

Company.propTypes = {
    job_title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
}

