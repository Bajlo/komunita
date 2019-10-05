<?php

use Phalcon\Mvc\Controller;
use Phalcon\Mvc\Dispatcher;

class BaseController extends Controller
{
    private $unsecuredRoutes = [
        ['controller' => 'auth', 'action' => 'login'],
        ['controller' => 'auth', 'action' => 'signup'],
        ['controller' => 'auth', 'action' => 'register'],
        ['controller' => 'auth', 'action' => 'logout'],
        ['controller' => 'auth', 'action' => 'forgotpassword'],
        ['controller' => 'auth', 'action' => 'resetpassword']
    ];

    private $securedRoutes = [
        ['controller' => 'posts', 'action' => 'addc'],
        ['controller' => 'posts', 'action' => 'create'],
        ['controller' => 'posts', 'action' => 'my'],
    ];


    public function beforeExecuteRoute(Dispatcher $dispatcher) {
        $user = $this->session->get('auth');
        //print_r($user);

        if (empty($user) && $this->isSecuredRoute($dispatcher)) {
            $this->response->redirect('/login');
            //$dispatcher->forward(['controller' => 'auth', 'action' => 'login']);

            return false;
        }
    }

    public function auth()
    {
        return (object) $this->session->get('auth');
    }

    public function initialize()
    {

        $view = [
            'meta' => [
                "title"  => '',
                "description" => '',
                ],
            'keyword' => '',
            'location' => '',
            'sections' => '',
            'auth' => false,
        ];

        if($this->session->get('auth')) $view['auth'] = $this->session->get('auth');

        if(!isset($slug)) $slug = '';
        $view['sections'] = get_menu(1,$slug);

        $this->view->setVars($view);
    }

    public function onConstruct()
    {
        date_default_timezone_set('Europe/Zurich'); // India Timezone
        //$this->view->setVar('auth',$this->auth);
    }

    public function authorized()
    {
        if (!$this->isLoggedIn()) {
            return $this->response->redirect('user/login');
        }
    }

    public function isLoggedIn()
    {
        // Check if the variable is defined
        if ($this->session->has('AUTH_NAME') AND $this->session->has('AUTH_EMAIL') AND $this->session->has('AUTH_CREATED') AND $this->session->has('AUTH_UPDATED')) {
            return true;
        }
        return false;
    }

    // private functions
    private function isUnsecuredRoute(Dispatcher $dispatcher)
    {
        foreach ($this->unsecuredRoutes as $route) {
            if ($route['controller'] == $dispatcher->getControllerName()
                && $route['action'] == $dispatcher->getActionName()
            ) {
                return true;
            }
        }

        return false;
    }

        // private functions
        private function isSecuredRoute(Dispatcher $dispatcher)
        {
            foreach ($this->securedRoutes as $route) {
                if ($route['controller'] == $dispatcher->getControllerName()
                    && $route['action'] == $dispatcher->getActionName()
                ) {
                    return true;
                }
            }
    
            return false;
        }

}