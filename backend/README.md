# FIND-THERAPIST-GHANA API

---
## Stack
*Language : Javascript(nodejs)*
*Database: Mongodb*

---

## Basic Features

- Register a new account(JWT & social authentication)
- Login to account (JWT & social authentication)
- Reset password
- Forgot password
- Create profile
- Edit profile
- Get profile
- Search profile
- Delete account


## User
| field  |  data_type | constraints  |
|---|---|---|
|  firstName  |  string |  required |
|  lastName     | string  | required | 
|  email | string  |  required, unique|
|  password |   string |  required  |
|  confirmPassword |   string |  required  |
|  telephoneNumber  |  string |  required |
|  workNumber  |  string |  required |
|  licensingBoard  |  string |  required |
|  licenseNumber  |  string |  required |

---
### Social authentication
- Route: /auth/google
- Method: GET

---
### MHP signup

- Route: /auth/signup
- Method: POST
- Body: 
```
    {
        "firstName": "Yaa",
        "lastName": "Asantewa",
        "email": "yasantewa@mail.com",
        "password": "12345678",
        "passwordConfirm": "12345678",
        "telephoneNumber": "0573003000",
        "workNumber": "0244405040",
        "licensingBoard": "Ghana Psychology Board",
        "licenseNumber": "GhaPSYRO1423",
        "termsAgreement": true
    }
```
- Responses

    Success
    ```
    {
    "status": "success",
    "data": {
        "user": {
            "firstName": "Yaa",
            "lastName": "Asantewa",
            "email": "yasantewa@mail.com",
            "telephoneNumber": "0573003000",
            "workNumber": "0244405040",
            "licensingBoard": "Ghana Psychology Board",
            "licenseNumber": "GhaPSYRO1423",
            "termsAgreement": true,
            "name": "Yaa Asantewa",
            "id": "643d30442ae674757f9be7b7"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDNkMzA0NDJhZTY3NDc1N2Y5YmU3YjciLCJpYXQiOjE2ODE3MzE2NTUsImV4cCI6MTY4MTczODg1NX0.iPXrSFmwsQsZSFQwZb7nsiCIb6-eiXgG_iUvtggv8Oo"
        }
    }
    ```
---
### MHP Login

- Route: auth/login
- Method: POST
- Body: 
    ```
    {
        "email": "yasantewa@mail.com",
        "password": "12345678"
    }
    ```
- Response: 
    ```
        {
    "status": "success",
    "data": {
        "user": {
            "firstName": "Yaa",
            "lastName": "Asantewa",
            "email": "yasantewa@mail.com",
            "telephoneNumber": "0573003000",
            "workNumber": "0244405040",
            "licensingBoard": "Ghana Psychology Board",
            "licenseNumber": "GhaPSYRO1423",
            "name": "Yaa Asantewa",
            "id": "643d30442ae674757f9be7b7"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDNkMzA0NDJhZTY3NDc1N2Y5YmU3YjciLCJpYXQiOjE2ODE3MzIyMjMsImV4cCI6MTY4MTczOTQyM30.2BZoBs7kgsqHco1lv5uxECzdxh-zGGH9aaWLerxggB0"
        }
    }
    ```

### Get MHP by name
- Route: auth/user
- Method: GET
- Query Params: 
    - name
- Responses
    -success
    ```
        {
            "status": "success",
            "data": {
                "termsAgreement": true,
                "firstName": "Kwame",
                "lastName": "Atobam",
                "email": "katobam@mail.com",
                "licensingBoard": "Ghana INs",
                "licenseNumber": "Gha-uioy",
                "name": "Kwame Atobam",
                "id": "63fc9b0b31f5fe4b81379bef"
            }
        }
    ```
    -fail
    ```
        {
            "status": "fail",
            "message": "user not found"
        }
    ```
---

