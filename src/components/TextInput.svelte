<script>
  export let type = "text";
  export let className = "";
  export let placeholder = "";
  export let name = "";
  export let value = "";
  export let errors = "";
  export let touched = "";
</script>

<style>
  .round-edge {
    border-radius: 23px 23px 23px 23px;
  }
  .error {
    color: red;
  }
</style>

<div class="form-group">
  <input
    autocomplete="on"
    {type}
    on:keyup
    on:input={e => (value = e.target.value)}
    {name}
    class={'form-control form-control-lg ' + className + ' text'}
    {placeholder} />
  <div class="error ml-3">
    {#if errors && touched}
      <small>{errors}</small>
    {/if}
  </div>
</div>
