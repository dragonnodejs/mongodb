# DragonNode.js MongoDB
Bundle with services to develop applications with mongodb
- Initialize db service with the mongodb connection
- Initialize collection service to define collections with indexes

# Installation
- Add bundle to the "package.json":
```javascript
{
    "dependencies": {
        "dragonnodejs-mongodb": "1.*"
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
                    uri: '',
                    options: { safe: true }
                },
                collection: {}
            }
        }
    }
};
```
