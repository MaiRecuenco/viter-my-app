import React from "react";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import CardService from "../../../../partials/CardService";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/NoData";
import ServerError from "../../../../partials/ServerError";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import Loadmore from "../../../../partials/Loadmore";

const ServicesList = ({
  handleAdd,
  handleEdit,
  handleDelete,
  result,
  error,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  status,
  setPage,
  page,
  refVal,
}) => {
  return (
    <>
      <div className="relative">
        {isFetching && status != "pending" && <FetchingSpinner />}
        <div className="min-h-[25.5rem] min-w-full overflow-x-auto gap-10 flex flex-row items-center">
          {(status == "pending" || result?.pages[0].data.length == 0) && (
            <div className="text-center w-full">
              {status == "pending" ? <TableLoading /> : <NoData />}
            </div>
          )}
          {error && (
            <div className="text-center w-full">
              <ServerError />
            </div>
          )}

          {result?.pages.map((page, key) => (
            <React.Fragment key={key}>
              {page?.data.map((item, key) => {
                // console.log(item);
                return (
                  <div key={key} className="relative">
                    <div className="bg-gray-200 min-h-80 min-w-96 rounded-md relative">
                      <div className="p-5 flex flex-col items-center gap-3">
                        {/* IMAGE CONTAINER */}
                        <div className="min-w-10 min-h-10">
                          <img
                            src={item.web_services_image}
                            alt={item.web_services_image}
                          />
                        </div>
                        <div className="text-center">
                          <h4>{item.web_services_name}</h4>
                          <p>{item.web_services_description}</p>
                        </div>
                      </div>
                    </div>
                    {/* ACTIONS */}
                    <div className="-top-5 -right-3 absolute z-10 ">
                      <div className="flex items-center justify-end mr-5 gap-x-3">
                        <button // 1ST STEP
                          type="button"
                          data-tooltip="Edit"
                          className="tooltip"
                          onClick={() => handleEdit(item)}
                        >
                          <FaPencil className="size-4" />
                        </button>
                        <button // 1ST STEP
                          type="button"
                          data-tooltip="Delete"
                          className="tooltip "
                          onClick={() => handleDelete(item)}
                        >
                          <FaTrash className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}

          <div className="place-self-center">
            <Loadmore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={refVal}
            />
          </div>
          {/* <div className="bg-gray-200 min-h-80 min-w-96 rounded-md "></div>
          <div className="bg-gray-200 min-h-80 min-w-96 rounded-md "></div>
          <div className="bg-gray-200 min-h-80 min-w-96 rounded-md "></div>
          <div className="bg-gray-200 min-h-80 min-w-96 rounded-md "></div>
          <div className="bg-gray-200 min-h-80 min-w-96 rounded-md "></div>
          <div className="bg-gray-200 min-h-80 min-w-96 rounded-md "></div> */}
        </div>
      </div>
    </>
  );
};

export default ServicesList;
