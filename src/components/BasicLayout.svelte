<script>
  import Icon from "fa-svelte";
  import { Link, navigate } from "svelte-routing";
  import get from "lodash/get";
  import {
    faSignOutAlt,
    faLock,
    faHome
  } from "@fortawesome/free-solid-svg-icons";

  import { _user } from "../store";
  import Header from "../components/Header.svelte";

  function handleLogout() {
    localStorage.clear();
    navigate("Login", { replace: true });
  }
</script>

<style>
  .sidebar {
    min-width: 220px;
    height: 100vh;
    background-color: #333333;
  }
  .profile-badge {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .dashboard-logo-name {
    color: #ffffff;
    font-size: 24px;
    margin: 0px 0px 0px 10px;
    align-self: center;
    font-family: "Times New Roman", Times, serif;
    font-weight: 500;
  }
  .horizonal-line {
    background-color: #ffffff;
    margin: 0px 5px;
  }
  .dashboard-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .side-list-name {
    color: #dbe3f9;
    font-size: 16px;
    margin-left: 10px;
  }
  div :global(.side-list-icon) {
    color: #dbe3f9;
  }
  .side-list {
    display: flex;
    align-items: center;
    padding: 5px 10px;
  }
  .navbar {
    height: 58px;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-end;
  }
  .profile-badge {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .profile-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
  }
  .profile-name {
    align-self: center;
    padding: 0px;
    margin: 0px;
    font-family: "Times New Roman", Times, serif;
    font-weight: 500;
    color: #848696;
  }
  .sidebar-aside-area {
    display: flex;
    flex-direction: column;
    width: 100rem;
  }
  .add-cursor {
    cursor: pointer;
  }
</style>

<Header />
<svelte:head>
  <style>
    body {
      padding: 0;
    }
  </style>
</svelte:head>

<div class="d-flex">
  <div class="sidebar">
    <div class="profile-badge m-2">
      <img alt="logo" src="favicon.png" class="dashboard-logo" />
      <p class="dashboard-logo-name">DjangoSvelte</p>
    </div>
    <hr class="my-2 horizonal-line" />
    <div class="mt-4">
      <Link to="/Home">
        <div class="side-list">
          <Icon class="side-list-icon" icon={faHome} />
          <span class="side-list-name">Dashboard</span>
        </div>
      </Link>
      <Link to="/Change-Password">
        <div class="side-list">
          <Icon class="side-list-icon" icon={faLock} />
          <span class="side-list-name">Change Password</span>
        </div>
      </Link>
      <div class="side-list add-cursor" on:click={handleLogout}>
        <Icon class="side-list-icon" icon={faSignOutAlt} />
        <span class="side-list-name">Logout</span>
      </div>
    </div>
  </div>
  <div class="sidebar-aside-area">
    <div class="navbar">
      <div class="profile-badge">
        <p class="profile-name">
          {get($_user, 'first_name', '') + ' ' + get($_user, 'last_name', '')}
        </p>
        <img alt="Rajat" src="geazy.jpg" class="profile-logo" />
      </div>
    </div>
    <slot name="main-body" />
  </div>
</div>
