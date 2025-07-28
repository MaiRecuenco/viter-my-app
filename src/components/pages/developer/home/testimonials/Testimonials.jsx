import React from "react";
import { FaList, FaPlus, FaTable, FaTrash } from "react-icons/fa";
import ModalAddTestimonials from "./ModalAddTestimonials";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import ModalDeleteTestimonials from "./ModalDeleteTestimonials";
import TestimonialsTable from "./TestimonialsTable";
import TestimonialsList from "./TestimonialsList";

const Testimonials = () => {
  // const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isModalTestimonials, setIsModalTestimonials] = React.useState(false);
  const [isDeleteServices, setIsDeleteServices] = React.useState(false);
  const [isTable, setIsTable] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();

  console.log(isTable);
  const handleToggleTable = () => {
    setIsTable(!isTable);
  };

  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteServices(true);
  };

  const handleAdd = () => {
    setItemEdit(null);
    setIsModalTestimonials(true);
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalTestimonials(true);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: dataTestimonials,
  } = useQueryData(
    `${apiVersion}/controllers/developer/testimonials/testimonials.php`,
    "get",
    "testimonials"
  );
  return (
    <>
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative w-full">
            <h2 className="text-3xl font-bold text-center mb-12">
              Client Testimonials
            </h2>
            <div className="absolute right-0 top-1/3">
              <div className="flex items-center gap-x-3">
                <button
                  className="flex items-center gap-2 hover:underline hover:text-primary"
                  type="button"
                  onClick={handleToggleTable}
                >
                  {isTable == true ? (
                    <>
                      <FaList className="size-3" />
                      List
                    </>
                  ) : (
                    <>
                      <FaTable className="size-3" />
                      Table
                    </>
                  )}
                </button>
                <button
                  className="flex items-center gap-2 hover:underline hover:text-primary"
                  type="button"
                  onClick={handleAdd}
                >
                  <FaPlus className="size-3" />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Slider */}
          {isTable == true ? (
            <>
              <TestimonialsTable
                isLoading={isLoading}
                isFetching={isFetching}
                error={error}
                dataTestimonials={dataTestimonials}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </>
          ) : (
            <TestimonialsList
              isLoading={isLoading}
              isFetching={isFetching}
              error={error}
              dataTestimonials={dataTestimonials}
              handleAdd={handleAdd}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </section>

      {isModalTestimonials && (
        <ModalAddTestimonials
          setIsModal={setIsModalTestimonials}
          itemEdit={itemEdit}
        />
      )}

      {isDeleteServices && (
        <ModalDeleteTestimonials
          setModalDelete={setIsDeleteServices}
          mySqlEndpoint={`${apiVersion}/controllers/developer/web-services/web-services.php?id=${itemEdit.testimonials_aid}
        `}
          query="testimonials"
        />
      )}
    </>
  );
};

export default Testimonials;
