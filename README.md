
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
```

## How to run the api
```bash
node index.js
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
Get a single product[GET]     | /question/:id        |`id` e.g `ft-90`
Add a product [POST]  	 | /question/       | {`question`,`options:{A, B, C, D}`,`answer`}
Update a product [PUT] | /question/:id | repeat the same thing as POST
Delete a data [DELETE]| /question/:id |
Delete all data [DELETE]| /question |
