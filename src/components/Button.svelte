<script>
  export let className = "";
  export let type = "button";
</script>

<style>
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
</style>

<button {type} class={'btn ' + className}>
  <slot />
</button>
