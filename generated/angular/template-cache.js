angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div class=\"container-fluid\">\n" +
    "  <h1 class=\"title\">Chrono Love</h1>\n" +
    "  <div class=\"container-fluid content\">\n" +
    "    <div class=\"row\">\n" +
    "     <div class=\"col-xs-2 col-md-3 profil\">\n" +
    "      <div class=\"well pull-left\">\n" +
    "        <img class=\"imageResize\" src=\"http://www2.l1visible.com/wp-content/uploads/2013/06/FRANCIS.png\">\n" +
    "          <br><span id=\"profilName\">\n" +
    "            <br> {{user.lastname}} {{user.firstname}}\n" +
    "          </span>\n" +
    "\n" +
    "      </div>\n" +
    "     </div>\n" +
    "      <div class=\"col-md-offset-1 col-md-7\">\n" +
    "        <div class=\"row\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-5 col-md-4\" ng-repeat=\"user in listUsers\">\n" +
    "                  <div class=\"well pull-left\" id=\"ticket\">\n" +
    "                    {{user.email}}<br>\n" +
    "                    {{user.pseudo}}<br>\n" +
    "                    {{user.sexe}}<br>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "       </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
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
    "        <select id=\"sexe\" type=\"sexe\" class=\"form-control\" ng-model=\"user.sexe\" placeholder=\"sexe\">\n" +
    "        </label>\n" +
    "        <option value=\"Homme\">Je suis un Homme</option>\n" +
    "        <option value=\"Femme\">Je suis une Femme</option>\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input id=\"firstname\" type=\"firstname\" class=\"form-control\" ng-model=\"user.firstname\" placeholder=\"firstname\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input id=\"lastname\" type=\"lastname\" class=\"form-control\" ng-model=\"user.lastname\" placeholder=\"lastname\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input id=\"age\" type=\"age\" class=\"form-control\" ng-model=\"user.age\" placeholder=\"age\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input id=\"pseudo\" type=\"pseudo\" class=\"form-control\" ng-model=\"user.pseudo\" placeholder=\"pseudo\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input id=\"mail\" type=\"mail\" class=\"form-control\" ng-model=\"user.email\" placeholder=\"adresse mail\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" placeholder=\"Password\">\n" +
    "      </div>\n" +
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