import React from "react";

const ContactList = ({
  isLoading,
  isFetching,
  error,
  dataContact,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <div className="contact bg-gray-50 rounded-xl p-8 h-fit md:w-1/2">
        {dataContact?.data.map((item, key) => {
          return <div key={key} className="relative"></div>;
        })}
      </div>
    </>
  );
};

export default ContactList;
