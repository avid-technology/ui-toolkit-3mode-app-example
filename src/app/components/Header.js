import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="cux-triggerContentWrapper cux-trigger-collapsible cux-profileAccordion-trigger " style={{'padding': '18px', 'justifyContent': 'center', 'backgroundColor': '#33353d'}}>
                <p style={{'fontSize': '14px'}}>Generate your image!</p>
            </div>
        );
    }
}

export default Header;
