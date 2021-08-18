import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';
import { DocumentTextIcon, PencilIcon } from '@heroicons/react/solid';

export default function NavBar() {
    const [previewMode, setPreviewMode] = useState(false);

    const navigation = [
        {
            name: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-8 h-8 text-blue-500'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z' />
                </svg>
            ),
            href: 'https://twitter.com/intent/follow?screen_name=dev_moath',
        },
        {
            name: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-8 h-8 text-gray-700 dark:text-gray-300'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
                </svg>
            ),
            href: 'https://github.com/DevMoath/rtl-markdown-editor-web.git',
        },
    ];

    return (
        <Disclosure as='nav' className='fixed bg-white dark:bg-gray-900 shadow-lg w-full'>
            {({ open }) => (
                <Fragment>
                    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-between h-16 container'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                <Disclosure.Button className='transition-colors duration-200 transform inline-flex items-center justify-center p-2 rounded-lg text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? (
                                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                                    ) : (
                                        <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-between'>
                                <div className='flex-shrink-0 flex items-center'>
                                    <Link href='/'>
                                        <a className='transition-colors duration-200 transform px-3 py-2 rounded-lg text-lg text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'>
                                            Mark Editor
                                        </a>
                                    </Link>
                                </div>
                                <div className='hidden sm:block sm:ml-3'>
                                    <div className='flex space-x-4 items-center'>
                                        {navigation.map((item) => (
                                            <Link key={Math.random()} href={item.href}>
                                                <a className='transition-colors duration-200 transform px-3 py-2 rounded-lg text-lg text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-white'>
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='absolute lg:hidden inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                                <button onClick={() => setPreviewMode(!previewMode)}
                                        className='transition-colors duration-200 transform px-3 py-2 rounded-lg text-lg text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
                                >
                                    {
                                        previewMode ? <PencilIcon className='w-7 h-7' /> :
                                            <DocumentTextIcon className='w-7 h-7' />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className='sm:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            {navigation.map((item) => (
                                <Link key={Math.random()} href={item.href}>
                                    <a className='flex justify-center transition-colors duration-200 transform px-3 py-2 rounded-lg text-lg text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-white'>
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </Fragment>
            )}
        </Disclosure>
    );
}
