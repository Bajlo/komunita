<?php

use Phalcon\Mvc\Model;

class MyModel extends Model
{
    public $_di,$_url;

    public function onConstruct()
    {
        $this->_di = \Phalcon\DI\FactoryDefault::getDefault();
        $this->_url = $this->_di['url'];
    }

}