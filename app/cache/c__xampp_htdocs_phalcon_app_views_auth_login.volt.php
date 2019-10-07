<h2>
    Login
</h2>

<?php $this->flash->output() ?>

<?= $this->tag->form(['login']) ?>

    <p>
        <label for="email">
            Username
        </label>

        <?= $this->tag->textfield('login') ?>
    </p>

    <p>
        <label for="name">
            Password
        </label>

        <?= $this->tag->passwordfield('password') ?>
    </p>

    <input type='hidden' name='<?php echo $this->security->getTokenKey() ?>'
        value='<?php echo $this->security->getToken() ?>'/>
        
    <p>
        <?= $this->tag->submitbutton('Login') ?>
    </p>

</form>

<?php
echo $this->tag->linkTo('register','Sign Up');
