import * as React from "react";
import styled from "styled-components";

const Progress: React.FC<{ progress?: number }> = ({ progress = "1.0" }) => {
	return <div></div>;
};

const StyledProgress = styled(Progress)`
	width: 100%;
	height: 100%;
	background-color: #000;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	opacity: 0.5;
	transition: opacity 0.5s;
	&.hidden {
		opacity: 0;
	}
`;

export default StyledProgress;
