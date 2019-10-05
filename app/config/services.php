<?php

use Phalcon\Mvc\View;
use Phalcon\Mvc\View\Engine\Php as PhpEngine;
use Phalcon\Mvc\Url as UrlResolver;
use Phalcon\Mvc\View\Engine\Volt as VoltEngine;
use Phalcon\Mvc\Model\Metadata\Memory as MetaDataAdapter;
use Phalcon\Session\Adapter\Files as SessionAdapter;
use Phalcon\Flash\Direct as Flash;
use Plugins\Auth;

/**
 * Shared configuration service
 */
$di->setShared('config', function () {
    return include APP_PATH . "/config/config.php";
});

/**
 * The URL component is used to generate all kind of urls in the application
 */
$di->setShared('url', function () {
    $config = $this->getConfig();

    $url = new UrlResolver();
    $url->setBaseUri($config->application->baseUri);

    return $url;
});

/**
 * Setting up the view component
 */
// $di->setShared('view', function () {
//     $config = $this->getConfig();

//     $view = new View();
//     $view->setDI($this);
//     $view->setViewsDir($config->application->viewsDir);

//     $view->registerEngines([
//         '.volt' => function ($view) use ($config) {

//             $volt = new VoltEngine($view, $this);

//             if($config->settings->development === false) {
//                 $volt->setOptions([
//                     'compiledPath' => $config->application->cacheDir,
//                     'compiledSeparator' => '_',
//                     'compileAlways' => true  
//                 ]);
//             }
//             return $volt;
//         },
//         //'.php' => PhpEngine::class

//     ]);

//     return $view;
// });


// Setup the view component
$di->set(
    "view",
    function () {
        $config = $this->getConfig();

        $view = new View();
        $view->setViewsDir($config->application->viewsDir);
        $view->registerEngines([
            '.volt' => function ($view) use ($config) {

                $volt = new VoltEngine($view, $this);

                if($config->settings->development === false) {
                    $volt->setOptions([
                        'compiledPath' => $config->application->cacheDir,
                        'compiledSeparator' => '_',
                        'compileAlways' => true  
                    ]);
                }
                return $volt;
            },
            '.php' => "Phalcon\Mvc\View\Engine\Php"
        ]);
        return $view;
    }
);

/**
 * Database connection is created based in the parameters defined in the configuration file
 */
$di->setShared('db', function () {
    $config = $this->getConfig();

    $class = 'Phalcon\Db\Adapter\Pdo\\' . $config->database->adapter;
    $params = [
        'host'     => $config->database->host,
        'username' => $config->database->username,
        'password' => $config->database->password,
        'dbname'   => $config->database->dbname,
        'charset'  => $config->database->charset
    ];

    if ($config->database->adapter == 'Postgresql') {
        unset($params['charset']);
    }

    $connection = new $class($params);

    return $connection;
});


/**
 * If the configuration specify the use of metadata adapter use it or use memory otherwise
 */
$di->setShared('modelsMetadata', function () {
    return new MetaDataAdapter();
});

/**
 * Register the session flash service with the Twitter Bootstrap classes
 */
$di->set('flash', function () {
    return new Flash([
        'error'   => 'alert alert-danger',
        'success' => 'alert alert-success',
        'notice'  => 'alert alert-info',
        'warning' => 'alert alert-warning'
    ]);
});

/**
 * Start the session the first time some component request the session service
 */
$di->setShared('session', function () {
    $session = new SessionAdapter();
    $session->start();

    return $session;
});

$di->set(
    "auth",
    function () {
        $auth = new Auth();
        return $auth;
    }
);

// exit;

// use Phalcon\Mvc\View;
// use Phalcon\Di\FactoryDefault;
// use Phalcon\Mvc\Url as UrlProvider;
// use Phalcon\Mvc\View\Engine\Volt as Volt;
// use Phalcon\Db\Adapter\Pdo\Mysql as DbAdapter;
// //use Phalcon\Session\Adapter\Files as Session;
// use Plugins\Auth;

// // Create a DI
// $di = new FactoryDefault();

// // // Setup Session
// // $di->set(
// //     "session",
// //     function () {
// //         $session = new Session();
// //         $session->start;
// //         return $session;
// //     }
// // );

// // Setup the view component
// $di->set(
//     "view",
//     function () use ($config) {
//         $view = new View();
//         $view->setViewsDir($config->application->viewsDir);
//         $view->registerEngines([
//             '.volt' => function ($view) use ($config) {

//                 $volt = new Volt($view, $this);

//                 if($config->settings->development === false) {
//                     $volt->setOptions([
//                         'compiledPath' => $config->application->cacheDir,
//                         'compiledSeparator' => '_',
//                         'compileAlways' => true  
//                     ]);
//                 }
//                 return $volt;
//             },
//             '.php' => "Phalcon\Mvc\View\Engine\Php"
//         ]);
//         return $view;
//     }
// );

// // Setup a base URI so that all generated URIs include the home folder
// $di->set(
//     "url",
//     function () use ($config) {
//         $url = new UrlProvider();
//         $url->setBaseUri($config->application->baseUri);
//         return $url;
//     }
// );

// // Setup database
// $di->set(
//     "db",
//     function () use ($config) {
//         return new DbAdapter(
//             [
//                 "host" => $config->database->host,
//                 "username" => $config->database->username,
//                 "password" => $config->database->password,
//                 "dbname" => $config->database->dbname,
//                 'charset' => $config->database->charset
//             ]
//         );
//     }
// );

// // Setup Router
// $di->set(
//     "auth",
//     function () {
//         $auth = new Auth();
//         return $auth;
//     }
// );

// // Setup Router
// $di->set(
//     "router",
//     function () {
//         return require 'routes.php';
//     }
// );
