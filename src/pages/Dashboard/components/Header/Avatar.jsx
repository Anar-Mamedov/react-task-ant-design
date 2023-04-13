import { Avatar, Menu, Dropdown } from "antd";
import { UserOutlined, LogoutOutlined, EditOutlined } from "@ant-design/icons";

const CustomAvatar = ({ name, imageSrc, menuItems }) => {
  const menu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profil
      </Menu.Item>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Profili Düzəlt
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Çıxış
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginLeft: "10px",
      }}
    >
      <Dropdown overlay={menu} placement="bottomRight">
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              lineHeight: "18px",
              marginRight: "10px",
            }}
          >
            <span style={{ whiteSpace: "nowrap", fontWeight: "500" }}>
              Anar Mamedov
            </span>
            <span style={{ color: "#7a7a7aff" }}>Admin</span>
          </div>

          <Avatar size={40} icon={<UserOutlined />} src={imageSrc} />
          <span style={{ marginLeft: "10px" }}>{name}</span>
        </div>
      </Dropdown>
    </div>
  );
};

export default CustomAvatar;
