import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import "../styles/ContactModal.css";

import ConnectIcons from "./ConnectIcons.jsx";
import closeButton from "../assets/Close.svg";

import addContactUsMutation from "../queries/addContactUsMutation.js";

function ContactModal(props) {
    const [name, changeName] = useState("");
    const [email, changeEmail] = useState("");
    const [message, changeMessage] = useState("");

    const [addContactUs, { loading, error, data }] =
        useMutation(addContactUsMutation);

    let mutationResult = "";
    if (loading) {
        mutationResult = <p>Sending request...</p>;
    }
    if (error) {
        mutationResult = <p>Err... Something gone wrong</p>;
    }
    if (data) {
        mutationResult = <p>Request sent successfully</p>;
    }

    const handleNameChange = (event) => {
        changeName(event.target.value);
    };

    const handleEmailChange = (event) => {
        changeEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        changeMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        addContactUs({
            variables: {
                name: name,
                email: email,
                message: message,
            },
        });

        changeName("");
        changeEmail("");
        changeMessage("");
    };

    const showHideClassName = props.showModal
        ? "modal display-block"
        : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <button
                    className="Close-button"
                    type="button"
                    onClick={() => {
                        mutationResult = "";
                        props.handleClose();
                    }}
                >
                    <img src={closeButton} alt="Close" />
                </button>
                <div className="Modal-content">
                    <div className="modal-header">
                        <h2>Contact</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-element">
                            <label>Name</label>
                            <input
                                placeholder="Enter your Name here"
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <br />

                        <div className="form-element">
                            <label>E-mail</label>
                            <input
                                placeholder="Enter your E-mail address here"
                                type="text"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <br />

                        <div className="form-element">
                            <label>Message</label>
                            <textarea
                                placeholder="Wanna share something with us?"
                                value={message}
                                onChange={handleMessageChange}
                            ></textarea>
                        </div>

                        <div className="mutation-result">{mutationResult}</div>
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

                        <ConnectIcons
                            connectDivClass="connect-icons"
                            connectIconClass="connect-icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactModal;
