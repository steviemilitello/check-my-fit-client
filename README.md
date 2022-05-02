# Check my Fit Client

# User Story:

**As a Public User:**
- navigate through index of looks.
- click on individual looks to view/see other user comments.
- sign up

**As a Logged in User:**
- they will to be able to look through a feed of outfits uploaded by other users
- they will be able to click on individual outfits to see more details, previous comments, & be able to add a comment
- they will be able to upload personal outfits, with a description
- they will be able to their or another users profile page and see a list of their outfits 


# Routes Table:

| Endpoint         | Component | `AuthenticatedRoute`? |
|------------------|-------------------|-------|
| `/sign-up`       | `SignUp`    | No |
| `/sign-in`       | `SignIn`    | No |
| `/outfits`  | `Index`     | No |
| `/outfits/:outfitId`  | `Show`| Yes |
| `/outfits/:outfitId`  | `Show`| Yes |
| `/outfits/user/:userId`  | `Update`| No |
| `/outfits`      | `Create`   | Yes | 
| `/tags/:tagId`  | `Index`| No |
| `/tags/:outfitId`  | `Post`| Yes |
| `/vote/:outfitId`   | `Post`   | Yes |


# Wireframes:
## Sign in page:
![sign in page](./public/signin.png)
## Index Page of all the Outfits: 
![index page](./public/index.png)
## Show Page:
![show page](./public/show.png)
## User Profile of Outfits
![user profile page](./public/profile.png)
 


# Approach Taken:
- create restful routes to be able to format an index, edit, show, and delete function
- use axios to pull in data from API to render to the client 
- format pages through react

# Installation Instructions:

# Tech Used:
- HTML
- Javascript
- React
- Boostrap
- CSS
- Axios
- Mongodb
- Mongoose

