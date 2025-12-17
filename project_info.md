#                         Applying bcrypt for password
#                         ============================

* Previous Project "01_User_Simple_Signup_Login_CRUD" To be coutinue......

* Ab hum apne '01_User_Simple_Signup_Login_CRUD' project ko continue rkte
  hue es project mai new functionality add krenge:

1. Es project mai hume password ko 'bcrypt' krna hai. 

================================================================================

* Lekin hmara ye project bhi es filhal yhi "01_User_Simple_Signup_Login_CRUD"
  project hai mtln same hai kyuki humne copy kiya hai bas naam hi toh folder
  ka change kr diya hai usse project thodi naa change ho jayega.

  Agr hum apne es project mai koi change krke ise deploy krenge toh ye GITHUB 
  pr same es '01_User_Simple_Signup_Login_CRUD' waali repo mai push ho jayega.

  Lekin hum aisa nhi chahte hume ise alg se push krna hai.

* Toh iske liye sbse pehle hume es project mai se '.git' folder ko hatana pdega
  kyuki abhi .git folder same hai, es project k liye hume new .git folder banana 
  hai toh pehle old waale ko remove krna padega.

  Toh uski command hai:

Command:
--------

=> rm -rf .git

=> git status

fatal: not a git repository (or any of the parent directories): .git

* Toh ab .git folder hat gaya hai yaani ab ye git repo nhi hai toh hum ab ise 
  starting se ek new git repo banayenge.

<------------------------------------------------------------------------------>

* Ab hum apne es project ko git repo banayenge:

Commands:
---------

=> git init

=> git status

<------------------------------------------------------------------------------>

* Ab GITHUB pr jaa kr new repo create krenge:

Ab local git repo ko remote se kaise connect kare ??

jaise GitHub se kyuki hume hmara code ab online kahi par rakhna 
hai or uske liye GitHub ek free hoisting service provide krta 
hai code ko save or manage karne ke liye:
   
STEPS:
------
=> google => github => signin => email
                                 password

* Ab hum ek new repo banayenge:
-------------------------------

=> new repository => Repository name => 02_Applying_bcrypt_for_password.git 

=> public => create repository

Command:
--------
=> git remote add origin https://github.com/IshanYadav1008/02_Applying_bcrypt_for_password.git

* Ab hmri local repo, remote repo se connect ho chuki hai.

<------------------------------------------------------------------------------>

* Ab hum apni local repo ko push krenge:

Commands:
---------

=> git add .

=> git commit -m "Pushing the OLD repo login, signup and CRUD Code"

=> git push origin master

================================================================================

1. Ab hum bcrypt ko kaise apply krenge password ke liye apne code mai:

* Installing 'bcrypt' for converting password in as Hashing form:

command:
--------
npm i bcrypt --save

<------------------------------------------------------------------------------>

2. Ab hum 'User.js' model mai jyenge:

=> models => User.js

* Pehle toh hum bcrypt ko import krenge:

CODE:
-----
const bcrypt   = require('bcrypt');

* Phir apne 'User.js' model file mai or 'userRoutes.js' route file mai 
  iske according code likhenge or pre-written code mai changes kr denge.

<------------------------------------------------------------------------------>

3. Lekin hume apne es project ke liye new DB chyiae toh uske liye ab hum
   kya krenge:

   .env file mai jayenge.

=> .env  // Or isme last mai ye name ('users_bcrypt_password') add kr 
            denge.

# URL of Local MongoDB Server
MONGODB_URL_LOCAL = mongodb://localhost:27017/users_bcrypt_password

================================================================================

4. Ab hum Postman pr jyenge:

#                               user signup                   

=> 02_Applying_bcrypt_for_password => POST => http://localhost:3000/user/signup

=> Body => raw => JSON

{
    "name"              : "Ravi",
    "age"               : 28,
    "mobile"            : "9898989898",
    "email"             : "ravi@gmail.com",
    "address"           : "RRR, QQQ Street, GGG City",
    "username"          : "ravi",
    "password"          : "12345"
}

O/P:
----
{
    "response": {
        "name": "Ravi",
        "age": 28,
        "mobile": "9898989898",
        "email": "ravi@gmail.com",
        "address": "RRR, QQQ Street, GGG City",
        "username": "ravi",
        "password": "$2b$10$GfSK2gXjHRvlMCi3VLl4WOG/8ewOjGfOFmyX.hMzPPP8MEGwKFywe",
        "_id": "6942aa14c9b0d25be1e8fe2e",
        "__v": 0
    },
    "message": "Signup successful"
}

<------------------------------------------------------------------------------>

#                               user login                 

=> 02_Applying_bcrypt_for_password => POST => http://localhost:3000/user/login

=> Body => raw => JSON

{
    "username"          : "ravi",
    "password"          : "12345"
}

O/P:
----
{
    "message": "Login successful",
    "user": {
        "id": "6942aa14c9b0d25be1e8fe2e",
        "username": "ravi"
    }
}

================================================================================

5. Ab hume check krna hai ki kya hmara database create ho chuka hai, toh
   uske liye hum terminal pr apne MongoDB database ko check krenge:

Command:
========

=> ctrl + alt + t (To open terminal) 

=> mongosh

=> show dbs

=> users_bcrypt_password (Toh ye database hume ab show ho raha hai)


