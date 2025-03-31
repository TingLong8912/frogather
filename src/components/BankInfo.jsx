import React from 'react';
import { Card, Row, Col, Typography, Layout } from 'antd';
import { BankTwoTone } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;

const BankInfo = () => {
    return (
        <div>
            <Layout>
                <Content style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <BankTwoTone twoToneColor='#646D4F' style={{ fontSize: '48px' }} />
                    <Title level={2} style={{ color: '#646D4F', marginBottom: '20px' }}>銀行轉帳捐款</Title>
                    <Card style={{ width: '50%', marginBottom: '20px' }}>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Title level={4}>銀行</Title>
                                <Text>中國信託商業銀行（XX分行）</Text>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Title level={4}>帳號</Title>
                                <Text>1234567890</Text>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Title level={4}>戶名</Title>
                                <Text>臺灣青蛙保育協會</Text>
                            </Col>
                        </Row>
                    </Card>
                    <Paragraph style={{ color: 'red', margin: '0 10%' }}>
                        ※因電匯或ATM捐款方式無法得知您的捐款資料，故請您電匯後務必將匯款資料提供給本會。
                    </Paragraph>
                    <Paragraph style={{ margin: '0 10%' }}>
                        匯款(帳號末五碼、捐款日期、捐款金額)及收據資料(收據抬頭、身份證號或統編、捐款項目單、電話、郵寄地址)
                    </Paragraph>
                </Content>
            </Layout>
        </div >
    );
};

export default BankInfo;
