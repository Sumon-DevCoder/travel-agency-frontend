"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TravelOfferCard = ({ imageSrc }) => {
  return (
    <div className="relative rounded-2xl flex-1 h-[300px] sm:h-[400px] min-w-[250px] sm:min-w-[280px] lg:min-w-[320px] cursor-pointer overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-4 sm:p-6 h-full"
      >
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt="Travel Offer Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function TravelOffers() {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TravelOfferCard imageSrc="https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/home1-offer-card-1.png" />
        <TravelOfferCard imageSrc="https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/home1-offer-card-2.png" />
        <TravelOfferCard imageSrc="https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/home1-offer-card-1.png" />
      </div>
    </div>
  );
}
