<script>
  import Icon from "fa-svelte";
  import { Link, navigate } from "svelte-routing";
  import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();

  import Button from "../components/Button.svelte";
  import Input from "../components/TextInput.svelte";
  import AuthCard from "../components/AuthCard.svelte";
  import Header from "../components/Header.svelte";
  import Loader from "../layout/Loader.svelte";
  import { herokuUrl } from "../const";
  import { login } from "../store";

  let email = "";
  let password = "";
  let name = "";

  function handleSubmit() {
    const _body = {
      email,
      password
    };
    dispatch("callLoginAPI", _body);
  }
</script>

<style>
  div * {
    font-family: "Oswald-Medium", Times, serif;
    font-weight: 500;
  }
  .login-email-text {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 600;
  }
  .round-edge {
    border-radius: 23px 23px 23px 23px;
  }
  .fb-button {
    background: #3b5998;
    color: #ffffff;
  }
  .google-button {
    background: #ffffff;
    color: #757575;
  }
  .submit-button {
    background: #333333;
    color: #ffffff;
  }
  .signup-text {
    font-size: 20px;
    text-decoration: underline;
    color: #444444;
  }
  .login-card-div {
    margin-top: 8%;
  }
</style>

<Header />

{#if $login.loginFlag}
  <Loader />
{:else}
  <div class="login-card-div">
    <AuthCard CardHeader="Login" CardHeaderClass="login-header">
      <div slot="body">
        <div>
          <button class="btn btn-lg btn-block round-edge fb-button">
            <a href={`${herokuUrl}/auth/login/facebook`}>
              <span class="d-flex justify-content-center align-content-center">
                <span class="mr-3">
                  <Icon icon={faFacebook} />
                </span>
                <span>Login with Facebook</span>
              </span>
            </a>
          </button>
          <button class="btn btn-lg btn-block round-edge google-button">
            <a
              href={`${herokuUrl}/auth/login/google-oauth2`}
              class="google-button">
              <span class="d-flex justify-content-center align-content-center">
                <span class="mr-3">
                  <Icon icon={faGoogle} />
                </span>
                <span>Login with Google</span>
              </span>
            </a>
          </button>
          <div class="mt-5">
            <h5 class="text-center login-email-text">Login with Email</h5>
            <form class="mt-3">
              <Input
                name="email"
                bind:value={email}
                placeholder="Email"
                className="round-edge" />
              <Input
                type="password"
                name="password"
                bind:value={password}
                placeholder="Password"
                className="round-edge" />
              <div class="form-group text-center">
                <button
                  type="submit"
                  class="btn btn-lg btn-block submit-button round-edge"
                  on:click|preventDefault={handleSubmit}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-center">
          <p>Don't have an account?</p>
        </div>
        <Link to="/Register">
          <div class="text-center">
            <p class="signup-text">SIGN UP NOW</p>
          </div>
        </Link>
      </div>
    </AuthCard>
  </div>
{/if}
