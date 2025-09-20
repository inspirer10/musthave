'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Navbar from '@/components/Navbar/Navbar';
import Bag from '@/components/Bag/Bag';
import InstagramStory from './InstagramStory';
import Footer from '@/components/Footer/Footer';

import './profileSubpage.scss';
import { Icon } from '@iconify/react';

function ProfileSubpage() {
    // Stan formularza
    const [form, setForm] = useState({
        email: '',
        password: '',
        keepLogged: false,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Walidacja formularza rejestracji
    const validate = () => {
        const err = {};
        if (!form.email) err.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(form.email)) err.email = 'Invalid email';
        if (!form.password) err.password = 'Password is required';
        if (form.password && form.password.length < 6)
            err.password = 'Minimum 6 characters';
        return err;
    };

    // Obsługa zmiany pól
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Obsługa Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        // Symulacja requestu (tu podepnij swój backend)
        setTimeout(() => {
            setLoading(false);
            alert('Logged in!\n' + JSON.stringify(form, null, 2));
        }, 1200);
    };

    //Login by Google (podpięcie OAuth lub next-auth)
    const handleGoogle = () => {
        alert('Google login not implemented');
    };

    return (
        <section>
            <Navbar color={'rgb(120, 120, 120)'}></Navbar>
            <Bag />

            <section className='profile-section'>
                <div className='content-wrapper'>
                    <main>
                        <Icon
                            icon='fluent:scan-person-28-filled'
                            className='icon'
                        />
                        <h2>Log to your account</h2>
                        <p className='subHeading'>
                            Enter your details to login
                        </p>

                        <form
                            className='login-form'
                            autoComplete='off'
                            onSubmit={handleSubmit}
                        >
                            <button
                                type='button'
                                className='login-form__google'
                                onClick={handleGoogle}
                                disabled={loading}
                            >
                                <Icon
                                    icon='logos:google-icon'
                                    className='login-form__google-icon'
                                />
                                Continue with Google
                            </button>
                            <div className='login-form__divider'>
                                <span className='login-form__divider-line' />
                                <span className='login-form__divider-text'>
                                    OR
                                </span>
                                <span className='login-form__divider-line' />
                            </div>
                            <label className='login-form__label'>
                                <span className='login-form__label-text'>
                                    Email Address
                                    <span className='login-form__required'>
                                        *
                                    </span>
                                </span>
                                <div className='login-form__input-wrapper'>
                                    <span className='login-form__input-icon'>
                                        <Icon icon='lucide:mail' />
                                    </span>
                                    <input
                                        className='login-form__input'
                                        type='email'
                                        name='email'
                                        placeholder='hello@example.com'
                                        value={form.email}
                                        onChange={handleChange}
                                        disabled={loading}
                                        required
                                    />
                                </div>
                                {errors.email && (
                                    <span
                                        style={{
                                            color: 'crimson',
                                            fontSize: '0.9rem',
                                            marginTop: '0.25rem',
                                        }}
                                    >
                                        {errors.email}
                                    </span>
                                )}
                            </label>

                            <label className='login-form__label'>
                                <span className='login-form__label-text'>
                                    Password
                                    <span className='login-form__required'>
                                        *
                                    </span>
                                </span>
                                <div className='login-form__input-wrapper'>
                                    <span className='login-form__input-icon'>
                                        <Icon icon='mingcute:lock-line' />
                                    </span>
                                    <input
                                        className='login-form__input'
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        name='password'
                                        value={form.password}
                                        onChange={handleChange}
                                        disabled={loading}
                                        required
                                    />
                                    <span
                                        className='login-form__input-icon login-form__input-icon--right'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() =>
                                            setShowPassword((v) => !v)
                                        }
                                        tabIndex={0}
                                    >
                                        {showPassword ? (
                                            <Icon icon='bi:eye-slash' />
                                        ) : (
                                            <Icon icon='bi:eye' />
                                        )}
                                    </span>
                                </div>
                                {errors.password && (
                                    <span
                                        style={{
                                            color: 'crimson',
                                            fontSize: '0.9rem',
                                            marginTop: '0.25rem',
                                        }}
                                    >
                                        {errors.password}
                                    </span>
                                )}
                            </label>

                            <section className='login-form__options'>
                                <label className='login-form__checkbox-label'>
                                    <input
                                        type='checkbox'
                                        className='login-form__checkbox'
                                        name='keepLogged'
                                        checked={form.keepLogged}
                                        onChange={handleChange}
                                        disabled={loading}
                                    />
                                    Keep me logged in
                                </label>
                                <Link href='#' className='login-form__forgot'>
                                    Forgot password?
                                </Link>
                            </section>
                            <button
                                type='submit'
                                className='login-form__submit'
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>
                    </main>

                    <InstagramStory />
                </div>
            </section>

            <Footer />
        </section>
    );
}

export default ProfileSubpage;
