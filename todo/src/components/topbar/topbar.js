import "./topbar.css";
import {  Notifications  } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <img src="/assets/timeLOGO.png" alt="" className="topbarImg"/>
      </div>

      <div className="topbarCenter">
        
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Tasks </span>
        </div>
        <div className="topbarIcons">
        
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}