<?php
// config data
use Phalcon\Config;

$config =  new Config([
    'database' => [
        'adapter'     => 'Mysql',
        'host'        => '80.211.177.70',
        'username'    => 'root',
        'password'    => 'root',
        'dbname'      => 'phalcon',
        'charset'     => 'utf8',
    ],
    'application' => [
        'controllersDir' => '../app/controllers/',
        'modelsDir'      => '../app/models/',
        'pluginsDir'      => '../app/plugins/',
        'viewsDir'       => '../app/views/',
        'migrationsDir'  => '../app/migrations/',
        'cacheDir'       => '../app/cache/',
        'baseUri'        => '/',
    ],
    'settings' => [
        'development'    => false,
    ]
]);

return $config;