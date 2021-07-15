# RDIR
## RDIR => Random dog image resizer



RDIR is a back-end application, TypeScript-powered.
And has a connection to MongoDB Cloud via mongoose ODM.


## Features

- Resizes a random dog image according to your width and height parameters
- Saves the resized image to the database
- Gets a list of images according to your option width and height parameters


# Tech

## Installation

RDIR requires [Node.js](https://nodejs.org/) v10+ to run.

Clone the repo
```sh
gh repo clone Novytskyi-Yevhen/RandomDogImgResize
```
Create .env file into the root folder with two parameters
```sh
PORT=3000
LINK_TO_DB='' // your link to DB 
```

Install the dependencies and/or devDependencies 
```sh
npm install
```
And start the server.

```sh
npm run start
```

For production environments...

```sh
npm install --production
```

## Dependencies

Dillinger is currently dependencies with the following plugins.

| Dependencies | Where is used |
| ------ | ------ |
| [axios](https://www.npmjs.com/package/axios)| For request to API - https://random.dog/woof.json | 
| [dotenv](https://www.npmjs.com/package/dotenv)| For use environment variables | 
| [express](https://www.npmjs.com/package/express) | To create and start the server  | 
| [lodash](https://www.npmjs.com/package/lodash) | To sort data from a database | 
| [mongoose](https://www.npmjs.com/package/mongoose) | To connect to the database | 
| [resize-img](https://www.npmjs.com/package/resize-img)| For resizing random img getting from API | 
| [ts-node](https://www.npmjs.com/package/ts-node) | To start a project without compile to JS | 
| [typescript](https://www.npmjs.com/package/resize-img) | For development without JS and with using types| 

## How it works
# /upload/dog/image
![](https://i.ibb.co/YX2xvWR/image.png)

For resizes a random dog image according to your width and height parameters you need to send a POST request on /upload/dog/image. And the body has two required parameters: width and height

# /list/dog/images
![](https://i.ibb.co/TPYP1s0/image.png)

For get all images from the database you need to send GET requests on /list/dog/images. Request has one non required parameters: option: "width" or "heigth". If you send another or empty variable on option you getting list of images sorted by creation time
