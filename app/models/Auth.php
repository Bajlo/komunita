<?php

class Auth extends MyModel
{
    public $id,$title,$description;

    public function initialize()
    {

    }

    public function getDate()
    {
        $created = date('d.m.Y', strtotime( $this->created ));

        if($created == date('d.m.Y')) return 'Today';
        elseif($created == date('d.m.Y', time() - 60 * 60 * 24)) return 'Yesterday';
        else return $created;
    }

    public function getUrl()
    {
        if($this->url) return $this->url;
        else return $this->_url->get(['for' => 'posts.single', 'id' => $this->id]);
    }

}