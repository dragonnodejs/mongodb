# DragonNode.js MongoDB
Bundle with services to develop applications with MongoDB
- Initialize db service with the MongoDB connection and the toObjectID converter
- Bind collections with indexes for the db service

## Installation
- Run ```npm install dragonnodejs-mongodb --save```
- Add the bundle to the "app.js":
```javascript
let modules = [
    [require('dragonnodejs-mongodb'), [
        ['db', {
            uri: process.env.MONGOLAB_URI || 'mongodb://127.0.0.1/app?auto_reconnect=true',
            options: { safe: true }
        }],
        ['collections', [
            ['examples', [
                [{ example: 1 }, { unique: true }]
            ]]
        ]]
    ]]
];
```
