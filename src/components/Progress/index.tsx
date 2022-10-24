import * as React from "react";
import styled from "styled-components";

const Progress: React.FC<{ progress?: number }> = ({ progress = "1.0" }) => {
	return (
		<StyledProgress progress={progress}>
			<div></div>
		</StyledProgress>
	);
};

const StyledProgress = styled.div`
	width: 290px;
	height: 30px;
	background-color: #000;
	border: 3px solid #fff;
	border-radius: 5px;
	overflow: hidden;
	& div {
		transition: width 0.5s;
		height: 100%;
		background-color: red;
		width: ${(props) => props.progress * 100}%;
	}
`;

export default Progress;
