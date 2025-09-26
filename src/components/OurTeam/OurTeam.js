import React, { useEffect, useRef, useState } from 'react';
import './ourTeam.scss';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const peopleData = [
    {
        id: 1,
        name: 'Alex Johnson',
        role: 'Project Manager',
        image_src: '/aboutCompany2.jpg',
    },
    {
        id: 2,
        name: 'Casey Davis',
        role: 'Sales Manager',
        image_src: '/ourVision/test.jpg',
    },
    {
        id: 3,
        name: 'François Best',
        role: 'Lead E-commerce Architect',
        image_src: '/ourVision/test3.jpg',
    },
    {
        id: 4,
        name: 'Morgan Brown',
        role: 'Creative Director (Apparel)',
        image_src: '/about4.jpg',
    },
    {
        id: 5,
        name: 'Jordan Lee',
        role: 'Supply Chain & Sourcing Manager',
        image_src: '/ourVision/5.png',
    },
    {
        id: 6,
        name: 'Riley Taylor',
        role: 'Brand Marketing Lead',
        image_src: '/ourVision/test2.jpg',
    },
];

function OurTeam() {
    const [active, setActive] = useState(1);
    const intervalRef = useRef(null);
    const max = peopleData.length;

    // uruchomienie i restart interwału
    const startRotation = (id) => {
        clearInterval(intervalRef.current);
        setActive(id); //natychmiastowe ustawienie active po hoverze
        let current = id;
        intervalRef.current = setInterval(() => {
            current = current === max ? 1 : current + 1;
            setActive(current);
        }, 2250);
    };

    const handleMouseEnter = (id) => {
        clearInterval(intervalRef.current);
        setActive(id);
    };

    const handleMouseLeave = (id) => {
        startRotation(id);
    };

    useEffect(() => {
        startRotation(1);
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <section className='ourTeam_section'>
            <header>
                <h2>Our People</h2>

                <button>
                    CHECK WHOLE TEAM
                    <Icon icon='humbleicons:arrow-right' className='icon' />
                </button>
            </header>

            <main>
                <article>
                    {peopleData.map(({ id, name, role }) => (
                        <div
                            key={id}
                            className={`person-wrapper ${
                                active === id ? 'active' : ''
                            }`}
                            onMouseEnter={() => handleMouseEnter(id)}
                            onMouseLeave={() => handleMouseLeave(id)}
                        >
                            <div className='info-wrapper'>
                                <p className='name'>{name}</p>
                                <p className='role'>{role}</p>
                            </div>

                            <div className='socials-wrapper'>
                                <Icon
                                    icon='fa6-brands:linkedin'
                                    className='icon'
                                />
                                <Icon
                                    icon='fa6-brands:x-twitter'
                                    className='icon'
                                />
                            </div>
                        </div>
                    ))}
                </article>

                <aside>
                    {peopleData.map(({ id, name, image_src }) => (
                        <Image
                            key={id}
                            src={image_src}
                            width={400}
                            height={500}
                            quality={id === 1 ? 100 : 90}
                            priority={id === 1 ? true : false}
                            alt={name}
                            className={`image image_${id} ${
                                active === id ? 'active' : ''
                            }`}
                        />
                    ))}
                </aside>
            </main>
        </section>
    );
}

export default OurTeam;
