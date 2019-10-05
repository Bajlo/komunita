<h1>Sections</h1>

<div class="row">
    
  <div class="three columns">
    <div class="box">
        Something
      </div>
  </div>

  <div class="nine columns">
    
    <?php if ($page->total_pages > 1) { ?>
    Total posts: <?= $page->total_items ?> (<?= $page->current ?> of <?= $page->total_pages ?> pages)
    <?php } else { ?>
    Total posts: <?= $page->total_items ?>
    <?php } ?>


    <ul class="posts">
    <?php foreach ($page->items as $post) { ?>
      <li>
        <div class="title"><a href="<?= $post->getUrl() ?>" <?php if ($post->url) { ?>rel="nofollow"<?php } ?>><?= $post->title ?></a></div>
        <?php $Locations = $post->getLocations(); ?>
        <div class="info"><span class="section"><?= $post->getTypeUrl() ?></span> | <?= $post->getDate() ?> | <?= ($Locations ? $Locations->place : '-') ?> | <a href=""><?= $post->domain ?></a></div>
        <div class="text"><?= $post->description ?></div>
        
      </li>
    <?php } ?>
    </ul>

    <?php if ($page->total_pages > 1) { ?>
    <a href="<?= $this->url->get('posts') ?>">First</a>
    <a href="<?= $this->url->get('posts') ?>?page=<?= $page->before ?>">Previous</a>
    <a href="<?= $this->url->get('posts') ?>?page=<?= $page->next ?>">Next</a>
    <a href="<?= $this->url->get('posts') ?>?page=<?= $page->last ?>">Last</a>
    <?php } ?>

  </div>

</div>