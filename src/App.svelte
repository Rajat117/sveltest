<script>
  import { Router, Link, Route, navigate } from "svelte-routing";
  import Notifications from "svelte-notifications";

  import Login from "./wrapper/Login.svelte";
  import Register from "./wrapper/Register.svelte";
  import Home from "./layout/Home.svelte";
  import ChangePassword from "./wrapper/ChangePassword.svelte";
  import CustomNotification from "./components/CustomNotification.svelte";

  export let url = "";

  const token = localStorage.getItem("jwt");

  if (!token && !["/Login", "/Register"].includes(window.location.pathname)) {
    navigate("/Login");
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
        <Login />
      </Route>
      <Route path="Login" caseSensitive={false} component={Login} />
      <Route path="Register" component={Register} />
      <Route path="Home" component={Home} />
      <Route path="Change-Password" component={ChangePassword} />
    </div>
  </Router>
</Notifications>
