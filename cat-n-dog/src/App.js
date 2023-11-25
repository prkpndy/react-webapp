import React from "react";

import "./styles/App.css";

import LeftView from "./components/LeftView";
import RightView from "./components/RightView";
import Header from "./components/Header";
import ContactModal from "./components/ContactModal";
import ConnectIcons from "./components/ConnectIcons";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showContactModal: false,
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({ showContactModal: true });
    }

    hideModal() {
        this.setState({ showContactModal: false });
    }

    render() {
        return (
            <div className="app">
                <Header showModal={this.showModal}/>
                <LeftView />
                <RightView />
                <ContactModal
                    showModal={this.state.showContactModal}
                    handleClose={this.hideModal}
                />
                <ConnectIcons connectDivClass="app__connect-div" connectIconClass="app__connect-div__icon" />
            </div>
        );
    }
}

export default App;
