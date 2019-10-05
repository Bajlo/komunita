a:3:{i:0;s:2714:"
<!DOCTYPE html>
<html>
    <head>
        <title><?= $meta['title'] ?> - Komunita vo Švajčiarsku</title>
<?php if ($meta['description']) { ?><meta name="description" content="<?= $meta['description'] ?>"><?php } ?>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="utf-8">
<link rel="shortcut icon" type="image/png" href="/img/favicon.png"/> 
<link rel="stylesheet" href="/css/style.css">
<link rel="stylesheet" href="/css/fontello.css">
<link rel="stylesheet" href="/css/jquery.alertable.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript"></script>
<script src="/js/jquery.alertable.min.js" type="text/javascript"></script>
<script src="/js/script.js" type="text/javascript"></script>


    </head>

    <body>
        <div id="nav"><div class="container">
            
<div class="u-pull-left">
    <ul>
        <li class="logo"><a href="/"><img src="/img/logo.svg" width="150px" /></a></li>
       
        <?php if (($this->session->has('logged'))) { ?>
        <li><?= $this->tag->linkto($this->url->get(['for' => 'posts.my']), 'My') ?></li>
        <li><?= $this->tag->linkto($this->url->get(['for' => 'posts.add']), '+ Add') ?></li>
        <?php } ?>
    </ul>
</div>

<div class="u-pull-right">
    <?php if (($this->session->has('logged'))) { ?>
        
        <a href="/u/<?= $auth['name'] ?>"><?= $auth['name'] ?></a>,
        (<?= $this->tag->linkto($this->url->get(['for' => 'logout']), 'Log out') ?>)
    <?php } else { ?>
        <?= $this->tag->linkto($this->url->get(['for' => 'login']), 'Login') ?>
    <?php } ?>
    
</div>
        </div></div>

        <?php if(isset($search) || isset($home)) { ?>
        <div id="search"><div class="container">
            
<form action="<?php if(!isset($search)) echo '/s' ?>" class="search_form">
    <input type="text" name="keyword" id="job" value="<?= $keyword ?>" placeholder="Kľúčové slovo" <?php if(isset($search)) echo 'autofocus  onfocus="this.select()"' ?>>
    <input type="text" name="location" id="location" value="<?= $location ?>" placeholder="Lokalita">
    <input type="hidden" name="location_id" id="location_id" value="<?= $location_id ?>" />
    
    <button class="btn btn-primary pull-right">Hľadať</button>
</form>
        </div></div>

        <div id="subnav"><div class="container">
                <ul>
    <?php foreach ($sections as $section) { ?>
    <?= $section ?>
    <?php } ?>
</ul>

        </div></div>
        <?php } ?>

        <div id="content"><div class="container">
                ";s:7:"content";N;i:1;s:187:"
        </div></div>

        <div id="footer"><div class="container">
            © <?php echo date("Y"); ?> <a href="/">KOMUNITA.ch</a>
        </div></div>
    </body>
</html>";}