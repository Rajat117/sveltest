<script>
  import { Router, Link, Route, navigate } from "svelte-routing";
  import Notifications from "svelte-notifications";

  import Login from "./wrapper/Login.svelte";
  import Register from "./wrapper/Register.svelte";
  import Home from "./layout/Home.svelte";
  import ChangePassword from "./wrapper/ChangePassword.svelte";
  import CustomNotification from "./components/CustomNotification.svelte";
  import {
    getUserInfo,
    createRefreshTokenInterval,
    clearRefreshTokenInterval,
    logout
  } from "./utils";

  export let url = "";

  async function checkAuthToken() {
    try {
      const res = await getUserInfo();
      if (res.status === 401) {
        throw new Error();
      } else {
        createRefreshTokenInterval();
      }
    } catch (error) {
      logout();
      clearRefreshTokenInterval();
      navigate("/Login");
    }
  }

  if (window.location.pathname == "/Social/Redirect") {
    if (
      !window.location.search.includes("refresh") &&
      !window.location.search.includes("access")
    ) {
      navigate("/");
    }
    let access = window.location.search.split("&access=");
    let refresh = access[0].replace("?refresh=", "");
    if (access[1] && refresh) {
      localStorage.setItem("jwt", access[1]);
      localStorage.setItem("refresh_jwt", refresh);
      navigate("/Home");
    }
  }

  if (
    !localStorage.getItem("jwt") &&
    !["/Login", "/Register"].includes(window.location.pathname)
  ) {
    navigate("/Login");
  } else {
    checkAuthToken();
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

</svelte:head>

<Notifications item={CustomNotification}>
  <Router {url}>
    <div>
      <Route path="/">
        {#if localStorage.getItem('jwt')}
          <Home />
        {:else}
          <Login />
        {/if}
      </Route>
      <Route path="Login" caseSensitive={false} component={Login} />
      <Route path="Register" component={Register} />
      <Route path="Home" component={Home} />
      <Route path="Change-Password" component={ChangePassword} />
    </div>
  </Router>
</Notifications>
