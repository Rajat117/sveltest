<script>
  export let className = "";
  export let placeholder = "";
  export let label = "";
  export let name = "";
  export let value = "";
</script>

<style>
  .round-edge {
    border-radius: 23px 23px 23px 23px;
  }
</style>

<div class="form-group">
  <input
    autocomplete="on"
    type="text"
    on:input={e => (value = e.target.value)}
    {name}
    class={'form-control form-control-lg ' + className}
    {placeholder} />
  <label>{label}</label>
</div>
