import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={category}
                    onChange={handleChange}
                    label="Category"
                >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Phone</MenuItem>
                    <MenuItem value={30}>Laptop</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
