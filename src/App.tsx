import { Button, Card, Input, message, Space } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { useState } from 'react';

// import './App.css';


function App() {
    const [messageApi, contextHolder] = message.useMessage();

    const info = () => {
        messageApi.open({content: 'Hello, Ant Design!',
            type: 'info',
            duration: 60}
        );
    };

    const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
    return (
        <Card style={{width: 300}}>
            {contextHolder}
            <Space direction="vertical">
                <Input.Password id={"password"} placeholder="input password"/>
            </Space>
            <Button id={"okButton0"} type="primary" size={size}
                    onClick={info}
            >OK</Button>
        </Card>
    );
}

export default App;
