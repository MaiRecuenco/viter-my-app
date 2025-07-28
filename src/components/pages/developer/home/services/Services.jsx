import React from "react";
import CardService from "../../../../partials/CardService";
import { apiVersion } from "../../../../helpers/function-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { FaList, FaPlus, FaTable, FaTrash } from "react-icons/fa";
import ModalAddServices from "./ModalAddServices";
import { FaPencil } from "react-icons/fa6";
import ModalDeleteServices from "./ModalDeleteServices";
import ServicesList from "./ServicesList";
import ServicesTable from "./ServicesTable";

const Services = () => {
  const [isModalServices, setIsModalServices] = React.useState(false);
  //delete 1
  const [isDeleteServices, setIsDeleteServices] = React.useState(false);
  //update 3
  const [itemEdit, setItemEdit] = React.useState();
  //delete 8
  const [isTable, setIsTable] = React.useState(false);

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

  console.log(isTable);
  //delete 9
  const handleToggleTable = () => {
    setIsTable(!isTable);
  };
  const handleAdd = () => {
    setItemEdit(null); // update 8
    setIsModalServices(true);
  };

  //delete 2 (next->create 'ModalDeleteServices.jsx in services folder)
  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteServices(true);
  };

  // update 2 - function to handle the edit
  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalServices(true);
  };
  return (
    <>
      <section id="services" className="bg-gray-50 py-12 md:py-20">
        <div className="container">
          <div className="relative w-full">
            <div className="text-center mb-12">
              <h2 className="title">Our Web Services</h2>
              <p>
                Professional solutions tailored to boost your online presence
              </p>
            </div>
            <div className="absolute right-0 top-1/3">
              <div className="flex items-center gap-x-3">
                <button
                  className="flex items-center gap-2 hover:underline hover:text-primary"
                  type="button"
                  onClick={handleToggleTable}
                  //delete 7
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
          {/* 3-column grid */}
          {/* DELETE */}
          {isTable == true ? (
            <>
              <ServicesTable
                isLoading={isLoading}
                isFetching={isFetching}
                error={error}
                dataServices={dataServices}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </>
          ) : (
            <ServicesList
              isLoading={isLoading}
              isFetching={isFetching}
              error={error}
              dataServices={dataServices}
              handleAdd={handleAdd}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </section>
      {/* update 4 - add itemEdit={itemEdit} then go to ModalAddServices*/}
      {isModalServices && (
        <ModalAddServices setIsModal={setIsModalServices} itemEdit={itemEdit} />
      )}
      {/* delete 4 next(->controllers->dev->web-services->web-services.php)*/}
      {isDeleteServices && (
        <ModalDeleteServices
          setModalDelete={setIsDeleteServices}
          mySqlEndpoint={`${apiVersion}/controllers/developer/web-services/web-services.php?id=${itemEdit.web_services_aid}
       `}
          queryKey="web-services"
        />
      )}
    </>
  );
};

export default Services;
