This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can search pictures in the search bar and get images displaced nicely in the browser. 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Using Environment Variables in ReactJS
1. touch .env in the folder
2. open .env file, creare environment variables in it:
  - Make sure to use the prefix **REACT_APP** on every variable
  - Do **NOT** use quotation for the value of each variable
```
REACT_APP_AccessKey=sjfskljfksjkfsjfslkj
REACT_APP_KEY=fsjklfjskjfskjfkdse
```
3. check the variable in js file:
`console.log(process.env.REACT_APP_AccessKey); `
4. open .gitignore, add .env 

### Making API Request with React
This app uses **axios** package to make a get request from [Unsplash API](https://unsplash.com/documentation)

### Use Grid CSS system
This app uses grid system to style layout and access DOM with **Refs**:
- Refs is short for reference, it gives direct access to a single DOM element that's rendered by a component. 
- Create Refs inside the ImageCard constructor and assign it to an instance variable: `this.imageRef=React.createRef();`
