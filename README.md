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
		"proxyPort": "8080"
	}
	```
	  
2. From plugin folder in cli type:
    
    ```text
	npm install
	npm start
	```
	Go to https://localhost:8080/ in browser to see main app.
	
	Go to https://localhost:8080/admin to see config settings in admin panel.
	

### Structure of the plugin

View for config settings tab describes in ./avid_api/config/ViewConfig and imports into index.js.
Making user app and config settings tab visible at the same time:
	./src/index.js:
	{
        name: appConfig.identity.appName,
        provides: [providing],
        create: () => AppEntry,
    },
    {
        name: `${appConfig.identity.appName}`,
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
	  
User app function describes in ./src/app/main.js. Container for settings tab describes in ./containers/MainPaneContainer and imports into ./src/app/index.jsx.


### User App
When you open MediaCentral | Cloud UX in Main-View you will see simple user application.
![UserApp](/uploads/ed71e7d9484bd85edccaf081a5ac6411/UserApp.PNG)


### Configuration Settings
When you open MediaCentral | Cloud UX in Admin-View click on the wrench icon to see configuration settings. You should be able to see "Generate your image":
![config_settings](/uploads/c0dac0ab771ae719d3070a2985c82e55/config_settings.PNG)

After clicking you will see random generated image:
![after_clicking](/uploads/4effd63a7a3dafe608ccc35083f66f42/after_clicking.PNG)

Press "Print this page" button to print current page:
![print_page](/uploads/250840c5a14ae22673c1caae20a4bf7f/print_page.PNG)

