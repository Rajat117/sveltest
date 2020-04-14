<script>
  import { onMount } from "svelte";
  import { Container } from "sveltestrap";

  import BasicLayout from "../components/BasicLayout.svelte";
  import Loader from "./Loader.svelte";
  import { baseurl } from "../const";
  import { _user, login } from "../store";
  import { getUserInfo } from "../utils";

  _user.subscribe(val => localStorage.setItem("user", JSON.stringify(val)));

  onMount(async () => {
    try {
      $login.loginFlag = true;
      const userRes = await getUserInfo();
      const userResData = await userRes.json();
      if (userRes.ok) {
        $_user = userResData.data;
      }
      $login.loginFlag = false;
    } catch (error) {
      $login.loginFlag = false;
    }
  });
</script>

<style>

</style>

{#if $login.loginFlag}
  <BasicLayout>
    <Loader />
  </BasicLayout>
{:else}
  <BasicLayout>
    <div slot="main-body" class="mt-5">
      <Container class="text-center">
        <h1>Welcome!</h1>
      </Container>
    </div>
  </BasicLayout>
{/if}
