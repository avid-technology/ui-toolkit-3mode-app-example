/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import ReactDOM from 'react-dom';
import React from 'react';
// import 'cloudux-bootstrap/dist/css/cloudux.min.css';

import PaneContainer from './containers/MainPaneContainer';

// export const API_URL='http://localhost:8000/api/';

export default class ApplicationContainer {
    constructor() {
    }

    render({domElement}) {
        this.el = domElement;
        ReactDOM.render(
            <PaneContainer/>,
            domElement,
        );
    }

    destroy() {
        ReactDOM.unmountComponentAtNode(this.el);
    }
}
