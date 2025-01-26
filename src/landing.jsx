import React from "react";
import { ButtonWrapper } from "./ButtonWrapper";
import { Headline } from "./Headline";
import { Link } from "./Link";
import { LogoDark } from "./LogoDark";
import { SubHeading } from "./SubHeading";


export const DesktopHeader = () => {
  return (
    <div className="flex flex-col items-center gap-[35px] relative bg-dark-background">
      <div className="relative w-[1097px] h-[119px]">
        <LogoDark
          className="!absolute !left-[30px] !top-5"
          rectangle="image.png"
        />
        <div className="inline-flex items-center gap-2.5 absolute top-[38px] left-[353px]">
          <div className="inline-flex items-center gap-[31px] relative flex-[0_0_auto]">
            <Link
              className="!flex-[0_0_auto]"
              divClassName="!text-light-text !text-center"
              text="Home"
            />
            <Link
              className="!flex-[0_0_auto]"
              divClassName="!text-light-text !text-center"
              text="Product"
            />
            <Link
              className="!flex-[0_0_auto]"
              divClassName="!text-light-text !text-center"
              text="About"
            />
            <Link
              className="!flex-[0_0_auto]"
              divClassName="!text-light-text !text-center"
              text="Contact"
            />
          </div>
        </div>

        <ButtonWrapper
          buttonDivClassName="!text-light-background"
          buttonText="Login"
          className="!border-light-text !border !border-solid !absolute !left-[918px] !bg-[unset] !top-[33px]"
        />
      </div>

      <div className="flex flex-col gap-[17px] px-0 py-[50px] self-stretch w-full items-center relative flex-[0_0_auto]">
        <Headline
          className="!flex-[0_0_auto]"
          lightningFastClassName="!text-light-text !whitespace-nowrap !text-center"
          text="Need help?"
        />
        <SubHeading
          className="!flex-[0_0_auto]"
          mostCalendarsAreClassName="!text-light-text !text-center"
        />
      </div>

      <div className="inline-flex items-center gap-[35px] relative flex-[0_0_auto]">
        <ButtonWrapper
          buttonButtonClassName="!flex-[0_0_auto]"
          buttonDivClassName="!text-light-text"
          buttonText="Try For Free"
          className="!h-[unset] !flex-[0_0_auto] !px-[30px] !py-2.5"
        />
        <ButtonWrapper
          buttonButtonClassName="!flex-[0_0_auto]"
          buttonDivClassName="!text-light-background"
          buttonText="Learn More"
          className="!border-light-text !h-[unset] !flex-[0_0_auto] !border !border-solid !px-[30px] !py-2.5 !bg-[unset]"
        />
      </div>

      <div className="relative self-stretch w-full h-[993px]">
        <div className="relative w-[1579px] h-[993px]">
          <div className="absolute w-[1552px] h-[841px] top-0 left-[13px]">
            <div className="relative w-[1444px] h-[841px] left-[54px]">
              <img
                className="absolute w-[713px] h-[543px] top-0 left-[357px] object-cover"
                alt="Dashboard"
                src={dashboard1}
              />

              <img
                className="absolute w-[730px] h-[556px] top-[271px] left-[714px] object-cover"
                alt="Chat bot"
                src={chatBot}
              />

              <img
                className="absolute w-[713px] h-[543px] top-[298px] left-0 object-cover"
                alt="Boards"
                src={boards}
              />
            </div>
          </div>

          <div className="absolute w-[1579px] h-[551px] top-[442px] left-0 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgb(13.81,13.81,13.81)_66.15%)]" />
        </div>
      </div>
    </div>
  );
};