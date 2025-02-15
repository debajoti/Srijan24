import React from 'react'
import './MobileTimeline.css'
import Image from 'next/image'
import circle from '../../assets/circle.png'

const MobileTimeline = () => {
    return (
        <div className='relative w-screen h-fit sm:hidden'>
            <div className='timeline'>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl relative top-12'>
                            Workshops
                        </h2>
                        <p className='font-Montserrat text-xl relative -top-4 text-transparent -z-20'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Modi, quas.
                        </p>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl'>
                            Fun Zone
                        </h2>
                        <p className='font-Montserrat text-xl'>
                            Bubble Zorbing, Archery
                            <span className='inline relative -top-4 -z-10 text-transparent'>
                                Lorem
                            </span>
                        </p>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl relative top-6'>
                            Standup Comedy
                        </h2>
                        <p className='relative -top-5 -z-10 text-transparent'>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl'>
                            F5 Talk Shows
                        </h2>
                        <p className='font-Montserrat text-xl'>
                            Eminent speakers on various domains
                        </p>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl'>
                            Coding
                        </h2>
                        <p className='font-Montserrat text-xl'>
                            Hackathon, Competitive Programming
                        </p>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl'>
                            Robotics and Circuitry
                        </h2>
                        <p className='font-Montserrat text-xl'>
                            RoboSoccer, Obstrcution Course Navigation, Circuit
                            Design
                        </p>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl'>
                            Finance and Management
                        </h2>
                        <p className='font-Montserrat text-xl'>
                            B-Plan, Case Study, Stock Market
                        </p>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box relative top-6'>
                        <h2 className='font-Montserrat font-bold text-3xl'>
                            Gaming
                        </h2>
                        <p className='font-Montserrat text-xl mb-4'>
                            PC, Mobile
                            <span className='relative -left-4 -top-4 -z-20 text-transparent'>
                                Lorem, ipsum dolor
                            </span>
                        </p>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl'>
                            Brain Storming
                        </h2>
                        <p className='font-Montserrat text-xl'>
                            Cybersecurity Puzzle
                            <span className='-z-10 text-transparent'>
                                Lorem, ipsum dolor.
                            </span>
                        </p>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl'>
                            Go Kart Exhibition
                        </h2>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl'>
                            Cultural Episodes
                        </h2>
                        <p className='font-Montserrat text-xl'>
                            Band, BeatBoxing, DJ Nights
                        </p>
                    </div>
                </div>
                <div className='timeline-container'>
                    <Image
                        src={circle}
                        alt='circle'
                        width={30}
                        className='timeline-img'
                    />
                    <div className='text-box'>
                        <h2 className='font-Montserrat font-bold text-3xl'>
                            Miscellaneous
                        </h2>
                        <p className='font-Montserrat text-xl'>
                            Debate, Quiz, Treasure Hunt
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileTimeline
