import { Loader, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const Loading = () => {
	const [visible, { toggle }] = useDisclosure(false);
	return (
		<LoadingOverlay
			visible={visible}
			zIndex={1000}
			overlayProps={{ blur: 2 }}
			loaderProps={{ color: "blue", type: "bars", size: "lg" }}
		/>
	);
};

export default Loading;
