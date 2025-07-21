import React from "react";
import CardService from "../../../../partials/CardService";
import { apiVersion } from "../../../../helpers/function-general";
import useQueryData from "../../../../custom-hooks/useQueryData";

const Services = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: dataServices,
  } = useQueryData(
    `${apiVersion}/controllers/developer/web-services/web-services.php`,
    "get",
    "web-services"
  );
  return (
    <>
      <section id="services" className="bg-gray-50 py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="title">Our Web Services</h2>
            <p>Professional solutions tailored to boost your online presence</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {dataServices?.data.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <CardService item={item} />
                </React.Fragment>
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
        </div>
      </section>
    </>
  );
};

export default Services;
