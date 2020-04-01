<script>
  export let className = "";
  export let label = "";
  export let value = "";
  export let name = "";
  export let group = "";
  export let checked = "";

  $: updateGroup(checked);

  function updateGroup(checked) {
    group = checked;
  }
</script>

<div class="form-group">
  <div class="form-check">
    <input
      type="radio"
      class={'form-check-input' + className}
      {name}
      {value}
      bind:group={checked} />
    <label class="form-check-label">{label}</label>
  </div>
</div>
