import "./Form.scss";

import { useForm } from "react-hook-form";

import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

const Form = (props) => {
  const { t } = useTranslation();

  const { action } = useStateMachine(updateAction);
  const { register, handleSubmit, watch, errors } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
    action(data);
    props.history.push("/result");
  };

  const showVersion = watch("topic", props.topic);
  const showNumber = watch("topic", props.topic);

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <label>Name *</label>
      <input name="name" ref={register({ required: true })} />
      {errors.name && errors.name.type === "required" && <p>{t("Required")}</p>}

      <label>{t("E-mail address")} *</label>
      <input
        type="email"
        name="email"
        placeholder="xxx@xx.xx"
        ref={register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          },
        })}
      />
      {errors.email && (
        <p>
          {t("Invalid")} {t("E-mail address")}
        </p>
      )}

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
            placeholder="Version : X.X.X (1.0.0 / 1.11.12)"
            ref={register({
              required: true,
              pattern: {
                value: /^[0-9]*\.[0-9]*\.[0-9]{1,2}$/,
              },
            })}
          />
          {errors.version && <p>{t("Invalid")} Version</p>}
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
      <button type="submit" name="submitButton">
        Button
      </button>
    </form>
  );
};

export default withTranslation()(Form);
