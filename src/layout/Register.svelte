<script>
  import { Container, Row, Col } from "sveltestrap";
  import { createEventDispatcher } from "svelte";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  const dispatch = createEventDispatcher();

  import Header from "../components/Header.svelte";
  import AuthCard from "../components/AuthCard.svelte";
  import TextInput from "../components/TextInput.svelte";
  import RadioButton from "../components/RadioButton.svelte";
  import TextArea from "../components/TextArea.svelte";
  import Button from "../components/Button.svelte";
  import Loader from "../layout/Loader.svelte";
  import { register } from "../store";

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
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      age: "",
      username: "",
      password: "",
      bio: ""
    },
    validationSchema: yup.object().shape({
      first_name: yup.string().required(),
      last_name: yup.string().required(),
      email: yup
        .string()
        .email()
        .required(),
      gender: yup.string().required(),
      age: yup.number().required(),
      username: yup.string().required(),
      password: yup.string().required(),
      bio: yup.string().required()
    }),
    onSubmit: values => {
      dispatch("callRegisterAPI", values);
    }
  });
</script>

<style>
  div * {
    font-family: "Oswald-Medium", Times, serif;
    font-weight: 500;
  }
  .register-card-div {
    margin-top: 5%;
  }
  .round-edge {
    border-radius: 23px 23px 23px 23px;
  }
  .submit-button {
    background: #333333;
    color: #ffffff;
  }
</style>

<Header />

{#if $register.registerFlag}
  <Loader />
{:else}
  <div class="register-card-div">
    <AuthCard CardHeader="Sign Up" CardHeaderClass="login-header">
      <div slot="body">
        <form>
          <Row>
            <Col>
              <TextInput
                name="first_name"
                errors={$errors.first_name}
                touched={$touched.first_name}
                on:keyup={handleChange}
                className="round-edge"
                placeholder="First Name" />
            </Col>
            <Col>
              <TextInput
                name="last_name"
                errors={$errors.last_name}
                touched={$touched.last_name}
                on:keyup={handleChange}
                className="round-edge"
                placeholder="Last Name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextInput
                name="email"
                errors={$errors.email}
                touched={$touched.email}
                on:keyup={handleChange}
                className="round-edge"
                placeholder="Email" />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextInput
                type="number"
                name="age"
                errors={$errors.age}
                touched={$touched.age}
                on:keyup={handleChange}
                className="round-edge"
                placeholder="Age" />
            </Col>
          </Row>
          <Row>
            <Col md={2} class="mb-1 ">
              <RadioButton
                bind:group={$form.gender}
                on:change={handleChange}
                type="radio"
                label="Male"
                name="gender"
                value="M" />
            </Col>
            <Col md={2} class="mb-1">
              <RadioButton
                bind:group={$form.gender}
                on:change={handleChange}
                type="radio"
                label="Female"
                name="gender"
                value="F" />
            </Col>
            <div class="form-error ml-3">
              {#if $errors.gender && $touched.gender}
                <small>{$errors.gender}</small>
              {/if}
            </div>
          </Row>
          <Row>
            <Col>
              <TextInput
                name="username"
                errors={$errors.username}
                touched={$touched.username}
                on:keyup={handleChange}
                className="round-edge"
                placeholder="User Name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextInput
                name="password"
                errors={$errors.password}
                touched={$touched.password}
                on:keyup={handleChange}
                type="password"
                className="round-edge"
                placeholder="Password" />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextArea
                errors={$errors.bio}
                touched={$touched.bio}
                on:keyup={handleChange}
                name="bio"
                className="round-edge"
                rows="3"
                placeholder="Bio..." />
            </Col>
          </Row>
          <Row>
            <Col class="mt-5">
              <div class="form-group">
                <button
                  type="submit"
                  on:click={handleSubmit}
                  class="btn btn-lg btn-block submit-button round-edge">
                  Register
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
      <div slot="footer" />
    </AuthCard>
  </div>
{/if}
