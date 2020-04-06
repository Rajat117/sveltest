<script>
  export let errors;
  export let touched;
  export let name = "";
  export let rows = "3";
  export let className = "";
  export let placeholder = "Enter text...";
</script>

<style>
  .error {
    color: red;
  }
  .round-edge {
    border-radius: 20px;
  }
</style>

<div class="form-group">
  <textarea
    on:keyup
    {name}
    class={'form-control ' + className}
    {rows}
    {placeholder} />
  <div class="error ml-3">
    {#if errors && touched}
      <small>{errors}</small>
    {/if}
  </div>
</div>
