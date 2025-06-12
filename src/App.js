import './App.css';
import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './containers/Navbar';
import { IndexPage, RecordPage, ContactPage } from './containers/Sences';
// import { ThirdwebProvider } from "@thirdweb-dev/react";
// import { metamaskWallet } from "@thirdweb-dev/react";

const { Content } = Layout;
const contentStyle = {
  minHeight: '100vh',
  lineHeight: '120px',
}

const searchContentStyle = {
  ...contentStyle,
  minHeight: 'calc(100vh)',
  paddingInline: "5vh",
};

function App() {
  // const metamaskConfig = metamaskWallet();
  return (
    // <ThirdwebProvider activeChain={"goerli"} supportedWallets={[metamaskWallet()]}>
      <div className="App">
        <Layout>
          <BrowserRouter>
            <Navbar />
            <Content style={contentStyle}>
              <Routes>
                <Route path="/" element={<IndexPage />} />
                {/* <Route path="/game" element={<Game />} />
                <Route path="/problem" element={<Problem />} />
                <Route path="/search" element={<Search />} />
                <Route path="/result" element={<Result />} /> */}
                <Route path="/record" element={<RecordPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* <Route path="/foundation" element={<FoundationPage />} /> */}
              </Routes>
            </Content>
          </BrowserRouter>
        </Layout>
      </div>
    // </ThirdwebProvider>
  );
}

export default App;
