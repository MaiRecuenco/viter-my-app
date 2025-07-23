import { useField } from "formik";

export const InputTextArea = ({
  label,
  onChange = null,
  className = "",
  labelClassName = "",
  focus = false,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className={`${
          meta.touched && meta.error ? "custom error-show" : "custom"
        } ${labelClassName}`}
      >
        {label}
      </label>
      <textarea
        className={
          meta.touched && meta.error ? `error-show ${className}` : className
        }
        {...field}
        {...props}
        autoComplete="off"
        onChange={(e) => {
          onChange !== null && onChange(e);
          field.onChange(e);
        }}
        autoFocus={focus}
      ></textarea>
      {meta.touched && meta.error ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputText = ({
  label,
  className = "",
  onChange = null,
  refVal = null,
  focus = false,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className={meta.touched && meta.error ? "custom error-show" : "custom"}
      >
        {label}
      </label>

      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error ? `error-show ${className}` : className
        }
        autoComplete="off"
        onChange={(e) => {
          onChange !== null && onChange(e);
          field.onChange(e);
        }}
        ref={refVal}
        autoFocus={focus}
      />

      {meta.touched && meta.error ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};
