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

    <p>
        <?= $this->tag->submitbutton('Login') ?>
    </p>

</form>

<?php
echo $this->tag->linkTo('register','Sign Up');
