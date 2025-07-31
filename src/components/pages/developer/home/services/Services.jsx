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
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../../custom-hooks/queryDataInfinite";
import { InView, useInView } from "react-intersection-observer";

const Services = () => {
  const [isModalServices, setIsModalServices] = React.useState(false);
  //delete 1
  const [isDeleteServices, setIsDeleteServices] = React.useState(false);
  //update 3
  const [itemEdit, setItemEdit] = React.useState();
  //delete 8
  const [isTable, setIsTable] = React.useState(false);

  const [page, setPage] = React.useState(1);
  const { ref, Inview } = useInView();

  // const {
  //   isLoading,
  //   isFetching: isFetchingDataServices,
  //   error: errorDataServices,
  //   data: dataServices,
  // } = useQueryData(
  //   `${apiVersion}/controllers/developer/web-services/web-services.php`,
  //   "get",
  //   "web-services"
  // );

  //Load 5
  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["web-services"],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        ``,
        `${apiVersion}/controllers/developer/web-services/page.php?start=${pageParam}`, //load more and pagination functionalities
        false,
        {},
        "post"
      ),
    getNextPageParam: (lastpage) => {
      if (lastpage.page < lastpage.total) {
        return lastpage.page + lastpage.count;
      }
      return;
    },
  });

  React.useEffect(() => {
    fetchNextPage();
    if (Inview) {
      setPage((prev) => prev + 1);
    }
  }, [Inview]);

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
            //Load 6 ->next(ServicesTable.jsx)
            <>
              <ServicesTable
                // isLoading={isLoading}
                // dataServices={dataServices}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                result={result}
                error={error}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                isFetching={isFetching}
                isFetchingNextPage={isFetchingNextPage}
                status={status}
                setPage={setPage}
                page={page}
                ref={ref}
              />
            </>
          ) : (
            <ServicesList
              // isLoading={isLoading}
              // dataServices={dataServices}
              handleAdd={handleAdd}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              //Load 6
              result={result}
              error={error}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              isFetching={isFetching}
              isFetchingNextPage={isFetchingNextPage}
              status={status}
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
