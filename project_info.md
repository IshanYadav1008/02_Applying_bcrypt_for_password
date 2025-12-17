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

