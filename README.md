# DragonNode.js MongoDB
Bundle with services to develop applications with MongoDB
- Initialize db service with the MongoDB connection and the toObjectID converter
- Bind collections with indexes for the db service

# Installation
- Add bundle to the "package.json":
```javascript
{
    "dependencies": {
        "dragonnodejs-mongodb": "^3.0.0"
    }
}
```
- Run "npm install"
- Extend the configuration in "app.js":
```javascript
var config = {
    modules: {
        npm: [
            [require('dragonnodejs-mongodb'), {
                db: {
                    uri: 'mongodb://127.0.0.1/app?auto_reconnect=true',
                    options: { safe: true }
                },
                collections: {
                    examples: [{ column: 1 }, { unique: true }]
                }
            }]
        ]
    }
};
```
