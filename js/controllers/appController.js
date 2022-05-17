app.controller("myController", function($scope){
    var data = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", salary: 2000},
    { id : 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", salary: 3000},
    { id : 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", salary: 1000},
    { id : 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org" , salary: 5000},
    { id : 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca" , salary: 500},
    { id : 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", salary: 1500 },
    { id : 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", salary:  10000},
    { id : 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", salary: 7000 }
  ]

  $scope.users = data;
  
})
