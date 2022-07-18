# BierPunkt 2022

## About this project

### Features

* User and product/price management (in progress)
* multiple pots of money for independent payment (planned)
* Simple web frontend without any framework or library
* Python (Flask) REST API and backend
* No database server required

## Get started

### Installation

The recommended way to run your own instance of BierPunkt is to start it inside two Docker containers by using the provided configuration. Just navigate into the project's folder and run `docker-compose up`. After some time, you can simply open `localhost:7258` in your web browser to access the web frontend and `localhost:7259` to check if the API is running.

You may wish to change the IP address and/or the port at the end of the python script `api/app.py` to avoid complications when trying to connect to the API.

## API Usage

All responses will have the form

```json
{
    "data": "Mixed type holding the content of the response",
    "message": "Description of what happened"
}
```

The following response definitions will only detail the expected value of the `data` field.

### List all users

**Definition**

`GET /users`

**Responses**

* `200 OK` on success

```json
[
    {
        "identifier": "pw",
        "firstName": "Pascal",
        "lastName": "Wittler",
        "email": "pw@derpunkt.de",
        "imageFilepath": "/res/img/users/pw.jpg"
    },
    ...
]
```

### Add a new user

**Definition**

`POST /users`

**Arguments**

* `"identifier":string` the initials of the user as a globally unique identifier
* `"firstName":string` the first name of the user
* `"lastName":string` the last name of the user
* `"email":string` the email address of the user for payment reminders

If a user with the given identifier already exists, it will be overwritten.

**Responses**

* `201 Created` on success

```json
{
    "identifier": "pw",
    "firstName": "Pascal",
    "lastName": "Wittler",
    "email": "pw@derpunkt.de",
    "imageFilepath": "/res/img/users/pw.jpg"
}
```

### Remove a user

**Definition**

`DELETE /user/<identifier>`

**Responses**

* `204 No Content` on success
* `404 Not Found` if the user does not exist

## Miscellaneous

#### Port numbers

The port number `7258` for the web frontend was chosen after watching the music remix ["7258 Schilling"](https://www.youtube.com/watch?v=4VTTz6CrFM4) on YouTube. Schilling was the currency in Austria before 2002.
