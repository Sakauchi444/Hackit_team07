import { Center, Overlay, Title, Transition } from "@mantine/core";
import React from "react";
import classes from "./endOverlay.module.css";

const scaleY = {
	in: { opacity: 1, transform: "scaleY(1)" },
	out: { opacity: 0, transform: "scaleY(0)" },
	common: { transformOrigin: "top" },
	transitionProperty: "transform, opacity",
};

const EndOverlay = () => {
	return (
		<Overlay zIndex={3000}>
			<Center h={"100%"} className={classes.root}>
				<Transition
					mounted={true}
					transition={scaleY}
					duration={2000}
					timingFunction="ease"
					keepMounted
				>
					{(transitionStyle) => <Title style={{ ...transitionStyle, zIndex: 4 }}>終了!</Title>}
				</Transition>
			</Center>
		</Overlay>
	);
};

export default EndOverlay;