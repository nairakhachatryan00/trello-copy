angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("auth/auth.html","<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\" ng-bind=\"::$ctrl.title\"></h1>\n        <p class=\"text-xs-center\">\n          <a ui-sref=\"app.login\"\n            ng-show=\"$ctrl.authType === \'register\'\">\n            Have an account?\n          </a>\n          <a ui-sref=\"app.register\"\n            ng-show=\"$ctrl.authType === \'login\'\">\n            Need an account?\n          </a>\n        </p>\n        <div class=\"alert alert-danger text-left\" ng-show=\"$ctrl.errMsg\"> {{ $ctrl.errMsg }} </div>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\" ng-if=\"$ctrl.authType === \'register\'\">\n                <input class=\"form-control form-control-lg\"\n                    name=\"username\"\n                    type=\"text\"\n                    placeholder=\"Username\"\n                    ng-model=\"$ctrl.formData.username\"/>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <input class=\"form-control form-control-lg\"\n                    name=\"email\"\n                    type=\"email\"\n                    placeholder=\"Email\"\n                    ng-model=\"$ctrl.formData.email\"\n                    required=\"true\"/>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <input class=\"form-control form-control-lg\"\n                    name=\"password\"\n                    type=\"password\"\n                    placeholder=\"Password\"\n                    ng-model=\"$ctrl.formData.password\"\n                    required=\"true\"/>\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n                type=\"submit\"\n                ng-bind=\"::$ctrl.title\">\n            </button>\n\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n");
$templateCache.put("board/board.html"," <div class=\"home-page p-3\">\n  <div class=\"banner\" show-authed=\"false\">\n    <div class=\"container d-inline-block\">\n        <h3>Boards</h3>\n     </div>\n  </div>\n      <div class=\"row\" style=\"width: 94%; margin: 20px\">\n          <div class=\"card\"  ng-click=\"::$ctrl.goToTasks(board)\"\n               ng-repeat=\"board in $ctrl.boards track by $index\"\n               style=\"min-width: 18rem; height: 10rem;margin-left: 20px; background-image: url({{board.background}})\">\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\" style=\"color: white\">{{ board.title}}</h5>\n              </div>\n          </div>\n          <div class=\"card\" style=\"width: 18rem; height: 10rem; margin-left: 20px; border: 1px solid #3d8b3d\" data-toggle=\"modal\" data-target=\"#addBoard\">\n              <div class=\"card-body\">\n                  <h5 class=\"card-title text-center\" style=\"cursor: pointer;text-align: center; padding-top: 3rem; color: #3d8b3d\">Add new Board</h5>\n              </div>\n          </div>\n      </div>\n      <!-- Modal add board -->\n      <div class=\"modal fade\" id=\"addBoard\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n              <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add board</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                  </div>\n                  <div class=\"modal-body\">\n                      <div class=\"alert alert-danger\" role=\"alert\" ng-if=\"$ctrl.errMsg\">\n                          {{$ctrl.errMsg}}\n                      </div>\n                      <form>\n                          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n                              <fieldset class=\"form-group\">\n                                  <input class=\"form-control form-control-lg\"\n                                         name=\"title\"\n                                         type=\"text\"\n                                         placeholder=\"Title\"\n                                         ng-model=\"$ctrl.board.title\"\n                                         required=\"true\"/>\n                              </fieldset>\n\n                              <fieldset class=\"form-group\">\n                                  <input class=\"form-control form-control-lg\"\n                                         name=\"background\"\n                                         type=\"text\"\n                                         placeholder=\"Background url\"\n                                         ng-model=\"$ctrl.board.background\"/>\n                              </fieldset>\n\n                          </fieldset>\n                      </form>\n                  </div>\n                  <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                      <button type=\"button\" class=\"btn btn-primary\" ng-click=\"::$ctrl.addBoard()\" data-dismiss=\"modal\">Save</button>\n                  </div>\n              </div>\n          </div>\n</div>\n </div>");
$templateCache.put("components/list-errors.html","ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n  <div ng-repeat=\"(field, errors) in $ctrl.errors\">\n    <li ng-repeat=\"error in errors\">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n");
$templateCache.put("home/home.html"," <div class=\"home-page\">\n\n  <!-- Splash banner that only shows when not logged in -->\n  <div class=\"banner\" show-authed=\"false\">\n    <div class=\"container d-inline-block\">\n      <p>{{ ::$ctrl.appName }} is task management website and helps teams get things done efficiently.\n        Work as a team, manage projects and take productivity to the next level in your own unique way with {{  ::$ctrl.appName}}.</p>\n    </div>\n  </div>\n\n  <div class=\"container page\">\n    <div class=\"row\">\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<footer>\n  <div class=\"container\">\n    <a class=\"logo-font\" ui-sref=\"app.home\" ng-bind=\"::$ctrl.appName | lowercase\"></a>\n    <span class=\"attribution\">\n      &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n      An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>.\n      Code licensed under MIT.\n    </span>\n  </div>\n</footer>\n");
$templateCache.put("layout/header.html","<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\"\n    ui-sref=\"app.home\"\n    ng-bind=\"::$ctrl.appName\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav float-left\" show-authed=\"false\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\"\n           ui-sref-active=\"active\"\n           ui-sref=\"app.home\">\n          Home\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n           ui-sref-active=\"active\"\n           ui-sref=\"app.login\">\n          Sign in\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n           ui-sref-active=\"active\"\n           ui-sref=\"app.register\">\n          Sign up\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav float-left\" show-authed=\"true\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\"\n           ui-sref-active=\"active\"\n           ui-sref=\"app.home\">\n          Home\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n           ui-sref-active=\"active\"\n           ui-sref=\"app.board\">\n          Boards\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n           ui-sref-active=\"active\"\n           ng-click=\"::$ctrl.logout()\"\n           >Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>");
$templateCache.put("profile/profile-articles.html","<article-list limit=\"5\" list-config=\"$ctrl.listConfig\"></article-list>\n");
$templateCache.put("profile/profile.html","<div class=\"profile-page\">\n\n  <!-- User\'s basic info & action buttons -->\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n          <img ng-src=\"{{::$ctrl.profile.image}}\" class=\"user-img\" />\n          <h4 ng-bind=\"::$ctrl.profile.username\"></h4>\n          <p ng-bind=\"::$ctrl.profile.bio\"></p>\n\n          <a ui-sref=\"app.settings\"\n            class=\"btn btn-sm btn-outline-secondary action-btn\"\n            ng-show=\"$ctrl.isUser\">\n            <i class=\"ion-gear-a\"></i> Edit Profile Settings\n          </a>\n\n          <follow-btn user=\"$ctrl.profile\" ng-hide=\"$ctrl.isUser\"></follow-btn>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Container where User\'s posts & favs are list w/ toggle tabs -->\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n        <!-- Tabs for switching between author articles & favorites -->\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.main({username: $ctrl.profile.username})\">\n                My Articles\n              </a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.favorites({username: $ctrl.profile.username})\">\n                Favorited Articles\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n        <!-- List of articles -->\n        <div ui-view></div>\n\n\n      </div>\n\n    <!-- End row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("tasks/comment.html","<div class=\"card\">\n  <div class=\"card-block\">\n    <p><b>{{$ctrl.users[$ctrl.data.author].username}}</b></p>\n    <p class=\"card-text\" ng-bind=\"$ctrl.data.content\"></p>\n  </div>\n</div>\n");
$templateCache.put("tasks/task.html","<div ng-if=\"!$ctrl.edited\" ng-init=\"$ctrl.getComments($ctrl.task)\">\n    <h5><b>Assigned:</b> {{ $ctrl.users[$ctrl.task.assigned].username }} <i class=\"fas fa-pen-square float-right m-3\" ng-click=\"$ctrl.edit($ctrl.task)\"></i></h5>\n    <h5><b>Reporter:</b> {{ $ctrl.users[$ctrl.task.owner].username }}</h5>\n    <h5><b>{{ $ctrl.task.title }}</b></h5>\n    <p class=\"card-text\" id=\"screen-name\" ng-bind=\"$ctrl.task.description\"></p>\n    <div>\n        <fieldset class=\"form-group\">\n            <input class=\"form-control form-control-lg\"\n                   name=\"comment\"\n                   type=\"text\"\n                   placeholder=\"Add comment\"\n                   ng-model=\"$ctrl.comment\"/>\n        </fieldset>\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.sendComment($ctrl.comments)\">Send</button>\n    </div>\n    <div class=\"mt-2\">\n        <comment data=\"comment\" users=\"$ctrl.users\" ng-repeat=\"comment in $ctrl.comments\"></comment>\n    </div>\n</div>\n<div ng-if=\"$ctrl.edited\">\n    <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n        <fieldset class=\"form-group\">\n            <label for=\"\">Assign to:</label>\n            <select class=\"custom-select\" ng-model=\"$ctrl.taskItem.assigned\">\n                <option value=\"{{$ctrl.board.owner}}\" selected>{{ $ctrl.users[$ctrl.task.assigned].username }}</option>\n                <option value=\"{{id}}\" ng-repeat=\"(index, id) in $ctrl.board.assigned_users track by $index\">{{ $ctrl.users[id].username }}</option>\n            </select>\n        </fieldset>\n        <fieldset class=\"form-group\">\n            <input class=\"form-control form-control-lg\"\n                   name=\"title\"\n                   type=\"text\"\n                   placeholder=\"Title\"\n                   ng-model=\"$ctrl.taskItem.title\"/>\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <textarea class=\"form-control form-control-lg\"\n                    name=\"description\"\n                    type=\"text\"\n                    placeholder=\"Description\"\n                    ng-model=\"$ctrl.taskItem.description\"></textarea>\n        </fieldset>\n    </fieldset>\n\n    <div>\n        <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"$ctrl.edited = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.editTask()\">Save</button>\n    </div>\n</div>\n\n");
$templateCache.put("tasks/tasks.html","<div class=\"home-page\" style=\"height: calc( 100vh - 50px );background-image: url({{$ctrl.board.background}})\">\n     <div class=\"px-3 pb-3\" style=\"background: #8080807a; border-radius: 5px;\">\n       <h4 style=\"color: white\">Board: {{$ctrl.board.title}}</h4>\n       <div class=\"d-flex align-items-baseline justify-content-between\">\n         <div style=\"font-size: 20px; color: white;\">\n           Admin: <span> {{ $ctrl.usersByIds[$ctrl.board.owner].username }}</span> <br>\n           <span ng-if=\"$ctrl.board.assigned_users && $ctrl.board.assigned_users.length\">Users:</span>\n           <span ng-repeat=\"(index, id) in $ctrl.board.assigned_users track by $index\">{{ $ctrl.usersByIds[id].username }} <span ng-click=\"$ctrl.removeUser(index)\" class=\"text-danger\" style=\"cursor: pointer\">x</span></span>\n         </div>\n         <div class=\"dropdown mr-5\">\n           <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n             Add users\n           </button>\n           <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n             <a class=\"dropdown-item\" ng-repeat=\"user in $ctrl.users\" ng-click=\"$ctrl.addUser(user._id)\">{{user.username}}</a>\n           </div>\n         </div>\n       </div>\n     </div>\n    <div class=\"row\" style=\"width: 100%\">\n\n      <div class=\"col\" style=\"height: 100%\" ng-repeat=\"status in $ctrl.statuses\" ng-drop=\"true\" ng-drop-success=\"$ctrl.onDropComplete($data,$event, status)\">\n        <div style=\"margin: 5px; padding: 10px; border-radius: 5px; background: darkgrey; height: 100%\">\n          <h5 style=\"text-align: center\">{{status}}</h5>\n          <div style=\"padding: 5px; background: lightgrey; border-radius: 5px;\">\n            <div style=\"min-height: 20px\">\n              <div style=\"text-align: center; background: darkgrey; border-radius: 5px; cursor: pointer; z-index: 1000\"\n                   class=\"mb-3\"\n                   ng-drag=\"true\"\n                   ng-repeat=\"(index, task) in $ctrl.tasksByStatus[status]\"\n                   ng-drag-data=\"task\" ng-drag-success=\"$ctrl.onDragSuccess($data,$event,status)\" ng-center-anchor=\"{{centerAnchor}}\"\n              >{{ task.title }} <i class=\"fas fa-pen-square m-1 float-right\" data-toggle=\"modal\" data-target=\"#taskPreviewModal\"\n                                   ng-click=\"$ctrl.openTask($ctrl.tasksByStatus[status][index])\"></i>\n                                  <i class=\"fas fa-trash-alt float-right text-danger m-1\" data-toggle=\"modal\" data-target=\"#deleteModal\"\n                                  ng-click=\"$ctrl.deletedTask = task; $ctrl.delStatus = status\"></i>\n              <p>Assigned to: {{ $ctrl.usersByIds[task.assigned].username }}</p>\n              </div>\n            </div>\n            <div style=\"text-align: center; background: darkgrey; border-radius: 5px; cursor: pointer\" data-toggle=\"modal\" data-target=\"#taskModal\"><b>+</b></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</div>\n    <!-- Modal add task -->\n    <div class=\"modal fade\" id=\"taskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n\n            <div class=\"alert alert-danger text-left\" ng-show=\"$ctrl.errMsg\"> {{ $ctrl.errMsg }} </div>\n            <form>\n              <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n                <fieldset class=\"form-group\">\n                  <label for=\"\">Assign to:</label>\n                  <select class=\"custom-select\" ng-model=\"$ctrl.task.assigned\">\n                    <option value=\"{{$ctrl.board.owner}}\" selected>{{ $ctrl.usersByIds[$ctrl.board.owner].username }}</option>\n                    <option value=\"{{id}}\" ng-repeat=\"(index, id) in $ctrl.board.assigned_users track by $index\">{{ $ctrl.usersByIds[id].username }}</option>\n                  </select>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                  <input class=\"form-control form-control-lg\"\n                         name=\"title\"\n                         type=\"text\"\n                         placeholder=\"Title\"\n                         ng-model=\"$ctrl.task.title\"/>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                  <textarea class=\"form-control form-control-lg\"\n                         name=\"description\"\n                         type=\"text\"\n                         placeholder=\"Description\"\n                         ng-model=\"$ctrl.task.description\"></textarea>\n                </fieldset>\n\n              </fieldset>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"::$ctrl.addTask()\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"taskPreviewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ $ctrl.taskPreview.task_number }}</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <task task=\'$ctrl.taskPreview\' users=\"$ctrl.usersByIds\" board=\"$ctrl.board\" comments=\"$ctrl.comments\"></task>\n          </div>\n        </div>\n      </div>\n    </div>\n\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ $ctrl.taskDeleted.task_number }}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure want to delete this task?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.delete()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n  </div>");}]);