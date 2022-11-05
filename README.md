Blog App


This is an api for a blog app


Requirements

1 User should be able to register

2 User should be able Login

3 User authentication using JWT

4 User should be able to create blop post

5 User should be able to get all blog post

6 User should be able to get a post by id

7 User should be able to update the state of a post

8 User should be able update the body of a post

9 User should be able to get all their post

10 User should be able to delete their blog post



Base URL

https://creepy-cyan-wombat.cyclic.app/

Models

### User
| field  |  Data_type | constraints  |
|---|---|---|
|  id |  string |  required |
|  firstName | string  |  optional|
|  lastname  |  string |  optional  |
|  email     | string  |  optional |
|  password |   string |  required  |


### Order
| field  |  data_type | constraints  |
|---|---|---|
|  title|  string |  required |
|  description |  string |  required |
|  body | text  |  required|
|  author  |  string |  required  |
|  state    | string  |  enum: ['draft', 'published']|
|  readCount|   Number |  required  |
|  readingTime|  number |  required |
|  tags |  string |  required |
|  timestamps |  date |  required |



## APIs
---

### Signup User

- Route: /api/v1/users//signup
- Method: POST
- Body: 
```

  {
    "firstName":"tenas",
    "lastName":"ibagas",
    "email":"penas1@gmail.com",
    "password":"pwwertys"
}

```

- Responses

Success
```
{
    "message": "user created successfully",
    "statusCode": 201,
    "data": {
        "firstName": "tenas",
        "lastName": "ibagas",
        "email": "penas1@gmail.com",
        "password": "$2b$10$6pLINnuZ/1hmgGnOw4RD2.Vh.hkiYXgpNrFqub7x8kDuzvEuIqCgW",
        "_id": "6366949b041352e94e6b90bf",
        "createdAt": "2022-11-05T16:51:39.795Z",
        "updatedAt": "2022-11-05T16:51:39.795Z",
        "__v": 0
    }
}
```
---
### Login User

- Route: /api/v1/users/login
- Method: POST
- Body: 
```
{
    "email":"penas1@gmail.com",
    "password":"pwwertys"
}
```

- Responses

Success
```
{
    "message": "user logged in successfully",
    "statusCode": 200,
    "data": {
        "user": {
            "_id": "6366949b041352e94e6b90bf",
            "firstName": "tenas",
            "lastName": "ibagas",
            "email": "penas1@gmail.com",
            "password": "$2b$10$6pLINnuZ/1hmgGnOw4RD2.Vh.hkiYXgpNrFqub7x8kDuzvEuIqCgW",
            "createdAt": "2022-11-05T16:51:39.795Z",
            "updatedAt": "2022-11-05T16:51:39.795Z",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjY5NDliMDQxMzUyZTk0ZTZiOTBiZiIsImZpcnN0TmFtZSI6InRlbmFzIiwibGFzdE5hbWUiOiJpYmFnYXMiLCJpYXQiOjE2Njc2NjcxNTksImV4cCI6MTY2NzY3MDc1OX0.DYcEYISWb7cVsYdpn4V6GQaHnQSlsoV97HgpXNybXZw"
    }
}
```

---
### Create post

- Route: /api/v1/articles
- Method: POST
- Header
    - Authorization: Bearer {token}
- Body: 
```
{
    "title":"   blogging is  not easy ",
    "description":"  typescript or javascript ",
    "body":" javascript is not easy at all ",
    "tags":["#jss","ts","altschool" ,"typescript"]
}
```

- Responses

Success
```
{
    "message": "article published successfully",
    "statusCode": 201,
    "data": {
        "article": {
            "title": "   blogging is  not easy ",
            "description": "  typescript or javascript ",
            "body": " javascript is not easy at all ",
            "author": "tenas ibagas",
            "user_id": "6364cf60ce27bba46a2d0012",
            "state": "draft",
            "readCount": 0,
            "readingTime": "1 mins read",
            "tags": [
                "#jss",
                "ts",
                "altschool",
                "typescript"
            ],
            "_id": "63669550041352e94e6b90c4",
            "createdAt": "2022-11-05T16:54:40.529Z",
            "updatedAt": "2022-11-05T16:54:40.529Z",
            "__v": 0
        }
    }
}
```
---
### Update Post By State

