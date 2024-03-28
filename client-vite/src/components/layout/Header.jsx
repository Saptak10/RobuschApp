// import { useState } from "react";
// import chargin from "../../assets/images/chargin/ev_chargin_yellow.png";
// import profile from "../../assets/images/header/profile.png";
// import hdLogo from "../../assets/images/header/yellow_hd_logo.png";

// import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // const location = useLocation();
  // console.log(location.pathname);
  //   const [nav, setNav] = useState(false);
  //
  //   const handleNav = () => {
  //     setNav(!nav);
  //   };

  return (
    <div>Header</div>
    //     <div className={location.pathname === "/" ? "bg-black" : "text-white"}>
    //       <div className="header-padding outline-none border-none">
    //         <div
    //           className="rounded-[20px] flex justify-between items-center h-20 w-100 mx-auto px-4 text-white
    //     bg-[#0C0C0C]"
    //         >
    //           <div className="grow">
    //             <h1 className="font-bold text-chargin-green">
    //               <div className="flex">
    //                 <div>
    //                   <img
    //                     src={hdLogo}
    //                     alt="chargin"
    //                     className="w-[20px] pt-[17px]"
    //                   />
    //                 </div>
    //                 <div>
    //                   <img src={chargin} alt="chargin" className="w-[140px]" />
    //                 </div>
    //               </div>
    //             </h1>
    //           </div>
    //           <div className="grow w-full hidden md:flex justify-end">
    //             <div className="p-4 relative">
    //               <Link
    //                 to="/"
    //                 className={
    //                   location.pathname === "/"
    //                     ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                     : "text-[#8B8B8B]"
    //                 }
    //               >
    //                 <div
    //                   className={location.pathname === "/" ? "shadow" : ""}
    //                 ></div>
    //                 Home
    //               </Link>
    //             </div>
    //             <div className="p-4 relative">
    //               <Link
    //                 to="/chargin"
    //                 className={
    //                   location.pathname === "/chargin"
    //                     ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                     : "text-[#8B8B8B]"
    //                 }
    //               >
    //                 <div
    //                   className={location.pathname === "/chargin" ? "shadow" : ""}
    //                 ></div>
    //                 <div>
    //                   <img src={chargin} alt="chargin" className="w-[40px]" />
    //                 </div>
    //               </Link>
    //             </div>
    //             <div className="p-4 relative">
    //               <Link
    //                 to="/rakshaqr"
    //                 className={
    //                   location.pathname === "/rakshaqr"
    //                     ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                     : "text-[#8B8B8B]"
    //                 }
    //               >
    //                 <div
    //                   className={location.pathname === "/rakshaqr" ? "shadow" : ""}
    //                 ></div>
    //                 Raksha QR
    //               </Link>
    //             </div>
    //             <div className="p-4 relative">
    //               <Link
    //                 to="/fastag"
    //                 className={
    //                   location.pathname === "/fastag"
    //                     ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                     : "text-[#8B8B8B]"
    //                 }
    //               >
    //                 <div
    //                   className={location.pathname === "/fastag" ? "shadow" : ""}
    //                 ></div>
    //                 FASTag
    //               </Link>
    //             </div>
    //             <div className="p-4 relative">
    //               <Link
    //                 to="/services"
    //                 className={
    //                   location.pathname === "/services"
    //                     ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                     : "text-[#8B8B8B]"
    //                 }
    //               >
    //                 <div
    //                   className={location.pathname === "/services" ? "shadow" : ""}
    //                 ></div>
    //                 Services
    //               </Link>
    //             </div>
    //             <div className="p-4 relative">
    //               <Link
    //                 to="/blog"
    //                 className={
    //                   location.pathname === "/blog"
    //                     ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                     : "text-[#8B8B8B]"
    //                 }
    //               >
    //                 <div
    //                   className={location.pathname === "/blog" ? "shadow" : ""}
    //                 ></div>
    //                 Blog
    //               </Link>
    //             </div>
    //           </div>
    //           <div className="grow w-1/5 items-center hidden md:flex justify-end">
    //             <div className="pr-3">
    //               <p className="text-chargin-green">Saanvi Joshi</p>
    //             </div>
    //             <div>
    //               <img src={profile} alt="chargin" className="w-10" />
    //             </div>
    //           </div>
    //           <div onClick={handleNav} className="block md:hidden">
    //             {nav ? (
    //               <svg
    //                 width="33"
    //                 height="24"
    //                 viewBox="0 0 33 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M3 12H30"
    //                   stroke="white"
    //                   stroke-width="4.5"
    //                   stroke-linecap="round"
    //                 />
    //                 <path
    //                   d="M17 2H30.5"
    //                   stroke="white"
    //                   stroke-width="4"
    //                   stroke-linecap="round"
    //                 />
    //                 <path
    //                   d="M17 22H30.5"
    //                   stroke="white"
    //                   stroke-width="4"
    //                   stroke-linecap="round"
    //                 />
    //               </svg>
    //             ) : (
    //               <svg
    //                 width="33"
    //                 height="24"
    //                 viewBox="0 0 33 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M3 12H30"
    //                   stroke="white"
    //                   stroke-width="4.5"
    //                   stroke-linecap="round"
    //                 />
    //                 <path
    //                   d="M17 2H30.5"
    //                   stroke="white"
    //                   stroke-width="4"
    //                   stroke-linecap="round"
    //                 />
    //                 <path
    //                   d="M17 22H30.5"
    //                   stroke="white"
    //                   stroke-width="4"
    //                   stroke-linecap="round"
    //                 />
    //               </svg>
    //             )}
    //           </div>
    //           <ul
    //             className={
    //               nav
    //                 ? "fixed right-0 top-0 w-full h-full bg-[#0C0C0C] duration-500 block md:hidden"
    //                 : "duration-500 top-0 fixed right-[-100%] w-full h-full block md:hidden"
    //             }
    //           >
    //             <div>
    //               <div className="w-full ml-3 mb-5 mt-5">
    //                 <div className="flex">
    //                   <div className="w-4/5 flex items-center">
    //                     <div>
    //                       <img src={profile} alt="chargin" className="h-[50px]" />
    //                     </div>
    //                     <div className="flex flex-col mt-2 ml-2 text-sm">
    //                       <div>
    //                         <p className="font-bold text-[#00df9a]">Saanvi Joshi</p>
    //                       </div>
    //                       <div>
    //                         <p>saanvijoshi@gmail.com</p>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="w-1/5">
    //                     <div onClick={handleNav} className="block md:hidden">
    //                       {nav ? (
    //                         <svg
    //                           width="50"
    //                           height="50"
    //                           viewBox="0 0 60 60"
    //                           fill="none"
    //                           xmlns="http://www.w3.org/2000/svg"
    //                         >
    //                           <circle
    //                             cx="30"
    //                             cy="30"
    //                             r="29"
    //                             fill="black"
    //                             stroke="#09DD6D"
    //                             stroke-width="2"
    //                           />
    //                           <path
    //                             d="M32.3597 30.0086L39.5263 22.8573C39.8402 22.5434 40.0165 22.1177 40.0165 21.6738C40.0165 21.2299 39.8402 20.8041 39.5263 20.4902C39.2125 20.1763 38.7868 20 38.343 20C37.8992 20 37.4735 20.1763 37.1597 20.4902L30.0097 27.6582L22.8597 20.4902C22.5458 20.1763 22.1202 20 21.6763 20C21.2325 20 20.8068 20.1763 20.493 20.4902C20.1792 20.8041 20.0028 21.2299 20.0028 21.6738C20.0028 22.1177 20.1792 22.5434 20.493 22.8573L27.6597 30.0086L20.493 37.1598C20.3368 37.3148 20.2128 37.4992 20.1282 37.7023C20.0436 37.9054 20 38.1233 20 38.3434C20 38.5634 20.0436 38.7813 20.1282 38.9844C20.2128 39.1876 20.3368 39.3719 20.493 39.5269C20.6479 39.6832 20.8323 39.8072 21.0354 39.8918C21.2385 39.9764 21.4563 40.02 21.6763 40.02C21.8964 40.02 22.1142 39.9764 22.3173 39.8918C22.5204 39.8072 22.7047 39.6832 22.8597 39.5269L30.0097 32.359L37.1597 39.5269C37.3146 39.6832 37.4989 39.8072 37.702 39.8918C37.9051 39.9764 38.123 40.02 38.343 40.02C38.563 40.02 38.7809 39.9764 38.984 39.8918C39.1871 39.8072 39.3714 39.6832 39.5263 39.5269C39.6825 39.3719 39.8065 39.1876 39.8912 38.9844C39.9758 38.7813 40.0193 38.5634 40.0193 38.3434C40.0193 38.1233 39.9758 37.9054 39.8912 37.7023C39.8065 37.4992 39.6825 37.3148 39.5263 37.1598L32.3597 30.0086Z"
    //                             fill="white"
    //                           />
    //                         </svg>
    //                       ) : (
    //                         <svg
    //                           width="50"
    //                           height="50"
    //                           viewBox="0 0 60 60"
    //                           fill="none"
    //                           xmlns="http://www.w3.org/2000/svg"
    //                         >
    //                           <circle
    //                             cx="30"
    //                             cy="30"
    //                             r="29"
    //                             fill="black"
    //                             stroke="#09DD6D"
    //                             stroke-width="2"
    //                           />
    //                           <path
    //                             d="M32.3597 30.0086L39.5263 22.8573C39.8402 22.5434 40.0165 22.1177 40.0165 21.6738C40.0165 21.2299 39.8402 20.8041 39.5263 20.4902C39.2125 20.1763 38.7868 20 38.343 20C37.8992 20 37.4735 20.1763 37.1597 20.4902L30.0097 27.6582L22.8597 20.4902C22.5458 20.1763 22.1202 20 21.6763 20C21.2325 20 20.8068 20.1763 20.493 20.4902C20.1792 20.8041 20.0028 21.2299 20.0028 21.6738C20.0028 22.1177 20.1792 22.5434 20.493 22.8573L27.6597 30.0086L20.493 37.1598C20.3368 37.3148 20.2128 37.4992 20.1282 37.7023C20.0436 37.9054 20 38.1233 20 38.3434C20 38.5634 20.0436 38.7813 20.1282 38.9844C20.2128 39.1876 20.3368 39.3719 20.493 39.5269C20.6479 39.6832 20.8323 39.8072 21.0354 39.8918C21.2385 39.9764 21.4563 40.02 21.6763 40.02C21.8964 40.02 22.1142 39.9764 22.3173 39.8918C22.5204 39.8072 22.7047 39.6832 22.8597 39.5269L30.0097 32.359L37.1597 39.5269C37.3146 39.6832 37.4989 39.8072 37.702 39.8918C37.9051 39.9764 38.123 40.02 38.343 40.02C38.563 40.02 38.7809 39.9764 38.984 39.8918C39.1871 39.8072 39.3714 39.6832 39.5263 39.5269C39.6825 39.3719 39.8065 39.1876 39.8912 38.9844C39.9758 38.7813 40.0193 38.5634 40.0193 38.3434C40.0193 38.1233 39.9758 37.9054 39.8912 37.7023C39.8065 37.4992 39.6825 37.3148 39.5263 37.1598L32.3597 30.0086Z"
    //                             fill="white"
    //                           />
    //                         </svg>
    //                       )}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div>
    //                 <li className="p-6 relative">
    //                   <Link
    //                     to="/"
    //                     className={
    //                       location.pathname === "/"
    //                         ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                         : "text-[#8B8B8B]"
    //                     }
    //                   >
    //                     <div
    //                       className={
    //                         location.pathname === "/" && nav ? "shadow" : ""
    //                       }
    //                     ></div>
    //                     Home
    //                   </Link>
    //                 </li>
    //                 <li className="p-6 relative">
    //                   <Link
    //                     to="/chargin"
    //                     className={
    //                       location.pathname === "/chargin"
    //                         ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                         : "text-[#8B8B8B]"
    //                     }
    //                   >
    //                     <div
    //                       className={
    //                         location.pathname === "/chargin" && nav ? "shadow" : ""
    //                       }
    //                     ></div>
    //                     Chargin
    //                   </Link>
    //                 </li>
    //                 <li className="p-6 relative">
    //                   <Link
    //                     to="/rakshaqr"
    //                     className={
    //                       location.pathname === "/rakshaqr"
    //                         ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                         : "text-[#8B8B8B]"
    //                     }
    //                   >
    //                     <div
    //                       className={
    //                         location.pathname === "/rakshaqr" && nav ? "shadow" : ""
    //                       }
    //                     ></div>
    //                     Raksha QR
    //                   </Link>
    //                 </li>
    //                 <li className="p-6 relative">
    //                   <Link
    //                     to="/fastag"
    //                     className={
    //                       location.pathname === "/fastag"
    //                         ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                         : "text-[#8B8B8B]"
    //                     }
    //                   >
    //                     <div
    //                       className={
    //                         location.pathname === "/fastag" && nav ? "shadow" : ""
    //                       }
    //                     ></div>
    //                     FASTag
    //                   </Link>
    //                 </li>
    //                 <li className="p-6 relative">
    //                   <Link
    //                     to="/services"
    //                     className={
    //                       location.pathname === "/services"
    //                         ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                         : "text-[#8B8B8B]"
    //                     }
    //                   >
    //                     <div
    //                       className={
    //                         location.pathname === "/services" && nav ? "shadow" : ""
    //                       }
    //                     ></div>
    //                     Services
    //                   </Link>
    //                 </li>
    //                 <li className="p-6 relative">
    //                   <Link
    //                     to="/blog"
    //                     className={
    //                       location.pathname === "/blog"
    //                         ? "text-chargin-green decoration-chargin-green decoration-2 underline underline-offset-8"
    //                         : "text-[#8B8B8B]"
    //                     }
    //                   >
    //                     <div
    //                       className={
    //                         location.pathname === "/blog" && nav ? "shadow" : ""
    //                       }
    //                     ></div>
    //                     Blog
    //                   </Link>
    //                 </li>
    //               </div>
    //               <div className="m-4 mt-[222px] flex items-center">
    //                 <div>
    //                   <svg
    //                     width="45"
    //                     height="45"
    //                     viewBox="0 0 45 45"
    //                     fill="none"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <circle
    //                       cx="22.5"
    //                       cy="22.5"
    //                       r="21.5"
    //                       fill="black"
    //                       stroke="#09DD6D"
    //                       stroke-width="2"
    //                     />
    //                     <path
    //                       d="M28.7532 17C28.4548 17 28.1687 16.8946 27.9577 16.7071C27.7467 16.5196 27.6282 16.2652 27.6282 16C27.6282 15.7348 27.7467 15.4804 27.9577 15.2929C28.1687 15.1054 28.4548 15 28.7532 15H31.0032C31.3015 15 31.5877 15.1054 31.7987 15.2929C32.0096 15.4804 32.1282 15.7348 32.1282 16V30C32.1282 30.2652 32.0096 30.5196 31.7987 30.7071C31.5877 30.8946 31.3015 31 31.0032 31H28.7532C28.4548 31 28.1687 30.8946 27.9577 30.7071C27.7467 30.5196 27.6282 30.2652 27.6282 30C27.6282 29.7348 27.7467 29.4804 27.9577 29.2929C28.1687 29.1054 28.4548 29 28.7532 29H29.8782V17H28.7532ZM13.2057 22.42L16.3782 18.42C16.5502 18.2044 16.8113 18.0581 17.1043 18.0132C17.3974 17.9682 17.6985 18.0282 17.9419 18.18C18.0636 18.2558 18.1672 18.3522 18.2467 18.4638C18.3262 18.5754 18.38 18.6998 18.4051 18.83C18.4303 18.9601 18.4261 19.0934 18.3929 19.2222C18.3598 19.3509 18.2982 19.4725 18.2119 19.58L16.2769 22H25.3782C25.6765 22 25.9627 22.1054 26.1737 22.2929C26.3846 22.4804 26.5032 22.7348 26.5032 23C26.5032 23.2652 26.3846 23.5196 26.1737 23.7071C25.9627 23.8946 25.6765 24 25.3782 24H16.3782L18.4032 26.4C18.4918 26.5051 18.5563 26.6246 18.593 26.7518C18.6296 26.879 18.6378 27.0114 18.6169 27.1414C18.596 27.2714 18.5465 27.3965 18.4712 27.5095C18.3959 27.6225 18.2964 27.7212 18.1782 27.8C17.9834 27.9298 17.7466 28 17.5032 28C17.3285 28 17.1563 27.9639 17.0001 27.8944C16.8438 27.825 16.708 27.7242 16.6032 27.6L13.2282 23.6C13.0841 23.4309 13.0043 23.2254 13.0002 23.0133C12.9962 22.8011 13.0681 22.5934 13.2057 22.42Z"
    //                       fill="white"
    //                     />
    //                   </svg>
    //                 </div>
    //                 <div className="ml-2">Logout</div>
    //               </div>
    //             </div>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
  );
};

export default Header;
