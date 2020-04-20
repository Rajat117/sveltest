<script>
  import { createEventDispatcher } from "svelte";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  const dispatch = createEventDispatcher();

  import BasicLayout from "../components/BasicLayout.svelte";
  import AuthCard from "../components/AuthCard.svelte";
  import TextInput from "../components/TextInput.svelte";
  import Button from "../components/Button.svelte";
  import Loader from "./Loader.svelte";
  import { _changePassword } from "../store";

  const {
    form,
    errors,
    state,
    touched,
    isValid,
    isSubmitting,
    isValidating,
    handleBlur,
    handleChange,
    handleSubmit
  } = createForm({
    initialValues: {
      current_password: "",
      new_password: ""
    },
    validationSchema: yup.object().shape({
      current_password: yup.string().required(),
      new_password: yup
        .string()
        .required()
        .min(6)
    }),
    onSubmit: values => {
      dispatch("callChangePasswordAPI", values);
    }
  });
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
          <form class:valid={$isValid} on:submit={handleSubmit}>
            <TextInput
              type="password"
              on:keyup={handleChange}
              name="current_password"
              className="round-edge"
              placeholder="Current Password"
              errors={$errors.current_password}
              touched={$touched.current_password} />
            <TextInput
              type="password"
              name="new_password"
              on:keyup={handleChange}
              className="round-edge"
              placeholder="New Password"
              errors={$errors.new_password}
              touched={$touched.new_password} />
            <Button
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