### Get MHP by userId
- Route: auth/user/{userId}
- Method: GET
- Responses
    -success
    ```
        {
            "status": "success",
            "data": {
                "termsAgreement": true,
                "firstName": "Kwame",
                "lastName": "Atobam",
                "email": "katobam@mail.com",
                "licensingBoard": "Ghana INs",
                "licenseNumber": "Gha-uioy",
                "name": "Kwame Atobam",
                "id": "63fc9b0b31f5fe4b81379bef"
            }
        }
    ```
    -fail
    ```
        {
            "status": "fail",
            "message": "user not found"
        }
    ```
---

### Forgot-password
- Route: auth/forgot-password
- Method: PATCH
- Body: 
    ```
        {
            "email": "test@user.com"
        }
    ```

- Response: 
    ```
        {
            "status": "Error",
            "message": "Reset link sent to email"
        }
    ```
---

### Reset password
- Route: /auth/resetpassword/{token}
- Method: PATCH
- Body: 
    ```
        {
            "password": "newPassword"
        }
    ```

- Response: 
    ```
        {
            "status": "success",
            "message": "Password reset successfully"
        }
    ```
---

## PROFILE
| field  |  data_type | constraints  |
|---|---|---|
|  bio    | string  |  | 
|  profilePic | string  |  |
|  gender| string  |  |
|  workAddress | string  |  |
|  experience | number  |  |
|  specialties | string  |  |
|  interestGroup | string  |  |
|  officeHourStart | string  |  |
|  officeHoursClose | string  |  |
|  region | string  | required |
|  town | string  | required |
|  website | string  |  |
|  facebook | string  |  |
|  instagram | string  |  |
|  linkedin | string  |  |

---

### Profile Routes
---

### create profile (logged in users only )

- Route: /api/v1/profile
- Method: POST
- Header
    - Cookies: jwt {token}
- Body: Form data

    | KEY  |  VALUE |
    |---|---|
    |  bio | too big for an about |  
    |  profilePic | img2.jpg |
    |  gender|  female | 
    |  workAddress |   |
    |  experience |   |
    |  specialties | CBT |
    |  interestGroup | Women  |
    |  officeHourStart | 9:00  |
    |  officeHoursClose | 4:00 |
    |  region | Greater Accra |
    |  town |  Madina |
    |  website | www.adwoasmart.com  |  
    |  facebook | www.facebook.com/AdwoaSmart  | 
    |  instagram | www.instagram.com/AdwoaSmart | 
    |  twitter |  www.twitter.com/AdwoaSmart |
    |  linkedin | www.linkedin.com/AdwoaSmart | 
- Response: 
    ```
    {
    "status": "success",
    "message": "profile successfully created",
    "data": {
        "bio": "too big for a bio",
        "profilePic": "https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg",
        "gender": "female",
        "workAddress": "BA-350-8987",
        "experience": 1,
        "specialties": "CBT",
        "interestGroup": "Women",
        "region": "Greater Accra",
        "town": "Madina",
        "website": "www.adwoasmart.com",
        "facebook": "www.facebook.com/Adwoa Smart\n",
        "instagram": "www.instagram.com/AdwoaSmart",
        "tiktok": "",
        "linkedin": "www.linkedin.com/AdwoaSmart",
        "twitter": "www.twitter.com/maame",
        "user": {
            "firstName": "Adwoa",
            "lastName": "Smart",
            "email": "adwoasmart@mail.com",
            "telephoneNumber": "0573003000",
            "workNumber": "0244405040",
            "licensingBoard": "Ghana Psychology Board",
            "licenseNumber": "GhaP1234",
            "termsAgreement": true,
            "name": "Adwoa Smart",
            "id": "643fbee715bfcf91790189ff"
        },
        "_id": "643fc0c415bfcf9179018a07",
        "createdAt": "2023-04-19T10:21:56.383Z",
        "updatedAt": "2023-04-19T10:21:56.383Z",
        "__v": 0
    }
}
    ```
---

### Edit profile (logged in user)

- Route: /api/v1/profile/{profileId}
- Method: PATCH
- Header
    - Cookies: jwt {token}
