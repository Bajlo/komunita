<?php

use Phalcon\Mvc\Controller;

class LocationController extends Controller
{
    public function locationAction()
    {
        $this->view->disable();
        $q = $request->getQuery("q", "string");
        if($q) {
            $json = Locations::find(array(
                "columns" => "place",
                "conditions" => "(place LIKE ?1) OR (place LIKE ?2)",
                "group" => "place",
                "limit" => 8,
                "bind" => ["$q%","% $q%"]
              ));

            if(isset($json)) {
                //Create a response instance
                $response = new \Phalcon\Http\Response();
                return $response->setContent(json_encode($json));
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