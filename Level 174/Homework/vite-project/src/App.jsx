import UsernameInput from "./components/UsernameInput";
import ThemeSwitcher from "./components/ThemeSwitcher";
import FormValidation from "./components/FormValidation";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      <UsernameInput />
      <ThemeSwitcher />
      <FormValidation />
      <ProfileCard />
    </div>
  );
}

export default App;