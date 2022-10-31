# Front End Capstone

Group Hack Reactor FEC project. When given only a wireframe and business requirements create a mock e-commerce product page.
Personally I was responsible for building out the Questions and Answers component and sub. components along with all testing related to the component. Other responsibilities being setting up Webpack for production and setting up testing environment for Jest and RTL. 

> ### Group members<br>
> Nick Amenda(Product Overview)<br>
> Cameron Montgomery(Q&A Component)<br>
> Jonathan Liang (Reviews). <br>

## Table of Contents

1. [Description](#description)
2. [Usage](#usage)
3. [Requirements](#requirements)
4. [Development](#development)
5. [Production](#production)
6. [Testing](#testing)

## Description

After completing the junior phase at Hack Reactor groups are assigned to complete a collaborative group project building out a product page of an e-commerce site. Students are given just a wireframe and business requirements to use and are tasked to plan and build the site. We used React, Express, Webpack, CSS, and Node.js to build the site with Jest and React Testing Library for testing. Along with meeting the business requirements we also were tasked with building out 70% test coverage of our component. Since our team consisted of 3, not 4, we were instructed to not include "Related Products" component.

[Provided Wireframe](https://xd.adobe.com/view/e600dc0f-454c-44e3-5075-7872d04189ff-9031/)

## Usage

First Hack Reactor collaborative project. Project is the culmination of all the front-end skills students have been learning. Students learn to use proper Git workflows, reviewing commits and pull requests. Technical skills involve React (functional components and hooks), Node.js/Express.js is used to forward requests to the API adding authentication to ensure keys are not included in client bundles. Jest and RTL was used for testing and Webpack for bundling.

## Requirements

Node.js - version 16.0+

### Installing Dependencies

From within the root directory:
> 1. Run ```npm install``` to install all required dependencies

## Development

Setting up the development environment:
> 1. Ensure dependencies are installed.
> 2. To run both server-dev and build-dev with watch flags, run ```npm run start-dev```
> 3. Navigate to localhost port 3000, http://localhost:3000

## Production

Creating production build:
>  1. Ensure dependencies are installed
>  2. To create production build files, run ```npm run build```
>  3. To start server, ```npm run start```

## Testing

To get a coverage report from Jest use script ```npm run test-coverage```, along with the console coverage report an HTML file will be created in the coverage directory located in the projects root.

To just run the jest tests in the console with no coverage report use script ```npm run test```.