- Route: /api/v1/articles/orders/:articleId
- Method: PATCH
- Header
    - Authorization: Bearer {token}
- Responses

Success
```
{
    "message": "article updated successfully",
    "statusCode": 200,
    "data": {
        "_id": "63669550041352e94e6b90c4",
        "title": "   blogging is  not easy ",
        "description": "  typescript or javascript ",
        "body": " javascript is not easy at all ",
        "author": "tenas ibagas",
        "user_id": "6364cf60ce27bba46a2d0012",
        "state": "published",
        "readCount": 0,
        "readingTime": "1 mins read",
        "tags": [
            "#jss",
            "ts",
            "altschool",
            "typescript"
        ],
        "createdAt": "2022-11-05T16:54:40.529Z",
        "updatedAt": "2022-11-05T17:18:00.496Z",
        "__v": 0
    }
}
```
---

### Update Post

- Route: /api/v1/articles/:articleId
- Method: Post
- Header:
    - Authorization: Bearer {token}
- Body
    {
    "body": "im trying to delete this blog from my database",
    "tags": ["javascript","alt"]
    }

Success
```
{
    "message": "article updated successfully",
    "statusCode": 200,
    "data": {
        "_id": "63669550041352e94e6b90c4",
        "title": "   blogging is  not easy ",
        "description": "  typescript or javascript ",
        "body": "im trying to delete this blog from my database",
        "author": "tenas ibagas",
        "user_id": "6364cf60ce27bba46a2d0012",
        "state": "published",
        "readCount": 0,
        "readingTime": "1 mins read",
        "tags": [
            "javascript",
            "alt"
        ],
        "createdAt": "2022-11-05T16:54:40.529Z",
        "updatedAt": "2022-11-05T17:25:18.730Z",
        "__v": 0
    }
}
```
---
## Get Post By Id

Route: /api/v1/articles/:articleId

Method: GET

Response


Success
```
{
    "message": "article fetched successfully",
    "statusCode": 200,
    "data": {
        "_id": "63669550041352e94e6b90c4",
        "title": "   blogging is  not easy ",
        "description": "  typescript or javascript ",
        "body": "im trying to delete this blog from my database",
        "author": "tenas ibagas",
        "user_id": {
            "_id": "6364cf60ce27bba46a2d0012",
            "firstName": "tenas",
            "lastName": "ibagas"
        },
        "state": "published",
        "readCount": 1,
        "readingTime": "1 mins read",
        "tags": [
            "javascript",
            "alt"
        ],
        "createdAt": "2022-11-05T16:54:40.529Z",
        "updatedAt": "2022-11-05T17:30:14.422Z",
        "__v": 0
    }
}
```


Get Posts By User

Route: /api/v1/userblog

Method: GET

Header

Authorizaton: Bearer ${token}

Query Params

-page default(1)

-limit default(10)

-state


Response
```
{
    "message": "article fetched successfully",
    "statusCode": 200,
    "data": {
        "articleNumber": 10,
        "page": "1",
        "article": [
            {
                "_id": "6364cf8ece27bba46a2d0016",
                "title": "  my guy tega",
                "description": "blogging abot things",
                "body": " altschool has been too fast and we have ",
                "author": "tenas ibagas",
                "user_id": "6364cf60ce27bba46a2d0012",
                "state": "published",
                "readCount": 0,
                "readingTime": "1 mins read",
                "tags": [
                    "#jss",
                    "ts"
                ],
                "createdAt": "2022-11-04T08:38:38.348Z",
                "updatedAt": "2022-11-04T10:05:57.504Z",
                "__v": 0
            },
            {
                "_id": "6364d04cce27bba46a2d0019",
                "title": "  my guy tega",
                "description": "blogging abot things about altschool",
                "body": " altschool has been too fast and we have ",
                "author": "tenas ibagas",
                "user_id": "6364cf60ce27bba46a2d0012",
                "state": "published",
                "readCount": 0,
                "readingTime": "1 mins read",
                "tags": [
                    "#jss",
                    "ts",
                    "altschool"
                ],
                "createdAt": "2022-11-04T08:41:48.172Z",
                "updatedAt": "2022-11-04T10:06:28.530Z",
                "__v": 0
            },
            {
                "_id": "6364e45dadf50d9c7079350f",
                "title": "   tega",
                "description": "blogging  things about altschool",
                "body": " altschool has been too fast and we have ",
                "author": "tenas ibagas",
                "user_id": "6364cf60ce27bba46a2d0012",
                "state": "published",
                "readCount": 0,
                "readingTime": "1 mins read",
                "tags": [
                    "#jss",
                    "ts",
                    "altschool"
                ],
                "createdAt": "2022-11-04T10:07:25.138Z",
                "updatedAt": "2022-11-04T10:09:06.741Z",
                "__v": 0
            },
}
```

