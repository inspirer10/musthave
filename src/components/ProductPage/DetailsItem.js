import React, { useState } from 'react';

import { Icon } from '@iconify/react';

const FAQItem = ({ label, textContent, icon }) => {
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
                        <Icon
                            icon='material-symbols:close-rounded'
                            className='icon'
                        />
                    ) : (
                        <Icon icon='tabler:chevron-down' className='icon' />
                    )}
                </span>
            </div>

            <div
                className={
                    isOpen
                        ? 'additional-info-textContent opened'
                        : 'additional-info-textContent'
                }
            >
                <div>
                    <p>{textContent}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
