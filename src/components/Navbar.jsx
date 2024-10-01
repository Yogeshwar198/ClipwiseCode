import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-20 p-10 justify-between items-center flex bg-gradient-to-r from-sky-300 to-sky-400'>
            <div className='flex items-center'>
                <svg width="37" height="64" viewBox="0 0 37 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_54)">
                        <path d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z" fill="white" />
                        <path d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z" fill="white" />
                        <path d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_54">
                            <rect width="37" height="64" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <span className='text-white ml-6 text-md'>Pop Rock Crystal</span>
                <p className='hidden md:block absolute left-24 top-0 p-52 bg-red-300 opacity-15 shadow-2xl shadow-red-300 rounded-full'></p>
                <p className='hidden md:block absolute left-20 top-[-10] p-52 bg-red-300 opacity-15 shadow-2xl shadow-red-300 rounded-full'></p>
                <p className='hidden md:block absolute left-52 top-10 p-20 bg-red-300 opacity-15 shadow-2xl shadow-red-300 rounded-full'></p>
                <p className='hidden md:block absolute left-52 top-10 p-20 bg-red-300 opacity-15 shadow-2xl shadow-red-300 rounded-full'></p>
            </div>
            <div className='hidden md:block'>
                <ul className='text-white flex gap-4 cursor-pointer'>
                    <li className='hover:text-slate-500'>Home</li>
                    <li className='hover:text-slate-500'>Shop</li>
                    <li className='hover:text-slate-500'>About Us</li>
                    <li className='hover:text-slate-500'>Help</li>
                </ul>
            </div>
            <div className='flex gap-2 items-center'>
                <span className='h-4 w-4 rounded-full bg-red-500 p-2 text-[7px] text-white flex items-center justify-center'>00</span>
                <svg className='cursor-pointer' width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8502 8.25H18.0937L12.75 1.125C12.6626 1.00857 12.5494 0.914063 12.4192 0.848974C12.289 0.783886 12.1455 0.75 12 0.75C11.8544 0.75 11.7109 0.783886 11.5807 0.848974C11.4505 0.914063 11.3373 1.00857 11.25 1.125L5.90621 8.25H2.14976C1.64444 8.24922 1.15943 8.44889 0.801117 8.80523C0.442808 9.16156 0.240453 9.64546 0.238436 10.1508C0.237345 10.3294 0.263223 10.5072 0.315194 10.6781L3.02633 20.2371C3.20262 20.8601 3.57755 21.4085 4.09411 21.7989C4.61066 22.1893 5.24057 22.4003 5.88805 22.3998H18.1119C18.7594 22.3978 19.3889 22.1864 19.9064 21.7971C20.4239 21.4079 20.8015 20.8616 20.983 20.24L23.6976 10.6682C23.7101 10.6228 23.7192 10.5766 23.7246 10.5299L23.7556 10.241C23.7591 10.2109 23.7609 10.1805 23.7609 10.1502C23.7587 9.64507 23.5564 9.16141 23.1982 8.80523C22.8401 8.44904 22.3553 8.24937 21.8502 8.25ZM12 3.2502L15.75 8.25H8.24996L12 3.2502ZM12 17.6057C11.5635 17.6036 11.1375 17.4723 10.7756 17.2283C10.4137 16.9843 10.1322 16.6386 9.96666 16.2347C9.80108 15.8309 9.75884 15.3871 9.84526 14.9593C9.93168 14.5315 10.1429 14.1389 10.4522 13.831C10.7616 13.5231 11.1552 13.3138 11.5834 13.2294C12.0116 13.145 12.4552 13.1894 12.8583 13.3569C13.2613 13.5244 13.6057 13.8075 13.8479 14.1705C14.0902 14.5336 14.2195 14.9602 14.2195 15.3967C14.2162 15.9831 13.9809 16.5445 13.565 16.958C13.1491 17.3715 12.5864 17.6035 12 17.6033V17.6057Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default Navbar