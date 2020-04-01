<script>
  import { Container, Row, Col } from "sveltestrap";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import Header from "../components/Header.svelte";
  import AuthCard from "../components/AuthCard.svelte";
  import TextInput from "../components/TextInput.svelte";
  import RadioButton from "../components/RadioButton.svelte";
  import Button from "../components/Button.svelte";
  import Loader from "../layout/Loader.svelte";
  import { register } from "../store";

  let bio = "";
  let first_name = "";
  let last_name = "";
  let email = "";
  let age = "";
  let gender = "";
  let username = "";
  let password = "";

  function handleSubmit() {
    const _body = {
      first_name,
      last_name,
      email,
      gender,
      age,
      username,
      password,
      bio
    };

    dispatch("callRegisterAPI", _body);
  }
</script>

<style>
  .login-card {
    display: flex;
    justify-content: center;
  }
  .round-edge {
    border-radius: 23px 23px 23px 23px;
  }
  .fb-button {
    background: #3b5998;
    color: #ffffff;
  }
  .google-button {
    background: #ffffff;
    color: #757575;
  }
  .submit-button {
    background: #333333;
    color: #ffffff;
  }
  .signup-text {
    font-size: 20px;
    text-decoration: underline;
  }
</style>

<Header />

{#if $register.registerFlag}
  <Loader />
{:else}
  <AuthCard CardHeader="Create New Account">
    <div slot="body">
      <Row>
        <Col>
          <TextInput
            bind:value={first_name}
            className="round-edge"
            placeholder="First Name" />
        </Col>
        <Col>
          <TextInput
            bind:value={last_name}
            className="round-edge"
            placeholder="Last Name" />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            bind:value={email}
            className="round-edge"
            placeholder="Email" />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            bind:value={age}
            className="round-edge"
            placeholder="Age" />
        </Col>
      </Row>
      <Row>
        <Col xs={2} class="mb-4 ">
          <RadioButton
            type="radio"
            label="Male"
            name="gender"
            value="M"
            bind:group={gender} />
        </Col>
        <Col xs={2} class="mb-4">
          <RadioButton
            type="radio"
            label="Female"
            name="gender"
            value="F"
            bind:group={gender} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            bind:value={username}
            className="round-edge"
            placeholder="User Name" />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            bind:value={password}
            className="round-edge"
            placeholder="Password" />
        </Col>
      </Row>
      <Row>
        <Col>
          <textarea
            bind:value={bio}
            class="form-control"
            rows="3"
            placeholder="Bio..." />
        </Col>
      </Row>
      <Row>
        <Col class="mt-4">
          <div class="form-group" on:click|preventDefault={handleSubmit}>
            <Button type="submit" className="btn-lg submit-button round-edge">
              Register
            </Button>
          </div>
        </Col>
      </Row>
    </div>
    <div slot="footer" />
  </AuthCard>
{/if}
