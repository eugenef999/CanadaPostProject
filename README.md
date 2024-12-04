This is a project which allows users to find addresses by postal code. 

## Preliminaries
Perform the following steps.
1. Install Node.js from [https://nodejs.org/en/](https://nodejs.org/en/) if not already intalled.
2. Clone this project (or download and unpack its zip file) to a local folder.
3. Open a terminal.

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

## Set Up the Frontend
To set up the client side, we again need to install some node modules and then run the application:
```bash
cd client
cd my-app
npm i --save-dev @types/node
npm run dev
```
If everything works properly, navigate to [http://localhost:3000](http://localhost:3000).   

## Design and Documentation

 The backend was made with Express.js, see [https://expressjs.com/](https://expressjs.com/). The frontend was made with Next.js, see [https://nextjs.org/](https://nextjs.org/). The API endpoint created by the backend allows get requests to a url of the form [http://localhost:5000/api/v1/<ZipCode>], where <ZipCode> is replaced by a user entered postal code. 
The returned data is a list of addresses in the form 
```json
Address = {
  Id: string;
  Text: string;
  Description: string;
};
```
where Text is the street number and name, Description gives the city, province, postal code. For example, the url [http://localhost:5000/api/v1/H7P3P5] gives 

```json
{
    "addresses": [
        {
            "Id": "CA|CP|A|10430056",
            "Text": "552 Rue Ingrid",
            "Description": "Laval, QC, H7P 3P5",
        },
        {
            "Id": "CA|CP|A|10430057",
            "Text": "556 Rue Ingrid",
            "Description": "Laval, QC, H7P 3P5",
        },
        {
            "Id": "CA|CP|A|10430058",
            "Text": "560 Rue Ingrid",
            "Description": "Laval, QC, H7P 3P5",
        }
    ]
}
```

 

