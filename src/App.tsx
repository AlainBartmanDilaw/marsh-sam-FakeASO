import { Button, Card, Input, message, Radio, RadioChangeEvent, Space } from 'antd';
import React, { useState } from 'react';
import './App.css';

function App() {

    const queryParameters = new URLSearchParams(window.location.search)
    const file = queryParameters.get("file") ?? ""

    const [ messageApi, contextHolder ] = message.useMessage();

    const info = () => {
        if (passwordValue !== "Marsh2023") {
            messageApi.open({
                    content: 'Incorrect password!',
                    type: 'error',
                    duration: 10
                }
            );
        } else {

            messageApi.open({
                content: 'Wait for 5 seconds!',
                type: 'loading',
                duration: 5
            });
            setTimeout(function () {
                setCache("false");
            }, 5000);

        }
    };

    // const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
    const [ passwordValue, setPassword ] = useState("");
    const [ cache, setCache ] = useState("Hidden");
    const [ linkCache, setLinkCache ] = useState("Hidden");
    const [ show, setShow ] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 5000)

        return () => clearTimeout(timeout)

    }, [ show ]);

    const [ value, setValue ] = useState(1);
    const onChangeRadio = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    function clearClick() {

    }

    const applyClick = () => {
        messageApi.open({
            content: 'Wait for 3 seconds!',
            type: 'loading',
            duration: 3
        });
        setTimeout(function () {
            setLinkCache("false");
        }, 3000);
    }

    if (file === "") {
        return <body>
        <h1>Paramètre manquant : file</h1>
        <h2>Exemple d'adresse <a
            href={"http://localhost:3001/?file=file11007.csv"}>http://localhost:3001/?file=file11007.csv</a>
        </h2>
        </body>
    } else {

        return <Card style={{width: 600}}>
            {contextHolder}
            <Space direction={"horizontal"}>

                <Space direction="vertical">
                    <Input.Password id={"password"} placeholder="input password"
                                    onChange={(e) => setPassword(e.target.value)}/>
                    <Button id={"okButton"} type="primary"
                            onClick={info}>OK</Button>
                </Space>

                <Space direction={"vertical"} className={cache}>
                    Select Dates
                    <Radio.Group onChange={onChangeRadio} value={value}>
                        <Radio value={1}>All</Radio>
                        <Radio value={2}>Custom</Radio>
                    </Radio.Group>
                    <Space direction={"horizontal"}>
                        <Button id={"clearButton"} type="primary" onClick={clearClick}>Clear</Button>
                        <Button id={"applyButton"} type="primary" onClick={applyClick}>Apply</Button>
                    </Space>
                </Space>
                <a id="download-Link" className={linkCache} href={file} target={"_blank"} rel={"noreferrer"} download>
                    Mon fichier = {file}
                </a>
                <Space>

                </Space>

            </Space>
        </Card>;
    }

}

export default App;
