/* 
* Create a service named books for getting data from the books API. Create the service in a new file named js/services/books.js. Include this new JavaScript file in the view as a script element.
*
* https://s3.amazonaws.com/codecademy-content/courses/ltp4/books-api/books.json
* 
* The books API is a JSON object containing an array of books. Here's how a single book is represented in this array:
{
  "title": "Metamorphosis",
  "cover": "img/metamorphosis.jpg",
  "author": "Franz Kafka",
  "description": "Gregor Samsa turns into a large insect-like creature.",
  "chapters": [
    {
      "title": "I",
      "paragraphs": ["paragraph 1", "paragraph 2"]
    },
    {
      "title": "II",
      "paragraphs": ["paragraph 1", "paragraph 2", "paragraph 3", "paragraph 4"]
    },
    {
      "title": "III",
      "paragraphs": ["paragraph 1", "paragraph 2", "paragraph 3"]
    }
  ]
}
Each book has a title, cover, author, description, and array of chapters. Each chapter has a title and array of paragraphs.
*/

app.factory('books', ['$http', function($http) { 
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/books-api/books.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);