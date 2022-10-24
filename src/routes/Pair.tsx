import * as React from "react";
import Progress from "../components/Progress";

const Pair = () => {
	const [progress, setProgress] = React.useState(0);
	const [lock, setLock] = React.useState(true);

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
			<div className="MB(100px)">
				<img
					width={200}
					src={`/img/item/${lock ? "lock_on.png" : "lock_off.png"}`}
					alt="lock"
				/>
			</div>
			<Progress progress={progress} />
		</>
	);
};

export default Pair;
