# express_QueryStrings

STEPS TO RUN SERVER:

1. clone repo into your desired folder
2. open terminal and change directory to your folder, command may vary based on preference of terminal. `cd`
3. type command `node index.js` and hit enter
4. terminal will print message that server is running, then go to `localhost:3000/get` or `localhost:3000/get?` with your customized string queries to
   see results in the console and page

HOW STRING QUERIES ARE USED AND TESTED:

the block of code used to get string queries is below:

    // GET route for handling query strings
    app.get('/get', (req, res) => {
      
      // Access query string parameters using req.query
      const queryStringParams = req.query;
   
      // Log the query string parameters to the console
      console.log('Query String Parameters:', queryStringParams);
  
      // Send a response to the client
      res.send('Query String Parameters logged. Check the console.');
    
    });

req.query is the object used to store the string parameters 

## EXAMPLES
some examples of what some string queries look like can be:

`localhost:3000/get?name=asfand&age=27` will get the console output of `Query String Parameters: { name: 'asfand', age: '27' }`. the & character indicates another attribute in the list

`localhost:3000/get?name=asfand%20tanwer&home=seattle,%20WA` will get the console output of `Query String Parameters: { name: 'asfand tanwer', home: 'seattle, WA' }`

`localhost:3000/get` will get the console output of `Query String Parameters: {}`

characters like `%20` indicate spaces and the same attribute like `name` can be assigned two different values which get the result of  `Query String Parameters: { name: [ 'asfand', 'ozzy' ] }`

there are many string queries with special characters to indicate different actions look up more in express libs for expirementation 

