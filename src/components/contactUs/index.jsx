/* eslint-disable no-unused-vars */
import { Input } from "components/fields";
import Title from "components/ui/title"
import { Field } from "formik";
import { ContainerForm } from "modules";
import woman from 'assets/images/womanFooter.png'
import leftBladder from "assets/images/OurServicesLeftBladder.png";
import rightBladder from "assets/images/OurServicesRightBladder.png";
import CustomInputMask from "components/fields/inputMask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  return (
    <div className="contact-bg">
      <ToastContainer />
      <div className="container">
        <div className="contact-us">
          <Title text={"Свяжитесь с нами"} />
          <div className="contact-us_flex">
            <div className="flex_left">
              <ContainerForm
                fields={[
                  {
                    name: "name",
                    required: true,
                  },
                  {
                    name: "surname",
                    required: true,
                  },
                  {
                    name: "phone_num",
                    required: true,
                  },
                ]}
                method="post"
                url="https://api.sheetmonkey.io/form/qoGyXJRiyWPpSVHBWFkeza"
                onSuccess={(data, resetForm) => {
                  console.log("successful");
                  resetForm();
                  toast.success("Successful");
                }}
                onError={(error) => {
                  toast.error(error?.message);
                }}
              >
                {({ handleSubmit, isLoading }) => {
                  return (
                    <div className="contact-us__form">
                      <div className="form__left-bladder">
                        <img src={leftBladder} alt="" />
                      </div>
                      <Field
                        name="name"
                        label={"Имя*"}
                        placeholder={"Имя"}
                        component={Input}
                      />
                      <Field
                        name="surname"
                        label={"Фамилия*"}
                        placeholder={"Фамилия"}
                        component={Input}
                      />
                      {/* <Field
                        name="phone_num"
                        label={"Телефонный номер*"}
                        component={Input}
                      /> */}
                      <Field
                        mask="(99) 999 - 99 - 99"
                        name="phone_num"
                        label={"Телефонный номер*"}
                        placeholder="(90) 177 - 77 - 77"
                        wrapperClassName="input-mask"
                        component={CustomInputMask}
                      />
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        style={isLoading ? { background: "gray" } : {}}
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading" : "Отправить заявку"}
                      </button>
                    </div>
                  );
                }}
              </ContainerForm>
            </div>
            <div className="flex_right">
              <div className="flex_right__left-bladder">
                <img src={leftBladder} alt="img" />
              </div>
              <div className="flex_right__right-bladder">
                <img src={rightBladder} alt="img" />
              </div>
              <img src={woman} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs