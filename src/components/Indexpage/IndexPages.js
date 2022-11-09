import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Products } from '../../App';
import animitedImg from "../../image/221234-P173C4-818-ai.png"
import ShortProductBox from './ShortProductBox';

const IndexPages = () => {
    const { user, setUser } = useContext(Products)


    return (
        <div>

            <div className='flex justify-center items-center'>
                <div className="stats shadow w-full m-4">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Sales</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Total sales</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="">
                                    <div className="bg-neutral-focus text-neutral-content w-16 h-16 rounded-full flex justify-center items-center ">
                                        <span className="text-3xl uppercase">{user?.name?.slice(0, 2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Delivary done</div>
                        <div className="stat-desc text-secondary">31 delivary remaining</div>
                    </div>

                </div>
            </div>
            <ShortProductBox />
            

        
        </div>
    );
};

export default IndexPages;