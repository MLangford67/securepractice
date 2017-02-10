namespace secure.Controllers {

    export class HomeController {
      public newUser;

     constructor(private $http: ng.IHttpService) { }

     public postUser (){
         this.$http.post('/usersRoutes/api/Register', this.newUser).then((result)=>{
             console.log(result);
          })
          .catch((err)=>{
              console.log(err)
         });
     }

}




    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
