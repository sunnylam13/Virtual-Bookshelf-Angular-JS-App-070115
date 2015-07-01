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

    // ----------------------------------------
    // BOOK DETAILS  ------------------
    // ----------------------------------------
	    .when('/books/:bookId',{
	    	// maps the URL /books/:id to the controller BookController and the template views/book.html
	    	// visit localhost... click on a book. A detail page about that book should appear
	    	controller: 'BookController', 
	    	templateUrl: 'views/book.html' 
	    })
    // ----------------------------------------
    // END BOOK DETAILS  ------------------
    // ----------------------------------------

    // ----------------------------------------
    // CHAPTER DETAILS  ------------------
    // ----------------------------------------
    	// specifically first chapter
    	// WARNING:  when using :bookId it didn't work...  switch it back to using :id as you did before for the book details
	    .when('/books/:bookId/chapters/:chapterId',{
	    	// maps the URL /books/:bookId/chapters/:chapterId to the controller BookController and the template views/chapter.html
	    	// visit localhost... click on a book then go inside. A detail page about that chapter should appear
	    	controller: 'ChapterController', 
	    	templateUrl: 'views/chapter.html' 
	    })
    // ----------------------------------------
    // END CHAPTER DETAILS  ------------------
    // ----------------------------------------
    
    .otherwise({ 
      redirectTo: '/books' 
    }); 
});