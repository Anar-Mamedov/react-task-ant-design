import { Space, Select, Input, Tooltip } from "antd";
import React from "react";
import { useState } from "react";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

// only number input

const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };
  const title = value ? (
    <span className="numeric-input-title">
      {value !== "-" ? formatNumber(Number(value)) : "-"}
    </span>
  ) : (
    "Input a number"
  );
  return (
    <Tooltip
      trigger={["focus"]}
      title={title}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Daxil edin"
        maxLength={16}
      />
    </Tooltip>
  );
};

// only number input end

export default function MainInformation() {
  // only number input
  const [value, setValue] = useState("");
  // only number input end

  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <span style={{ color: "#2bc770" }}>Əsas məlumat:</span>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span>
            Təşkilat:<span style={{ color: "red" }}>*</span>
          </span>
          <Select
            showSearch
            style={{
              width: 160,
              marginTop: "0.5rem",
            }}
            placeholder="Seçim edin"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span>
            Kontragent:<span style={{ color: "red" }}>*</span>
          </span>
          <Select
            showSearch
            style={{
              width: 160,
              marginTop: "0.5rem",
            }}
            placeholder="Seçim edin"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span>
            Növ:<span style={{ color: "red" }}>*</span>
          </span>
          <Select
            showSearch
            style={{
              width: 160,
              marginTop: "0.5rem",
            }}
            placeholder="Seçim edin"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span>
            Valyuta:<span style={{ color: "red" }}>*</span>
          </span>
          <Select
            showSearch
            style={{
              width: 80,
              marginTop: "0.5rem",
            }}
            placeholder="Seçim edin"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "AZN",
                label: "AZN",
              },
              {
                value: "USD",
                label: "USD",
              },
              {
                value: "EUR",
                label: "EUR",
              },
            ]}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span>
            Nömrə:<span style={{ color: "red" }}>*</span>
          </span>
          <NumericInput
            style={{
              width: 120,
              marginTop: "0.5rem",
            }}
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </Space>
  );
}
