<script>
  import Login from "../layout/Login.svelte";
  import { jwt, login } from "../store";
  import { baseurl } from "../const/index.js";
  import { navigate } from "svelte-routing";

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

    const res = await fetch(`${baseurl}/api/login`, data);
    const resData = await res.json();
    if (res.ok) {
      $jwt = resData;
      navigate("Home", { replace: true });
    }

    setloginFlag(false);
  }
</script>

<Login on:callLoginAPI={handleLogin} />
