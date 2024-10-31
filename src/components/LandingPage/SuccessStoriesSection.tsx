import React from "react";
import foster_buddy from '../../images/client_success/foster_buddy.png'

export default function SuccessStoriesSection() {
	return (
		<div className="my-[10rem] w-full flex flex-col items-center gap-[60px]  bg-defaultwhite">
			<div className="w-full gap-12 flex flex-col items-start">
				<div className="flex-col items-center gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
					<div className="relative self-stretch mt-[-1.00px] font-other-caption font-[number:var(--other-caption-font-weight)] text-[#00c2c6] text-[length:var(--other-caption-font-size)] text-center tracking-[var(--other-caption-letter-spacing)] leading-[var(--other-caption-line-height)] [font-style:var(--other-caption-font-style)]">
						A HISTORY OF SUCCESS
					</div>

					<div className="self-stretch  font-bold text-coolgray-90 text-[42px] text-center tracking-[0] leading-[46.2px]">
						Stories of Our Success
					</div>
				</div>
			</div>

			{/* <img className="w-[90%] h-[1px] bg-[#e6ecf8] mt-12" alt="Divider" /> */}
			<div className="flex flex-row items-center gap-4 px-4">
				{/* <img
				className=" w-[21px] h-[37px]"
				alt="Arrow"
				src="https://c.animaapp.com/rDitUAdQ/img/arrow-2.svg"
			/> */}
				<img
					className=""
					alt="Divider"
					src={foster_buddy}
				/>
				{/* <img
				className=" w-[21px] h-[37px]"
				alt="Arrow"
				src="https://c.animaapp.com/rDitUAdQ/img/arrow-1.svg"
			/> */}
			</div>

		</div>
	)
}