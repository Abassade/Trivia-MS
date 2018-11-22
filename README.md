
# Trivia MS

Trivia MS is a node.js api using mongodb to store set of questions and answers with options.

## Installation

Ensure you have the following software installed on your machine
--node
--mongodb 
--(optional) you can have robomongo installed to be able to view your saved collection.

## modules installation

```bash
npm install express --save
npm install -g nodemon --save -dev
npm install mongoose --save
npm install body-parser --save
```

## How to run the api
### Use the second command, if you have nodemon iinstalled globaly
```bash
node index.js
nodemon index.js
```


## How to run the test (Mocha chai)
Before using the test, you have to get mocha and cha installed
```bash
npm mocha --save -dev
npm chai --save -dev
npm chai-http --save -dev
```
Then after, copy the below code to your command to run the test

```bash
mocha mocha_test/test.js
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author 
Abass Makinde

## Routes

NAME     			     | END POINT            |  PARAMS / BODY DATA
-------------------------| -------------        | ---------------
Base     				 | /                    |
Get all posted data [GET] 	     | /question           |
(Strictly for admin) Get all posted data with answers [GET] 	     | /admin           |
Get a single data [GET]     | /question/:id        |`id` e.g `ft-90`
Add a data [POST]  	 | /question/       | {`question`,`options:{A, B, C, D}`,`answer`}
Update a data [PUT] | /question/:id | repeat the same thing as POST
Delete a data [DELETE]| /question/:id |
Delete all data [DELETE]| /question |
