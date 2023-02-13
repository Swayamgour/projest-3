// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';

// import DialogTitle from '@mui/material/DialogTitle';

// export default function AlertDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
       
      
//       </Dialog>
//     </div>
//   );
// }



















import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TwitterIcon from "@mui/icons-material/Twitter";
import TopicIcon from "@mui/icons-material/Topic";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
    
  });
 
  const item = [
    { icon: <PermIdentityIcon />, name: "Profile" },
    { icon: <TwitterIcon />, name: "Twitter Blue" },
    { icon: <TopicIcon />, name: "Topics" },
    { icon: <BookmarkBorderIcon />, name: "Booksmarks" },
    { icon: <ListAltIcon />, name: "Lists" }
  ];
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {item.map((data, index) => (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {data.icon} {data.name}
        </div>
      ))}
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
