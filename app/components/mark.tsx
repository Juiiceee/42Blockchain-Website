import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const ReviewCard = ({
	img,
}: {
	img: string;
}) => {
	return (
		<figure
			className={cn(
				"relative w-44 overflow-hidden",
			)}
		>
			<div className="flex items-center justify-center w-24 h-24 mx-2">
				<img
					src={img}
					alt={"Logo"}
					className="object-cover w-full"
				/>
			</div>
		</figure>
	);
};

const Mark = () => {
	return (
		<div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-3">
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				<ReviewCard img={"ripple.png"} />
				<ReviewCard img={"solana.png"} />
				<ReviewCard img={"bpi.png"} />
				<ReviewCard img={"binance.png"} />
				<ReviewCard img={"ledger.png"} />
				<ReviewCard img={"starknet.png"} />
				<ReviewCard img={"scaleway.png"} />
				<ReviewCard img={"ethfr.png"} />
			</Marquee>
			{/* <div className="absolute inset-y-0 left-0 w-1/3"></div>
			<div className="absolute inset-y-0 right-0 w-1/3"></div> */}
		</div>
	);
};

export default Mark;
