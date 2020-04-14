<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { Link, navigate } from "svelte-routing";
  import Icon from "fa-svelte";
  import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";

  import Button from "../components/Button.svelte";
  import Input from "../components/TextInput.svelte";
  import AuthCard from "../components/AuthCard.svelte";
  import Header from "../components/Header.svelte";
  import Loader from "../layout/Loader.svelte";
  import { herokuUrl } from "../const";
  import { login } from "../store";

  const dispatch = createEventDispatcher();
  const {
    form,
    errors,
    state,
    touched,
    isValid,
    isSubmitting,
    isValidating,
    handleBlur,
    handleChange,
    handleSubmit
  } = createForm({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object().shape({
      password: yup.string().required(),
      email: yup
        .string()
        .email()
        .required()
    }),
    onSubmit: values => {
      dispatch("callLoginAPI", values);
    }
  });
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
    <AuthCard
      CardHeader="Login"
      CardClass="login-card"
      CardHeaderClass="login-header">
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
            <form class:valid={$isValid} on:submit={handleSubmit}>
              <Input
                name="email"
                on:keyup={handleChange}
                placeholder="Email"
                className="round-edge"
                errors={$errors.email}
                touched={$touched.email} />
              <Input
                type="password"
                name="password"
                on:keyup={handleChange}
                placeholder="Password"
                className="round-edge"
                errors={$errors.password}
                touched={$touched.password} />
              <div class="form-group text-center">
                <button
                  type="submit"
                  class="btn btn-lg btn-block submit-button round-edge">
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
