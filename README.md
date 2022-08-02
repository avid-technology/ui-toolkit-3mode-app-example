# Example single user app & config settings


### Introduction
This example shows how you can implement 1 CloudUX plugin with single user app for main panel and configuration settings for admin panel in Avid MediaCentral | CloudUX.

### How to run example

1. Before running 

	Configure package.json file:
	
	```text
	"alias": "your-avid-app-id",
    "secret": "your-app-secret-from-myavid-com"
    ```
	
	Configure connection in project.config.json:
	
	```text
	"connection": {
	    "hostIp": "your-mediacentral-cloudux-machine-address",
		"hostPort": "",
		"proxyPort": "443"
	}
	```
	  
2. From plugin folder in cli type:
    
    ```text
	npm install
	npm start
	```
	Go to https://localhost:443/ in browser to see main app.
	
	Go to https://localhost:443/admin to see config settings in admin panel.
	

### Structure of the plugin

View for config settings tab describes in ./avid_api/config/ViewConfig and imports into index.js.
Making user app and config settings tab visible at the same time:
	
	./src/index.js:
	
	  {
        name: appConfig.identity.appName,
        provides: ['apps'],
        create: () => AppEntry,
    },
    {
        name: `${appConfig.identity.configName}`,
        provides: ['configuration-settings'],
        create: () => ViewConfig_settings,
    }
	
	./src/package.json:
	
	"provides": {
        "apps": [
          {
            "name": "example-user-app-config-settings",
            "config": {
              "id": "example-user-app-config-settings",
              "title": {
                "en": "example-user-app-config-settings"
              },
              "dockable": false,
              "inspector": false
            },
          }
        ],
        "configuration-settings": [
          {
            "name": "config_test",
            "config": {
              "id": "config_test",
              "title": {
                "en": "config_test"
              },
              "dockable": false,
              "inspector": false
            }
          }
        ]
      }
	  
User app function describes in ./src/app/main.js. Container for config settings tab describes in ./containers/MainPaneContainer and imports into ./src/app/index.jsx.


### User App
When you open MediaCentral | Cloud UX in Main-View you will see simple user application.

![image](https://user-images.githubusercontent.com/50831927/87282650-2a14d600-c4fd-11ea-80d9-03030cbd0bc6.png)
After clicking you will see random generated image:

![image](https://user-images.githubusercontent.com/50831927/87282684-3305a780-c4fd-11ea-9fb2-d0c20a908e71.png)

Press "Print this page" button to print current page:

![image](https://user-images.githubusercontent.com/50831927/87282727-3ac54c00-c4fd-11ea-9cb4-feb0e9721368.png)

### Configuration Settings
When you open MediaCentral | Cloud UX in Admin-View click on the wrench icon to see configuration settings. You should be able to see "Simple config settings":

![image](https://user-images.githubusercontent.com/50831927/87282762-4284f080-c4fd-11ea-88e2-195d5748727b.png)
You can change theme of the window to light and revert to dark: 

![image](https://user-images.githubusercontent.com/50831927/87282783-49abfe80-c4fd-11ea-81ac-e716e2b4a59c.png)

You can enter your name into input field and after pressing "Confirm" button you will get it back:

![image](https://user-images.githubusercontent.com/50831927/87282815-516ba300-c4fd-11ea-8b6c-530047c4fc8b.png)

### Embedded App

To display the Embedded app in the Media Composer® you need to open it, go to 'Tools' -> 'MediaCentral | Cloud UX':
![image](.\img\1659356091975.png)

After MediaCentral | Cloud UX will dislay you should see your Embedded app like this:
![image](.img\1659356185467.png)
