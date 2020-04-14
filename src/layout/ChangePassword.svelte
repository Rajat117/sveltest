<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import BasicLayout from "../components/BasicLayout.svelte";
  import AuthCard from "../components/AuthCard.svelte";
  import TextInput from "../components/TextInput.svelte";
  import Button from "../components/Button.svelte";
  import Loader from "./Loader.svelte";
  import { _changePassword } from "../store";

  export let current_password = "";
  export let new_password = "";

  function handleChange(e) {
    e.preventDefault();
    const _body = {
      current_password,
      new_password
    };
    dispatch("callChangePasswordAPI", _body);
  }
</script>

<style>

</style>

<BasicLayout>
  <div slot="main-body" class="mt-5">
    {#if _changePassword.changePasswordFlag}
      <Loader />
    {:else}
      <AuthCard
        CardHeader="Change Password"
        CardClass="change-password-card"
        CardHeaderClass="login-header">
        <div slot="body">
          <form>
            <TextInput
              type="password"
              name="current_password"
              bind:value={current_password}
              className="round-edge"
              placeholder="Current Password" />
            <TextInput
              type="password"
              name="new_password"
              bind:value={new_password}
              className="round-edge"
              placeholder="New Password" />
            <Button
              on:click={handleChange}
              type="submit"
              className="btn-lg btn-block submit-button round-edge">
              Save Changes
            </Button>
          </form>
        </div>
      </AuthCard>
    {/if}
  </div>
</BasicLayout>
