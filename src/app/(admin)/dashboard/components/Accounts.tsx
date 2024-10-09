'use client';
import React from 'react'
import { MdOutlinePhotoCameraBack, MdOutlinePayment } from "react-icons/md";
import { TbInvoice } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";

interface AccountsType {
    dollar: string;
    time: string;
    via: string;
    img: JSX.Element;  // Use JSX.Element for JSX content
    account: string;   // Use string for text
    btn: JSX.Element;  // Use JSX.Element for JSX content
}

const Accounts = () => {
    const accounts: AccountsType[] = [
        {
            img: <MdOutlinePhotoCameraBack className='h-8 w-8 rounded-full text-green-600' />,
            dollar: "$423.35", 
            time: "3 days ago", 
            via: "Via Turcotte", 
            account: "Home Loan Account", 
            btn: <div className='bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200'>Deposit</div>,
        },
        {
            img: <MdOutlinePayment className='h-8 w-8 rounded-full text-blue-600' />,
            dollar: "$370.23", 
            time: "3 days ago", 
            via: "Via Murazik - Graham", 
            account: "Savings Account", 
            btn: <div className='bg-blue-500 py-1 rounded-full px-3 text-sm text-gray-200'>Payment</div>,
        },
        {
            img: <TbInvoice className='h-8 w-8 rounded-full text-blue-600' />,
            dollar: "$970.32", 
            time: "5 days ago", 
            via: "Via Shame - McCmahon", 
            account: "Checking Account", 
            btn: <div className='bg-yellow-600 py-1 rounded-full px-3 text-sm text-gray-200'>Invoice</div>,
        },
        {
            img: <BiMoneyWithdraw className='h-8 w-8 rounded-full text-red-600' />,
            dollar: "$280.03", 
            time: "2 days ago", 
            via: "Via Coller - Hunt", 
            account: "Auto Loan Account", 
            btn: <div className='bg-red-600 py-1 rounded-full px-3 text-sm text-gray-200'>Invoice</div>,
        },
    ];

    return (
        <div className='flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-4'>
            {accounts.map((item, i) => (
                <div key={i}>
                    <div className='w-[315px] md:w-[500px] lg:w-[350px] xl:w-[500px] bg-white flex flex-col items-center justify-center rounded-xl'>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-2 p-3'> 
                            <div className='h-12 w-12 flex items-center justify-center rounded-full bg-gray-100'>
                                {item.img}
                            </div>
                            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between gap-5'>
                                <div className='flex flex-col items-center  md:items-start justify-center'>
                                    <p className='font-medium'>{item.dollar}</p>
                                    <p className='font-bold'>{item.time} <span className='font-normal'>{item.via}</span></p>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <p>{item.account}</p>
                                    <button>{item.btn}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accounts;