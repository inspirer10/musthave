import React from 'react';

function Categories() {
    return (
        <section className='section__categories'>
            <h2 className='categories__heading'>Categories</h2>
            <div className='categories__container'>
                <div className='categories__item__one'>
                    <div className='item__payload'>
                        <p>Clothing</p>
                        <button
                            onClick={() =>
                                (document.location.href =
                                    '/webstore/#/clothing')
                            }
                        >
                            Visit the shop
                        </button>
                    </div>
                </div>

                <div className='categories__item__three'>
                    <div className='item__payload'>
                        <p>Accessories</p>
                        <button
                            onClick={() =>
                                (document.location.href =
                                    '/webstore/#/accessories')
                            }
                        >
                            Visit the shop
                        </button>
                    </div>
                </div>

                <div className='categories__item__two'>
                    <div className='item__payload'>
                        <p>Shoes</p>
                        <button
                            onClick={() =>
                                (document.location.href = '/webstore/#/shoes')
                            }
                        >
                            Visit the shop
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
