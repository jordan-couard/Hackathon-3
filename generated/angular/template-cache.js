angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<h1>Hello World</h1>"
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
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Chrono Lo<span><img class=\"logoNavbar\" src=\"img/logolove.svg\" alt=\"logo\">e</span></a>\n" +
    "</li>\n" +
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
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
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
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Chrono Lo<span><img class=\"logoNavbar\" src=\"img/logolove.svg\" alt=\"logo\">e</span></a></li>\n" +
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
    "<div class=\"container-fluid profile\">\n" +
    "  <div class=\"jumbotron\">\n" +
    "    <h1 class=\"title-site\">Chrono Lo<span><img class=\"logo\" src=\"img/logolove.svg\" alt=\"logo\">e</span></h1>\n" +
    "  </div>\n" +
    "  <div class=\"row description\">\n" +
    "    <div class=\"col-xs-12 container\">\n" +
    "      <h2>Description</h2>\n" +
    " <form>\n" +
    "   <div class=\"form-group\">\n" +
    "     <label for=\"sel1\">Ta silhouette:</label>\n" +
    "     <select class=\"form-control\" id=\"sel1\">\n" +
    "       <option>svelte</option>\n" +
    "       <option>normal(e)</option>\n" +
    "       <option>athlétique</option>\n" +
    "       <option>musclé(e)</option>\n" +
    "       <option>fort(e)</option>\n" +
    "     </select>\n" +
    "     <br>\n" +
    "     <label for=\"sel2\">Ta situation professionnelle:</label>\n" +
    "     <select class=\"form-control\" id=\"sel2\">\n" +
    "       <option>étudiant(e)</option>\n" +
    "       <option>salarié(e)</option>\n" +
    "       <option>à mon compte</option>\n" +
    "       <option>sans emploi</option>\n" +
    "       <option>retraité(e)</option>\n" +
    "     </select>\n" +
    "     <br>\n" +
    "     <label for=\"sel2\">Ta recherche:</label>\n" +
    "     <select class=\"form-control\" id=\"sel2\">\n" +
    "       <option>un flirt</option>\n" +
    "       <option>une companie</option>\n" +
    "       <option>un bout de chemin </option>\n" +
    "       <option>le grand Amour</option>\n" +
    "     </select>\n" +
    "     <br>\n" +
    "     <label for=\"sel2\">Son âge:</label>\n" +
    "     <select class=\"form-control\" id=\"sel2\">\n" +
    "       <option>entre 18 et 25</option>\n" +
    "       <option>entre 25 et 30</option>\n" +
    "       <option>entre 30 et 35</option>\n" +
    "       <option>entre 35 et 40</option>\n" +
    "       <option>entre 40 et 45</option>\n" +
    "       <option>entre 45 et 50</option>\n" +
    "       <option>entre 50 et 55</option>\n" +
    "       <option>entre 55 et 60</option>\n" +
    "       <option>entre 60 et 65</option>\n" +
    "     </select>\n" +
    "     <br>\n" +
    "     <label for=\"sel2\">Tu cherches:</label>\n" +
    "     <select class=\"form-control\" id=\"sel2\">\n" +
    "       <option>un homme</option>\n" +
    "       <option>une femme</option>\n" +
    "           </select>\n" +
    " </form>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
