import "./Form.css";
import { useForm } from "react-hook-form";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

const Form = (props) => {
  const { t } = useTranslation();
  const { register, handleSubmit, watch, errors } = useForm({});
  const showVersion = watch("selectd", props.selected);
  const showNumber = watch("selectd", props.selected);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <h1> {t("SupportForm")}</h1>
      <label>Name *</label>
      <input name="name" ref={register({ required: true })} />
      {errors.name && errors.name.type === "required" && <p>{t("Required")}</p>}
      <label>{t("E-mail address")} *</label>
      <input
        type="email"
        name="email"
        ref={register({
          required: "Enter your e-mail",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message:
              // {t("Enter a valid e-mail address")},
              "Enter a valid e-mail address",
          },
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}
      <label>{t("Topic")} *</label>
      <select name="topic" name="selectd" ref={register({ required: true })}>
        <option value="">{t("Choose one")}</option>
        <option value="general">{t("General")}</option>
        <option value="softwareerros">{t("Software Errors")}</option>
        <option value="recall">{t("Recall")}</option>
      </select>
      {errors.topic && errors.topic.type === "required" && (
        <p>{t("Required")}</p>
      )}

      {showVersion === "softwareerros" && (
        <>
          <label>Version *</label>
          <input
            name="version"
            placeholder="Version : X.X.X"
            ref={register({
              required: "Enter your Version",
              pattern: {
                value: /^[0-9]*\.[0-9]*\.[0-9]{1,2}$/,
                message:
                  "Nur x.x.x!!! //  x = Nummer // z.B. 1.0.0 oder 1.11.12",
              },
            })}
          />
          {errors.version && <p className="error">{errors.version.message}</p>}
        </>
      )}

      {showNumber === "recall" && (
        <>
          <label>{t("Phone Number")}*</label>
          <input
            name="telefon"
            ref={register({
              required: "Enter your telefon",
            })}
          />
          {errors.telefon && <p className="error">{errors.telefon.message}</p>}
        </>
      )}

      <label>{t("Description")} *</label>
      <textarea name="description" ref={register({ required: true })} />
      {errors.description && errors.description.type === "required" && (
        <p>{t("Required")}</p>
      )}
      <input type="submit" ref={register({ required: true })} />
    </form>
  );
};

export default withTranslation()(Form);

// {t("")}
