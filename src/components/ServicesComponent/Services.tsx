import React from "react";
import Image from "next/image";
export default function Services() {
  return (
    <main className="mt-[133px] w-[92%]  m-auto max-w-[1920px] md:mt-[160px] 3xl:w-[75%]">
      <div
        id="lineContainer"
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/8"
      >
        <div className="h-[181.16px] w-[10px] bg-gradient-to-t to-transparent from-blue-200"></div>
        <div className="h-[73.5px] w-[10px] bg-gradient-to-b from-blue-200 to-blue-500"></div>
        <div className="h-[72.82px] w-[10px] bg-gradient-to-b from-blue-500 to-blue-500"></div>
        <div className="h-[72.82px] w-[10px] bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div className="h-[73.41px] w-[10px] bg-gradient-to-b  from-purple-500    to-yellow-300 "></div>
        <div className="h-[73.76px] w-[10px] bg-gradient-to-b from-yellow-300 to-red-600"></div>
        <div className="h-[96.15px] w-[10px] bg-gradient-to-b from-red-600  to-transparent"></div>
      </div>

      <section className="flex justify-between">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center bg-[#9DDCFA] w-[44.23px]  h-[44.23px] rounded-full ">
            <Image
              alt="Analysis"
              src={"/AnalysisForServicesPage.svg"}
              width={23.81}
              height={22.91}
            />
          </div>
          <div className="mt-[9.77px]">
            <h1 className="text-[14px] leading-[17.5px] font-bold text-white pb-[10px] text-center">
              <span className="text-[#68B4FF] opacity-75">01. </span>Analysis
            </h1>
            <p className="text-[12px] text-[#C1D7EC] leading-[12px] font-medium break-all w-[160px]">
              We work with our clients to gather the requirements, use cases,
              process specifications and conduct in-depth research on
              demographics, behavior patterns, and target audiences to refine
              your idea and create a strong app foundation
            </p>
          </div>

          <div className="flex justify-center items-center bg-[#7B5DFA] opacity-70 w-[44.23px]  h-[44.23px] rounded-full mt-6">
            <Image
              alt="Prototyping"
              src={"/PrototypingForServicesPage.svg"}
              width={23.81}
              height={22.91}
            />
          </div>
          <div className="mt-[9.77px]">
            <h1 className="text-[14px] leading-[17.5px] font-bold text-white pb-[10px] text-center">
              <span className="text-[#68B4FF] opacity-75">03. </span>Prototyping
            </h1>
            <p className="text-[12px] text-[#C1D7EC] leading-[12px] font-medium break-all w-[160px]">
              We lead the industry with best in class prototype design
              techniques that give you an earlier heads up on the look and feel,
              during the development cycle.
            </p>
          </div>

          <div className="flex justify-center items-center bg-[#FB634F] w-[44.23px]  h-[44.23px] rounded-full mt-6">
            <Image
              alt="Testing&QA"
              src={"/Testing&QAForServicesPage.svg"}
              width={23.81}
              height={22.91}
            />
          </div>
          <div className="mt-[9.77px]">
            <h1 className="text-[14px] leading-[17.5px] font-bold text-white pb-[10px] text-center">
              <span className="text-[#68B4FF] opacity-75">05. </span>Testing &
              QA
            </h1>
            <p className="text-[12px] text-[#C1D7EC] leading-[12px] font-medium break-all w-[160px]">
              We rigorously test the performance app performance to Industry
              standards to evaluate its scalability, responsiveness, and
              stability.on
            </p>
          </div>
        </div>

        <div>
          <div className="relative">
            <div className="absolute right-3">
              <div className="flex items-center absolute">
                <div className="border h-[5.7px]"></div>
                <div className="border w-[67.3px]"></div>
                <div className="border w-[5.7px] h-[5.7px] rounded-full"></div>
              </div>
              <div className="flex items-center justify-between mt-[5px]">
                <h1 className="text-[14px] leading-[17.5px] text-white font-medium">
                  Services
                </h1>
                <Image
                  alt="PurpleLiunk"
                  src={"/MobilePurpleServicesWebdoors.svg"}
                  width={8}
                  height={8}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-[100px]">
            <div className="flex justify-center items-center bg-[#1FB0F3] w-[44.23px]  h-[44.23px] rounded-full ">
              <Image
                alt="Wireframing"
                src={"/WireframingForServicesPage.svg"}
                width={23.81}
                height={22.91}
              />
            </div>
            <div className="mt-[9.77px]">
              <h1 className="text-[14px] leading-[17.5px] font-bold text-white pb-[10px] text-center">
                <span className="text-[#68B4FF] opacity-75">02. </span>
                Wireframing
              </h1>
              <p className="text-[12px] text-[#C1D7EC] leading-[12px] font-medium break-all w-[160px]">
                Our experienced UI/UX designers will create wireframes to
                visualize the client&#39;s concept and ideas that clearly define the
                user journey
              </p>
            </div>

            <div className="flex justify-center items-center bg-[#F3CC1F] w-[44.23px]  h-[44.23px] rounded-full mt-9">
              <Image
                alt="Design&Code"
                src={"/Design&CodeForServicesPage.svg"}
                width={23.81}
                height={22.91}
              />
            </div>
            <div className="mt-[9.77px]">
              <h1 className="text-[14px] leading-[17.5px] font-bold text-white pb-[10px] text-center">
                <span className="text-[#68B4FF] opacity-75">04. </span>Design &
                code
              </h1>
              <p className="text-[12px] text-[#C1D7EC] leading-[12px] font-medium break-all w-[160px]">
                We use Human Interface Guidelines and follow industry best
                practices during our design and coding process. Our capabilities
                deliver sleek and responsive apps to give you a competitive
                edge.
              </p>
            </div>

            <div className="flex justify-center items-center bg-[#F31F46] w-[44.23px]  h-[44.23px] rounded-full mt-9">
              <Image
                alt="Deployment"
                src={"/DeploymentForServicesPage.svg"}
                width={23.81}
                height={22.91}
              />
            </div>
            <div className="mt-[9.77px]">
              <h1 className="text-[14px] leading-[17.5px] font-bold text-white pb-[10px] text-center">
                <span className="text-[#68B4FF] opacity-75">06. </span>
                Deployment
              </h1>
              <p className="text-[12px] text-[#C1D7EC] leading-[12px] font-medium break-all w-[160px]">
                Once the app fulfills our client&#39;s requirements and
                expectations, we deploy the app according to the launch plan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}