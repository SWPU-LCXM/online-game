import * as React from "react";
import Progress from "../components/Progress";

const Pair = () => {
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setProgress((progress) => {
				if (progress >= 1) {
					return 0;
				}
				return progress + 0.1;
			});
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			Lock
			<Progress progress={progress} />
		</>
	);
};

export default Pair;
