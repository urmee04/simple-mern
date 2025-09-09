## Lab 17.2: Full-Stack Deployment

### Overview

This lab guides to deploy a MERN (MongoDB, Express.js, React, Node.js) stack application to a live production environment for the first time. We'll take a prototype application that has only run locally and deploy it to publicly accessible URLs using free-tier Platform-as-a-Service (PaaS) providers.

---

### Objectives

By completing this lab, we will:

- Fork and configure a pre-built MERN starter application
- Set up a cloud database using MongoDB Atlas
- Deploy a backend Express/Node.js API as a Web Service on Render
- Deploy a frontend React application as a Static Site on Render
- Connect the frontend and backend to create a fully functional live application

---

### Prerequisites

- A GitHub account
- Basic familiarity with JavaScript and the MERN stack
- Understanding of environment variables and configuration

---

### Technologies Used

- **MongoDB Atlas:** Cloud database service
- **Render:** Platform-as-a-Service for deployment
- **Node.js:** Backend runtime environment
- **Express.js:** Backend web framework
- **React:** Frontend user interface library
- **Git:** Version control system

---

### Live URLs

- [frontend static site](https://simple-mern-frontend2.onrender.com)
- [backend web service](https://backend-task-api-riih.onrender.com)

---

### Lab Steps

**1. Repository Setup**

- Fork the provided MERN [starter application](https://github.com/jmsv/simple-mern) from GitHub
- Clone your forked repository to examine the code structure : `git clone https://github.com/jmsv/simple-mern.git`

**2. Database Configuration**

- Create a free [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) account
- Set up a new cluster and database
- Create a database user with appropriate permissions
- Obtain the MongoDB connection string

**3. Backend Configuration**

- Configure environment variables for the backend
- Update database connection settings
- Test the backend locally with the cloud database

**4. Frontend Configuration**

- Update API endpoint URLs to point to the future backend deployment
- Configure build settings for production

**5. Deployment to Render**

- Create a [Render](https://render.com) account
- Deploy the backend as a [Web Service](https://dev.to/slacky300/deploying-your-mern-stack-application-on-render-a-step-by-step-guide-23nk)
- Deploy the frontend as a [Static Site](https://dev.to/slacky300/deploying-your-mern-stack-application-on-render-a-step-by-step-guide-23nk)
- Configure environment variables in both services

**6. Testing and Verification**

- Test the live application functionality
- Verify frontend-backend communication
- Troubleshoot any deployment issues

---

### Expected Outcome

- A live, publicly accessible MERN stack application
- A cloud-hosted MongoDB database
- Understanding of the production deployment process
- Experience with PaaS providers and their configuration
