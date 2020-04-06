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
  .submit-button :hover {
    color: #ffffff;
  }
</style>

<button on:click {type} class={'btn ' + className} x>
  <slot />
</button>
