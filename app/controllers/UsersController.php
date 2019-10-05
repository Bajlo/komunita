<?php

use Phalcon\Mvc\Controller;
use Phalcon\Paginator\Adapter\Model as PaginatorModel;

class UsersController extends Controller
{
    public function indexAction()
    {
        $users = Users::find();
        $currentPage = (int) $_GET["page"];

        // Create a Model paginator, show 10 rows by page starting from $currentPage
        $paginator = new PaginatorModel(
            [
                "data"  => $users,
                "limit" => 10,
                "page"  => $currentPage,
            ]
        );

        // Get the paginated results
        $page = $paginator->getPaginate();

        $this->view->setVar('page',$page);
    }

    public function singleAction($id)
    {
        $user = Users::findFirst($id);
        $this->view->setVar('user',$user);
    } 

}