Delete Post

Route: /api/v1/articles/articleId

Method: GET

Header

Authorizaton: Bearer ${token}

Response
```
{
    "message": "article deleted successfully",
    "statusCode": 200,
    "data": "6364e465adf50d9c70793512"
}
```


## Get All Posts
Route: api/v1/articles/

Method: GET

Query Param

-page (default 1)

-limit (default 20)

-author

-title

-tags

-sort (-read_count || read_count || -reading_time || reading_time || -timestamp || timestamp )

Responses

Success
```
{
    "message": "post fetched successfully",
    "statusCode": 200,
    "data": {
        "articleNumbers": 20,
        "page": "1",
        "articles": [
            {
                "_id": "6365631e74f58b5a96d07ae7",
                "title": "   blogging is  not easy ",
                "description": "  typescript or javascript ",
                "body": " javascript is not easy at all ",
                "author": "tenas ibagas",
                "user_id": "6364cf60ce27bba46a2d0012",
                "state": "published",
                "readCount": 0,
                "readingTime": "1 mins read",
                "tags": [
                    "#jss",
                    "ts",
                    "altschool",
                    "typescript"
                ],
                "createdAt": "2022-11-04T19:08:14.257Z",
                "updatedAt": "2022-11-04T19:08:47.978Z",
                "__v": 0
            },
            {
                "_id": "636562a774f58b5a96d07add",
                "title": "   blogging is  not easy ",
                "description": "  typescript or javascript ",
                "body": " javascript is not easy ",
                "author": "tenas ibagas",
                "user_id": "6364cf60ce27bba46a2d0012",
                "state": "published",
                "readCount": 0,
                "readingTime": "1 mins read",
                "tags": [
                    "#jss",
                    "ts",
                    "altschool"
                ],
                "createdAt": "2022-11-04T19:06:15.126Z",
                "updatedAt": "2022-11-04T19:06:36.344Z",
                "__v": 0
            },
            {
                "_id": "6365626474f58b5a96d07ad7",
                "title": "   blogging is  not easy ",
                "description": "  javascript ",
                "body": " javascript is not easy ",
                "author": "tenas ibagas",
                "user_id": "6364cf60ce27bba46a2d0012",
                "state": "published",
                "readCount": 0,
                "readingTime": "1 mins read",
                "tags": [
                    "#jss",
                    "ts",
                    "altschool"
                ],
                "createdAt": "2022-11-04T19:05:08.233Z",
                "updatedAt": "2022-11-04T19:05:38.965Z",
                "__v": 0
            },
            {
                "_id": "6365621174f58b5a96d07ad0",
                "title": "   blogging is  not easy ",
                "description": "  altschooler students",
                "body": " i want to be a backend engineer and im learning nodejs ",
                "author": "tenas ibagas",
                "user_id": "6364cf60ce27bba46a2d0012",
                "state": "published",
                "readCount": 0,
                "readingTime": "1 mins read",
                "tags": [
                    "#jss",
                    "ts",
                    "altschool"
                ],
                "createdAt": "2022-11-04T19:03:45.637Z",
                "updatedAt": "2022-11-04T19:04:09.833Z",
                "__v": 0
            },
}            
```
...

## Contributor
- Omoyibo Oghenetega

