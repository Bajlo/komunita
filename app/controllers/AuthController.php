<?php

use Phalcon\Mvc\Controller;

class AuthController extends BaseController
{

    public function loginAction()
    {
        echo "<h1>Login</h1>";

        //echo encrypt('dr.bajlo@gmail.com');
        //echo '<br>';
        // echo decrypt('bq1UdiHH74BxArmfyf71ageh9epN1sBcpCei0HIAW5fF2f6C/bjLR8K7AGIFusrpIJxV/ABzQsu2Lv8HBhc9uSuit2n+aNuRCMSFbjLVBF9A==','iq@rULa0');

        $this->view->setVar('login','');
    }

    public function loginCreateAction()
    {


        $login    = $this->request->getPost('login');
        $password = $this->request->getPost('password');

        $login = substr(encrypt($login),3,-2);

        $user_search = [
            "conditions" => "login like :login:",
            "bind" => ['login' => '%'.$login.'%']
        ];

        //$user = Users::findFirstByLogin(encrypt($login));
        $user = Users::findFirst($user_search);
        if ($user) {

            if ($this->security->checkHash($password, $user->password)) {

                $this->session->set('auth', [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email
                ]);  
                $this->session->set('logged', true);  

                $this->flashSession->success("Fantastic!");
                $this->response->redirect('/');

            }

        } else {
            // To protect against timing attacks. Regardless of whether a user
            // exists or not, the script will take roughly the same amount as
            // it will always be computing a hash.
            $this->security->hash(rand());
        }

        // The validation has failed
        $this->flash->error("Incorrect credentials"); 
        //return $this->dispatcher->forward(["controller" => "auth","action" => "login"]);
        $this->view->setVars([
            'login' => $login
        ]);
        return $this->dispatcher->forward(
            [
                'controller' => 'auth',
                'action'     => 'login',
            ]
        );
    }

    public function registerCreateAction()
    {
        $user = new Users();

        $login    = $this->request->getPost('login');
        $password = $this->request->getPost('password');

        $user->login = $login;

        // Store the password hashed
        $user->password = $this->security->hash($password);

        $user->save();



    }

    public function logoutAction() { 
        $this->session->remove('auth'); 
        $this->session->remove('logged'); 
        return $this->dispatcher->forward(array( 
           'controller' => 'auth', 'action' => 'login' 
        )); 
     } 

    // public function loginCheckAction() {  
    //     if ($this->request->isPost()) { 
    //        $user = Users::findFirst(array( 
    //           'login = :login: and password = :password:', 'bind' => array( 
    //              'login' => $this->request->getPost("login"), 
    //              'password' => $this->request->getPost("password") 
    //           ) 
    //        ));  
    //        if ($user === false) { 
    //           $this->flash->error("Incorrect credentials"); 
    //           return $this->dispatcher->forward(array( 
    //              'controller' => 'index', 'action' => 'index' 
    //           )); 
    //        } 
    //        $this->session->set('auth', $user->id);  
    //        $this->flash->success("You've been successfully logged in"); 
    //     } 
    //     return $this->dispatcher->forward(array( 
    //        'controller' => 'posts', 'action' => 'index' 
    //     )); 
    //  }  


    public function loginCheck2Action()
    {
        $json = User::find(array(
            "columns" => "place",
            "conditions" => "(place LIKE ?1) OR (place LIKE ?2)",
            "group" => "place",
            "limit" => 8,
            "bind" => ["$q%","% $q%"]
          ));

    }

    public function registerAction()
    {
        $username = $_GET['username'];

    }

    public function registerConfirmationAction()
    {
        // $user = new Users();

        // // Store and check for errors
        // $success = $user->save(
        //     $this->request->getPost(),
        //     [
        //         "name",
        //         "email",
        //     ]
        // );

        // if ($success) {
        //     echo "Thanks for registering!";
        // } else {
        //     echo "Sorry, the following problems were generated: ";

        //     $messages = $user->getMessages();

        //     foreach ($messages as $message) {
        //         echo $message->getMessage(), "<br/>";
        //     }
        // }

        // $this->view->disable();
    }
}