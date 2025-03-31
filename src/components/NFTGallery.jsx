import React from 'react'
import { Image } from 'antd';

const NFTGallery = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "5vh 40vh" }}>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image style={{ borderRadius: '15%', overflow: 'hidden' }} width={250} src={require('../assets/NFT_images/unpack.png')} />
                    </div>
                </Image.PreviewGroup>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <div style={{ width: '400px', backgroundColor: '#ffffff', padding: '2vh 3vh', lineHeight: 2 }}>
                        <p style={{ fontFamily: 'Comic Sans MS' }}>捐助青蛙保育，贊助我們的 Frogatehr NFT！鑄造您的獨特紀念品，支持保護棲息地、教育和研究項目。成為青蛙保護的倡導者，一起為這些可愛的生物創造更好的未來！</p>
                        <p style={{ fontFamily: 'Comic Sans MS' }}>到最大的 NFT 交易平台看看自己的數位收藏品吧！<a href='https://testnets.opensea.io/account' target='_blank'>link</a></p>
                    </div>

                </div>
            </div>



            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", margin: "5vh 35vh", gap: "2vh" }}>
                    <Image style={{ borderRadius: '15%', overflow: 'hidden' }} width={150} src={require('../assets/NFT_images/frog0.png')} />
                    <Image style={{ borderRadius: '15%', overflow: 'hidden' }} width={150} src={require('../assets/NFT_images/frog1.png')} />
                    <Image style={{ borderRadius: '15%', overflow: 'hidden' }} width={150} src={require('../assets/NFT_images/frog2.png')} />
                    <Image style={{ borderRadius: '15%', overflow: 'hidden' }} width={150} src={require('../assets/NFT_images/frog3.png')} />
                    <Image style={{ borderRadius: '15%', overflow: 'hidden' }} width={150} src={require('../assets/NFT_images/frog4.png')} />
                </div>
            </Image.PreviewGroup>
        </div>
    )
}

export default NFTGallery