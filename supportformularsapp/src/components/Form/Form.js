import "./Form.css";

import { useForm } from "react-hook-form";

import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

// // Router
// import { withRouter } from "react-router-dom";

const Form = (props) => {
  const { t } = useTranslation();

  const { action } = useStateMachine(updateAction);

  const { register, handleSubmit, watch, errors } = useForm({});
  const showVersion = watch("topic", props.topic);
  const showNumber = watch("topic", props.topic);
  const onSubmit = (data) => {
    console.log(data);
    action(data);
    props.history.push("./result");
  };

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <label>Name *</label>
      <input name="name" ref={register({ required: true })} />
      {errors.name && errors.name.type === "required" && <p>{t("Required")}</p>}
      <label>{t("E-mail address")} *</label>
      <input
        type="email"
        name="email"
        ref={register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message:
              // {t("Enter a valid e-mail address")},
              "Enter a valid e-mail address",
          },
        })}
      />
      {errors.email && <p>{t("Required")}</p>}

      <label>{t("Topic")} *</label>
      <select name="topic" ref={register({ required: true })}>
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
              required: true,
              pattern: {
                value: /^[0-9]*\.[0-9]*\.[0-9]{1,2}$/,
                message:
                  "Nur x.x.x!!! //  x = Nummer // z.B. 1.0.0 oder 1.11.12",
              },
            })}
          />
          {errors.version && <p>{t("Required")}</p>}
        </>
      )}

      {showNumber === "recall" && (
        <>
          <label>{t("Phone Number")}*</label>
          <input
            name="telefon"
            ref={register({
              required: true,
            })}
          />
          {errors.telefon && <p>{t("Required")}</p>}
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
