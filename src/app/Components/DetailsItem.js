import React, { useState } from 'react';

import { RiArrowDownSLine, RiCloseLine } from 'react-icons/ri';

const FAQItem = ({ label, textContent }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='additional-info-item'>
            <div
                className='additional-info-label'
                onClick={() => setIsOpen(!isOpen)}
                id={isOpen ? 'opened' : ''}
            >
                {label}
                <span className='additional-info-toggle'>
                    {isOpen ? (
                        <RiCloseLine className='icon' />
                    ) : (
                        <RiArrowDownSLine className='icon' />
                    )}
                </span>
            </div>
            {isOpen && (
                <div className='additional-info-textContent'>{textContent}</div>
            )}
        </div>
    );
};

export default FAQItem;
