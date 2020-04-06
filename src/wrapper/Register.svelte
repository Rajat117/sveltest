<script>
  import { navigate } from "svelte-routing";
  import { getNotificationsContext } from "svelte-notifications";

  import Register from "../layout/Register.svelte";
  import { register } from "../store";
  import { baseurl } from "../const/index.js";

  const { addNotification } = getNotificationsContext();

  function setRegisterFlag(flag) {
    register.update(_oldValue => {
      return {
        ..._oldValue,
        registerFlag: flag
      };
    });
  }

  async function handleRegister(e) {
    setRegisterFlag(true);

    const data = {
      method: "POST",
      body: JSON.stringify(e.detail),
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    };

    try {
      const res = await fetch(`${baseurl}/api/register`, data);
      const resData = await res.json();
      if (res.ok) {
        addNotification({
          text: "text",
          heading: "Success!",
          type: "success",
          position: "top-right",
          description: resData.message,
          removeAfter: 2000
        });
        navigate("Login", { replace: true });
      } else {
        setRegisterFlag(false);
        addNotification({
          text: "text",
          heading: "Failure!",
          type: "error",
          position: "top-right",
          description: resData.message,
          removeAfter: 2000
        });
      }
    } catch (error) {
      setRegisterFlag(false);
      addNotification({
        text: "text",
        heading: "Failure!",
        type: "error",
        position: "top-right",
        description: error.message,
        removeAfter: 2000
      });
    }
  }
</script>

<Register on:callRegisterAPI={handleRegister} />
