import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPaneStyles.scss';

const Warning = ({closeWindow}) => {
    return (
        <div className="cux-shadow-box" style={{display: 'flex', 'justify-content': 'center', 'align-items': 'center', 'background-color': '#606065b8', 'padding': '20px'}}>
            <div className="cux-notification">
                <div className="warning"/>
                <div style={{'fontSize': '14px'}} >Not enough data</div>
                <div style={{'fontSize': '14px'}} className="message">Fill all fields</div>
                <div className="message">
                    <div>
                        <input type="button" className={styles.button} value="Close" onClick={closeWindow}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Warning.propTypes = {
    closeWindow: PropTypes.func.isRequired,
};

export default Warning;
