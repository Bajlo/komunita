<?php

use Phalcon\Mvc\Model;

class Users extends Model
{
    public $id;

    public $name;

    public $email;

    public function initialize()
    {
        $this->hasMany(
            'id',
            'Posts',
            'user_id',
            array(
                'alias'=>'posts',
                'reusable' => true
            )
        );

    }

}