import React, { useState } from 'react'
import { Button, Space, InputNumber } from 'antd';
import { PlusOutlined, MinusOutlined, HeartTwoTone } from '@ant-design/icons';
import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";



const NFTMintButton = () => {
    const [mintCount, setMintCount] = useState(1);

    const handleIncrease = () => {
        if (mintCount < 5) {
            setMintCount(prevCount => prevCount + 1);
        }
    };

    const handleDecrease = () => {
        if (mintCount > 1) {
            setMintCount(prevCount => prevCount - 1);
        }
    }
    const handleInputChange = (value) => {
        if (value >= 1) {
            setMintCount(value);
        }
    };
    const NFTMintButtonStyle = {
        display: 'flex',
        justifyContent: 'center',
    }

    return (

        <div style={NFTMintButtonStyle}>
            <Space wrap>
                <Web3Button
                    className="nft-mint-button"
                    contractAddress="0x594890f2fE1CbD220756f3a7f98406365858058d"
                    action={async (contract) => {
                        console.log("mintCount: ", mintCount)
                        console.log("typeof mintCount: ", typeof mintCount)
                        await contract.call("mint", [mintCount], { value: ethers.utils.parseEther("0.005").mul(mintCount) });
                    }}
                    onSuccess={(result) => alert("Mint NFT Success!")}
                    onError={(error) => {
                        alert("Something went wrong!")
                        console.log(error)
                    }}
                    onSubmit={() => console.log("Transaction submitted")}
                    style={{ backgroundColor: '#DDE1A0', borderColor: '#DDE1A0', fontFamily: 'Comic Sans MS' }}
                >
                    Mint NFT!
                </Web3Button>
                <Button onClick={handleDecrease}><MinusOutlined /></Button>
                <InputNumber className="nft-mint-input" prefix={<HeartTwoTone twoToneColor='#FB7DA7' />} min={1} max={5} value={mintCount} onChange={handleInputChange} />
                <Button onClick={handleIncrease}><PlusOutlined /></Button>
            </Space>
            <style jsx>{`
                .nft-mint-input .ant-input-number-input {
                    text-align: center !important;
                }
            `}</style>
        </div>
    )
}
export default NFTMintButton;
