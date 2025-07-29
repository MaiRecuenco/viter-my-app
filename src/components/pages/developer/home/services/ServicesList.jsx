import React from "react";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import CardService from "../../../../partials/CardService";

const ServicesList = ({
  isLoading,
  isFetching,
  error,
  dataServices,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {dataServices?.data.map((item, key) => {
          return (
            <div key={key} className="relative">
              <div className="absolute top-5 right-5">
                <button // 1ST STEP
                  type="button"
                  data-tooltip="Edit"
                  className="tooltip text-white"
                  onClick={() => handleEdit(item)}
                >
                  <FaPencil className="p-1 bg-primary rounded-full" />
                </button>
                <button // 1ST STEP
                  type="button"
                  data-tooltip="Delete"
                  className="tooltip text-red-600"
                  onClick={() => handleDelete(item)}
                >
                  <FaTrash className="p-1 bg-primary rounded-full" />
                </button>
              </div>
              <CardService item={item} />
            </div>
          );
        })}

        {/* Card Service */}
        {/* <CardService
              id={"web-development"}
              image={"../images/card-icon-web-development.webp"}
              title={"Web Development"}
              alt={"Web Development Image"}
              description={
                "Custom websites build with modern frameworks like Next.js and React for optimal performance."
              }
              link={"View Packages"}
            />
            <CardService
              id={"ui-ux-design"}
              image={"../images/card-icon-ui-ux-design.webp"}
              title={"UI/UX Design"}
              alt={"UI/UX Design Image"}
              description={
                "Beautiful interfaces designed to convert visitors with strategic user experience flows."
              }
              link={"See Portfolio"}
            />
            <CardService
              id={"seo-optimization"}
              name={"card"}
              image={"../images/card-icon-seo-optimization.webp"}
              title={"SEO Optimization"}
              alt={"SEO Optimization Image"}
              description={
                "Increase your visibility on search engines with our data-driven SEO strategies."
              }
              link={"View Packages"}
            /> */}
      </div>
    </>
  );
};

export default ServicesList;
