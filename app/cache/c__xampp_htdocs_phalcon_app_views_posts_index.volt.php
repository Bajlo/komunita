<div class="search_results">
  <?php if ($page->total_pages > 1) { ?>
  <h1><?= $meta['title'] ?></h1>: <div><?= $page->total_items ?> (strana <?= $page->current ?> / <?= $page->total_pages ?>)</div>
  <?php } else { ?>
  <h1><?= $meta['title'] ?></h1>: <div><?= $page->total_items ?></div>
  <?php } ?>
</div>

<div class="row">

  <div class="nine columns">

    <ul class="posts">
    <?php $v38513126201iterated = false; ?><?php foreach ($page->items as $post) { ?><?php $v38513126201iterated = true; ?>
      <li>
        <div class="title"><a href="<?= $post->getUrl() ?>" <?php if ($post->url) { ?>rel="nofollow"<?php } ?>><?= $post->title ?></a></div>
        

        <?php if ($post->section == 2) { ?>
        <div class="info"><?= $post->address ?>, <?= $post->location->postal ?> <?= $post->location->place ?></div>
        <?php } else { ?>
        <div class="info"><?= $post->getDate() ?> | <?= ($post->location ? $post->location->place : '-') ?> | <a href="/u/<?= $post->user->username ?>">@<?= $post->user->name ?></a></div>
        <?php } ?>

        <div class="text"><?= $post->description ?></div>
        
      </li>
    <?php } if (!$v38513126201iterated) { ?>
      <li>Empty</li>
    <?php } ?>
    </ul>

    <?php if ($page->total_pages > 1) { ?>
    <a href="<?= $this->url->get('posts') ?>">First</a>
    <a href="<?= $this->url->get('posts') ?>?page=<?= $page->before ?>">Previous</a>
    <a href="<?= $this->url->get('posts') ?>?page=<?= $page->next ?>">Next</a>
<a href="<?= $this->url->get('posts') ?>?page=<?= $page->last ?>">Last</a>
    <?php } ?>

  </div>


  <div class="three columns">
    <div class="box">
        Something
      </div>
  </div>

</div>