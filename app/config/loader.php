<?php

use Phalcon\Loader;

// Register an autoloader
$loader = new Loader();

$loader->registerNamespaces(
    [
        'Plugins' => $config->application->pluginsDir,
    ]
);

$loader->registerDirs(
    [
        $config->application->controllersDir,
        $config->application->modelsDir,
        //$config->application->pluginsDir,
    ]
);

$loader->register();