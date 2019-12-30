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
                <div className="col-8">
                    <div className="card bg-light my-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>

                </div>
                <div className="col-4">
                    <div className="card bg-light my-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}
