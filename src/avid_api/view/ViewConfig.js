/**
 * Copyright 2022 by Avid Technology, Inc.
 */
import ViewWrapper from './ViewWrapper';

const ViewConfig = {
    config: {},
    factory: () => {
        return new ViewWrapper();
    },
    _proto: new ViewWrapper(),
};

export default ViewConfig;
