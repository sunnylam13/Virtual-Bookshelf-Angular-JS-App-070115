/* 
* When a user clicks on the Read button, she should go to the book's first chapter. From there, she can use the Next and Back buttons to read the book. 
* 
* Let's set this up next, following the same sequence of steps:
  * In app.js, add another route. Map the URL /books/:bookId/chapters/:chapterId to the controller ChapterController and the template views/chapter.html.
  * In ChapterController, use the books service to load a single chapter into the $scope.chapter property. 
    * To do this, in line 4 first get a specific book from the books API by using its index, just as you did in BookController. Store the specific book into $scope.book.
  * Under it, access the array of chapters inside $scope.book, and get a specific chapter in the array by using its index $routeParams.chapterId. Store the specific chapter into $scope.chapter.
  * Finish the template in views/chapter.html to display a chapter. Looking at the format of the data in books API given above, display the book title, book author, chapter title, and chapter paragraphs.
  * View the result in the browser. When you click on the Read button, a view is constructed by injecting views/chapter.html into the <div ng-view></div> in index.html. When you click on the Next and Back buttons, you navigate from chapter to chapter.
*
* WARNING:  the URL creation variables must be located within 'books.success' or else none of the URL links will work!
*/

app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {

  books.success(function(data) {

    // console.log(data);
    // console.log($routeParams);

    // this allows you to access the current book
    // // in the chapter.html you will use book.PROPERTYNAME for chapter specific properties
    // $scope.book = data[$routeParams.id];
    $scope.book = data[$routeParams.bookId];
    // console.log($scope.book);

    // this allows you to access the specific chapter OF the current book... hence using dot notation for $scope.book.chapters[ID#]
    // in the chapter.html you will use chapter.PROPERTYNAME for chapter specific properties
    $scope.chapter = $scope.book.chapters[$routeParams.chapterId];

    console.log('The $routeParams.chapterId is %s',$routeParams.chapterId);
    console.log('The $scope.book.chapters.length is %s', $scope.book.chapters.length - 1);



    /* 
    * WARNING:  the URL creation variables must be located within 'books.success' or else none of the URL links will work!
    * 
    */

    // ----------------------------------------
    // URL CREATION  ------------------
    // ----------------------------------------
      // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
      // WARNING:  when using :bookId it didn't work...  switch it back to using :id as you did before for the book details
      $scope.currentBookIndex = parseInt($routeParams.bookId);
      // $scope.currentBookIndex = parseInt($routeParams.id);

      $scope.currentChapterIndex = parseInt($routeParams.chapterId);
      // $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
    // ----------------------------------------
    // END URL CREATION  ------------------
    // ----------------------------------------
    
    // ----------------------------------------
    // END OF CHAPTERS CHECK  ------------------
    // ----------------------------------------
      /* 
      * this has to be placed after the URL creation section in order to work...
      * 
      */

      // If there no more chapters left, go back to the bookshelf view
      if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
        $scope.nextChapterIndex = "#";
      } else {
        $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
      }
      // the below will not work
      // if($routeParams.chapterId >= $scope.chapters.length - 1) {
      //   $scope.nextChapterIndex = "#";
      // }

    // ----------------------------------------
    // END END OF CHAPTERS CHECK  ------------------
    // ----------------------------------------
    

  });

  
}]);
