<?php
// config data
use Phalcon\Config;

$config =  new Config([
    'database' => [
        'adapter'     => 'Mysql',
        'host'        => '94.177.216.201',
        'username'    => 'root',
        'password'    => 'Bruty2000',
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