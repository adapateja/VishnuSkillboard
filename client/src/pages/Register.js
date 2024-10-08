import React from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userAction";
import { Link } from "react-router-dom";
// import AOS from 'aos';
// ..
// AOS.init();
function Register() {
    const dispatch = useDispatch()
    function register(values) {

        if (values.password !== values.confirmpassword) {
            message.error('passwords not matched')
        } else {
            dispatch(registerUser(values))
        }

    }

    return (
        <div className="register">
            <Row justify="center" className='flex align-items-center'>
            <Col lg={10} sm={24} className="text-center">
                    <div className="heading-container">
                        <h1 className="heading1" data-aos='slide-left'>Vishnu</h1>
                        <h1 className="heading2" data-aos='slide-right'>Skillboard</h1>
                    </div>
                </Col>

                <Col lg={10} sm={24} className="bs p-5 register-form">
                    <h3>Register</h3>
                    <hr />
                    <Form layout="vertical" onFinish={register}>
                        <Form.Item
                            label="username"
                            name="username"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="password"
                            name="password"
                            rules={[{ required: true }]}
                        >
                            <Input type="password" />
                        </Form.Item>

                        <Form.Item
                            label="confirm password"
                            name="confirmpassword"
                            rules={[{ required: true }]}
                        >
                            <Input type="password" />
                        </Form.Item>

                        <Button htmlType="submit" className='mb-3' >Register</Button> <br />

                        <Link to='/login' className='mt-3'>Already registered ? , Click here to login</Link>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Register;
