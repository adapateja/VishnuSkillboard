import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Row, Col, Form, Tabs, Input, Button } from "antd";
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions/userAction';
const { TextArea } = Input;
const { TabPane } = Tabs;

const Profile = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [personalInfo, setPersonalInfo] = useState();

    const dispatch = useDispatch()
    function onPersonInfoSubmit(values) {
        setPersonalInfo(values);
        const finalObj = { ...personalInfo, ...values }
        dispatch(updateUser(finalObj))
        setActiveTab("2");
    }

    function allDataFinish(values) {

        const finalObj = { ...personalInfo, ...values }


        dispatch(updateUser(finalObj))

    }
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <DefaultLayout>

            <Tabs defaultActiveKey="1" activeKey={activeTab} >
                <TabPane tab="Personal Info" key="1">
                    <Form layout="vertical" onFinish={onPersonInfoSubmit} initialValues={user}>
                        <Row gutter={16}>
                            <Col lg={8} sm={24}>
                                <Form.Item
                                    label="Full name"
                                    required
                                    rules={[{ required: true }]}
                                    name="fullName"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={8} sm={24}>
                                <Form.Item
                                    label="Register number"
                                    required
                                    rules={[{ required: true }]}
                                    name="registernumber"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={8} sm={24}>
                                <Form.Item
                                    label="Email"
                                    required
                                    rules={[{ required: true }]}
                                    name="email"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={8} sm={24}>
                                <Form.Item
                                    label="Mobile Number"
                                    required
                                    rules={[{ required: true }]}
                                    name="mobileNumber"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                           
                            
                           
                        </Row>
                        <Button htmlType="submit">Next</Button>
                    </Form>
                </TabPane>


                

            </Tabs>
        </DefaultLayout >
    )
}

export default Profile