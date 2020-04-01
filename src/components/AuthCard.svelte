<script>
  import { Card, CardBody } from "sveltestrap";

  export let CardHeader = "Default Header";
</script>

<style>
  .login-card {
    display: flex;
    justify-content: center;
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
</style>

<div class="login-card mt-5">
  <div>
    <div class="d-flex flex-column justify-content-center">
      <div>
        <h3 class="text-center">{CardHeader}</h3>
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
