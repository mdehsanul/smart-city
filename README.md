# website name: 
Smart City

## live:
https://smart-city-b8b00.web.app/

or,

https://smart-city-b8b00.firebaseapp.com/

### Feature:
1. Navbar -> in the navbar, a logo, Home, Destination, Blog, Contact, and Login button added. Home, Destination, Blog, Contact button redirects the user to the Home page.
The login button uses to go to the Login page to create a new account or log in. when a user login or create a new account the login button switch to the user name.                                                                            
3. Home page -> On this page, users will get four-vehicles (train, bike, car, bus) option cards for choice for their travel with the navbar. after choosing any of the vehicle  they redirect to the Login page to create a new account or login
4. Login page -> in this page, user can create a new account or login.     
                 login can be done using:
                 1. Email, password
                 2. facebook
                 3. google
                 create a new account can be done using:
                 1. name
                 2. email
                 3. password
                 4. confirmpassword
6. Search page -> On this page, users get the option to write their travel starting point and destination point with date and time. also, they can see the google map for know detail(path distance, time need to reach, etc) about their travel. when a user login or create a new account in the navbar login button will change and will show the user name.

8. SearchResult page -> On this page,  we show users the places they write(static) and vehicle image, vehicle name, number of people, total cost dynamically according to their selection of vehicle from the Home page. besides, they can see google Maps with user selection place.  when a user login or create a new account in the navbar login button will change and will show the user name.

10. React Router is used to switch between the pages and the URL is Dynamically generated.

12. PrivateRoute -> PrivateRoute used to make Search page, SearchResult page authorized page by giving permission to the users who are already logged in or create a new account.
otherwise, the user can not enter in the Search page, SearchResult page.

14. NoMatch -> if a user writes/enters the wrong URL address that not exit then this page will show with 404.

### Responsiveness:
1. Desktop
2. mobile devices are
    * Galaxy Note 3(360 X 640), 100%, Online
    * Moto G4(360 X 640), 100%, Online
    * Galaxy S5(360 X 640), 100%, Online
 
### Attention: (this can be happen or not)
1. when a user login or create a new account, for loading problem(maybe) user name will not show in the navbar, for this goto SearchResult page by clicking submit button from the Search page or goto Home page and come to the Search page. this time you can see the user name.
2. when a user login or create a new account and the user is on the Search page or SearchResult page and reload the page the user will redirect to the login page for again login and after login sometimes the user name will not show in the navbar if happen go to the Home page by navbar and again goto Search page this time you can see the user name.
