<?php

use Phalcon\Mvc\Controller;

class ApiController extends Controller
{

    public function initialize()
    {
        $this->view->disable();
    }

    public function catchUrlAction()
    {
        $url = $this->request->getQuery("url");
        if($url) {
            $data = $this->get_curl($url);
            if($data['type']=='html') {
                $json = $this->get_html_info($data['content']);
                unset($data['content']);
                $json = array_merge($data,$json);
            }
            else if($data['type']=='json') {
                $json = json_decode($data['content'], true);
                unset($data['content']);
                $json = array_merge($data,$json);
            }
            else if($data['type']=='image') {
                unset($data['content']);
                $json = $data;
            }
            else {
                //$json = $data;
            }
            if(isset($json)) {
                return $this->response->setContent(json_encode($json));
            }
            return null;
        }
    }


    public function locationsAction()
    {
        $q = $this->request->getQuery("term", "string");
        if($q) {
            $json = Locations::find(array(
                "columns" => "id,place AS value",
                "conditions" => "(place LIKE ?0) OR (place LIKE ?1) OR (alternatives LIKE ?0) OR (alternatives LIKE ?1) OR (alternatives LIKE ?2) OR (postal = ?3)",
                "group" => "place",
                "order" => "population desc",
                "limit" => 8,
                "bind" => ["$q%","% $q%","%,$q%","$q%"]
              ))->toArray();
            if(isset($json)) {
                return $this->response->setContent(json_encode($json));
            }
        }
        return false;
    }

    public function titlesAction()
    {
        $q = $this->request->getQuery("term", "string");
        if($q) {
            $json = Titles::find(array(
                "columns" => "id,title AS value",
                "conditions" => "(title LIKE ?0) OR (title LIKE ?1)",
                "limit" => 8,
                "bind" => ["$q%","% $q%"]
              ))->toArray();
            if(isset($json)) {
                return $this->response->setContent(json_encode($json));
            }
        }
        return false;
    }

    public function sectionsAction()
    {
        $q = $this->request->getQuery("id");
        if($q) {
            $conditions = ["order" => "level,ordercat"];
            $sections = Sections::find($conditions)->toArray();
            if(isset($sections)) {
                $menu = [];
                foreach($sections as $section) {
                    $menu_item = $section;
                    if($section['level']==0)  $menu[0][] = $section;
                    else $menu[$section['level0']][] = $section;
                }
                return $this->response->setContent(json_encode($menu));
            }
        }
        return false;
    }

    // ----------------- private functions -------------------

    private function get_html_info($html)
    {
        $title = $description = $keywords = $video = $image = false;

        $doc = new DOMDocument();
        @$doc->loadHTML($html);
        $nodes = $doc->getElementsByTagName('title');

        //get and display what you need:
        $title = $nodes->item(0)->nodeValue;

        $metas = $doc->getElementsByTagName('meta');

        for ($i = 0; $i < $metas->length; $i++)
        {
            $meta = $metas->item($i);

            if($meta->getAttribute('property') == 'og:title') $title = $meta->getAttribute('content');
            
            if($meta->getAttribute('name') == 'description') $description = $meta->getAttribute('content');
            if($meta->getAttribute('property') == 'og:description') $description = $meta->getAttribute('content');
            
            if($meta->getAttribute('property') == 'og:image' && !$image) $image = $meta->getAttribute('content');
            if($meta->getAttribute('property') == 'og:video:url' && !$video) $video = $meta->getAttribute('content');

        }

        $return = [
            "title" => trim($title),
            "description" => trim($description)
        ];
        if($image) $return['image'] = trim($image);
        if($video) {
            $video = explode('?',trim($video));
            $return['video'] = $video[0].'?showinfo=0&rel=0&wmode=transparent';
            $return['type'] = 'video';
        }

        return $return;

    }

    private function get_curl($url)
    {
        $domain = str_ireplace('www.', '', parse_url($url, PHP_URL_HOST));

        //return file_get_contents($url);
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_ENCODING ,"");
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        $content = curl_exec($ch);
        $content = mb_convert_encoding($content, 'HTML-ENTITIES', "UTF-8");

        $type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
        $new_url = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);

        if(substr($type,0,9)=='text/html') $type = 'html';
        elseif(substr($type,0,5)=='image') $type = 'image';
        elseif($type=='application/json') $type = 'json';

        curl_close($ch);
        //if ($content === FALSE) return curl_error($ch);
        return [
            'url' => $new_url,
            'domain' => $domain,
            'type' => $type,
            'content' => $content
        ];
    }
}