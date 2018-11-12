# BulletTravel

## User Experience Design(UXD)

### Overview

This is a website designed for people that are looking to visit new places and to discover new touristique attractions. The website provides 
tariffs and an itinerary for the following destinations: USA, UK, Australia and Romania.

### What is this website for?

BulletTravel is an imaginary travel agency website to attract customers that want to enjoy their holiday with their family. 
It offers a series of travel packages along with places that can be visited. Not only does it allow users to search for places to visit, but
it also allows them to find accomodation, places to eat, touristique attractions and points of interest.
The website also allows users to send emails for project requests via the contact form.

### How does it work?

The website uses HTML and HTML5 markup language to put the structure of the website in place. It also uses CSS and Bootstrap to style 
the website. Javascript and jQuery have helped to the functionality of the website by allowing website visitors to toggle the menu and resize it when viewed in mobile, to find different places based on a change
function and to send emails via the contact form. Furthermore, these technologies allow those interested in the BulletTravel agency
to find particular destinations on Google Maps and to search for accomodation, hotels, restaurants, points of interest etc.
The website can be viewed [here](https://ioanhadarean.github.io/Interactive-Front-End-Milestone-Project/).

### User Stories
1. User is able to go to the main page 
2. User is able to navigate to different destinations on the same page
3. User is able to send emails using the contact form
4. User is able to search locations in different countries using the search fieldbox
5. User is able to find touristique attractions, bars, restaurants and accomodation for a dream holiday
6. User is able to get the rating of the searched places and to click on markers to view more details

### Existing Features

**Single Page Application(SPI) that surprises with the user centric design and visual content**
<br>`Easy-to-use navigation system`
<br>`Sticky navbar when scrolling on the page`
<br>`Internal links to different sections on the page`
<br>`Radio buttons that are used to filter museums, restaurants, bars, hotels, airports and banks`
<br>`Logo for travel agency in order to make it unique`
<br>`Search location box for entering a location`
<br>`Dropdown list with destination countries`
<br>`Google Maps`
<br>`Autocomplete function for cities (Note: The function eventually autocompletes everything)`
<br>`Google Map markers for finding the rating of a certain place, address and more details`
<br>`Sections for every destination`
<br>`Tariffs for each destination(UK, USA, Romania and Australia)`
<br>`Itinerary for every destination`
<br>`HD images used for every destination`
<br>`Bounce animation effect for each destination header`
<br>`Contact form with submit button`
<br>`Sending emails function`
<br>`Reset form and alert when submitting an email`
<br>`Responsive web design`
<br>`Grid system` 

### Features Left To Implement

1. SVG can be added as a feature because -webkit-text-stroke-width doesn't work in Internet Explorer.
2. Minor fixes can be made to make the website look pixel perfect.

## Bugs Fixed

1. When a user types a location in the empty fieldbox and wants to select a different country, 
the location does not clear out(fixed with an eventListener function that would clear out the
location field when a new country is selected).
2. When a user clicks on a radio button, the markers and locations are shown on the map even if 
the location is not selected(fixed with a function that would enable the radio buttons when the
length of the autocomplete string is more than 0).
3. When the contact form is about to be submitted, the form does not reset. Therefore, the user does
not know if the email was sent or not and he could spam a lot of emails(fixed by adding an alert
mentioning if the email was sent or not and a reset for the contact form).
4. When a user clicks on airports and there is no airports for that specific location, the results 
and markers from the previous place don't clear out(fixed by adding clearMarkers() and markers = []
after each time a radio button changes its value.

### Wireframe

<a href="https://imgbb.com/"><img src="https://image.ibb.co/h8dRfA/Bullet-Travel.png" alt="Bullet-Travel" border="0"></a>

## Tech Used

1. **HTML**, **CSS** and **Javascript**
    <br>Languages that were used to create the Dragon Ball Series website.
2. **Bootstrap v3.3.7**(https://getbootstrap.com/docs/3.3/getting-started/#download)
    <br>**Bootstrap** was used to give the project a simple and responsive layout.
3. **jQuery**(https://cdnjs.com/libraries/jquery/)
      <br>**jQuery** was used for toggling the navigation and for filtering the different place types.
4. **Font Awesome v4.7.0**(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css)
    <br>**Font Awesome v5.3.1**(https://use.fontawesome.com/releases/v5.3.1/css/all.css)
    <br>Font and icon toolkits based on CSS and LESS that were used to style the website.
5. **Google Fonts**(https://fonts.google.com/)
    <br>**Google Fonts** was used to style the text on the website(Roboto and Exo font-family).
6. **Javascript**(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js)
    <br>**Javascript** was used to put Google Maps on the website and to send emails for a project request using the contact form.
7. **EmailJS**(http://www.emailjs.com/)
    <br>**EmailJS** is an application that was used to add an email template for sending emails via the contact form.
    <br>EmailJS is an aplication that allows users to send emails directly from Javascript.
8. **Microsoft Word Office**(https://www.office.com/)
    <br>**Microsoft Word Office** is a text editor that was used in order to create the logo.
9. **Wow.js**(https://wowjs.uk/docs.html)
    <br>**Wow.js** is a Javascript library that was used in order to create the bounce animations for the destination headers.
10. **Animate.css**(https://daneden.github.io/animate.css/)
    <br>**Animate.css** is a CSS library that that was used in order to create the bounce animations for the destination headers.
11. **Maps Javascript API**(https://developers.google.com/maps/documentation/javascript/tutorial)
    <br>**Maps Javascript API** is a library that was used in order to add a map on the page and customize it.


## Testing

1. Prototype code was written and tested using Cloud9 and Chrome Developer Tools.
2. All HTML and CSS code used on the site has been tested using [The W3 CSS Validation Service](https://jigsaw.w3.org/css-validator/) 
            and [The W3 Markup Validation Service](https://validator.w3.org/).
3. All Javascript and jQuery code on the website has been tested using [JSHint](https://jshint.com/).
4. Site viewed and tested in the following browsers(including toggle functionality, filtering type places and using Google Maps):
<br>    i Google Chrome
<br>    ii Mozilla Firefox
<br>    iii Opera
<br>    iv Internet Explorer
5. Sending emails functionality was tested using Gmail and EmailJS.

## Deployment

The coding for the project was done in Cloud9. The code has been committed and pushed to https://github.com/IoanHadarean/Interactive-Front-End-Milestone-Project. 
The website has been published using GitHub Pages at the following address: https://ioanhadarean.github.io/Interactive-Front-End-Milestone-Project/

### Getting the code up and running

1. Copy the GitHub clone link.
2. Create a new working space in Cloud9 and add a description.
2. Open a new terminal in Cloud9 and type **git clone https://github.com/IoanHadarean/Interactive-Front-End-Milestone-Project.git**
3. Open the index.html from the cloned project and click Run.

## Credits

I would like to thank all code institute students for helping me along this project. Special thanks goes to my mentor Moosa Hassan for his amazing support
and guidance and to my girlfriend for amazing design ideas. I would also like to thank Marcin and Shane, two students from the Code Institute who helped me by providing documentation.

### Media

The HD `images` used on this site were obtained from [Google Images](https://images.google.com/).

### Information

The information used to create this site was from [Google Travel Guide](https://www.google.co.uk/destination).
