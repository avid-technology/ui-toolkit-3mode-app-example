import React from 'react';
import PropTypes from 'prop-types';
import { getLocalization } from 'cloudux-l10n';
import l10nData from '../../l10n/lang.en.json';

import styles from './MainPaneStyles.scss';

const MainPane = ({token, exampleAction}) => (
    <div className={styles['main-pane']} onClick={() => exampleAction(
        {
            data: !token,
            callback: () => ({}),
        })
    }>
        {token ?
            `${getLocalization(l10nData)('example-plugin-message')} False`
            :
            `${getLocalization(l10nData)('example-plugin-message')} True`
        }
    </div>
);

MainPane.propTypes = {
    token: PropTypes.bool.isRequired,
    exampleAction: PropTypes.func.isRequired,
};

export default MainPane;
