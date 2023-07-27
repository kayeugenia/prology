# Prology Overview
### Chosen Theme: 
Revolutionizing the Workplace

### Problem Statement: 
How can we allow employees to seek joy in their workplaces, while providing them with practical benefits?

### Tech Stack: 
Front-end: React, CSS 
Back-end: Supabase [PostgreSQL]

### Inspiration
With times making it more competitive for one to be employed, many employees may find themselves stuck in a mundane career that they are not passionate about, or lose their initial motivation after being tied down to a position long term. Furthermore, there are many other factors in a workplace that could add further stress to an employee. These include a lack of a support group, or just having too many tasks to complete without seeing any visible progress.

### What it does
Prology is a mobile web app that aims to organize the tasks an employee has to be completed and has completed within a company. Prology allows users to create Projects that are all displayed on a Dashboard, add tasks to projects, as well as to move tasks around between 3 different categories. These categories are namely the To-Do, Doing, and To-Be Reviewed categories. Best of all, this collaborative platform ensures that the project dashboard is visible to all invited team members, fostering transparency and enhancing teamwork.

When a task within a project that a user is in is successfully completed on time, points will be added to a user's total score. There will also be a page to view a leaderboard of scores across the company. This does not serve to promote individual competition, but rather unison and teamwork as the scores will be displayed by departments. This will encourage employees to work together with fellow staff in their department as well and celebrate departments that have employees that are doing well. Depending on each company's preferences, potential rewards may be offered to the top department on the leaderboard, further incentivising and recognising their exceptional performance.

### How we built it
Backend We used Supabase's platform to connect with our React app, and this helped us in the area of User authentication and the Login and Register features of the website. In the coming future, we plan to establish a connection between our frontend and PostgreSQL to store user projects, tasks, and maintain a record of leaderboard history.

Frontend Our frontend was designed to help users efficiently organize their tasks, which can be a challenge when one is part of many different projects. The different pages can be navigated through a sidebar. Moving from the dashboard to the leaderboard page is made simple with just a click. Our team considered the fact that displaying individual scores of an employee on the leaderboard may actually make working more stressful, hence we opted to display scores as a cumulative total of the department, or whatever group they are a part of in their workplace.

Regarding the profile of the user, this will include their individual scores, their name, as well as the department they are part of. Users can also see a history of all the projects they have completed before.

### Challenges we ran into
As a team, we are new to the ways of building a website efficiently, and were still getting familarised with the whole process. The time constraint also made this harder with our limited knowledge of backend development. We were also unable to get a proper dataset of a company's employees due to privacy and time constraints, hence the frontend design is just a mockup of how the display would look like, rather than actual data.

### Accomplishments that we're proud of
Even though we were unable to code out a more dynamic app, we are proud to be able to push ourselves to learn more new things, even in simply designing and working with more components in an app than what we have done before. We are also proud that we can create something that will be useful for the community.

### What we learned
We learnt how to authenticate users, as well as route between different sites and links. We had to work with different components and pages, which was something new to us. Given the limited amount of time and knowledge, we are very grateful for the opportunity to experience first-hand the process of building a website from scratch. We are also proud that we can create something that will be useful for the community.

### What's next for Prology
Ideally, we can make it more dynamic, and learn more skills and technical knowledge to improve on its functionality for users.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
