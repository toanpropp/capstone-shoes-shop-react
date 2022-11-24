import { Button, Radio, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};
export default function Register() {
  const [inValid, setInValid] = useState(true);
  const [gender, setGender] = useState(true);
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    form.validateFields(["nickname"]);
  }, [checkNick, form]);
  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };
  const handleSubmit = async (values) => {
    try {
      values = await form.validateFields();
      const res = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: values,
      });
      message.success(res.data.message);
      values = "";
      navigate("/login");
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
      message.error("Email is registered!");
    }
  };
  return (
    <div className="container register-form">
      <Form
        form={form}
        name="dynamic_rule"
        onFieldsChange={() => {
          let errValid = false;
          for (let errItem of form.getFieldsError()) {
            if (errItem.errors.length > 0) {
              errValid = true;
              break;
            }
          }
          setInValid(errValid);
        }}
      >
        <h3 className="title-register">Register</h3>
        <hr />
        <div className="row">
          <div className="col-6">
            <Form.Item
              {...formItemLayout}
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Email is not valid!",
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                },
              ]}
            >
              <Input placeholder="Please input your email" className="" />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name="password"
              type="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Password is not valid!",
                  pattern:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                },
              ]}
            >
              <Input.Password placeholder="Please input your password" />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name="passwordConfirm"
              label="PasswordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
              ]}
            >
              <Input.Password placeholder="Please input your password" />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item
              {...formItemLayout}
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input placeholder="Please input your name" />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name="phone"
              label="Phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone",
                  pattern: /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/,
                },
              ]}
            >
              <Input placeholder="Please input your phone" />
            </Form.Item>
            <Form.Item name="gender" label="Gender">
              <Radio.Group
                defaultValue={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <Radio value={true}>Male</Radio>
                <Radio value={false}>Female</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item {...formTailLayout} className="button-submit">
              <Button
                type="submit"
                className="btn-submit"
                disabled={inValid}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}
