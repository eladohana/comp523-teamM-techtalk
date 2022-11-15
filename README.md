# comp523-teamM-techtalk

This repository is a simple website project to showcase some capabilities of Next.js for a tech-talk.  Follow steps below to run through the project.

# Step 1 - Node.js and yarn

If you don't have Node.js installed, you may do so from https://nodejs.org/en/

Install yarn if needed by following these steps:

```npm install --global yarn```

or 

```sudo npm install --global yarn```

If prompted, enter password


# Step 2 - set up the project files

If you wish to set up the project without cloning the repository, use the following command

```yarn create next-app catsanddogs```

If you clone the repository, switch to the ```install``` branch using ```git checkout install```

Then run ```yarn install```

** Note: ** you may have to remove ```.DS_Store``` files before switching branches as these are created automatically on MacOS


# Step 3 - Run development server

Run the server using the following commands

```
cd catsanddogs
yarn dev
```

Open webpage on browser, use URL:
```http://localhost:3000```

Test API route
```http://localhost:3000/api/hello```

# Step 4 - Add code from branches

You may checkout the ```dev1``` through ```dev8``` branches and review the code throughout showing the different features.

If you did not clone the repository, you can add the files manually

The final product should provide access to the ```/cats``` and ```/dogs``` endpoints using dynamic endpoints along with the API routes.
