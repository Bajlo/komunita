
<!DOCTYPE html>
<html>
    <head>
        <title><?= $meta['title'] ?> - Phalcon</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="utf-8">
<link rel="shortcut icon" type="image/png" href="/img/favicon.png"/> 
<link rel="stylesheet" href="/css/style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript"></script>
<script src="/js/script.js" type="text/javascript"></script>


    </head>

    <body>
        <div id="nav"><div class="container">
            
<div class="u-pull-left">
    <ul>
        <li class="logo"><a href="/">in<strong>Switzerland</strong>only<span>.com</span></a></li>
        <li><?= $this->tag->linkto($this->url->get(['for' => 'jobs']), 'Jobs') ?></li>
        <?php if ($auth->check()) { ?>
        <li><?= $this->tag->linkto($this->url->get(['for' => 'jobs.add']), '+ Add') ?></li>
        <?php } ?>
    </ul>
</div>

<div class="u-pull-right">
    <?php if ($auth->check()) { ?>
        <?= $auth->check()->username ?>
    <?php } else { ?>
        <?= $this->tag->linkto($this->url->get(['for' => 'login']), 'Login') ?>
    <?php } ?>
    
</div>
        </div></div>

        <div id="search"><div class="container">
            
<form action="">
    <input type="text" name="job" id="job" value="<?= $job ?>" placeholder="Job Title">
    <input type="text" name="location" id="location" value="<?= $location ?>" placeholder="Location">
    <input type="hidden" name="location_id" id="location_id" value="" />
    
    <button class="btn btn-primary pull-right">Hľadať</button>
</form>
        </div></div>

        <div id="content"><div class="container">
                

    <?= $this->getContent() ?>


        </div></div>

        <div id="footer"><div class="container">
            Copyright © 2017 <a href="/">inSwitzerlandonly.com</a>. All rights reserved.
        </div></div>
    </body>
</html>