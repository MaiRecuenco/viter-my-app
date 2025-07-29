import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryData } from "../../../../custom-hooks/queryData";
import { apiVersion } from "../../../../helpers/function-general";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import * as Yup from "yup";

const AddContact = (setIsAdd) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `${apiVersion}/controllers/developer/contact/contact.php`,
        "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contact"] });
      if (!data.success) {
        alert(data.error);
      } else {
        alert(`Successfully created.`);
        setIsAdd(false);
      }
    },
  });

  const initVal = {
    contact_fullname: "",
    contact_email: "",
    contact_message: "",
  };

  const yupSchema = Yup.object({
    contact_fullname: Yup.string().required("required"),
    contact_email: Yup.string().required("required"),
    contact_message: Yup.string().required("required"),
  });
  return (
    <>
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
            <Form className="contact bg-gray-50 rounded-xl p-8 h-fit md:w-1/2">
              {/* Forms */}
              <div>
                <div className="relative">
                  <InputText
                    label="Full Name"
                    name="contact_fullname"
                    type="text"
                  />
                </div>
                <div className="relative">
                  <InputText
                    label="Email Address"
                    name="contact_email"
                    type="text"
                  />
                </div>
                <div className="relative">
                  <InputTextArea
                    label="Your Message"
                    name="contact_message"
                    type="text"
                  />
                </div>
              </div>
              {/* Actions */}
              <button
                type="submit"
                disabled={mutation.isPending}
                className="btn btn--blue w-full"
              >
                {mutation.isPending ? "Loading..." : "Send Message"}
              </button>
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
    </>
  );
};

export default AddContact;
