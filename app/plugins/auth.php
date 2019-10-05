<?php 

namespace Plugins;

class Auth
{
    protected $user;
    protected $loggedOut = false;

    public function index() {
        return \Users::findFirst(4);
    }

    public function check() {
        
        if ($this->session->has('AUTH_NAME') AND $this->session->has('AUTH_EMAIL') AND $this->session->has('AUTH_CREATED') AND $this->session->has('AUTH_UPDATED')) {
            return \Users::findFirst(5);
        }
        return false;
    }
}