<h2>
    Sign up using this form
</h2>

{{ form("signup/register") }}

    <p>
        <label for="login">
            E-Mail
        </label>

        {{ textField("login") }}
    </p>

    <p>
        <label for="name">
            Password
        </label>

        {{ passwordField("password") }}
    </p>

    <p>
        {{ submitButton("Register") }}
    </p>

</form>