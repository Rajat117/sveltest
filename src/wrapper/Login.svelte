<script>
  import { navigate } from "svelte-routing";
  import { getNotificationsContext } from "svelte-notifications";

  import Login from "../layout/Login.svelte";
  import { login } from "../store";
  import { baseurl } from "../const/index.js";
  import {
    createRefreshTokenInterval,
    clearRefreshTokenInterval
  } from "../utils";

  const { addNotification } = getNotificationsContext();

  function setloginFlag(value) {
    login.update(_oldValue => {
      return {
        ..._oldValue,
        loginFlag: value
      };
    });
  }

  async function handleLogin(e) {
    setloginFlag(true);

    const data = {
      method: "POST",
      body: JSON.stringify(e.detail),
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    };

    try {
      const res = await fetch(`${baseurl}/api/login`, data);
      const resData = await res.json();
      if (res.ok) {
        localStorage.setItem("jwt", resData.access);
        localStorage.setItem("refresh_jwt", resData.refresh);
        createRefreshTokenInterval();

        navigate("Home", { replace: true });
      } else {
        setloginFlag(false);
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
      setloginFlag(false);
      addNotification({
        text: "heading",
        position: "top-right",
        heading: "Failure!",
        type: "error",
        description: error.message,
        removeAfter: 2000
      });
    }
  }
</script>

<Login on:callLoginAPI={handleLogin} />
