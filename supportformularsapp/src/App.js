import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1> Supportformulars</h1>
      <label>Name</label>
      <input name="Name" ref={register({ required: true })} />
      {errors.Name && errors.Name.type === "required" && (
        <p>Befehle benötigen</p>
      )}

      <label>E-mail</label>
      <input
        type="email"
        name="email"
        ref={register({
          required: "Enter your e-mail",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Enter a valid e-mail address",
          },
        })}
      />

      {errors.email && <p className="error">{errors.email.message}</p>}

      <label>Theme Bereich</label>
      <select name="Topic" ref={register({ required: true })}>
        <option value="">Auswählen</option>
        <option value="allgemeine">Allgemeine</option>
        <option value="softwarefehler">Softwarefehler</option>
        <option value="rückruf">Rückruf</option>
      </select>
      {errors.Topic && errors.Topic.type === "required" && (
        <p>Befehle benötigen</p>
      )}

      <label>Beschreibung</label>
      <textarea name="Description" ref={register({ required: true })} />
      {errors.Description && errors.Description.type === "required" && (
        <p>Befehle benötigen</p>
      )}

      <input type="submit" ref={register({ required: true })} />
    </form>
  );
}

export default App;
