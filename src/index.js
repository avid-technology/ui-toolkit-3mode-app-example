/**
 * Copyright 2022 by Avid Technology, Inc.
 */
import appConfig from './package.json';

import ViewConfig from './avid_api/view/ViewConfig';
import AppEntry from './avid_api/entry/EntryConfig';
import ViewConfig_settings from './avid_api/config/ViewConfig';

export const avid = [
    {
        name: `${appConfig.identity.appName}-view`,
        provides: ['appViews'],
        create: () => ViewConfig,
    },
    {
        name: `${appConfig.identity.appName}-default-theme`,
        provides: ['theme'],
        create: () => ({
            key: 'dark',
            css: './style.css',
        }),
    },
    {
        name: appConfig.identity.appName,
        provides: ['apps'],
        create: () => AppEntry,
    },
    {
        name: `${appConfig.identity.configName}`,
        provides: ['configuration-settings'],
        create: () => ViewConfig_settings,
    },
];