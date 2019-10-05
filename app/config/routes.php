<?php

$router = $di->getRouter();

$router->add("/login","auth::login")->setName("login");
$router->add("/logout","auth::logout")->setName("logout");
$router->addPost("/login","auth::loginCreate");
//$router->add("register","auth::register")->setName("register");
//$router->addPost("register","auth::registerCreate")->setName("register.create");

$router->add("/users/{id}",["controller" => "users","action" => "user",]);

$router->add("/api/catch_url",["controller" => "api","action" => "catchUrl",]);
$router->add("/api/locations",["controller" => "api","action" => "locations",]);
$router->add("/api/sections",["controller" => "api","action" => "sections",]);

$router->add("/s","posts::index")->setName("search");
$router->add("/s/{slug}","posts::index")->setName("search.sections");

$router->add("/add","posts::add")->setName("posts.add");
$router->addPost("/add","posts::create")->setName("jobs.create");

$router->add("/my","posts::my")->setName("posts.my");

$router->add("/p/{slug}","posts::single")->setName("posts.single");
$router->add("/p/{id:[0-9]+}/edit","posts::edit")->setName("posts.edit");

$router->addDelete("/p/{id:[0-9]+}/remove","posts::remove")->setName("posts.remove");

$router->add("/u/{slug}","users::single")->setName("users.single");



// Remove trailing slashes automatically
$router->removeExtraSlashes(true);

$router->handle();
