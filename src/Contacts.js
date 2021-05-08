import React from 'react';
import './Contacts.css';
import ContactsName from './ContactsName';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';

function Contacts() {
    return (
        <div className="Contacts">

            <div className="Contacts_Top">
                <h3>Contacts</h3>

                <div className="Contacts_Option">
                    <IconButton>
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </div>
            </div>

            <div className="Contacts_Bottom">
                <ContactsName src="https://source.unsplash.com/weekly?god" name="Person 1" />
                <ContactsName src="https://source.unsplash.com/weekly?car" name="Person 2" />
                <ContactsName src="https://source.unsplash.com/weekly?nature" name="Person 3" />
                <ContactsName src="https://source.unsplash.com/weekly?games" name="Person 4" />
                <ContactsName src="https://source.unsplash.com/weekly?sports" name="Person 5" />
                <ContactsName src="https://source.unsplash.com/weekly?water" name="Person 6" />
                <ContactsName src="https://source.unsplash.com/weekly?camera" name="Person 7" />
            </div>

        </div>
    )
}

export default Contacts;
