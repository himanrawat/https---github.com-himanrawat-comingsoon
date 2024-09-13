import dynamic from "next/dynamic";
import github from "@/assets/github.svg";
import behance from "@/assets/behance.svg";
import linkedin from "@/assets/linkedin.svg";
import xing from "@/assets/xing.svg";
import at from "@/assets/at.svg";
import Image from "next/image";
import Link from "next/link";

const SplineScene = dynamic(() => import("./component/SplineScene"), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});
export default function Home() {
	return (
		<div className="overflow-hidden">
			<div className=" relative">
				<SplineScene />
				<div className="absolute w-full z-10 bottom-0 px-4 flex justify-center items-center">
					<div className=" gap-4 p-8 rounded-full flex text-center w-fit bg-black/40 backdrop-filter backdrop-blur-sm bg-opacity-10 py-4 uppercase font-bold">
						<Link href="https://github.com/himanrawat">
							<Image src={github} alt="github" className="w-6 h-6 " />
						</Link>
						<Link href="https://www.linkedin.com/in/rawat-himanshu/">
							<Image src={linkedin} alt="Linkedin" className="w-6 h-6 " />
						</Link>
						<Link href="https://www.xing.com/profile/Himanshu_Rawat026243">
							<Image src={xing} alt="xing" className="w-6 h-6 " />
						</Link>
						<Link href="https://www.behance.net/himanshu_rawat">
							<Image src={behance} alt="behance" className="w-6 h-6 " />
						</Link>
						<Link href="https://www.xing.com/profile/Himanshu_Rawat026243">
							<Image src={at} alt="gmail" className="w-6 h-6 " />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
