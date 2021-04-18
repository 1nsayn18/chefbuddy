# chefbuddy
This web-buddy for chef is buggy

This projects requires node to be installed on your system. [Download](https://nodejs.org/en/download/)

Clone respository:
```
git clone <Your forked repo>
cd chefbuddy
```
To install dependencies:
```
npm run install-all
```

Setup for environment: 
1. Make a `.env` file in the Client Folder:
```
REACT_APP_AUTH0_DOMAIN=dev-n9z4vkcq.jp.auth0.com
REACT_APP_AUTH0_CLIENT_ID=oC8Dg4mdRn9TsR2OqAgrTiNq1pwzlIwP
```

2. Make a `.env` file in the Server Folder:
```
PORT=5000
MONGO_URI=
```

3. Make your own MONGO_URI link from the [mongodb](https://www.mongodb.com/) databsase and paste it in the `.env` folder [Reference](https://studio3t.com/knowledge-base/articles/connect-to-mongodb-atlas/)

To run development server:
```
npm run dev
```
