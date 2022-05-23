<div align="center">
   <h1>:tshirt: CHECK MY FIT (Client) :tshirt:</h1>

   <h3><a href="https://check-my-fit.herokuapp.com/">https://check-my-fit.herokuapp.com/</a></h3>
   <a href="https://github.com/kaiguy920" target="_blank">
        <img src="https://img.shields.io/badge/-kai%20smith-purple?style=for-the-badge&logoColor=white">
   </a>
   <a href="https://www.kai-smith.com/" target="_blank">
      <img src="https://img.shields.io/badge/-Portfolio_-darkgreen?style=for-the-badge&logo=medium"/>
   </a>
   <a href="https://www.linkedin.com/in/smithkai920/" target="_blank">
      <img src="https://img.shields.io/badge/-Linkedin-blue?style=for-the-badge&``logo=Linkedin&logoColor=white">
   </a> 
   <a href="mailto:smithkai920@gmail.com" target="_blank">
      <img src="https://img.shields.io/badge/-Email-c14438?style=for-the-badge&logo=Gmail&``logoColor=white">
   </a>
<br />

   <a href="https://github.com/steviemilitello" target="_blank">
        <img src="https://img.shields.io/badge/-stevie%20militello-purple?style=for-the-badge&logoColor=white">
   </a>
   <a href="http://steviecodes.com" target="_blank">
      <img src="https://img.shields.io/badge/-Portfolio_-darkgreen?style=for-the-badge&logo=medium"/>
   </a>
   <a href="https://www.linkedin.com/in/stevie-militello/" target="_blank">
      <img src="https://img.shields.io/badge/-Linkedin-blue?style=for-the-badge&``logo=Linkedin&logoColor=white">
   </a> 
   <a href="mailto:steviemilitello@gmail.com" target="_blank">
      <img src="https://img.shields.io/badge/-Email-c14438?style=for-the-badge&logo=Gmail&``logoColor=white">
   </a>

</div>

<h1>:dress: Description</h1>

<p>Check my Fit is an app where you can share your outfits and have them rated. As a user you can add your outfits, add tags to your outfits, edit and delete your outfits, view other user's outfits, rate other user's outfits hot or not and add and delete comments on a outfit's page.</p>

<h1> :atom_symbol: Getting Started </h1>

<h3> :calling: Install Instructions </h3>
<details open>
<summary>Installation</summary>
<p></p>
<ul>
    <li>Fork and Clone this Repo (Client) and <a href="https://github.com/steviemilitello/check-my-fit-api">The API</a></li>
    <li>Follow the instructions on the <a href="https://github.com/steviemilitello/check-my-fit-client">Check My Fit API</a> Repo to install the API</li>
    <li>Install the necessary dependencies for this repo by copying the code below (or see dependencies to install individually): <br /><code>npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @testing-library/jest-dom @testing-library/react @testing-library/user-event axios bootstrap dotenv react react-bootstrap react-dom react-moment react-router-dom react-scripts sass uuid web-vitals</code></li>
    <li>run <code>npm start</code> for the API (runs on <code>localhost:3000</code>)</li>
    <li>run <code>npm start</code> for the this repo (The Client) and go to <code>localhost:8000</code> in your browser to view</li>
</ul>
</details>
<p></p>
<details>
<summary>Dependencies</summary>
<p></p>
<ul>
    <li><a href="https://www.npmjs.com/package/https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core">@Fortawesome/Fontawesome-Svg-Core</a> <code>npm i @fortawesome/fontawesome-svg-core</code></li>
    <li><a href="https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons">@Fortawesome/Free-Solid-Svg-Icons</a> <code>npm i @fortawesome/free-solid-svg-icons</code></li>
    <li><a href="https://www.npmjs.com/package/@fortawesome/react-fontawesome">@Fortawesome/React-Fontawesome</a> <code>npm i @fortawesome/react-fontawesome</code></li>
    <li><a href="https://www.npmjs.com/package/@testing-library/jest-dom">@Testing-library/Jest-Dom</a> <code>npm i @testing-library/jest-dom</code></li>
    <li><a href="https://www.npmjs.com/package/@testing-library/react">@Testing-Library/React</a> <code>npm i @testing-library/react</code></li>
    <li><a href="https://www.npmjs.com/package/@testing-library/user-event">@Testing-Library/User-Event</a> <code>npm i @testing-library/user-event</code></li>
    <li><a href="https://www.npmjs.com/package/axios">Axios</a> <code>npm i axios</code></li>
    <li><a href="https://www.npmjs.com/package/bootstrap">Bootstrap</a> <code>npm i bootstrap</code></li>
    <li><a href="https://www.npmjs.com/package/dotenv">Dontenv</a> <code>npm i dotenv</code></li>
    <li><a href="https://www.npmjs.com/package/react">React</a> <code>npm i react</code></li>
    <li><a href="https://www.npmjs.com/package/react-bootstrap">React-Bootstrap</a> <code>npm i react-bootstrap</code></li>
    <li><a href="https://www.npmjs.com/package/react-dom">React-Dom</a> <code>npm i react-dom</code></li>
    <li><a href="https://www.npmjs.com/package/react-moment">React-Moment</a> <code>npm i react-moment</code></li>
    <li><a href="https://www.npmjs.com/package/react-router-dom">React-Router-DOM</a> <code>npm i react-router-dom</code></li>
    <li><a href="https://www.npmjs.com/package/react-scripts">React-Scripts</a> <code>npm i react-scripts</code></li>
    <li><a href="https://www.npmjs.com/package/sass">Sass</a> <code>npm i sass</code></li>
    <li><a href="https://www.npmjs.com/package/uuid">Uuid</a> <code>npm i uuid</code></li>
    <li><a href="https://www.npmjs.com/package/web-vitals">Web-Vitals</a> <code>npm i web-vitals</code></li>

