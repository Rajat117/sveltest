<script>
  import { Toast, ToastBody, ToastHeader } from "sveltestrap";

  export let notification = {};
  let onRemove = null;

  const handleButtonClick = () => {
    onRemove();
  };
</script>

<Toast class="mr-1" color={notification.type}>
  <ToastHeader>{notification.heading}</ToastHeader>
  <ToastBody>{notification.description}</ToastBody>
</Toast>
