import React from "react";
import Image from "next/image";
import { FEATURES } from "../../../Constent";
import { title } from "process";
import NewFeatureItem from "./NewFeatureItem";

const Features = () => {
  return (
    <section className="py-24 flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat">
      <div className="max-container flex padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className=" flex w-full flex-col z-20 lg:w-[60%]">
          <div className="relative">
            <Image
             src="/camp.svg" 
             alt="camp" 
             width={50} 
             height={50} 
             className="absolute top-[-28px] left-[-5px] w-10 lg:-w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map ((feature, index) => (
              <NewFeatureItem
               key={index}
               tonic={feature.title}
               icon={feature.icon}
               variant={feature.variant} 
               description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// const FeatureItem = ({title, icon, variant, description}) => {
  
//   type FeatureItem = {
//     title: string
//     icon : string
//     variant: string
//     description: string
//   }
//   return(
//     <li className="flex flex-col w-full items-start flex-1">
//       <div className="rounded-full p-4 lg:p-7 bg-green-50">
//         <Image 
//         src={icon}
//         alt="map"
//         width={28}
//         height={28}
//         />
//       </div>
//       <h1 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h1>
//       <p className="regular-16 mt-5 lg:mt-[30px] bg-white/80 text-gray-50 lg:bg-none">{description}</p>
//     </li>
//   )
// }
export default Features;
