/* 
* In app.js, inject ngRoute into the module's dependency array so that routing is available for the app to use.
*
* In app.js, define the app's routes:
	Use app.config() and $routeProvider to set up the routes.
	Map the URL /books to the controller BookshelfController and the template views/bookshelf.html.
	Otherwise, redirect to /books.
* 
*/

var app = angular.module('ReaderApp', ['ngRoute']);

// define the app's routes
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/books', { 
      controller: 'BookshelfController', 
      templateUrl: 'views/bookshelf.html' 
    }) 
    // .when('/photos/:id',{
    // 	// maps the URL /photos/:id to the controller PhotoController and the template views/photo.html
    // 	// visit localhost... click on a photo. A detail page about that photo should appear
    // 	controller: 'PhotoController', 
    // 	templateUrl: 'views/photo.html' 
    // })
    .otherwise({ 
      redirectTo: '/books' 
    }); 
});