import React, { useState } from 'react';

const AchieversCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://www.shutterstock.com/image-photo/hcl-sign-near-company-office-260nw-1437722072.jpg',
    'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/unacademy-sixteen_nine.png?size=948:533',
    'https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png',
    'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
    'https://www.cnet.com/a/img/resize/f92ae43457ac52e0b761737181264a82aa0765bb/hub/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg?auto=webp&fit=crop&height=675&width=1200',
    'https://images.indianexpress.com/2021/05/Google_Reuters_F.jpg',
    'https://data.bloomberglp.com/company/sites/51/2019/08/og-image-generic-lp.png',
    'https://www.thoughtco.com/thmb/xA0zo7FUyCKKiuR39yl56V2y5so=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/intel-logo-56a6fa195f9b58b7d0e5ce3a.png',
    'https://www.investors.com/wp-content/uploads/2022/01/Stock-junipernetworks-01-adobe.jpg',
    'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202210/qualcomm-hq-5-web-sixteen_nine.jpg?size=1200:675',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Logo_of_the_TCL_Corporation.svg/1200px-Logo_of_the_TCL_Corporation.svg.png',
    'https://media.licdn.com/dms/image/D560BAQEDRyEza4L5bw/company-logo_200_200/0/1688145028589/druva_logo?e=2147483647&v=beta&t=YGJvbiswZWd_iqftZxTpsTWZD2l9qPbJvy3hsM8BbtQ',
    'https://1000logos.net/wp-content/uploads/2020/09/Schlumberger-Logo.jpg',
    'https://1000logos.net/wp-content/uploads/2020/09/Schlumberger-Logo.jpg',
    'https://1000logos.net/wp-content/uploads/2020/09/Schlumberger-Logo.jpg',
    'https://1000logos.net/wp-content/uploads/2020/09/Schlumberger-Logo.jpg',
  ];

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="m-5 space-y-4">
      <h1 className="text-center text-4xl font-serif text-blue-500 underline p-5">Our Achievers work with</h1>
      <div className="flex shadow-[0_0_10px_black] p-10 w-[75rem] overflow-x-scroll no-scrollbar relative">
        {images.map((image, index) => (
          <img
            key={index}
            className={`ml-[80px] w-[400px] h-20 rounded-lg shadow-[0_0_10px_black] transition-transform duration-500 ease-in-out transform translate-x-${
              (index - currentIndex) * 500
            }`}
            src={image}
            alt=""
          />
        ))}
        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 px-4 py-2 text-white" onClick={prevImage}>
          Prev
        </button>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 px-4 py-2 text-white" onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AchieversCarousel;
