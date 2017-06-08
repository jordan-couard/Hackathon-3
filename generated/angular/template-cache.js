angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<!-- <div class=\"container-fluid\">\n" +
    "  <h1 class=\"title\">Chrono Love</h1>\n" +
    "  <div class=\"container-fluid content\">\n" +
    "    <div class=\"row\">\n" +
    "     <div class=\"col-xs-2 col-md-3 profil\">\n" +
    "      <div class=\"well pull-left\">\n" +
    "        <img class=\"imageResize\" src=\"{{puser.image}}\">\n" +
    "          <br><span id=\"profilName\">\n" +
    "            <br> {{puser.lastname}} {{puser.firstname}}\n" +
    "          </span>\n" +
    "      </div>\n" +
    "     </div> -->\n" +
    "      <!-- <div class=\"col-md-offset-1 col-md-7\">\n" +
    "        <div class=\"row\">\n" +
    "        <div class=\"container profiles\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-5 col-md-4\" ng-repeat=\"user in listUsers\" ng-if=\"!user.isAdmin && user._id != puser._id\">\n" +
    "                  <div class=\"well pull-left\" id=\"ticket\">\n" +
    "                    <img class=\"imageResizeSmall\" src=\"{{user.image}}\"><br>\n" +
    "                    {{user.email}}<br>\n" +
    "                    {{user.pseudo}}<br>\n" +
    "                    {{user.sexe}}<br>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "       </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div> -->\n" +
    "<div class=\"container MyProfil\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12\">\n" +
    "      <!-- <p class=text-center>lol</p> -->\n" +
    "      <div class=\"card-container\">\n" +
    "          <div class=\"card\">\n" +
    "              <div class=\"front\">\n" +
    "                  <div class=\"cover\">\n" +
    "                      <img src=\"http://www.hdimageson.com/wp-content/uploads/2016/05/beach-images-tumblr-300x188.jpg\"/>\n" +
    "                  </div>\n" +
    "                  <div class=\"user\">\n" +
    "                      <img class=\"img-circle\" src=\"{{user.image}}\"/>\n" +
    "                  </div>\n" +
    "                  <div class=\"content\">\n" +
    "                      <div class=\"main\">\n" +
    "                          <h3 class=\"name\">{{user.firstname}}</h3>\n" +
    "                          <h3 class=\"name\">{{user.lastname}}</h3>\n" +
    "                          <p class=\"profession\">{{user.age}}Ans</p>\n" +
    "\n" +
    "                          <p class=\"text-center\">{{user.sexe}}</p>\n" +
    "                      </div>\n" +
    "                      <div class=\"footer\">\n" +
    "                          <div class=\"rating\">\n" +
    "                              <i class=\"fa fa-mail-forward\"></i> Auto Rotation\n" +
    "                          </div>\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "              </div> <!-- end front panel -->\n" +
    "              <div class=\"back\">\n" +
    "                  <div class=\"header\">\n" +
    "                      <h5 class=\"motto\">CITATION</h5>\n" +
    "                  </div>\n" +
    "                  <div class=\"content\">\n" +
    "                      <div class=\"main\">\n" +
    "                          <h4 class=\"text-center\">{{user.firstname}} {{user.lastname}}</h4>\n" +
    "                          <p class=\"text-center\">Je suis a la recherche : </p><br><br><br>\n" +
    "\n" +
    "                          <div class=\"text-center\">\n" +
    "                              <div class=\"text-center\">\n" +
    "                                  <h4>{{user.age * 6}}</h4>\n" +
    "                                  <p>\n" +
    "                                      Prise de contact\n" +
    "                                  </p>\n" +
    "                              </div>\n" +
    "                          </div>\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "              </div> <!-- end back panel -->\n" +
    "          </div> <!-- end card -->\n" +
    "      </div> <!-- end card-container -->\n" +
    "  </div> <!-- end col-sm-3 -->\n" +
    "  </div> <!-- end col-sm-10 -->\n" +
    "</div> <!-- end row -->\n" +
    "</div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "  <div class=\"col-md-4 col-sm-6\" ng-repeat=\"user in listUsers\" ng-if=\"!user.isAdmin && user._id != puser._id\">\n" +
    "              <div class=\"card-container\">\n" +
    "                  <div class=\"card\">\n" +
    "                      <div class=\"front\">\n" +
    "                          <div class=\"cover\">\n" +
    "                              <img src=\"http://www.hdimageson.com/wp-content/uploads/2016/05/beach-images-tumblr-300x188.jpg\"/>\n" +
    "                          </div>\n" +
    "                          <div class=\"user\">\n" +
    "                              <img class=\"img-circle\" src=\"{{user.image}}\"/>\n" +
    "                          </div>\n" +
    "                          <div class=\"content\">\n" +
    "                              <div class=\"main\">\n" +
    "                                  <h3 class=\"name\">{{user.firstname}}</h3>\n" +
    "                                  <h3 class=\"name\">{{user.lastname}}</h3>\n" +
    "                                  <p class=\"profession\">{{user.age}}Ans</p>\n" +
    "\n" +
    "                                  <p class=\"text-center\">{{user.sexe}}</p>\n" +
    "                              </div>\n" +
    "                              <div class=\"footer\">\n" +
    "                                  <div class=\"rating\">\n" +
    "                                      <i class=\"fa fa-mail-forward\"></i> Auto Rotation\n" +
    "                                  </div>\n" +
    "                              </div>\n" +
    "                          </div>\n" +
    "                      </div> <!-- end front panel -->\n" +
    "                      <div class=\"back\">\n" +
    "                          <div class=\"header\">\n" +
    "                              <h5 class=\"motto\">CITATION</h5>\n" +
    "                          </div>\n" +
    "                          <div class=\"content\">\n" +
    "                              <div class=\"main\">\n" +
    "                                  <h4 class=\"text-center\">{{user.firstname}} {{user.lastname}}</h4>\n" +
    "                                  <p class=\"text-center\">Je suis a la recherche : </p><br><br><br>\n" +
    "\n" +
    "                                  <div class=\"text-center\">\n" +
    "                                      <div class=\"text-center\">\n" +
    "                                          <h4>{{user.age * 6}}</h4>\n" +
    "                                          <p>\n" +
    "                                              Prise de contact\n" +
    "                                          </p>\n" +
    "                                      </div>\n" +
    "                                  </div>\n" +
    "                              </div>\n" +
    "                          </div>\n" +
    "                      </div> <!-- end back panel -->\n" +
    "                  </div> <!-- end card -->\n" +
    "              </div> <!-- end card-container -->\n" +
    "          </div> <!-- end col-sm-3 -->\n" +
    "          </div> <!-- end col-sm-10 -->\n" +
    "      </div> <!-- end row -->\n" +
    "      <div class=\"space-200\"></div>\n" +
    "  </div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Login</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Register</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "      <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <label>Je suis ...\n" +
    "        <select type=\"sexe\" class=\"form-control\" ng-model=\"user.sexe\" placeholder=\"sexe\">\n" +
    "        </label>\n" +
    "        <option value=\"Homme\">Un Homme</option>\n" +
    "        <option value=\"Femme\">Une Femme</option>\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"firstname\" class=\"form-control\" ng-model=\"user.firstname\" placeholder=\"firstname\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"lastname\" class=\"form-control\" ng-model=\"user.lastname\" placeholder=\"lastname\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"age\" class=\"form-control\" ng-model=\"user.age\" placeholder=\"age\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"pseudo\" class=\"form-control\" ng-model=\"user.pseudo\" placeholder=\"pseudo\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"mail\" class=\"form-control\" ng-model=\"user.email\" placeholder=\"adresse mail\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"password\" class=\"form-control\" ng-model=\"user.password\" placeholder=\"Password\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"text\" class=\"form-control\" ng-model=\"user.image\" placeholder=\"URL de la photo\">\n" +
    "      </div>\n" +
    "\n" +
    "      <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
