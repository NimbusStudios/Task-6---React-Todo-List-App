Topic: React JS
Submission Date: 23 July 2024
Time: 15:00

Please submit by pushing to your github repository and sharing the link on Slack with your mentor.

Title: Task 6 - React Todo List App

Objective
The objective of this task is to help cement your current working knowledge of React.js (React Hooks, reusable components) while assessing your understanding of navigation/routing in React.js projects.

This is the third official task for React based on Lesson 3.

Scenario: You are creating a todo list (task list or task planner) app that allows users to add a task to a list of tasks that have three different color-coded priority levels (High, Medium and Low). The app should have four main pages:

Registration Page
Login Page
Home Page
Profile Page

User Interface
Create a user-friendly interface that is intuitive and easy to use
Allow users to view, add, update and delete their tasks
Have a page accessible to the user to view and update their details
The interface should have an appropriate page with appropriate  inputs to enter the following details
Task name
Task definition
Task priority
Task status
Task due date

Features
Users should be able to do the following CRUD operations
Add new tasks
View added tasks
Update added tasks (Updating due date or priority level)
Delete tasks
Users should be able to mark a task as completed
Users should be able to filter tasks by
Due date
Priority level
Status
Incomplete
Complete

Evaluation Criteria
Evaluation Criteria:
User-friendliness and visual appeal of the design
Is the design intuitive
Does the design have a proper and understandable layout
Does the app flow from one function to another in an understandable and easy to follow manner
Does the app show notifications for processes occurring in the background and after an operation
Does the design have colors that blend well together
Does the design maintain a consistent typography
Functionality
Tasks can be successfully added with all outlined details
Tasks can be successfully retrieved
Task details can be successfully updated
Tasks can be deleted
Tasks can be filtered as per requirements
User can register
User profile can be viewed
User profile can be updated
Navigation has been utilised to move from one page to another
Page interactivity
The mouse cursor changes when hovering over clickable elements
Clickable elements change color when hovered over to indicate interactivity
It is easy to navigate through the application’s different pages
Utilisation of React.js features
Did trainee create their own components
Were the components reused where appropriate
Was React state utilised properly
Were props sent and handled properly
Components are customised through props for similar design elements instead of creating new elements
Code quality and code organisation
Variable names follow the standard and recommended naming approach, camelCasing
Variable names are self-explanatory
Logic is broken into smaller code blocks (functions) making it more readable
Comments utilised where necessary
Responsiveness of the page
Is the page responsive to different web view sizes at these common breakpoints:
320px
480px
768px
1024px
1200px


The requirements of the app are as follows:
New users should be able to register on the app
Registered users should be able to login
Should be able to add a new task with task description, and priority of the task
Should be able to update any existing task. So changing a task from a high priority to a low priority or adding more text on the description itself. 
Should be able to fully delete an existing task
Should be able to search (filter) tasks by their priority
Home Page should only be accessible when logged in, this is called a guarded route
Data should be persistent.
Bonus: (can be added after submission date)
In addition to number 3, while adding a task include the due date for the task
When logging in add a warning to show users a task is overdue
Add functionality to be able to set a task as completed. This will require that you have a list of previously completed tasks that you add the completed tasks to. While removing them from the current list of tasks that still need to be completed. Completed tasks only include tasks that were marked as completed not deleted tasks. 
You should be able to see all these completed tasks after setting them as completed
In conjunction with 9.c, create a separate page for all completed tasks, this is where you are routed to when you want to view completed tasks.
In addition to 9.c, include the date the task was completed on the list of previously completed tasks
Give users the ability to search in your app directly from the url of the app, 
eg ( { domain }/{ path }?search= )

Instructions:
Create a React project to address this problem or use case. You are expected to come up with your own design.
Make use of reusable components wherever applicable
Make it responsive to different screen sizes.
The main point of data storage will be local storage (localStorage directly available from JS), which will allow you to add, update and delete from it.
You are allowed to use libraries in this project as long as they do not get in the way of you addressing the requirements of the app. Eg Tailwind for CSS
You are to submit in the form of links, either a github link or live link of the portal. Sending code files will not count as a submission.
It is recommended that everyone uses react-router-dom version 6 for the task so it is easier for everyone to help one another in the case of bugs/errors etc. npm automatically will select this version if you do not specify the version. 
