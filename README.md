# DragonNode.js MongoDB
Bundle with services to develop applications with MongoDB
- Initialize db service with the MongoDB connection and the toObjectID converter
- Bind collections with indexes for the db service

## Installation
- Add bundle to the "package.json":
```javascript
{
    "dependencies": {
        "dragonnodejs-mongodb": "^4.0.0"
    }
}
```
- Run "npm install"
- Extend the configuration in "app.js":
```javascript
let config = {
    modules: {
        [require('dragonnodejs-mongodb'), [
            ['modules/db', {
                uri: process.env.MONGOLAB_URI || 'mongodb://127.0.0.1/app?auto_reconnect=true',
                options: { safe: true }
            }],
            ['modules/collections', [
                ['examples', [
                    [{ example: 1 }, { unique: true }]
                ]]
            ]]
        ]]
    }
};
```
