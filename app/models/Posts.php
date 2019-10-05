<?php

class Posts extends MyModel
{
    public $id,$title,$description,$slug;

    public function initialize()
    {
        $this->hasOne(
            'location_id',
            'Locations',
            'id',
            array('alias'=>'location')
        );

        $this->belongsTo(
            'user_id',
            'Users',
            'id',
            array(
                'alias'=>'user',
                'reusable' => true,
                'foreignKey' => [
                    'allowNulls' => false
                ]
            )
        );

    }

    public function getDate()
    {
        $created = date('d.m.Y', strtotime( $this->created ));

        if($created == date('d.m.Y')) return '<span class="today">Dnes</span>';
        elseif($created == date('d.m.Y', time() - 60 * 60 * 24)) return 'Včera';
        else return $created;
    }

    public function getUrl()
    {
        if($this->url) return $this->url;
        else return $this->_url->get(['for' => 'posts.single', 'slug' => $this->slug]);
    }

    public function getType()
    {
        if($this->section==1) return 'Práca';
        else if($this->section==2) return 'Firmy a služby';
        else if($this->section==3) return 'Bývanie';
        else if($this->section==4) return 'Doprava';
        else if($this->section==5) return 'Bazár';
        else if($this->section==6) return 'Udalosti';
        else if($this->section==7) return 'Zoznamka';
    }

    public function getTypeUrl()
    {
        if($this->section==1) return '<a href="'.$this->_url->get(['for' => 'search.sections', 'slug' => 'praca']).'" class="section_'.$this->section.'">Práca</a>';
        else if($this->section==2) return '<a href="'.$this->_url->get(['for' => 'search.sections', 'slug' => 'firmy-sluzby']).'" class="section_'.$this->section.'">Firmy a služby</a>';
        else if($this->section==3) return '<a href="'.$this->_url->get(['for' => 'search.sections', 'slug' => 'byvanie']).'" class="section_'.$this->section.'">Bývanie</a>';
        else if($this->section==4) return '<a href="'.$this->_url->get(['for' => 'search.sections', 'slug' => 'doprava']).'" class="section_'.$this->section.'">Doprava</a>';
        else if($this->section==5) return '<a href="'.$this->_url->get(['for' => 'search.sections', 'slug' => 'bazar']).'" class="section_'.$this->section.'">Bazár</a>';
        else if($this->section==6) return '<a href="'.$this->_url->get(['for' => 'search.sections', 'slug' => 'udalosti']).'" class="section_'.$this->section.'">Udalosti</a>';
        else if($this->section==7) return '<a href="'.$this->_url->get(['for' => 'search.sections', 'slug' => 'zoznamka']).'" class="section_'.$this->section.'">Zoznamka</a>';
    }

}