- Body: Form data
    | KEY  |  VALUE |
    |---|---|
    |  bio | clinical psychologist |  
    |  profilePic | img2.jpg |
    |  gender|   | 
    |  workAddress |   |
    |  experience |   |
    |  specialties | mental health |
    |  interestGroup |   |
    |  officeHourStart |   |
    |  officeHoursClose |  |
    |  region |   |
    |  town |   |
    |  website |   |  
    |  facebook | www.facebook.com/jaja  | 
    |  instagram | | 
    |  tiktok |   |
    |  snapchat |   | 

- Responses
    ```
       {
            "status": "success",
            "message": "profile successfully created",
            "data": {
                "bio": "Jaja the man",
                "profilePic": "https://res.cloudinary.com/doxxo2k1j/image/upload/v1679430997/therapist-profile-pics/bu9ycpoyaswje6zqhucj.jpg",
                "gender": "male",
                "workAddress": "GA-350-9898",
                "specialties": mental health,
                "interestGroup": ,
                "region": "Western Region",
                "town": "Fijai",
                "user": {
                    "firstName": "Jaja",
                    "lastName": "Doe",
                    "email": "jaja@mail.com",
                    "licensingBoard": "Ghana INs",
                    "licenseNumber": "GhaPSYRO51423",
                    "id": "641a122314341db16556871f"
                },
                "_id": "641a155614341db165568727",
                "createdAt": "2023-03-21T20:36:38.256Z",
                "updatedAt": "2023-03-21T20:36:38.256Z",
                "__v": 0
            }
        } 
    ```
---

### get owner profile (logged in user)
- Route: /api/v1/profile/
- Method: GET
- Header
    - Cookies: jwt {token}

- Response
    ```
        {
            "_id": "641a155614341db165568727",
            "bio": "Jaja. Clinical Psychologist",
            "profilePic": "https://res.cloudinary.com/doxxo2k1j/image/upload/v1679430997/therapist-profile-pics/bu9ycpoyaswje6zqhucj.jpg",
            "gender": "male",
            "workAddress": "GA-350-9898",
            "specialties": [
                "mental health"
            ],
            "interestGroup": [],
            "region": "Western Region",
            "town": "Fijai",
            "user": {
                "firstName": "Jaja",
                "lastName": "Doe",
                "email": "jaja@mail.com",
                "licensingBoard": "Ghana INs",
                "licenseNumber": "GhaPSYRO51423",
                "id": "641a122314341db16556871f"
            },
            "createdAt": "2023-03-21T20:36:38.256Z",
            "updatedAt": "2023-03-21T20:40:31.994Z",
            "__v": 0,
            "facebook": "www.facebook.com/jaja"
        }
    ```
---

### Search MHP
- Route: /api/v1/profile/profiles
- Method: GET
- Query params:
    - name
    - specialty
    - region
    - town
    - page ( default: 1)
    - per_page (default: 10)

- Response
    ```
    {
    "status": "success",
    "page": 1,
    "result": 1,
    "data": [
        {
            "_id": "6449194ce21e8ff84f6591ac",
            "bio": "an edited profile bio",
            "profilePic": "https://res.cloudinary.com/doxxo2k1j/image/upload/v1682515761/therapist-profile-pics/gujhnvwwvtuhjqtp18st.jpg",
            "gender": "male",
            "workAddress": "Ga-350-9884",
            "experience": 3,
            "specialties": "DBT",
            "region": "Greater Accra ",
            "town": "Dansoman",
            "website": "www.mysite.com",
            "facebook": "www.facebook.com/me",
            "instagram": "www.instagram.com/me",
            "twitter": "www.twitter.com/me",
            "user": [
                {
                    "_id": "64491202e21e8ff84f6591a1",
                    "firstName": "Justice",
                    "lastName": "Etor",
                    "email": "jetor@mail.com",
                    "telephoneNumber": "0244102030",
                    "workNumber": "0541020302",
                    "licensingBoard": "Ghana Psychology Council",
                    "licenseNumber": "GHAPSY098",
                    "termsAgreement": true,
                    "__v": 0,
                    "reviews": [
                        {
                            "_id": "64491edde21e8ff84f6591c3",
                            "reviewer": "Kwame Nkrumah",
                            "review": "This therapist helped me deal with the aftermath of my overthrow from the seat of government. I was a mess. He helped me come out of the abyss",
                            "state": "published",
                            "therapist": "64491202e21e8ff84f6591a1",
                            "createdAt": "2023-04-26T12:53:49.733Z",
                            "updatedAt": "2023-04-26T13:14:33.274Z",
                            "__v": 0
                        }
                    ]
                }
            ],
            "createdAt": "2023-04-26T12:30:05.200Z",
            "updatedAt": "2023-04-26T12:34:35.092Z",
            "__v": 0
                }
            ]
        }
    ```
