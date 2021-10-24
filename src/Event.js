import React, { Component } from "react";

class Event extends Component {
    state = {
        detailsOpen: false,
    }

    showDetails() {
        if (this.state.detailsOpen === false) {
            this.setState({ detailsOpen: true })
        } else {
            this.setState({ detailsOpen: false })
        }
    };

    render() {
        const { event } = this.props
        return (
            <div className="event">
                <h1 className="name">{event.summary}</h1>
                <p className="date">{new Date(event.start.dateTime).toString()}</p>
                <p className="location">{event.location}</p>
                <h3>About event:</h3>
                <a className="link" href="#">See details on Google Calendar</a>
                <p className="details">{!this.state.detailsOpen ? "" : event.description}</p>
                <button className="details-btn" onClick={() => {
                    this.showDetails()
                }}>
                    {!this.state.detailsOpen ? "more details" : "less details"}
                </button>
            </div>
        );
    }
}
export default Event;