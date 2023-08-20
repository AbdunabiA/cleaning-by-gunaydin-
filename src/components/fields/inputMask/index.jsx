/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import InputMask from "react-input-mask";
import icon from 'assets/icons/Uzb.svg'

const CustomInputMask = ({
  label,
  wrapperClassName,
  mask,
  placeholder,
  field: { value, name },
  form: { setFieldValue, setFieldTouched, errors, touched },
  disabled = false,
  onClick = () => {},
  // defaultValue,
}) => {
    // console.log(value);
  return (
    <label className={`${wrapperClassName} input-field__wrapper`}>
      {label ? <span className="label">{label}</span> : null}
      <div className="custom-input">
        <div>
          <img src={icon} alt="" />
        </div>
        <InputMask
          mask={mask}
          onBlur={() => setFieldTouched(name, true)}
          onChange={(e) => setFieldValue(name, e.target.value)}
          name={name}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
        />
        {/* <input
          onBlur={() => setFieldTouched(name, true)}
          name={name}
          type={type}
          value={value}
          onChange={(e) => setFieldValue(name, e.target.value)}
          placeholder={placeholder}
          className="custom-input"
          disabled={disabled}
          onClick={onClick}
          // defaultValue={defaultValue ? defaultValue : ""}
        /> */}
      </div>
      {touched[name] && errors[name] ? (
        <span className="error">{errors[name]}</span>
      ) : null}
    </label>
  );
};

export default CustomInputMask;
