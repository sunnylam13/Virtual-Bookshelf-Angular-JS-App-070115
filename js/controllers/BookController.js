/* 
* When a user clicks on a book, she should go to the book's description. 
* 
* Let's set this up next, following the same sequence of steps from above:
	* In app.js, add another route. Map the URL /books/:bookId to the controller BookController and the template views/book.html.
	* In BookController, use the books service to load a single book into the $scope.book property. 
		* To do this, use the books service to fetch an array of books from the server, and then use $routeParams.bookId to access the specific book by its index. Store the specific book into $scope.book.
		* Remember we can use Angular's $routeParams to retrieve bookId from the URL by using $routeParams.bookId.
	* Finish the template in views/book.html to display a book's description. Looking at the format of the data in books API given above, display a book's cover, title, author, and description.
	* View the result in the browser. When you click on a book, a view is constructed by injecting views/book.html into the <div ng-view></div> in index.html.
* 
*/

app.controller('BookController', ['$scope', 'books' ,'$routeParams', function($scope, books, $routeParams) {
  
	books.success(function(data) {
		// since there's no nesting this should be fine
	  // $scope.book = data[$routeParams.id];
	  $scope.book = data[$routeParams.bookId];
	  // $scope.book = data[$routeParams.bookId]; // this doesn't work
	  // console.log(data[$routeParams.id]);
	  // console.log($routeParams);
	});

  // Using this property to create the URL in line 9 of views/book.html
  // where the id retrieved is originally a string
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  
}]);

