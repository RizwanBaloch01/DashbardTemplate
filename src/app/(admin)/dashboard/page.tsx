'use client';
import DashHero from '@/app/(admin)/dashboard/components/DashHero';
import { IoAnalytics } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import Accounts from "@/app/(admin)/dashboard/components/Accounts";
import ClientPro from "@/app/(admin)/dashboard/components/ClientPro";
import AnalyticsGraph from "@/app/(admin)/dashboard/components/AnalyticsGraph";
import Clients from "@/app/(admin)/dashboard/components/Clients";
import ClientsMbl from "@/app/(admin)/dashboard/components/ClientsMbl";

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-7'>
      {/* Hero Section */}
      <div className="flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <IoAnalytics className='text-gray-800 bg-white h-12 w-12 rounded-full' />
          <h1 className='text-gray-800 text-3xl'>Overview</h1>
        </div>
        <button className="flex items-center justify-between p-1 h-9 w-36 text-gray-100 bg-gray-800 rounded-2xl">
          <IoLogoGithub className="" />
          <p>Star On GitHub</p>
        </button>
      </div>
      <DashHero />
      <Accounts />
      <ClientPro />
      <AnalyticsGraph />
      <Clients />
      <ClientsMbl />
    </div>
  );
};

export default Dashboard;