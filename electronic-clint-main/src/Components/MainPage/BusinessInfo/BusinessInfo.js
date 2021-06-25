import React from "react";
import InfoCart from "../InfoCart/InfoCart";
// import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import taper from '../../../Image_Icon/Icon/1.png'
import low from '../../../Image_Icon/Icon/2.png'
import high from '../../../Image_Icon/Icon/3.png'
import mid from '../../../Image_Icon/Icon/4.png'

const infoData = [
  {
    title: "Vod - Free electron",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam fuga ex optio quis minus natus dolorem perspiciatis laudantium similique nemo?",
    icon: taper,
    background: "info",
  },
  {
    title: "Computer Processor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rem. Aperiam ut deleniti facere ullam explicabo corporis saepe porro temporibus.",
    icon: low,
    background: "dark",
  },
  {
    title: "Black computer processor illustration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis ipsa iure dignissimos aspernatur ducimus natus facilis ex cumque sunt.",
    icon: high,
    background: "info",
  },
  {
    title: "Chip Transparent",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto saepe modi repellendus vel asperiores odit sint labore suscipit explicabo?",
    icon: mid,
    background: "dark",
  },
];
const BusinessInfo = () => {
  return (
    <section className="container text-center mt-5">
      <h3 className="text-brand">Service Information</h3>
      <div className="row">
        {
          infoData.map((info) => <InfoCart info={info}></InfoCart>)
        }
      </div>
    </section>
  );
};

export default BusinessInfo;
