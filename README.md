# comp523-teamM-techtalk

# Step 1
Install Frameworks

Install node js from https://nodejs.org/en/

Install yarn:
```npm install --global yarn```
or 
```sudo npm install --global yarn```
If prompted, enter password

```yarn create next-app catsanddogs```

# Step 2

Run development server
```cd catsanddogs```
```yarn dev```

Open webpage on browser, use URL:
```http://localhost:3000```

Test that webpage is responsive
Replace all the return values in index.js to 
```<div>Hello world</div>```
Refresh the page on the browser to see the new text


Create fies ```cats.js``` and ```dogs.js``` inside the ```pages``` folder

Add code from github repo

Test ```http://localhost:3000/cats```
Test ```http://localhost:3000/dogs```

Test API route
```http://localhost:3000/api/hello```


# Step 4
Create Navbar
Add new folder ```components``` and add new file ```NavBar.js```
Create new file ```NavBar.module.css```
Add elements for navigation for ```/```, ```/cats``` and ```/dogs```
Add the NavBar component to ```_app.js```