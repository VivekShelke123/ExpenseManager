import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Avtar: React.FC = () => {
  return (
    <div>
      <div className="avtar-container-1">
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ width: 56, height: 56 }}>A</Avatar>
        </Stack>
      </div>
    </div>
  );
};

export default Avtar;
