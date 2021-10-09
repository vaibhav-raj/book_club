import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import styles from "./filter.module.css";

export default function BasicSelect() {
    const [name, setName] = useState("");
    const [standard, setStandard] = useState("");
    const [language, setLanguage] = useState("");
    const [city, setCity] = useState("");

    console.log(name, standard, language, city)

    return (
        <Box className={styles.filters}>
            <h2 style={{ color: "#00ADB5" }}>Filters</h2>
            <FormControl fullWidth>
                <TextField
                    id="outlined-basic"
                    label="Search by Book Name"
                    variant="filled"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    sx={{
                        background: "white",
                        outline: "none",
                        border: "none",
                        borderRadius: "4px",
                        my: 2,
                    }}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField
                    id="outlined-basic"
                    label="Search by city"
                    variant="filled"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    sx={{
                        background: "white",
                        outline: "none",
                        border: "none",
                        borderRadius: "4px",
                        my: 2,
                    }}
                />
            </FormControl>
            <FormControl
                fullWidth
                sx={{
                    background: "white",
                    outline: "none",
                    border: "none",
                    borderRadius: "4px",
                    my: 2,
                }}
                variant="filled"
            >
                <InputLabel id="demo-simple-select-label">Standard</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={standard}
                    onChange={(e) => setStandard(e.target.value)}
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
            </FormControl>
            <FormControl
                fullWidth
                sx={{
                    background: "white",
                    outline: "none",
                    border: "none",
                    borderRadius: "4px",
                    my: 2,
                }}
                variant="filled"
            >
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <MenuItem value="hindi">Hindi</MenuItem>
                    <MenuItem value="english">English</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
