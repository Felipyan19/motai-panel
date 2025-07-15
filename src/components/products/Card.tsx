"use client";

import Image from "next/image";
import { ICardProps } from "@/types/components/card";
import { motion } from "framer-motion";

export const Card = ({
  product,
  onEditProduct,
  onDeleteProduct,
}: ICardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="border border-dark-border rounded-lg p-4 bg-dark-card shadow-sm h-full flex flex-col"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={280}
        height={200}
        className="w-full h-[200px] object-cover rounded"
      />
      <h3 className="my-3 text-lg font-semibold line-clamp-2 h-[56px]">
        {product.title}
      </h3>
      <p className="text-dark-text text-sm my-2 flex-1 line-clamp-3 overflow-hidden">
        {product.description}
      </p>
      <div className="flex justify-between items-center mt-5">
        <button
          className="bg-dark-button text-dark-text px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
          onClick={() => onEditProduct(product)}
        >
          Edit
        </button>
        <button
          className="bg-gray-500 text-dark-text px-4 py-2 rounded"
          onClick={() => onDeleteProduct(product)}
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};
