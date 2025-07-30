import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryData } from "../../../../custom-hooks/queryData";
import { apiVersion } from "../../../../helpers/function-general";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import * as Yup from "yup";
import ModalWrapper from "../../../../partials/modal/ModalWrapper";
import { FaTimes } from "react-icons/fa";

const ModalAddContact = ({ setIsAdd, itemEdit }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/controllers/developer/contact/contact.php?id=${itemEdit.contact_aid}`
          : `${apiVersion}/controllers/developer/contact/contact.php`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contact"] });
      if (!data.success) {
        alert(data.error);
      } else {
        alert(`Successfully edited message.`);
        setIsAdd(false);
      }
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return; // dont close while query is ongoing
    setAnimate("translate-x-full"); //animate close of modal
    setTimeout(() => {
      setIsAdd(false); //close upon animation exit
    }, 200);
  };

  const initVal = {
    contact_fullname: itemEdit ? itemEdit.contact_fullname : "",
    contact_email: itemEdit ? itemEdit.contact_email : "",
    contact_message: itemEdit ? itemEdit.contact_message : "",

    contact_email_old: itemEdit ? itemEdit.contact_email : "",
  };

  const yupSchema = Yup.object({
    contact_fullname: Yup.string().required("required"),
    contact_email: Yup.string().required("required"),
    contact_message: Yup.string().required(""),
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);
  return (
    <ModalWrapper className={`${animate}`} handleClose={handleClose}>
      <div className="modal_header relative mb-4">
        <h3 className="text-sm">{itemEdit ? "Edit" : "Add"} Contact</h3>
        <button
          className="absolute  top-0.5 right-0"
          type="button"
          onClick={handleClose}
        >
          <FaTimes className="size-4" />
        </button>
      </div>
      <div className="modal_body overflow-y-auto overflow-x-hidden max-h-[calc(100dvh-40px)]">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log(values);
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form>
                {/* Forms */}
                <div className="modal-overflow mt-3">
                  <div className="relative">
                    <InputText
                      label="Full Name"
                      name="contact_fullname"
                      type="text"
                      className="relative mt-3 mb-5"
                    />
                  </div>
                  <div className="relative">
                    <InputText
                      label="Email Address"
                      name="contact_email"
                      type="text"
                      className="relative mt-3 mb-5"
                    />
                  </div>
                  <div className="relative">
                    <InputTextArea
                      label="Your Message"
                      name="contact_message"
                      type="text"
                      className="relative mt-3 mb-5"
                    />
                  </div>
                </div>
                {/* Actions */}
                <div className="modal__action flex justify-end absolute bottom-0 w-full mt-6 mb-4 gap-2 left-0 px-6">
                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="btn btn--blue w-full"
                  >
                    {mutation.isPending ? "Loading..." : "Save"}
                  </button>
                  <button
                    type="reset"
                    disabled={mutation.isPending}
                    className="btn-modal-cancel"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            );
          }}
          {/*  <form className="contact bg-gray-50 rounded-xl p-8 h-fit md:w-1/2">
              <div className="relative">
                <label>Full Name</label>
                <input type="text" />
              </div>
              <div className="relative">
                <label>Email Address</label>
                <input type="text" />
              </div>
              <div className="relative">
                <label className="top-1">Your Message</label>
                <textarea rows="4"></textarea>
              </div>
              <button className="btn btn--blue w-full">Send Message</button>
            </form> */}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddContact;
