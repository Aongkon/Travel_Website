import React from "react";
import Image from "next/image";

interface newFeatureItemProps {
    tonic: string;
    icon : string;
    variant: string;
    description: string;
}

const NewFeatureItem = ({tonic, icon, variant, description}: newFeatureItemProps) => {

    // const {tonic, icon, variant, description} = props;

  return (
    <div>
         <li className="flex flex-col w-full items-start flex-1">
        <div className="rounded-full p-4 lg:p-7 bg-green-50">
           <Image 
          src={icon}
          alt="map"
          width={28}
          height={28}
          />
        </div>
        <h1 className="bold-20 lg:bold-32 mt-5 capitalize">{tonic}</h1>
        <p className="regular-16 mt-5 lg:mt-[30px] bg-white/80 text-gray-50 lg:bg-none">{description}</p>
      </li>
    </div>
  );
}

export default NewFeatureItem;
// const FeatureItem = ({title, icon, variant, description}) => {
  
//     type FeatureItem = {
//       title: string
//       icon : string
//       variant: string
//       description: string
//     }
//     return(
//       <li className="flex flex-col w-full items-start flex-1">
//         <div className="rounded-full p-4 lg:p-7 bg-green-50">
//           <Image 
//           src={icon}
//           alt="map"
//           width={28}
//           height={28}
//           />
//         </div>
//         <h1 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h1>
//         <p className="regular-16 mt-5 lg:mt-[30px] bg-white/80 text-gray-50 lg:bg-none">{description}</p>
//       </li>
//     )
//   }