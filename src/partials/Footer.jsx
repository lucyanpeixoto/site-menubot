import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link to="/" className="inline-block" aria-label="Cruip">
                <svg width="151" height="41" viewBox="0 0 151 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.3625 30.1657V19.9739C43.3625 19.1077 43.8305 18.6381 44.6935 18.6381H46.4676C47.3307 18.6381 47.7987 19.1077 47.7987 19.9739V20.4686C48.2417 19.1578 49.5248 18.3667 51.0035 18.3667C52.557 18.3667 53.8133 19.0596 54.5536 20.3954C55.8099 18.64 57.1658 18.3667 58.5717 18.3667C61.9971 18.3667 63.1805 21.4829 63.1805 24.0564V30.1657C63.1805 31.0318 62.7125 31.5015 61.8494 31.5015H60.0753C59.2123 31.5015 58.7443 31.0318 58.7443 30.1657V24.3028C58.7443 22.8938 58.3013 21.9025 57.2406 21.9025C56.18 21.9025 55.5145 22.8418 55.4915 24.5241V30.1638C55.4915 31.0299 55.0235 31.4996 54.1604 31.4996H52.3864C51.5233 31.4996 51.0553 31.0299 51.0553 30.1638V24.3008C51.0553 22.8919 50.6123 21.9006 49.5516 21.9006C48.491 21.9006 47.8025 22.89 47.8025 24.5973V30.1618C47.8025 31.028 47.3345 31.4976 46.4715 31.4976H44.6974C43.8343 31.4976 43.3663 31.028 43.3663 30.1618L43.3625 30.1657Z" fill="#DD533D"/>
                <path d="M64.5077 25.1208C64.5077 21.558 67.1199 18.3687 71.606 18.3687C75.4514 18.3687 78.4587 20.6938 78.5316 24.7994C78.5565 25.5655 78.0138 25.8869 77.1756 25.8869H68.6715C68.6715 27.0245 69.9776 28.3603 72.3194 28.3603C73.0578 28.3603 73.9458 28.2121 74.8588 27.7174C75.5991 27.3459 76.2147 27.3959 76.7077 28.0388L77.0529 28.4834C77.5707 29.1263 77.5458 29.8924 76.7824 30.4121C75.3287 31.4014 73.6025 31.7729 71.9761 31.7729C67.2925 31.7729 64.5077 28.8049 64.5077 25.1189V25.1208ZM74.4656 23.6618C74.268 22.1778 72.9121 21.585 71.6309 21.585C70.3497 21.585 68.9937 22.2028 68.7463 23.6618H74.4637H74.4656Z" fill="#DD533D"/>
                <path d="M79.9854 30.1657V19.9739C79.9854 19.1077 80.4534 18.6381 81.3165 18.6381H83.0906C83.9536 18.6381 84.4216 19.1077 84.4216 19.9739V20.4686C85.0871 19.1578 86.3204 18.3667 88.1443 18.3667C91.8421 18.3667 92.7032 21.4579 92.7032 24.0314V30.1657C92.7032 31.0318 92.2353 31.5015 91.3722 31.5015H89.5981C88.735 31.5015 88.2671 31.0318 88.2671 30.1657V24.4029C88.2671 23.017 87.824 21.9045 86.5179 21.9045C85.2118 21.9045 84.4235 22.992 84.4235 24.6993V30.1657C84.4235 31.0318 83.9556 31.5015 83.0925 31.5015H81.3184C80.4553 31.5015 79.9874 31.0318 79.9874 30.1657H79.9854Z" fill="#DD533D"/>
                <path d="M94.6499 26.1103V19.9759C94.6499 19.1098 95.1179 18.6401 95.981 18.6401H97.7551C98.6181 18.6401 99.0861 19.1098 99.0861 19.9759V25.7388C99.0861 27.1246 99.5541 28.2622 100.86 28.2622C102.166 28.2622 102.955 27.1497 102.955 25.4424V19.9759C102.955 19.1098 103.423 18.6401 104.286 18.6401H106.06C106.923 18.6401 107.391 19.1098 107.391 19.9759V30.1677C107.391 31.0339 106.923 31.5035 106.06 31.5035H104.286C103.423 31.5035 102.955 31.0339 102.955 30.1677V29.6981C102.289 30.9838 101.033 31.7749 99.2089 31.7749C95.5111 31.7749 94.6499 28.6837 94.6499 26.1103Z" fill="#DD533D"/>
                <path d="M114.048 29.7941V30.1656C114.048 31.0318 113.58 31.5014 112.717 31.5014H110.943C110.08 31.5014 109.612 31.0318 109.612 30.1656V14.954C109.612 14.0878 110.08 13.6182 110.943 13.6182H112.717C113.58 13.6182 114.048 14.0878 114.048 14.954V20.3703C114.861 19.0596 116.267 18.3666 117.918 18.3666C121.443 18.3666 124.031 21.2365 124.031 25.0707C124.031 28.9049 121.443 31.7748 117.918 31.7748C116.267 31.7748 114.861 31.0818 114.048 29.7961V29.7941ZM119.593 25.0707C119.593 23.2652 118.532 21.8313 116.808 21.8313C115.084 21.8313 113.973 23.2402 113.973 25.0707C113.973 26.9012 115.082 28.3101 116.808 28.3101C118.534 28.3101 119.593 26.8762 119.593 25.0707Z" fill="#DD533D"/>
                <path d="M124.817 25.0708C124.817 21.3598 127.849 18.3667 132.063 18.3667C136.277 18.3667 139.309 21.3598 139.309 25.0708C139.309 28.7818 136.302 31.7748 132.063 31.7748C127.824 31.7748 124.817 28.7818 124.817 25.0708ZM135.168 25.0708C135.168 23.2403 133.837 21.9045 132.063 21.9045C130.289 21.9045 128.983 23.2653 128.983 25.0708C128.983 26.8762 130.289 28.2621 132.063 28.2621C133.837 28.2621 135.168 26.9012 135.168 25.0708Z" fill="#DD533D"/>
                <path d="M141.503 27.1475V21.9044H140.345C139.902 21.9044 139.654 21.6561 139.654 21.2114V19.3309C139.654 18.8863 139.902 18.638 140.345 18.638H141.898L142.341 16.2147C142.416 15.6449 142.784 15.3735 143.352 15.3735H144.905C145.521 15.3735 145.841 15.695 145.841 16.2878V18.638H148.429C148.872 18.638 149.119 18.8863 149.119 19.3309V21.2114C149.119 21.6561 148.872 21.9044 148.429 21.9044H145.841V27.2226C145.841 27.9886 146.212 28.287 146.655 28.287C147.245 28.287 147.543 27.7673 147.543 27.1995C147.543 27.0763 147.543 26.9281 147.518 26.7799C147.468 26.3102 147.615 26.0619 148.085 26.0619H149.737C150.107 26.0619 150.402 26.2101 150.5 26.5816C150.623 26.9281 150.648 27.2996 150.673 27.571C150.673 30.7372 148.431 31.7766 146.162 31.7766C143.893 31.7766 141.503 30.8123 141.503 27.1514V27.1475Z" fill="#DD533D"/>
                <path d="M1.98889 28.0598C1.98889 26.5623 2.19987 25.1206 2.60647 23.7694C2.66592 23.5731 2.45879 23.4037 2.27658 23.4999C0.820874 24.2679 0 25.7289 0 27.4073C0 28.9105 0.661686 30.0115 1.84697 30.6429C2.01191 30.7314 2.20754 30.5851 2.17685 30.4003C2.05219 29.6593 1.98889 28.8797 1.98889 28.0598Z" fill="#DD533D"/>
                <path d="M33.4315 28.06C33.4315 26.5625 33.2205 25.1189 32.812 23.7677C32.7525 23.5714 32.9597 23.4039 33.14 23.4982C34.5976 24.2643 35.4204 25.7291 35.4204 27.4075C35.4204 28.9127 34.7568 30.0137 33.5696 30.645C33.4046 30.7316 33.2109 30.5873 33.2416 30.4044C33.3663 29.6614 33.4296 28.88 33.4296 28.06H33.4315Z" fill="#DD533D"/>
                <path d="M17.7006 14.1108C8.48876 14.1108 2.94019 20.3376 2.94019 28.0194C2.94019 35.7013 8.49068 40.0032 17.7006 40.0032C26.9105 40.0032 32.461 35.7013 32.461 28.0194C32.461 20.3376 26.9105 14.1108 17.7006 14.1108ZM17.7006 33.7938C10.2609 33.7938 5.77872 32.2443 5.77872 26.0407C5.77872 19.8371 10.2609 16.7324 17.7006 16.7324C25.1402 16.7324 29.6224 19.8371 29.6224 26.0407C29.6224 32.2443 25.1402 33.7938 17.7006 33.7938Z" fill="#DD533D"/>
                <path d="M14.21 24.7954C14.0508 24.7954 13.9223 24.6664 13.9223 24.5067C13.9223 23.6752 13.2491 22.9996 12.4205 22.9996C11.592 22.9996 10.9188 23.6752 10.9188 24.5067C10.9188 24.6664 10.7903 24.7954 10.6311 24.7954C10.4719 24.7954 10.3434 24.6664 10.3434 24.5067C10.3434 23.3576 11.2755 22.4221 12.4205 22.4221C13.5655 22.4221 14.4977 23.3576 14.4977 24.5067C14.4977 24.6664 14.3692 24.7954 14.21 24.7954Z" fill="#DD533D"/>
                <path d="M24.7701 24.7954C24.6109 24.7954 24.4824 24.6664 24.4824 24.5067C24.4824 23.6752 23.8092 22.9996 22.9807 22.9996C22.1521 22.9996 21.4789 23.6752 21.4789 24.5067C21.4789 24.6664 21.3504 24.7954 21.1912 24.7954C21.032 24.7954 20.9035 24.6664 20.9035 24.5067C20.9035 23.3576 21.8356 22.4221 22.9807 22.4221C24.1257 22.4221 25.0578 23.3576 25.0578 24.5067C25.0578 24.6664 24.9293 24.7954 24.7701 24.7954Z" fill="#DD533D"/>
                <path d="M19.6281 27.3267C19.8103 27.2978 19.9503 27.4922 19.9215 27.6751C19.7547 28.7549 18.8245 29.5826 17.7006 29.5826C16.5767 29.5826 15.6465 28.7549 15.4796 27.6751C15.4508 27.4922 15.5928 27.2959 15.7731 27.3267C16.2545 27.4075 16.686 27.6404 17.7006 27.6404C18.6538 27.6404 19.1448 27.4018 19.6281 27.3267Z" fill="#DD533D"/>
                <path d="M25.4145 5.73036C25.0674 2.98753 22.5721 1.04734 19.841 1.39572C19.4632 1.44384 19.1026 1.53816 18.7593 1.66327C19.3769 2.71806 19.6531 3.97303 19.398 5.27996C19.3769 5.37428 19.3558 5.47244 19.3308 5.5706C19.2752 5.79773 18.9396 5.73999 18.9626 5.50709C19.1122 4.07889 18.7535 2.84894 18.0842 1.88462C17.0869 0.573837 15.4432 -0.184532 13.696 0.0387444C11.9468 0.262021 10.5429 1.4092 9.90421 2.92979C9.72392 3.38596 9.59542 3.88641 9.53405 4.43113C9.5072 4.6698 9.16005 4.65633 9.1543 4.41573C9.15238 4.31179 9.15238 4.20977 9.1543 4.11161C9.16389 3.69008 9.22526 3.28395 9.33075 2.89706C8.63454 2.8066 7.89997 2.85857 7.16157 3.09532C5.05376 3.77092 3.62682 5.80735 3.70546 8.02664C3.80327 10.7117 5.93601 12.7482 8.46576 12.8598L8.74194 15.0464C8.77071 15.2677 9.01237 15.3948 9.208 15.285C10.9533 14.313 13.0132 13.6336 15.3665 13.3333C17.7198 13.033 19.8832 13.1755 21.8165 13.6798C22.0332 13.7356 22.2365 13.5547 22.2077 13.3314L21.9316 11.1448C24.212 10.4461 25.7271 8.18448 25.4184 5.73036H25.4145Z" fill="#DD533D"/>
                </svg>

                </Link>
              </div>
              <div className="text-gray-400">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-black-100 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Web Studio</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">DynamicBox Flex</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Programming Forms</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-black-100 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-black-100 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400  transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link to="#" className="flex justify-center items-center text-white bg-red-100   rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-white bg-red-100   rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-white bg-red-100  rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-white bg-red-100   rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-white bg-red-100   rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Cruip.com. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
