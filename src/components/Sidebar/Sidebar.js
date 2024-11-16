import React from "react";
import style from "./Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className={style.main_container}>
      <div className={style.icon_container}>
        <button>
          <HomeIcon style={{ fontSize: 32 }} className={style.icon} />
        </button>
        <button>
          <CalendarTodayIcon style={{ fontSize: 32 }} className={style.icon} />
        </button>
        <button>
          <NotificationsIcon style={{ fontSize: 32 }} className={style.icon} />
        </button>
      </div>
      <div className={style.setting_icon_container}>
        <button>
          <SettingsIcon
            style={{ fontSize: 32 }}
            className={style.icon}
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
