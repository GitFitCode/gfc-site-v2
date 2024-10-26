import { IconJamIconsOutlineLogosFacebook } from "../../icons/IconJamIconsOutlineLogosFacebook";
import { IconJamIconsOutlineLogosInstagram1 } from "../../icons/IconJamIconsOutlineLogosInstagram1";
import { IconJamIconsOutlineLogosLinkedin1 } from "../../icons/IconJamIconsOutlineLogosLinkedin1";
import { IconJamIconsOutlineLogosTwitter1 } from "../../icons/IconJamIconsOutlineLogosTwitter1";
import { IconJamIconsOutlineLogosYoutube } from "../../icons/IconJamIconsOutlineLogosYoutube";

export default function Footer() {
  return (
    <div className="flex flex-col items-start justify-center gap-[34px] pt-[22px] pb-12 px-20 relative flex-[0_0_auto] bg-white">
    <div className="relative self-stretch w-full h-px bg-coolgray-30" />

    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
      {/* <div className="flex flex-col items-start gap-4 relative flex-1 grow">
        <div className="inline-flex items-center gap-2 px-0 py-3 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#0000009e] text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
            Column One
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Twenty One
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Thirty Two
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Fourty Three
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Fifty Four
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 relative flex-1 grow">
        <div className="inline-flex items-center gap-2 px-0 py-3 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#0000009e] text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
            Column Two
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Sixty Five
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Seventy Six
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Eighty Seven
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Ninety Eight
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 relative flex-1 grow">
        <div className="inline-flex items-center gap-2 px-0 py-3 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#0000009e] text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
            Column Three
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            One Two
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Three Four
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Five Six
          </div>
        </div>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-[#0000009e] text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Seven Eight
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-col items-start gap-6 relative flex-1 grow">
        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto] mr-[-142.67px]">
          <div className="inline-flex items-center gap-2 px-0 py-3 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#0000009e] text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
              Join Us
            </div>
          </div>

          <div className="flex w-[426.67px] items-center gap-4 relative flex-[0_0_auto]">
            <IconJamIconsOutlineLogosYoutube
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosFacebook
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosTwitter1
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosInstagram1
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosLinkedin1
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
          </div>
        </div>
      </div> */}
    </div>
    {/* <div className="flex w-[426.67px] items-center gap-4 relative flex-[0_0_auto]">
            <IconJamIconsOutlineLogosYoutube
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosFacebook
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosTwitter1
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosInstagram1
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosLinkedin1
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
          </div> */}

    <div className="relative self-stretch w-full h-px bg-coolgray-30" />

    <div className="items-center gap-12 self-stretch w-full flex-[0_0_auto] flex relative">
      <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
        <div className="flex w-[134px] h-11 items-start gap-1 relative">
          <div className="flex flex-col w-[134px] h-11 items-start justify-center relative">
            <img
              className="relative w-[145px] h-[65px] mt-[-12.75px] mb-[-12.75px] mr-[-11.00px] object-cover"
              alt="Gitfitcode LOGO"
              src="https://c.animaapp.com/rDitUAdQ/img/gitfitcode-logo-assets--llc-artboard-1-copy-13-2x-1-1@2x.png"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-6 relative flex-1 grow">
        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto] mr-[-142.67px]">
          <div className="inline-flex items-center gap-2 px-0 py-3 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#0000009e] text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
              Join Us
            </div>
          </div>

          <div className="flex w-[426.67px] items-center gap-4 relative flex-[0_0_auto]">
            <IconJamIconsOutlineLogosYoutube
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosFacebook
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosTwitter1
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosInstagram1
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
            <IconJamIconsOutlineLogosLinkedin1
              className="!relative !w-6 !h-6"
              color="black"
              opacity="0.62"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex-col items-end justify-center gap-4 flex-1 grow flex relative">
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          <button className="all-[unset] box-border flex w-[187px] h-14 items-center justify-center p-4 relative bg-[#00c2c6] text-white rounded-lg">
            <div className="inline-flex items-center justify-center gap-2.5 px-4 py-0 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-button-l font-[number:var(--button-l-font-weight)] text-defaultwhite text-[length:var(--button-l-font-size)] tracking-[var(--button-l-letter-spacing)] leading-[var(--button-l-line-height)] whitespace-nowrap [font-style:var(--button-l-font-style)]">
                Get Started
              </div>
            </div>
          </button>

          <div className="flex w-[364px] h-14 items-center gap-2 pl-4 pr-[11px] py-3 relative -ml-3 bg-coolgray-10 border-b [border-bottom-style:solid] border-coolgray-30">
            <IconJamIconsOutlineLogosEnvelope1
              className="!relative !w-6 !h-6"
              color="#697077"
            />
            <p className="relative w-fit font-body-m font-[number:var(--body-m-font-weight)] text-coolgray-60 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
              Enter your email to get the latest news...
            </p>
          </div>
        </div>
      </div> */}
    </div>

    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
      <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-[#656565] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
        GitFitCode @ 2024. All rights reserved.
      </p>

      {/* <div className="flex items-center justify-end gap-4 relative flex-1 grow">
        <div className="inline-flex items-center gap-2 px-2 py-3 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-defaultwhite text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Eleven
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-2 py-3 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-defaultwhite text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Twelve
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-2 py-3 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-other-menu-m font-[number:var(--other-menu-m-font-weight)] text-defaultwhite text-[length:var(--other-menu-m-font-size)] tracking-[var(--other-menu-m-letter-spacing)] leading-[var(--other-menu-m-line-height)] whitespace-nowrap [font-style:var(--other-menu-m-font-style)]">
            Thirteen
          </div>
        </div>
      </div> */}
    </div>
  </div>
  )
}