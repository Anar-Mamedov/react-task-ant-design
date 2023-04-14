import React from "react";
import { Radio } from "antd";

export default function RadioButton() {
  const [value, setValue] = React.useState("active");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // type default, primary

  return (
    <Radio.Group value={value} onChange={handleChange} buttonStyle="solid">
      <Radio.Button
        value="active"
        style={{
          backgroundColor: value === "active" ? "rgb(43, 199, 112)" : "white",
          color: value === "active" ? "white" : "rgb(43, 199, 112)",
          borderColor: "rgb(43, 199, 112)",
        }}
      >
        Aktiv
      </Radio.Button>
      <Radio.Button
        value="deactive"
        style={{
          backgroundColor: value === "deactive" ? "red" : "white",
          color: value === "deactive" ? "white" : "red",
          borderColor: "red",
        }}
      >
        Deaktiv
      </Radio.Button>
    </Radio.Group>
  );
}
