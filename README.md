This is a project which allows users to find addresses by postal code. 

## Set Up the Backend
First, install node modules and start the server:
```bash
cd server
npm install -g express
npm link express
npm start
```
If successful, you should see the message
```bash
App listening on port 5000!
```
If so, open a new terminal and continue to the next phase.

## Setting Up the Frontend
To set up the client side, we again need to install some node modules and then run the application:
```bash
cd client
cd my-app
npm i --save-dev @types/node
npm run dev
```
If everything works properly, navigate to [http://localhost:3000](http://localhost:3000).   


