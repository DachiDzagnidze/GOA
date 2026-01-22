import NameForm from "./components/forms/NameForm";
import EmailForm from "./components/forms/EmailForm";
import LoginForm from "./components/forms/LoginForm";
import ProfileForm from "./components/forms/ProfileForm";
import AgreeForm from "./components/forms/AgreeForm";

export default function App() {
  return (
    <main className="main-container">
      <header style={{ marginBottom: "8px" }}>
        <h1>Verification Forms</h1>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            fontSize: "0.875rem",
          }}
        >
          Please complete the following details to verify your account.
        </p>
      </header>
      <NameForm />
      <EmailForm />
      <LoginForm />
      <ProfileForm />
      <AgreeForm />
    </main>
  );
}
