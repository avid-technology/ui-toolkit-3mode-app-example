import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPaneStyles.scss';

const Approved = ({closeWindow, username, randomString}) => {
    return (
        <div className="cux-shadow-box" style={{display: 'flex', 'justify-content': 'center', 'align-items': 'center', 'background-color': '#606065b8', 'padding': '20px'}}>
            <div className="cux-notification">
                <div className="info"/>
                <div style={{'fontSize': '14px'}}>Your username: {username}</div>
                <div className="message">
                    <div>
                        <input type="button" className={styles.button} value="Close" onClick={closeWindow}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Approved.propTypes = {
    closeWindow: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
};

export default Approved;
