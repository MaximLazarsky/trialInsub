import "./App.css";
import RegistrFormContainer from "./components/registrForm/RegisterFormContainer";

function App() {
  return (
    <main className="main">
      <div className="formContainer">
        <div className="steps">
          Step 1 of 3 <span className="activeCircle" /> <span /> <span />
        </div>
        <RegistrFormContainer />
      </div>
      <div className="textContentContainer">
        <h1 className="textContentTitle"> Dummy Heading </h1>
        <p className="textContentDiscription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </main>
  );
}

export default App;
