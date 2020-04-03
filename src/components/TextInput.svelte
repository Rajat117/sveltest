<script>
  export let type = "text";
  export let className = "";
  export let placeholder = "";
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
    {type}
    on:input={e => (value = e.target.value)}
    {name}
    class={'form-control form-control-lg ' + className + ' text'}
    {placeholder} />
</div>
