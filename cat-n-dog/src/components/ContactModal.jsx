import React from "react";

import "../styles/ContactModal.css";

import ConnectIcons from "./ConnectIcons.jsx";

import closeButton from "../assets/Close.svg";

class ContactModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handleMessageChange = (event) => {
        this.setState({ message: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name: "",
            email: "",
            message: "",
        });
        alert("Form Submitted");
    };

    render() {
        const showHideClassName = this.props.showModal
            ? "modal display-block"
            : "modal display-none";

        return (
            <div className={showHideClassName}>
                <div className="modal-main">
                    <button
                        className="Close-button"
                        type="button"
                        onClick={this.props.handleClose}
                    >
                        <img src={closeButton} alt="Close" />
                    </button>
                    <div className="Modal-content">
                        <div className="modal-header">
                            <h2>Contact</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                            </p>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-element">
                                <label>Name</label>
                                <input
                                    placeholder="Enter your Name here"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleNameChange}
                                />
                            </div>
                            <br />

                            <div className="form-element">
                                <label>E-mail</label>
                                <input
                                    placeholder="Enter your E-mail address here"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <br />

                            <div className="form-element">
                                <label>Message</label>
                                <textarea
                                    placeholder="Wanna share somethig with us?"
                                    value={this.state.message}
                                    onChange={this.handleMessageChange}
                                ></textarea>
                            </div>
                            <br />
                            <div className="submit-button">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>

                        <div className="modal-footer">
                            <div>
                                <p>
                                    Need more info?{" "}
                                    <a href="mailto: hello@newzera.com">
                                        hello@newzera.com
                                    </a>
                                </p>
                            </div>

                            <ConnectIcons connectDivClass="connect-icons" connectIconClass="connect-icon" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactModal;
