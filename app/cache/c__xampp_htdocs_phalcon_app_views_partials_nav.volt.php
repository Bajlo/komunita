
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