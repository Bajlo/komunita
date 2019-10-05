<?php

use Phalcon\Mvc\Controller;
use Phalcon\Paginator\Adapter\Model as PaginatorModel;
//use Phalcon\Mvc\Model\Manager;

class PostsController extends BaseController
{

    public function sectionsAction($slug)
    {

    }

    public function indexAction($slug=false)
    {
        $auth = $this->session->get('auth');
        
        $keyword = (isset($_GET['keyword'])) ? $_GET['keyword'] : '';
        $location_id = (isset($_GET['location_id'])) ? $_GET['location_id'] : '';
        $section_id = section_id($slug);

        $menu_item = get_menu_items($slug);

        // --- meta ---
        $meta = [
            "title"  => 'Hľadať',
            "description" => 'Hľadať vo Švajčiarsku.',
        ]; 
        
        if($menu_item) {
            $meta = [
                "title"  => $menu_item['title'],
                "description" => '',
            ];
        }
        // ------
        


        $query = [
            "conditions" => "type = :type: and title like :title:",
            "order" => "created DESC",
            "bind" => [
                'type' => 0,
                'title' => $keyword.'%'
            ]
        ];

        if($location_id) {
            $query['conditions'] .= ' and location_id = :location_id:';
            $query['bind']['location_id'] = $location_id;
        }
        if($section_id) {
            $query['conditions'] .= ' and section = '.$section_id;
        }
        $jobs = Posts::find($query);

        // Create a Model paginator, show 10 rows by page starting from $currentPage
        $currentPage = $this->request->getQuery("page", 'int');
        $paginator = new PaginatorModel(
            [
                "data"  => $jobs,
                "limit" => 15,
                "page"  => $currentPage,
            ]
        );
        $page = $paginator->getPaginate();


        $sections = get_menu(1,$slug);

        // view
        $this->view->setVars([
            'meta' => $meta,
            'page' => $page,
            'keyword' => $keyword,
            'location' => $_GET['location'],
            'location_id' => $_GET['location_id'],
            'sections' => $sections,
            'search' => 1
        ]);
    }

    public function myAction()
    {

        $auth = $this->session->get('auth');
        
        $keyword = (isset($_GET['keyword'])) ? $_GET['keyword'] : '';
        $location_id = (isset($_GET['location_id'])) ? $_GET['location_id'] : '';
        $section_id = section_id('my');

        $menu_item = get_menu_items();

        // --- meta ---
        $meta = [
            "title"  => 'Hľadať',
            "description" => 'Hľadať vo Švajčiarsku.',
        ]; 
        
        if($menu_item) {
            $meta = [
                "title"  => 'Moje inzeráty',
                "description" => '',
            ];
        }
        // ------
        


        $query = [
            "conditions" => "user_id = ".$auth['id'],
            "order" => "created DESC"
        ];

        if($location_id) {
            $query['conditions'] .= ' and location_id = :location_id:';
            $query['bind']['location_id'] = $location_id;
        }


        $posts = Posts::find($query);

        // Create a Model paginator, show 10 rows by page starting from $currentPage
        $currentPage = $this->request->getQuery("page", 'int');
        $paginator = new PaginatorModel(
            [
                "data"  => $posts,
                "limit" => 15,
                "page"  => $currentPage,
            ]
        );
        $page = $paginator->getPaginate();


        //$sections = get_menu(1,$slug);

        // view
        $this->view->setVars([
            'meta' => $meta,
            'page' => $page,
            //'sections' => $sections,
            //'search' => 1
        ]);
    }


    public function singleAction($slug)
    {

        $post = Posts::findFirstBySlug($slug);
        //$job = Posts::findFirstById($id);
        if($post->title) {
            $meta = [
                "title"  => $post->title,
                "description" => 'Job description for '.$post->title,
            ];
            $this->view->setVars([
                'meta' => $meta,
                'post' => $post,
            ]);
        }

    }

    public function editAction($id)
    {

        $query = [
            "conditions" => "id = :id: and user_id = ".$this->auth()->id,
            "bind" => [
                'id' => $id
            ]
        ];

        $post = Posts::findFirst($query);
        if(!$post) {
            $this->response->redirect([ "for" => "posts.single", "slug" => $slug ]);
            return false;
        }

        $meta = [
            "title"  => $post->title,
            "description" => 'Job description for '.$post->title,
        ];
        $this->view->setVars([
            'meta' => $meta,
            'post' => $post,
        ]);


    }


    public function removeAction($id)
    {
        $query = [
            "conditions" => "id = :id: and user_id = ".$this->auth()->id,
            "bind" => [
                'id' => $id
            ]
        ];

        $post = Posts::findFirst($query);
        $return = ['result'=>true];
        if(!$post) {
            $return = ['result'=>false];
        }
        $post->delete();
        $this->view->disable();
        return $this->response->setContent(json_encode($return));

    }

    public function addAction()
    {
        $this->view->setVar('page',$page);
    }

    public function createAction()
    {
        $auth = $this->session->get('auth');
        if($auth) {
            $title = $this->request->getPost("title");
            $slug = slug($title);
            $description = $this->request->getPost("description");
            $section = $this->request->getPost("type");
            $category = $this->request->getPost("subtype");
            $url = $this->request->getPost("url");
            $phone = $this->request->getPost("phone");
            $email = $this->request->getPost("email");
            $address = $this->request->getPost("address");
            $location = $this->request->getPost("location");
            $location_id = $this->request->getPost("location_id");
    
            $do = $this->db->execute("
                INSERT INTO posts (title, description, slug, section, category, url,user_id,location_id) 
                VALUES ('$title', '$description', '$slug', '$section', '$category', '$url','".$auth['id']."','$location_id')
            ");
            if($do) {
                $this->flashSession->success("Your job was stored correctly!");
                $this->response->redirect([ "for" => "search" ]);
            }
        }

    }
}