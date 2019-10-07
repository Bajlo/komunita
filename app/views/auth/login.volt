<h2>
    Login
</h2>

<?php $this->flash->output() ?>

{{ form("login") }}

    <p>
        <label for="email">
            Username
        </label>

        {{ textField("login") }}
    </p>

    <p>
        <label for="name">
            Password
        </label>

        {{ passwordField("password") }}
    </p>

    <input type='hidden' name='<?php echo $this->security->getTokenKey() ?>'
        value='<?php echo $this->security->getToken() ?>'/>
        
    <p>
        {{ submitButton("Login") }}
    </p>

</form>

<?php
echo $this->tag->linkTo('register','Sign Up');
