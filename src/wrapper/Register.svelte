<script>
  import Register from "../layout/Register.svelte";
  import { register } from "../store";
  import { baseurl } from "../const/index.js";
  import { navigate } from "svelte-routing";

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
        navigate("Login", { replace: true });
      }

      setRegisterFlag(false);
    } catch (error) {
      setRegisterFlag(false);
    }
  }
</script>

<Register on:callRegisterAPI={handleRegister} />
