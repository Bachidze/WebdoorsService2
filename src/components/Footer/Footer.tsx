import Image from 'next/image';
import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-[250px] w-[92%]  m-auto max-w-[1920px] md:mt-[460px] 3xl:w-[75%]">
    <section className="hidden 3xl:flex flex-col items-center mt-[574px] mb-[160px]">
      <div className="flex flex-wrap  w-[100%] justify-between">
        <Image
          className="w-[62px] h-[62px]"
          src="PirveliSponsoriWebdoors.svg"
          alt="firstSponsor"
          width={62}
          height={62}
        />
        <Image
          className="w-[204px] h-[62px]"
          src="Sharm.svg"
          alt="Sharm"
          width={204}
          height={62}
        />
        <Image
          className="w-[273px] h-[62px]"
          src="SqartveloWebdoors.svg"
          alt="Saqartvelo"
          width={273}
          height={62}
        />
        <Image
          className="w-[204px] h-[62px]"
          src="TbilisiWebdoors.svg"
          alt="Tbilisi"
          width={204}
          height={62}
        />
        <Image
          className="w-[97px] h-[62px]"
          src="Chat.svg"
          alt="Chat"
          width={97}
          height={62}
        />
        <Image
          className="w-[131px] h-[62px]"
          src="KikalaWebdoors.svg"
          alt="Kik"
          width={131}
          height={62}
        />
      </div>
      <div className="flex flex-wrap w-[80%] justify-between  mt-[60px]">
        <Image
          className="w-[130.75px] h-[62px]"
          src="NBR.svg"
          alt="NBR"
          width={130.75}
          height={62}
        />
        <Image
          className="w-[217.89px] h-[62px]"
          src="Pitstop.svg"
          alt="Po]itstop"
          width={217.98}
          height={62}
        />
        <Image
          className="w-[87.1px] h-[62px]"
          src="QartuliSaqme.svg"
          alt="QartuliSaqme"
          width={87.1}
          height={62}
        />
        <Image
          className="w-[244.46px] h-[62px]"
          src="Proteller.svg"
          alt="Proteller"
          width={244.46}
          height={62}
        />
        <Image
          className="w-[147.62px] h-[62px]"
          src="Supta.svg"
          alt="Supta"
          width={147.62}
          height={62}
        />
      </div>
    </section>
    <section className="flex flex-col justify-center items-center 3xl:flex-row 3xl:justify-between">
      <div className="mt-[90px]">
        <Image
          className="w-[150px] h-[50.33px] md:w-[252px] md:h-[83px] 3xl:w-[276.9px] 3xl:h-[91.36px] -translate-y-[55px]"
          src="Webdoors.svg"
          alt="MainWebdoorsImage"
          width={150}
          height={50.33}
        />
        <div className="hidden 3xl:flex flex-col justify-start self-start mt-[20.65px]  md:mt-[60.8px]  md:w-[100%]">
          <div className="flex -translate-x-[18px] mb-[20.13px]   md:right-0 md:translate-x-1 3xl:-translate-y-10">
            <Image
              className="w-[113px] h-[27.87px] md:w-[122.96px] md:h-[30.27px] md:order-2 3xl:w-[182.72px] 3xl:h-[44.98px]"
              src="Dmca.comWebdoors.svg"
              alt="DmcaPage"
              width={113}
              height={27.87}
            />
            <Image
              className="w-[74.89px] h-[27.87px] md:w-[81.34px] md:h-[30.27px] 3xl:w-[120.88px] 3xl:h-[44.98px]"
              src="EbaWebdoors.svg"
              alt="EbaImage"
              width={74.89}
              height={27.87}
            />
          </div>
          <div className="mb-[44px] mt-[80px]">
            <h1 className="text-[16px] leading-[18.75px]">Copyright © 2018-{currentYear} all rights reserved</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap w-[100%] justify-between mt-[20.67px] md:mt-[64px] 3xl:w-[42%] 3xl:mt-0 3xl:translate-y-5">
        <Image
          className="w-[31px] h-[18px] md:w-[70px] md:h-[41px]"
          src="BeWebdoors.svg"
          alt="Be"
          width={31}
          height={18}
        />
        <Image
          className="w-[20.47px] h-[20.47px] md:w-[45.72px] md:h-[45.47px]"
          src="InstagramWebdoors.svg"
          alt="Instagram"
          width={20.47}
          height={20.47}
        />
        <Image
          className="w-[20.51px] h-[20.47px] md:w-[45.8px] md:h-[45.47px]"
          src="TwitterWebdoors.svg"
          alt="Twitter"
          width={20.51}
          height={20.47}
        />
        <Image
          className="w-[20.85px] h-[20.53px] md:w-[46.55px] md:h-[45.59px]"
          src="LinkdeinWebdoors.svg"
          alt="Linkdein"
          width={20.85}
          height={20.53}
        />
        <Image
          className="w-[20px] h-[21px] md:w-[47px] md:h-[45px]"
          src="FacebookWebdoors.svg"
          alt="Facebook"
          width={20}
          height={21}
        />
        <Image
          className="w-[27px] h-[18px] md:w-[60px] md:h-[41px]"
          src="YoutubeWebdoors.svg"
          alt="Youtube"
          width={27}
          height={18}
        />
        <Image
          className="w-[20px] h-[20px] md:w-[45px] md:h-[45px]"
          src="BasketballWebdoors.svg"
          alt="Basketball"
          width={20}
          height={20}
        />
        <Image
          className="w-[20.1px] h-[19.91px] md:w-[44.89px] md:h-[44.22px]"
          src="GithubWebdoors.svg"
          alt="BeSponsor"
          width={20.1}
          height={19.91}
        />
        <div className="hidden 3xl:flex items-center flex-col justify-center w-[80%]  m-auto  mt-[5.35px] md:w-[75%] md:relative  md:mt-[39.41px] -translate-y-14">
          <div className="hidden 3xl:flex mt-[100px]">
            <div className="-translate-x-10">
              <h3 className="text-[18px] leading-[30px] text-[#D7E0E8] font-normal">
                <span className="text-white font-bold">Name: </span>JSC
                Webdoors
              </h3>
              <h3 className="text-[18px] leading-[30px] text-[#D7E0E8] font-normal">
                <span className="text-white font-bold">Gov.Id: </span>
                405281216
              </h3>
            </div>
            <div>
              <h3 className="text-[18px] leading-[30px] text-[#D7E0E8] font-normal">
                <span className="text-white font-bold">Telephone: </span>+995
                571507979
              </h3>
              <h3 className="text-[18px] leading-[30px] text-[#D7E0E8] font-normal">
                <span className="text-white font-bold">Telephone2: </span>+995
                599339099
              </h3>
              <h3 className="text-[18px] leading-[30px] text-[#D7E0E8] font-normal">
                <span className="text-white font-bold">Email: </span>
                Info@Webdoors.Ge
              </h3>
              <h3 className="text-[18px] leading-[30px] text-[#D7E0E8] font-normal">
                <span className="text-white font-bold">Address: </span>97
                Akaki Tsereteli Ave,
              </h3>
              <h3 className="text-[18px] leading-[30px] text-[#D7E0E8] font-normal">
                <span className="text-white font-bold">Zip: </span>0179
              </h3>
            </div>
          </div>
          <div className="flex w-[90%] items-center translate-x-[158px] translate-y-10 mb-[20px]">
            <div className="border-2 w-[10px] h-[10px] rounded-[50%]"></div>
            <div className="border-2 w-[82%]"></div>
            <div className="border-2 h-[8px]"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-[102%]  m-auto  mt-[5.35px] md:w-[75%] md:relative md:left-28  md:mt-[39.41px] lg:left-40 xl:left-52 3xl:hidden">
        <div className="border-2 w-[10px] h-[10px] rounded-[50%]"></div>
        <div className="border-2 w-[100%]"></div>
        <div className="border-2 h-[8px]"></div>
      </div>
      <div className="flex flex-col justify-start self-start mt-[20.65px] md:flex-row md:mt-[60.8px] md:relative md:w-[100%] 3xl:hidden">
        <div className="flex -translate-x-[18px] mb-[20.13px] md:order-2 md:absolute md:right-0 md:translate-x-6">
          <Image
            className="w-[113px] h-[27.87px] md:w-[122.96px] md:h-[30.27px] md:order-2"
            src="Dmca.comWebdoors.svg"
            alt="DmcaPage"
            width={113}
            height={27.87}
          />
          <Image
            className="w-[74.89px] h-[27.87px] md:w-[81.34px] md:h-[30.27px]"
            src="EbaWebdoors.svg"
            alt="EbaImage"
            width={74.89}
            height={27.87}
          />
        </div>
        <div className="mb-[24px]">
          <h1 className='text-white'>Copyright © 2018-{currentYear} all rights reserved</h1>
        </div>
      </div>
    </section>
  </footer>
  )
}