</ul>
</details>
<p></p>

<h3> :calling: How To Use </h3>

<p></p>

<h1>:arrow_right: Routes</h1>

<details>
<summary> Outfits</summary>

| Endpoint                  | Component | AuthenticatedRoute? |
|---------------------------|-----------|---------------------|
| `/outfits`                | `Index`   | No                  |
| `/outfits/:outfitId`      | `Show`    | Yes                 |
| `/outfits`                | `Create`  | Yes                 | 
| `/outfits/user/:userId`   | `Update`  | No                  |

</details>

<details>
<summary> Tags</summary>

| Endpoint           | Component | AuthenticatedRoute? |
|--------------------|-----------|-------------------- |
| `/tags/:tagId`     | `Index`   | No                  |
| `/tags/:outfitId`  | `Post`    | Yes                 |

</details>

<details>
<summary> Votes</summary>

| Endpoint           | Component | AuthenticatedRoute? |
|--------------------|-----------|-------------------- |
| `/vote/:outfitId`  | `Post`    | Yes                 |

</details>

<details>
<summary> Comments</summary>
</details>

<details>
<summary> User</summary>

| Endpoint         | Component | AuthenticatedRoute? |
|------------------|-----------|-------------------- |
| `/sign-up`       | `SignUp`  | No                  |
| `/sign-in`       | `SignIn`  | No                  |
| `/sign-out`      | `SignOut` | No                  |

</details>
<p></p>

<h1>:framed_picture: Screenshots</h1>

<h1>:bust_in_silhouette: User Story</h1>

<details open>
<summary>As a Public User</summary>
<p></p>
<ul>
    <li>As a public user they want to be able to be view user's outfits</li>
    <li>They want be able click on user's profiles</li>
    <li>They want be able click on each individual outfit</li>
    <li>They want to be able to see the rating on the outfit</li>
    <li>They want to be able t o see comments on an outfit</li>
    <li>They want to able to sign up if they choose for added functionality</li>
</ul>
</details>
<p></p>

<details open>
<summary>As a Logged in User</summary>
<p></p>
<ul>
    <li>As a logged in user they want to be able do all that a public user can do but with added functionality</li>
    <li>They want to be able to have a profile page with their outfits</li>
    <li>They want to be able to add their own outfits</li>
    <li>They want to be able to delete their own outfits</li>
    <li>They want to be able rate other user's outfits</li>
    <li>They want to be able to add comments on an outfit</li>
    <li>They want to be able to delete comments on an outfit</li>
</ul>
</details>
<p></p>

<h1>:framed_picture: Screenshots</h1>

<details>
<summary> :art: Wireframes</summary><br />

| Description | Screenshot |
|------------ | ------------|
| <h3 align="center">Sign in Page</h3> | <img src="https://i.imgur.com/wDpQTk6.png" width="700"/> |
| <h3 align="center">Index Page</h3> | <img src="https://i.imgur.com/2zZRJZU.png" width="700"> |
| <h3 align="center">Show Page</h3> | <img src="https://i.imgur.com/RZxyyd0.png" width="700"> |
| <h3 align="center">User Profile Page</h3> | <img src="https://i.imgur.com/vaZstpi.png" width="700"> |


</details>

<h1>:computer: Technologies Used</h1>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![FontAwesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) 
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-blue?style=for-the-badge&logoColor=white)
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

<h1>:fast_forward: Next Steps</h1>

<ul>
    <li>Add Top Outfits aggregated by Hot rating to User's Profile page</li>
    <li>Expand on the amount of tags available for a user to select</li>
    <li>Add ability to upload photos via Cloudinary API</li>
 </ul>
