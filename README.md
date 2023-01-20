# Bibliotheca App

Bibliotheca app is divided into two projects: back and front. You can find detailed information about those projects in their README files.
Bibliotheca UI includes the following main pages:

## Log in/ Sign up

The user can log in or create a new user from this view. Both input fields are mandatory.<br><br>
![login](https://user-images.githubusercontent.com/6905544/213213991-260ba1b9-8e05-46b7-a030-0b48472881e5.JPG)

---

## Homepage

The homepage includes the navigation menu, from the user can navigate to different pages.<br><br>
![homepage](https://user-images.githubusercontent.com/6905544/213212729-22177711-107e-4546-9c5e-321ed464ca8d.JPG)

## Book list

The user can see her book list and also edit/remove a book from her book list using the edit and delete buttons.<br><br>
![book_list](https://user-images.githubusercontent.com/6905544/213212943-781d7041-ecfb-4589-8803-a6275e841c41.JPG)

## New book

The user can add a new book to her book list.<br><br>
![new_book](https://user-images.githubusercontent.com/6905544/213214622-9afd3da5-5ddd-4f2c-bdf3-604062942ca6.JPG)

## Edit book

The user can edit the title of an existing book in her list.<br><br>
![edit_book](https://user-images.githubusercontent.com/6905544/213214766-4e9c0225-e1f8-4a2b-a7b9-940b98b4971c.JPG)

## New password

The user can modify her password on this page.
![new_password](https://user-images.githubusercontent.com/6905544/213663829-f62b4360-9ee8-4f9a-84b1-6699c20ff90b.JPG)

# Docker images

The application was dockerized following the steps described in the article [Build and Dockerize a Full-stack React app with Node.js, MySQL and Nginx](https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/).
In this application, we will access both the front and the back using the Nginx proxy.

# Deploy in AWS

The application was deployed as Dockers containers in AWS following the step described in the article [Deploying Docker containers on ECS](https://docs.docker.com/cloud/ecs-integration/). Docker ECS integration converts the Compose application model into a set of AWS resources, described as a CloudFormation template. You can check the CloudFormation template in the `/aws` folder.
