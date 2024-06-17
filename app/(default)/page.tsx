import Banner from "@/components/Banner";
import ClientLove from "@/components/ClientLove";
import Hero from "@/components/Hero";
import EmployeeLove from "@/components/employeeLove";
import EmployerLove from "@/components/employerLove";
import StandOut from "@/components/stand-out";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <StandOut />
      <Banner />
      <EmployerLove />
      <EmployeeLove />
      <ClientLove />
    </main>
  );
}
