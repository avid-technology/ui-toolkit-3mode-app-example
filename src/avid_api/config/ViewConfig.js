/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import ApplicationContainer from '../../app/index';

const ViewConfig = {
    config: {
        index: 101,
        displayName: 'Simple config settings',
    },
    factory: () => {
        return new ApplicationContainer();
    },
};

export default ViewConfig;
