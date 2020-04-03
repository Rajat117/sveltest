<script>
  import ChangePassword from "../layout/ChangePassword.svelte";
  import { _changePassword } from "../store";
  import { baseurl } from "../const/index.js";
  import { navigate } from "svelte-routing";

  function setChangePasswordFlag(value) {
    _changePassword.update(_oldValue => {
      return {
        ..._oldValue,
        changePasswordFlag: value
      };
    });
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
        // navigate("Home", { replace: true });
      }

      setChangePasswordFlag(false);
    } catch (error) {
      setChangePasswordFlag(false);
    }
  }
</script>

<ChangePassword on:callChangePasswordAPI={handlePasswordChange} />
