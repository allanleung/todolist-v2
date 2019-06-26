import React, {Component} from 'react';

export default class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <from>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                        <input type="text" className="from-control" placeholder="Add todo item"/>
                    </div>
                    <button type={"submit"} className={"btn btn-block btn-primary mt-3"}>Submit Todo</button>
                </from>
            </div>
        );
    }
}