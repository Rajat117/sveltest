<script>
  import { Router, Link, Route } from "svelte-routing";

  import Login from "./wrapper/Login.svelte";
  import Register from "./wrapper/Register.svelte";
  import Home from "./layout/Home.svelte";
  export let url = "";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</svelte:head>

<Router {url}>
  <div>
    <Route path="Login" caseSensitive={false} component={Login} />
    <Route path="Register" component={Register} />
    <Route path="Home" component={Home} />
    <Route path="/">
      <Login />
    </Route>
  </div>
</Router>
