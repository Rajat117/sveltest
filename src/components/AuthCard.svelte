<script>
  import { Card, CardBody } from "sveltestrap";

  export let CardHeader = "Default Header";
  export let CardHeaderClass = "";
  export let CardType = "login-card";
</script>

<style>
  .center-card {
    display: flex;
    justify-content: center;
  }
  .login-card {
    width: 350px;
  }
  .register-card {
    width: 450px;
    min-width: 220px;
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
  .change-password {
    width: 450px;
  }
</style>

<div class="center-card">
  <div class="register-card">
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
