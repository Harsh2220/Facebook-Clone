import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import { useStatevalue } from './StateProvider';

function Sidebar() {

    const [{ user }, dispatch] = useStatevalue("");

    return (
        <div className="Sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />

            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title="COVID-19 Information Center" />

            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends" />

            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/l6e-P1BHJLy.png" title="Most Recents" />

            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png" title="Favorites" />

            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title="Groups" />

            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" title="Maretplace" />

            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Events" />

            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/GA7Y4WRJMp8.png" title="Memories" />

            <SidebarRow src="https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-down-128.png" title="See More" />

        </div>
    );
}

export default Sidebar;
