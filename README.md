# Bibliotheca App

Bibliotheca app is divided into two projects: back and front. You can find detailed information about those projects in their README files.
Bibliotheca UI includes the following main pages:

## Sign in/ sign up

![auth view]()
<br>The user can log in or create a new user from this view. Provide both input fields in each case.

---

### Book list

![book list]()
<br>The user can see her book list and also edit/remove a book from her book list using the edit and delete buttons.

---

### New book

![new book]()
<br>The user can add a new book to her book list.

### Edit book

![edit book]()
<br>The user can edit the title of an existing book in her list.

# Docker images

The application was dockerized following the steps described in the article [Build and Dockerize a Full-stack React app with Node.js, MySQL and Nginx](https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/).
In this application, we will access both the front and the back using the Nginx proxy.

# Deploy in AWS

The application was deployed as Dockers containers in AWS following the step described in the article [Deploying Docker containers on ECS](https://docs.docker.com/cloud/ecs-integration/). Docker ECS integration converts the Compose application model into a set of AWS resources, described as a CloudFormation template. You can check the CloudFormation template in the `/aws` folder.
