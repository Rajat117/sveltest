<script>
  import { getNotificationsContext } from "svelte-notifications";

  import ChangePassword from "../layout/ChangePassword.svelte";
  import { _changePassword } from "../store";
  import { baseurl } from "../const/index.js";
  import { navigate } from "svelte-routing";

  const { addNotification } = getNotificationsContext();

  function setChangePasswordFlag(value) {
    $_changePassword.changePasswordFlag = value;
  }

  async function handlePasswordChange(e) {
    setChangePasswordFlag(true);

    const token = localStorage.getItem("jwt");
    const data = {
      method: "POST",
      body: JSON.stringify(e.detail),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      mode: "cors"
    };

    try {
      const res = await fetch(`${baseurl}/api/change-password`, data);
      const resData = await res.json();

      if (res.ok) {
        setChangePasswordFlag(false);
        addNotification({
          text: "heading",
          heading: "Success!",
          type: "success",
          position: "top-right",
          description: resData.message,
          removeAfter: 2000
        });
      } else {
        setChangePasswordFlag(false);
        addNotification({
          text: "heading",
          heading: "Failure!",
          type: "error",
          position: "top-right",
          description: resData.message,
          removeAfter: 2000
        });
      }
    } catch (error) {
      setChangePasswordFlag(false);
      addNotification({
        text: "heading",
        heading: "Failure!",
        type: "error",
        position: "top-right",
        description: error.message,
        removeAfter: 2000
      });
    }
  }
</script>

<ChangePassword on:callChangePasswordAPI={handlePasswordChange} />
