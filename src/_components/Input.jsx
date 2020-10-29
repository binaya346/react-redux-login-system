import React from "react";
import { Link } from "react-router-dom";

const Input = (props) => {
  return (
    <div className="form-group">
      <div className="label-wrap">
        <label className="input-label">{props.label}</label>
        {props.forgotPassword && (
          <Link to="#" className="u-link">
            forgot password?
          </Link>
        )}
      </div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        className={`${props.className}`}
      />
    </div>
  );
};

export { Input };
