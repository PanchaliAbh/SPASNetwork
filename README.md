# SPASNetwork
Angular app with the API


Task 

We provide you a RESTful or CRUD JSON API, Your responsibility is to connect the Angular app with the API.
Here we use a fake JSON RESTful API call JSONPlaceholder.
https://jsonplaceholder.typicode.com/

You need to create 2 pages for list posts and view one post. Think about it as a Facebook news feed. You need to list all the posts & clicking on a post should redirect to a new page that show only clicked post details. You don't have to worry about CSS too much. Simple & clear User Interface would be enough. Basically we only need to connect the backend API with
Angular app.


You can use below API endpoints.

1. list posts
api endpoint: https://jsonplaceholder.typicode.com/posts
example response:
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  ...
]


2. view one post
api endpoint: https://jsonplaceholder.typicode.com/posts/1

response:
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}




3. view post comments

api endpoint: https://jsonplaceholder.typicode.com/comments?postId=1

[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  ...
  ]
