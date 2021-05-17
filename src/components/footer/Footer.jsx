import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, makeStyles } from "@material-ui/core";

import styles from "./footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props) {
	const classes = useStyles();
	const { whiteFont } = props;
	const footerClasses = classNames({
		[classes.footer]: true,
		[classes.footerWhiteFont]: whiteFont,
	});
	const aClasses = classNames({
		[classes.a]: true,
		[classes.footerWhiteFont]: whiteFont,
	});
	return (
		<footer className={footerClasses}>
			<div className={classes.container}>
				<div className={classes.left}>
					<List className={classes.list}>
						<ListItem className={classes.inlineBlock}>
							<a
								href="https://www.creative-tim.com/?ref=mkr-footer"
								className={classes.block}
								target="_blank" rel="noreferrer">
								Creative Tim
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a
								href="https://www.creative-tim.com/presentation?ref=mkr-footer"
								className={classes.block}
								target="_blank" rel="noreferrer">
								About us
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a
								href="http://blog.creative-tim.com/?ref=mkr-footer"
								className={classes.block}
								target="_blank" rel="noreferrer">
								Blog
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a
								href="https://www.creative-tim.com/license?ref=mkr-footer"
								className={classes.block}
								target="_blank" rel="noreferrer">
								Licenses
							</a>
						</ListItem>
					</List>
				</div>
				<div className={classes.right}>
					&copy; {1900 + new Date().getYear()} , Created by{" "}
					<a
						href="https://github.com/AudryLopez"
						className={aClasses}
						target="_blank" rel="noreferrer">
						Audry López
					</a>{" "}
					Web designer
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	whiteFont: PropTypes.bool,
};
