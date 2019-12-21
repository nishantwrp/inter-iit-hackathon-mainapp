# Roadपे

Roadपे is a cross platform game to incentivize the process of reporting the progress of the under-construction and under-maintenance roads. It would also provide real-time analysis and verification of the progress by crowd-sourcing.

## Workflow

The workflow of the application will be as follows

- First the government official will login to the admin app, and will add a project, marking the road to be constructed in the map provided and other required details.
- Users will report the progress of the road by clicking the photo of the road and our app will verify whether the photo belongs to a valid site.
- The backend will form the clusters of the images coming from the same location.
- After a location has enough pictures, to be double sure about the authenticity, the pictures of the road in that cluster will be spread across many other users to verify the progress.
- After many people validate the images, the road status will be updated. In case of a maintenance issue, the issue will be reported to a government official.

## Gamification

- Each user will have a experience score and coins.
- Diamonds and rubys would be the source of the coins coins.
- Diamonds will be placed on locations which do not have enough pictures to gain more images of the location.
- Rubys will be placed on locations which have enough pictures of them and need to be verified.
- After a cluster is verified, the people who took part in reporting and verifying the images would be awarded with coins and experience points.
- Also if a validation check fails, the points would be reduced.
- Government would provide incentives to people with a certain experience and coins.

## Admin

- An admin is a government official who supervises the construction work and is required to be sent the progress data.
- Admin has the power to create road contracts of two categories i.e. construction and maintenance.
- Admin has define region of the contract by selecting control points on the map.
- He can view the details of any contract which include-
  - View latest verified images of the contract along with the location where they were taken.
  - Viewing latest image of a particular location in map.
  - View a heatmap of the contract area which shows locations of high public interest and their variation with time.

## Technical Stack
- **Angular** framework is used to make the main client facing web app.
- **Django** framework is used to make the admin dashboard web app.
- **Google Maps API** is extensively used to render the maps, reports and geo location of the clients.
- **Amazon Web Services** is used for deploying the AI that would be used.
- **Google Firebase** is used for user authentication models.

## Deployment

- User App - [https://inter-iit.netlify.com/](https://inter-iit.netlify.com/)
- Admin App - [http://roadpe-admin.herokuapp.com/](http://roadpe-admin.herokuapp.com/)

Note:-
Credentials for logging in the django admin panel for admin app are
- username - admin
- password - asd
