# MEAN-Shahid-Software-Irrigation
This is an independent project created by Shahid Karim in the CIT team of the irrigation group. 

A web application developed using a MEAN stack in order to manage irrigation at CSUN

TO RUN THIS APPLICATION:

Requirements:

A .envrc file with the following variables:
```
export OKTA_ORG_URL=
export OKTA_TOKEN=
export OKTA_CLIENT_ID=
export OKTA_CLIENT_SECRET=
export SECRET=
export OKTA_APPBASEURL=
export OKTA_CALLBACK_URI= Please note: the above variables must be properly set (have the correct values)
```

First time setup:

Open a terminal and go into this application's directory.
Type "npm install" then press Enter.

On Windows:

Open Cmder and go into this application's directory.
Type "bash" then press Enter.
Type ". .envrc" then press Enter.
Type "npm start" then press Enter.
Open a browser and go to localhost:3000

On Linux:

Open a terminal and go into this application's directory.
If this is the first launch on your current machine type ". .envrc" then press Enter.
Type "sudo npm start > ~/log &" then press Enter. Clarification on the above step: npm will start and have all output logged into a file called "log" then the ampersand tells the terminal to make it a background process. If it doesn't automatically become a background process just press "CTRL + Z" then type bg.
Open a browser and go to localhost:3000
