<?php

use Phalcon\Mvc\Controller;

class IndexController extends BaseController
{
    public function indexAction()
    {
        echo "<h1>Hello!!</h1>";

        // view
        $this->view->setVars([
            'home' => 1
        ]);

    }
}