---

## REVIEW
| field  |  data_type | constraints  |
|---|---|---|
|  reviewer   | string  | required | 
|  review | string  | required |
---
### Review Routes
---
### Draft a review
- Route: /api/v1/review/{mhpId}
- Method: POST
- Body: 
    ```
        {
            "reviewer": "Kwame Nkrumah",
            "review": "This therapist helped me deal with the aftermath of my dethronement. I was a mess. He helped me come out of the abyss"
        }
    ```

- Response: 
    ```
        {
            "status": "success",
            "message": "Review added successfully",
            "data": {
                "reviewer": "Kwame Nkrumah",
                "review": "This therapist helped me deal with the aftermath of my dethronement. I was a mess. He helped me come out of the abyss",
                "state": "draft",
                "therapist": "64491202e21e8ff84f6591a1",
                "createdAt": "2023-04-26T12:53:49.733Z",
                "updatedAt": "2023-04-26T12:53:49.733Z",
                "id": "64491edde21e8ff84f6591c3"
            }
        }
    ```
---

### Edit draft review
- Route: /api/v1/review/{reviewId}
- Method: PATCH
- Body: 
    ```
        {
            "body": "This therapist helped me deal with the aftermath of my overthrow from the seat of governement. I was a mess. He helped me come out of the abyss"
        }
    ```

- Response(not found): 
    ```
        {
            "status": "fail",
            "message": "Review not found"
        }
 


- Response(in progress): 
    ```
        {
            "status": "in progress",
            "message": "Your review is awaiting acceptance. You can edit when it is published"
        }
    ```

- Response(success): 
    ```
        {
            "status": "success",
            "message": "Review update successful",
            "data": {
                "reviewer": "Kwame Nkrumah",
                "review": "This therapist helped me deal with the aftermath of my overthrow from the seat of government. I was a mess. He helped me come out of the abyss",
                "state": "published",
                "therapist": "64491202e21e8ff84f6591a1",
                "createdAt": "2023-04-26T12:53:49.733Z",
                "updatedAt": "2023-04-26T13:14:33.274Z",
                "id": "64491edde21e8ff84f6591c3"
            }
        }
    ```    
---

### Publish review
- Route: /api/v1/review/publish/{reviewId}
- Method: PATCH
- Body: 
    ```
        {
            "body": "This therapist helped me deal with the aftermath of my overthrow from the seat of governement. I was a mess. He helped me come out of the abyss"
        }
    ```

- Response: 
    ```
        {
            "status": "success",
            "message": "Review successfully published",
            "data": {
                "reviewer": "Kwame Nkrumah",
                "review": "This therapist helped me deal with the aftermath of my dethronement. I was a mess. He helped me come out of the abyss",
                "state": "published",
                "therapist": "64491202e21e8ff84f6591a1",
                "createdAt": "2023-04-26T12:53:49.733Z",
                "updatedAt": "2023-04-26T12:53:49.733Z",
                "id": "64491edde21e8ff84f6591c3"
            }
        }
    ```
---


### Thank you!