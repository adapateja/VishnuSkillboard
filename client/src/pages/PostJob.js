import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { postJob } from "../redux/actions/jobActions";
const { TextArea } = Input;
const { TabPane } = Tabs;



function PostJob() {
    const [jobInfo, setJobInfo] = useState({});
    const [activeTab, setActiveTab] = useState("0");
    const dispatch = useDispatch()
    function onFirstFormFinish(values) {
        setJobInfo(values);
        const finalObj = { ...jobInfo, ...values };
        dispatch(postJob(finalObj))
        setActiveTab("1");
    }
    function onFinalFormFinish(values) {
        const finalObj = { ...jobInfo, ...values };
        dispatch(postJob(finalObj))
    }


    return (
        <div>
            <DefaultLayout>
                <Tabs defaultActiveKey="0" activeKey={activeTab}>
                    <TabPane tab="Job Info" key="0">
                        <Form layout="vertical" onFinish={onFirstFormFinish}>
                            <Row gutter={16}>
                                <Col lg={8} sm={24}>
                                    <Form.Item
                                        name="title"
                                        rules={[{ required: true }]}
                                        label="Title"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>

                                
                                <Col lg={8} sm={24}>
                                    <Form.Item
                                        name="applicableyear"
                                        rules={[{ required: true }]}
                                        label="Applicable Year"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <Form.Item
                                        name="lastdatetoapply"
                                        rules={[{ required: true }]}
                                        label="Last Date To Apply"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>

                                
                            </Row>

                            <Row gutter={16}>
                                
                                <Col lg={24} sm={24}>
                                    <Form.Item
                                        name="linktoapply"
                                        rules={[{ required: true }]}
                                        label="Link To Apply"
                                    >
                                        <TextArea rows={3} />
                                    </Form.Item>
                                </Col>

                                <Col lg={24} sm={24}>
                                    <Form.Item
                                        name="fullDescription"
                                        rules={[{ required: true }]}
                                        label="Full description"
                                    >
                                        <TextArea rows={6} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Button htmlType="submit">Next</Button>
                        </Form>
                    </TabPane>
                    
                </Tabs>
            </DefaultLayout>
        </div>
    );
}



export default PostJob;
