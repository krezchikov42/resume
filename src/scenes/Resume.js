import React from "react";

export default class Resume extends React.Component {

    render() {
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
                            <h3 className="card-title">
                                Railpod Inc Full Stack Web Developer- Boston, MA Jan. 2019 - Aug. 2019
                            </h3>
                            <p className="card-title">
                                <ul>
                                    <li>
                                        Worked with the executive team to create major portions of the product
                                    </li>
                                    <li>
                                        Created complex data visualization tools for track data using React that sped up the data analysis process by over 50%
                                    </li>
                                    <li>
                                        Automated data uploading from robot to web portal using Django and AWS
                                    </li>
                                    <li>
                                        Converted API that increased GPS accuracy from Java to Python to fit in with current codebase
                                    </li>
                                </ul>
                            </p>
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
                </div>
            </div>
        </div>

    }
}
