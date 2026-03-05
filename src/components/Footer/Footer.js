import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import './footer.scss';

function Footer() {
    const footerLinks = [
        {
            title: 'Company',
            links: [
                { label: 'About Us', href: '/#aboutCompany' },
                { label: 'FAQ', href: '/items' },
                { label: 'Blog', href: '/items' },
            ],
        },
        {
            title: 'Services',
            links: [
                { label: 'Size Guide', href: '/items' },
                { label: 'Delivery', href: '/items' },
                { label: 'Returns', href: '/items' },
            ],
        },
        {
            title: 'Help',
            links: [
                { label: 'Support', href: '/profile' },
                { label: 'Terms & Conditions', href: '/profile' },
                { label: 'Privacy Policy', href: '/profile' },
            ],
        },
    ];

    const socialLinks = [
        {
            label: 'Instagram',
            href: 'https://www.instagram.com',
            icon: 'lucide:instagram',
        },
        { label: 'Twitter', href: 'https://x.com', icon: 'si:twitter-fill' },
        {
            label: 'YouTube',
            href: 'https://www.youtube.com',
            icon: 'tdesign:logo-youtube-filled',
        },
        {
            label: 'TikTok',
            href: 'https://www.tiktok.com',
            icon: 'akar-icons:tiktok-fill',
        },
    ];

    return (
        <footer id='main__footer'>
            <div className='footer_content-container'>
                <div className='footer_content-wrapper'>
                    <nav
                        className='footer__links'
                        aria-label='Footer navigation'
                    >
                        {footerLinks.map((section) => (
                            <div className='wrapper' key={section.title}>
                                <h2>{section.title}</h2>
                                <ul className='links_list'>
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className='wrapper'>
                            <h2>Stay connected</h2>
                            <ul className='social_icons'>
                                {socialLinks.map(({ label, href, icon }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target='_blank'
                                            rel='noreferrer'
                                            aria-label={label}
                                        >
                                            <Icon
                                                icon={icon}
                                                className='icon'
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    <button
                        type='button'
                        className='brand'
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        aria-label='Scroll to top'
                    >
                        <span
                            className='brand-label'
                            data-text='MUSTHAVE'
                            aria-hidden='true'
                        >
                            MUSTHAVE
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
