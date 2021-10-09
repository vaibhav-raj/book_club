import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import styles from "./filter.module.css";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className={styles.filters}>
      <h2>Filters</h2>
       <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          label="Search by Book Name"
          variant="outlined"
        />
        <br />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          label="Search by city"
          variant="outlined"
        />
        <br />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Standard</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="6">6th</MenuItem>
          <MenuItem value="7">7th</MenuItem>
          <MenuItem value="8">8th</MenuItem>
          <MenuItem value="9">9th</MenuItem>
          <MenuItem value="10">10th</MenuItem>
          <MenuItem value="11">11th</MenuItem>
          <MenuItem value="12">12th</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </Select>
        <br />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="hindi">Hindi</MenuItem>
          <MenuItem value="english">English</MenuItem>
        </Select>
        <br />
      </FormControl>
    </Box>
  );
}
