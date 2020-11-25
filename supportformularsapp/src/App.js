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
      <input name="name" ref={register({ required: true })} />
      {errors.name && errors.name.type === "required" && (
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
      <select name="topic" ref={register({ required: true })}>
        <option value="">Auswählen</option>
        <option value="allgemeine">Allgemeine</option>
        <option value="softwarefehler">Softwarefehler</option>
        <option value="rückruf">Rückruf</option>
      </select>
      {errors.topic && errors.topic.type === "required" && (
        <p>Befehle benötigen</p>
      )}

      {/* if 문써서 보이게끔 */}
      <label>Version</label>
      <input
        name="version"
        ref={register({
          required: "Enter your Version",
          pattern: {
            value: /^[0-9]*\.[0-9]*\.[0-9]{1,2}$/,
            message: "Nur x.x.x!!! //  x = Nummer // z.B. 1.0.0 oder 1.11.12",
          },
        })}
      />
      {errors.version && <p className="error">{errors.version.message}</p>}

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
