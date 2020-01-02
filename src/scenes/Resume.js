import React from "react";
import ProgressBar from "../componenets/ProgressBar"
import Company from "../componenets/Company";

export default class Resume extends React.Component {

    constructor() {
        super();

        this.skills = {react: 4, }
    }

    render() {
        let company = {job_title: 'Full Stack Web Developer',
            company: 'Railpod Inc',
            year: 'Jan. 2019 - Aug. 2019',
            bullets: ['Worked with the executive team to create major portions of the product',
                "Created complex data visualization tools for track data using React that sped up the data analysis process by over 50%",
                "Automated data uploading from robot to web portal using Django and AWS",
                "Converted API that increased GPS accuracy from Java to Python to fit in with current codebase"]}
        return <div className="container-fluid">
            <div className="row">
                <div className="col-2 offset-2">
                    Profile picture will go here
                </div>
                <div className="col-2">
                    <h3>Konstantin Rezchikov</h3>
                    <h5>Software Engineer</h5>
                    <h5>Add links here</h5>
                </div>
            </div>
            <div className="row bg-secondary">
                <div className="col-6 offset-2">
                    <div className="card bg-light my-3">
                        <div className="card-header">About Me</div>
                        <div className="card-body">
                            <p className="card-text">Hi there! I'm Konstantin Rezchikov, a computer engineering and computer science student at Northeastern University.
                                I've always loved the fact that I can bring someone's thoughts to life by typing a few lines of code. I'm excited by entrepreneurship and making products to change the world..</p>
                        </div>
                    </div>
                    <div className="card bg-light my-3">
                        <div className="card-header">Work Experience</div>
                        <div className="card-body">
                                <Company {...company}></Company>
                        </div>
                    </div>

                </div>
                <div className="col-2">
                    <div className="card bg-light my-3">
                        <div className="card-header">Contact me</div>
                        <div className="card-body">
                            <p className="card-text">
                                <i className="fas fa-map-marked"></i> Boston, Massachussets
                            </p>
                            <p className="card-text">
                                <i className="fas fa-envelope"></i> rezchikov.k@husky.neu.edu
                            </p>
                        </div>
                    </div>
                    <div className="card bg-light my-3">
                        <div className="card-header">Contact me</div>
                        <div className="card-body">
                            <ProgressBar skill="React" skill_level={70}></ProgressBar>
                            React
                            <div className="float-right">
                                Intermediate
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}}
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            React
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}}
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="card-text">
                                <i className="fas fa-envelope"></i> rezchikov.k@husky.neu.edu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}
