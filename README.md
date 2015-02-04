# DragonNode.js MongoDB
Bundle with services to develop applications with MongoDB
- Initialize db service with the MongoDB connection and some helper for ObjectId and bind collections with indexes

# Installation
- Add bundle to the "package.json":
```javascript
{
    "dependencies": {
        "dragonnodejs-mongodb": "~2.0.1"
    }
}
```
- Run "npm install"
- Extend the configuration "app/config.js":
```javascript
module.exports = {
    modules: {
        npm: {
            'dragonnodejs-mongodb': {
                db: {
                    uri: 'mongodb://127.0.0.1/app?auto_reconnect=true',
                    options: { safe: true }
                }
            }
        }
    }
};
```
