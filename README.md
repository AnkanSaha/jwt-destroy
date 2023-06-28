# JWT-Destroy: The Ultimate JWT Tool
JWT-Destroy is a powerful superset of the popular jsonwebtoken npm package. It provides seamless integration with jsonwebtoken's features, allowing you to effortlessly generate and verify tokens. Additionally, with manual token expiry capabilities, JWT-Destroy empowers you with precise control over token lifetimes.

## Installation
```bash
npm install jwt-destroy@latest  # Install the latest version
```

## Usage
```javascript

const jwt = require('jwt-destroy');

// Register a secret key
const Operation = new jwt('secret'); // secret is the secret key by default if not provided

// Generate a token
const token = Operation.generate({id: 1, name: 'John Doe'}, '1h'); // 1h is the expiry time by default if not provided