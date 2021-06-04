import React, { useState } from "react";
import useStyles from "assets/jss/material-kit-react/components/selectStyle"
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {withStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Img from "assets/img/ultra-bola.svg";

const generation = [
	{name:"first", number: 151},
	{name:"second", number: 251},
	{name:"third", number: 386},
	{name:"four", number: 493},
	{name:"five", number: 649},
	{name:"six", number: 721},
	{name:"seven", number: 809},
	{name:"eight", number: 898}
];

const BootstrapInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: "relative",
		backgroundColor: theme.palette.background.paper,
		border: "1px solid #ced4da",
		fontSize: 16,
		padding: "10px 26px 10px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:focus": {
			borderRadius: 4,
			borderColor: "#80bdff",
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
		},
	},
}))(InputBase);

export default function DialogSelect() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [age, setAge] = useState("");

	const handleChange = (event) => {
		setAge(Number(event.target.value) || "");
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleClickOpen}>
				<img className={classes.img} src={Img} />
			</Button>
			<Dialog
				disableBackdropClick
				disableEscapeKeyDown
				open={open}
				onClose={handleClose}>
				<DialogTitle>Find a pokemon</DialogTitle>
				<DialogContent>
					<FormControl className={classes.margin}>
						<InputLabel htmlFor="demo-customized-textbox">Name</InputLabel>
						<BootstrapInput id="demo-customized-textbox" />
					</FormControl>
					<FormControl className={classes.margin}>
						<InputLabel id="demo-customized-select-label">
							Generation
						</InputLabel>
						<Select
							labelId="demo-customized-select-label"
							id="demo-customized-select"
							value={age}
							onChange={handleChange}
							input={<BootstrapInput />}>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							{generation.map((generation, id) => {
								return (
									<MenuItem key={id} value={generation.number}>
										{generation.name}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
					<FormControl className={classes.margin}>
						<InputLabel htmlFor="demo-customized-select-native"></InputLabel>
						<Select
							labelId="demo-customized-select-label"
							id="demo-customized-select"
							value={age}
							onChange={handleChange}
							input={<BootstrapInput />}>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
