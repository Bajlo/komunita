<div class="search_results">
  <?php if ($page->total_pages > 1) { ?>
  <h1><?= $meta['title'] ?></h1>: <div><?= $page->total_items ?> (strana <?= $page->current ?> / <?= $page->total_pages ?>)</div>
  <?php } else { ?>
  <h1><?= $meta['title'] ?></h1>: <div><?= $page->total_items ?></div>
  <?php } ?>
</div>

<div class="row">

  <div class="twelve columns">

    <ul class="posts">
    <?php $v33841083141iterated = false; ?><?php foreach ($page->items as $index => $post) { ?><?php $v33841083141iterated = true; ?>
      <li id="post-<?= $post->id ?>">
        <div class="title"><a href="<?= $post->getUrl() ?>" <?php if ($post->url) { ?>rel="nofollow"<?php } ?>><?= $post->title ?></a></div>

        <div class="info"><?= $post->getDate() ?> | 
          <?= $post->Type ?> | 
          <a href="<?= $this->url->get(['for' => 'posts.edit', 'id' => $post->id]) ?>"><i class="fa fa-edit"></i></a> <a href="#" data-href="<?= $this->url->get(['for' => 'posts.remove', 'id' => $post->id]) ?>" data-id="<?= $post->id ?>" data-title="<?= $post->title ?>" class="remove-post"><i class="fa fa-trash-empty"></i></a>
        </div>
        
      </li>
    <?php } if (!$v33841083141iterated) { ?>
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

</div>