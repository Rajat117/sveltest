<script>
  import { Card, CardBody } from "sveltestrap";

  export let CardHeader = "Default Header";
  export let CardHeaderClass = "";
  export let CardClass = "register-card";
</script>

<style>
  .center-card {
    display: flex;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .login-card {
    width: 350px;
  }
  .register-card {
    width: 450px;
  }
  .change-password-card {
    width: 450px;
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
  }
  .login-header {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 30px;
    font-weight: 600;
  }

  @media screen and (max-width: 600px) {
    .login-card {
      min-width: 280px;
    }
    .change-password-card {
      width: 280px;
    }
  }
</style>

<div class="center-card">
  <div class={CardClass}>
    <div class="d-flex flex-column justify-content-center">
      <div>
        <h3 class={`text-center ${CardHeaderClass}`}>{CardHeader}</h3>
      </div>
      <div class="mt-3">
        <slot name="body" />
      </div>
    </div>
    <div class="mt-5 d-flex flex-column justify-content-center">
      <slot name="footer" />
    </div>
  </div>
</div>
