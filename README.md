# BenzByGreg Shop Phase-1-Final Project

The Mercedes Benz Enthusiast Hub alias BENZBYGREG is a one-stop web application catering to Mercedes Benz aficionados. This interactive platform  showcases a curated selection of Mercedes Benz models, their specifications, and captivating visuals. The application aims to create an immersive experience for users who want to delve into the world of Mercedes Benz vehicles.

NOTE: This project  gives the users ability to purchase products(cars) and join our Mercedes community, THAT BEING THE PURPOSE OF THE PROJECT.
The web app has been integrated with Stripe Api to achieve this ..Though the mode is still in TEST MODE.




## Table Of Contents

[Introduction](#BenzByGreg-Shop-Phase-1-Final-Project)

[Features](#Features)
   - [Model Showcase](#Model-Showcase)
   - [Api Integration](#api-Integration)


[Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)


[API Integration](#api-integration)

[License](#license)

[Acknowledgments](#acknowledgments)


## Features
1. **Model shop Showcase:**
   - A collection  of  Mercedes Benz models are displayed on the homepage.
   - Images, model names, and brief descriptions for each model are included in each car grid
   - Visually appealling and user friendly images used to showcase the models.

   ![model page](<Screenshot from 2024-02-11 11-45-23.png>)
 
2. **User Ratings (Basic):**
   - Implements a basic user rating system for each model.The user can like a model by clicking the thumbs up icon and it glows green.Alternatively the user can dislike a model by clicking the thumbs down icon and it glows red.

   ![like/dislike image](<Screenshot from 2024-02-11 11-48-58.png>)

   - Allows users to provide a rating (e.g., on a scale of 1 to 5 stars) for the service that our shop has provided.
   
  
![rates image](<Screenshot from 2024-02-11 11-50-34.png>)

3. **API Integration:**
   - Successfully integrated with the Stripe API to post data about purchase specifications on the models and add then credit the amount into their Visa cards..The amount will be subsequently be deducted on the card.
   - Handles API responses gracefully and manage any necessary authentication.

Purchased Product below
   ![purchased product](<Screenshot from 2024-02-11 11-57-47.png>)

Api Integration

![stripe checkout page](<Screenshot from 2024-02-11 11-59-59.png>)


4. **Event Handling:**
   - Event listeners for user interactions, such as clicking on a model to view specifications have been incorporated.
   

## Getting started

### Prerequisites


1. Clone the repository to your local machine.

```bash
$ git clone git@github.com:Moringa-SDF-PTO5/Phase-1-project-gregorykago.git 
```

 


2. Open a terminal and navigate to the project directory. 
Open the stripeProject folder and head to the server directory folder. You can cd server through the path your directory follows to the project.

```bash
$ cd Mercedez Benz/server 
```

### Installation

1. Once you are in your server folder in the terminal....Run this command to start the backend server 

```bash
$ npm run devStart
```



If the server has started...you should see this message in the terminal to confirm that the server is working 


```bash
$ $ npm run devStart

> server@1.0.0 devStart
> nodemon server.js

[nodemon] 3.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server is running on port 3000

```


Note: If your facing challenges with the port 3000 that the server should be running into ....you can kill/terminate  any previous processes engaging the port 3000 through this command.IT IS NOT A MUST TO RUN THIS COMMAND IF YOU DO HAVE YOUR SERVER RUNNING SMOOTHLY.

```bash
$ fuser -k 3000/tcp
```

2. Open your web browser and go to http://localhost:3000.

### API INTEGRATION

 Making a Purchase.
1. Browse through the showcased Mercedes Benz models on the homepage.You can click the rev up button on the home page to scrol you to the shop section

![revup button](<Screenshot from 2024-02-11 12-54-21.png>)

or alternatively scroll to the shop page section.

2. Click on a specific model to view detailed specifications.



3. If you decide to make a purchase, click on the "Buy Now" button.

![purchased product](<Screenshot from 2024-02-11 11-57-47.png>)


4. You will be prompted to enter your payment details securely via the integrated Stripe checkout.

![stripe checkout page](<Screenshot from 2024-02-11 11-59-59.png>)




5. Complete the payment process to finalize your purchase and eventually taken to this success page.

![success Page](<Screenshot from 2024-02-11 12-57-19.png>)

### License

This project is licensed under the [MIT License](LICENSE).

### Acknowledgments
I would like to express my gratitude to the following individuals and organizations for their contributions, support, and resources that have been invaluable in the development of the **BenzByGreg Shop**:

- **Stripe:** Special thanks to [Stripe](https://stripe.com/) for providing a secure and seamless payment infrastructure, enabling users to make purchases with confidence.

- **Moringa School:** I appreciate [Moringa school](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiK9-Tw_aKEAxU2QUECHcwOCDoYABAAGgJ3cw&ase=2&gclid=EAIaIQobChMIivfk8P2ihAMVNkFBAh3MDgg6EAAYASAAEgJSB_D_BwE&ohost=www.google.com&cid=CAASJORoHa2LLpPz846DBxVhhEyz_mIvcNnHZ_R4tWoL3IuSCcmYsA&sig=AOD64_04tJFd3Gstl7m-sNfbwiempwyFwg&q&nis=4&adurl&ved=2ahUKEwifmODw_aKEAxUhRKQEHaoDBq0Q0Qx6BAgFEAE) and its staff for guiding me and  providing me with the necessary resources to undertake this project.

- **Node.js:** My development is built on the foundation of [Node.js](https://nodejs.org/), which has been instrumental in creating a robust and scalable application.

- **GitHub:** I extend my thanks to [GitHub](https://github.com/) for providing an excellent platform for version control and collaboration, facilitating the open-source nature of our project.

- **Open Source Community:** A big shoutout to the broader open-source community for sharing knowledge, tools, and inspiration. This project stands on the shoulders of the collective expertise and passion that fuels the development community.

I am grateful for the support and collaborative spirit that makes the development journey enjoyable and fulfilling.