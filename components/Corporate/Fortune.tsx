'use client'
import Image from "next/image"
import Community from "@/public/images/svgs/community.svg"
import Stroke from "@/public/illustrations/brush-stroke2.svg"
import Obj1 from "@/public/illustrations/obj3.svg"
import Obj2 from "@/public/illustrations/obj4.svg"
import { Tabs, TabsContent, TabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import { useEffect, useRef, useState } from "react";


const ValueFortune = () => {
  const [value, setValue] = useState<number>(1);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setValue(prevValue => (prevValue >= 4 ? 1 : prevValue + 1));
    }, 8000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleTabClick = (newValue: number) => {
    setValue(newValue);
    setIsClicked(true);
    stopInterval();
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      setIsClicked(false);
      startInterval();
    }, 30000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      stopInterval();
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);
  return (
    <section className="max-w-full w-full flex flex-col items-center justify-center bg-black my-10">
      <div className="max-w-7xl w-full text-center pb-10">
        <h1 className="text-center text-4xl font-semibold mb-4">Why you should consider <span className='text-gold-300 relative'>Value1<span className='absolute -bottom-4 left-0'><Image src={Stroke} alt={'stroke'} className="w-56" /></span></span></h1>
        <p className="text-xl text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil pariatur quasi adipisci modi illum facilis a aperiam architecto vitae, illo eos sapiente veritatis possimus debitis ipsam consectetur numquam recusandae!</p>
      </div>
      <Tabs value={value.toString()}>
        <TabsList className="flex items-center justify-center gap-4 h-24">
          <CustomTabsTrigger value="1" className="hover:scale-105 w-64 h-full p-2 flex items-center justify-center gap-5 border-2 border-white rounded-xl bg-white/15 smooth" onClick={()=>handleTabClick(1)}>
            <span className="w-1/3"><Image src={Community} alt="" /></span>
            <h1 className="w-2/3 text-lg font-medium">Gold Rewards Empowerment</h1>
          </CustomTabsTrigger>
          <CustomTabsTrigger value="2" className="hover:scale-105 w-64 h-full p-2 flex items-center justify-center gap-5 border-2 border-white rounded-xl bg-white/15 smooth" onClick={()=>handleTabClick(2)}>
            <span className="w-1/3"><Image src={Community} alt="" /></span>
            <h1 className="w-2/3 text-lg font-medium">Completely Customizable</h1>
          </CustomTabsTrigger>
          <CustomTabsTrigger value="3" className="hover:scale-105 w-64 h-full p-2 flex items-center justify-center gap-5 border-2 border-white rounded-xl bg-white/15 smooth" onClick={()=>handleTabClick(3)}>
            <span className="w-1/3"><Image src={Community} alt="" /></span> 
            <h1 className="w-2/3 text-lg font-medium">Comprehensive Benefits Marketplace</h1>
          </CustomTabsTrigger>
          <CustomTabsTrigger value="4" className="hover:scale-105 w-64 h-full p-2 flex items-center justify-center gap-5 border-2 border-white rounded-xl bg-white/15 smooth" onClick={()=>handleTabClick(4)}>
            <span className="w-1/3"><Image src={Community} alt="" /></span>
            <h1 className="w-2/3 text-lg font-medium">Actionable Business Intelligence</h1>
          </CustomTabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <div className="max-w-7xl w-full flex items-center justify-center text-white mt-10">
            <div className="w-2/5 rounded-2xl overflow-hidden flex items-center justify-center bg-gold-100 h-96">
              <Image src={'/illustrations/transformation.svg'} alt={''} width={800} height={800} className='w-full h-auto' />
            </div>
            <div className="relative w-3/5 px-20 text-center flex flex-col items-center justify-center gap-8">
              <h1 className="text-3xl font-semibold text-gold-200">See Why <span className='relative'>Employees<span className='absolute -bottom-4 left-0'><Image src={Stroke} alt={'stroke'} className="w-56" /></span></span> Love Us </h1>
              <p className="text-lg">Empower your employees with gold rewards they love. Elevate morale and engagement with our innovative reward system tailored to your workforce's needs.</p>
              <Image src={Obj1} alt={"Floaters"} className="absolute -top-10 left-20 w-10 animate-wave" />
              <Image src={Obj2} alt={"Floaters"} className="absolute -bottom-10 -right-10 animate-waveX" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="2">
          <div className="max-w-7xl w-full h-max flex items-center justify-center text-white mt-10">
            <div className="w-2/5 flex items-center justify-center rounded-2xl overflow-hidden bg-gold-100 h-96">
              <Image src={'/illustrations/transformation.svg'} alt={''} width={800} height={800} className='w-full h-auto' />
            </div>
            <div className="relative w-3/5 px-20 text-center flex flex-col items-center justify-center gap-8">
              <h1 className="text-3xl font-semibold text-gold-200">Completely <span className='relative'>Customizable<span className='absolute -bottom-4 left-0'><Image src={Stroke} alt={'stroke'} className="w-56" /></span></span> Solutions</h1>
              <p className="text-lg">Tailor your rewards program to match your brand identity and culture. From design to content, personalize every aspect for a seamless employee experience.</p>
              <Image src={Obj1} alt={"Floaters"} className="absolute -top-10 left-20 w-10 animate-wave" />
              <Image src={Obj2} alt={"Floaters"} className="absolute -bottom-10 -right-10 animate-waveX" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="3">
          <div className="max-w-7xl w-full flex items-center justify-center text-white mt-10">
            <div className="w-2/5 flex items-center justify-center rounded-2xl overflow-hidden bg-gold-100 h-96">
              <Image src={'/illustrations/transformation.svg'} alt={''} width={800} height={800} className='w-full h-auto' />
            </div>
            <div className="relative w-3/5 px-20 text-center flex flex-col items-center justify-center gap-8">
              <h1 className="text-3xl font-semibold text-gold-200">Explore Our <span className='relative'>Benefits<span className='absolute -bottom-2 left-0'><Image src={Stroke} alt={'stroke'} className="w-56" /></span></span> Marketplace</h1>
              <p className="text-lg">Access a vast array of benefit-focused apps to cater to your employees' diverse needs. Choose the solutions that align with your organization's goals and objectives.</p>
              <Image src={Obj1} alt={"Floaters"} className="absolute -top-10 left-20 w-10 animate-wave" />
              <Image src={Obj2} alt={"Floaters"} className="absolute -bottom-10 -right-10 animate-waveX" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="4">
          <div className="max-w-7xl w-full flex items-center justify-center text-white mt-10">
            <div className="w-2/5 flex items-center justify-center rounded-2xl overflow-hidden bg-gold-100 h-96">
              <Image src={'/illustrations/transformation.svg'} alt={''} width={800} height={800} className='w-full h-auto' />
            </div>
            <div className="relative w-3/5 px-20 text-center flex flex-col items-center justify-center gap-8">
              <h1 className="text-3xl font-semibold text-gold-200"><span className='relative'>Unlock<span className='absolute -bottom-2 left-0'><Image src={Stroke} alt={'stroke'} className="w-56" /></span></span> Actionable Insights</h1>
              <p className="text-lg">Gain valuable insights into employee preferences and behaviors. Utilize data-driven analytics to make informed decisions and optimize your rewards strategy for maximum impact.</p>
              <Image src={Obj1} alt={"Floaters"} className="absolute -top-10 left-20 w-10 animate-wave" />
              <Image src={Obj2} alt={"Floaters"} className="absolute -bottom-10 -right-10 animate-waveX" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default ValueFortune
