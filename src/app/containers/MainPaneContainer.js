/* eslint-disable no-alert */
/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import React from 'react';
// import Header from '../components/Header';
import Warning from '../components/Warning';
import Approved from '../components/Approved';
import styles from './MainPaneContainer.scss';

class PaneContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            isUsername: false,
            isWarning: false,
            isApproved: false,
            bgColor_header: '#33353d',
            bgColor_window: '#292a31',
            font_color: '#ccc9c9',
        };
    }

    render() {
        return (
            <div className="cux-form-box" style={{'backgroundColor': this.state.bgColor_window}}>
                <div id="header" className="cux-triggerContentWrapper cux-trigger-collapsible cux-profileAccordion-trigger " style={{'padding': '18px', 'justifyContent': 'center', 'backgroundColor': this.state.bgColor_header}}>
                    <p style={{'fontSize': '14px', 'color': this.state.font_color}}>Simple config settings</p>
                </div>
                <div style={{'padding': '10%'}}>
                    <div className="cux-form-field-wrapper cux-required" style={{'margin-top': '2px', 'margin-bottom': '5px', 'margin-right': '10px'}}>
                        <div className="cux-form-input-default-width">
                            <p style={{'fontSize': '14px', 'color': this.state.font_color, 'text-align': 'center'}}>Change theme of the window</p>
                            <br/>
                            <input type="button" className={styles.button_dark} value="Dark Theme" onClick={this.darkTheme} />
                            <input type="button" className={styles.button_light} style={{'float': 'right'}} value="Light Theme" onClick={this.lightTheme} />
                            <br/>
                        </div>
                    </div>
                        <label className="cux-field-item-label" htmlFor="userName" style={{'fontSize': '14px', 'color': this.state.font_color}} >Set username </label>
                        <br/>
                        <input type="text" className={styles.input_name} placeholder="Your name.." id="userName" onInput={this.readUsername.bind()}/>
                    <div className="cux-form-button-container">
                        <br/>
                        <input type="button" className={styles.button} style={{'backgroundColor': '#88b79f'}}value="Confirm" onClick={this.confirm.bind()}/>
                    </div>
                    <br/>
                    {this.state.isWarning && <Warning closeWindow={this.closeWindows}/>}
                    {this.state.isApproved && <Approved closeWindow={this.closeWindows} username={this.state.username} randomString={this.state.randomString}/>}
                </div>    
            </div>
        );
    }

    readUsername = (event) => {
        this.setState({username: event.target.value, isUsername: true});
    };

    confirm = () => {
        if (!this.state.isUsername || this.state.username.length < 1) {
            this.setState({isWarning: true});
        }
        if (this.state.isUsername && this.state.username.length > 1) {
            this.setState({isApproved: true});
        }
    };

    closeWindows = () => {
        this.setState({isWarning: false, isApproved: false});
    };

    darkTheme = () => {
        this.setState({ bgColor_header: "#33353d"});
        this.setState({ bgColor_window: "#292a31"});
        this.setState({ font_color: "#ccc9c9"});
    };
    lightTheme = () => {
        this.setState({ bgColor_header: "#D7E1E9"});
        this.setState({ bgColor_window: "#F2F8FD"});
        this.setState({ font_color: "#777676"});
    };
}

export default PaneContainer;
