import React from "react";
import ProgressBar from "../componenets/ProgressBar"
import Company from "../componenets/Company";
import resume_photo from "../external-files/me.png"
import my_data from '../external-files/resume.json';


export default class Resume extends React.Component {

    constructor() {
        super();

        this.skills = {react: 4, }
    }

    render() {
        return <div className="container-fluid">
            <div className="row header">
                <div className="col-8 col-lg-3 offset-2">
                    <img  id="resume-photo" src={resume_photo} alt="Konstantin Rezchikov"></img>
                </div>
                <div className="col-4 offset-2 offset-lg-0">
                    <h1 className="name">Konstantin Rezchikov</h1>
                    <h2 className="description">Software Engineer</h2>
                    <ul className="list-inline">
                        <li>
                            <a href="https://www.linkedin.com/in/konstantin-rezchikov/"  target="_blank">
                                <i className="fab fa-linkedin fa-3x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/krezchikov42"  target="_blank">
                                <i className="fab fa-github fa-3x"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="row body">
                    <div className="col-12 col-lg-8 offset-lg-1">
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
                                {my_data.company_many.map(company =>
                                    <Company {...company}></Company>)}
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-2">
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
                                {my_data.skill_many.map(skill => <ProgressBar {...skill}> </ProgressBar>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}
