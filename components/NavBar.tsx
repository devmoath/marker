import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { DocumentTextIcon, PencilIcon } from '@heroicons/react/solid';
import { usePreview } from '@contexts/preview';

export default function NavBar() {
    const { isPreviewMode, setPreviewMode } = usePreview();

    const navigation = [
        {
            name: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-500"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
            ),
            href: 'https://twitter.com/intent/follow?screen_name=dev_moath',
        },
        {
            name: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-700 dark:text-gray-300"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            ),
            href: 'https://github.com/DevMoath/marker',
        },
    ];

    return (
        <Disclosure as="nav" className="fixed z-50 w-full bg-white shadow-lg dark:bg-gray-900">
            {({ open }) => (
                <Fragment>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="container relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex transform items-center justify-center rounded-lg p-2 text-black transition-colors duration-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href="/">
                                        <a className="transform rounded-lg px-3 py-2 text-lg text-black transition-colors duration-200 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700">
                                            Marker
                                        </a>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-3 sm:block">
                                    <div className="flex items-center space-x-4">
                                        {navigation.map((item) => (
                                            <Link key={Math.random()} href={item.href}>
                                                <a className="transform rounded-lg px-3 py-2 text-lg text-black transition-colors duration-200 hover:bg-gray-300 hover:text-white dark:text-gray-300 dark:hover:bg-gray-700">
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 lg:hidden">
                                <button
                                    onClick={() => setPreviewMode(!isPreviewMode)}
                                    className="transform rounded-lg px-3 py-2 text-lg text-black transition-colors duration-200 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700"
                                >
                                    {isPreviewMode ? (
                                        <PencilIcon className="h-7 w-7" />
                                    ) : (
                                        <DocumentTextIcon className="h-7 w-7" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link key={Math.random()} href={item.href}>
                                    <a className="flex transform justify-center rounded-lg px-3 py-2 text-lg text-black transition-colors duration-200 hover:bg-gray-300 hover:text-white dark:text-gray-300 dark:hover:bg-gray-700">
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
