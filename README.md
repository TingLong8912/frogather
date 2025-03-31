# WepAPP-2023-Final-Project
# FroGather

## Introduction
我們希望能同時關注到環境保育以及動物保育兩個指定議題，因此選擇外來種入侵的議題來作為切入點，而在眾多的外來種當中，我們特別選定蛙類外來種作為專案主題的主要原因有三。首先，蛙類的外來種與臺灣本土種非常相似，在外觀上難以辨認，因此需要更進一步的教育宣導與知識補充才能夠讓大眾可以辨別。再者，因其不易造成經濟損失，故未被列入關注對象，但其已嚴重影響本土蛙類的生存空間，值得大眾關注此議題。最後，目前已有之蛙類保育資訊及相關網頁等資源較為零散，因此若我們的專案後續有機會作為整合資源的中心真實上線，能夠對於蛙類保育等領域創造相當地影響力。

## Features
本專案具有以下頁面：Homepage、Gamepage、Searchpage、Recordpage和Foundation Page
### Homepage
解釋到本團體成立願景，提供三個Button將頁面自動滑動到網頁下方指定位置，以展示三類資訊，包含：志工招募、生態保育、其他資訊

### Gamepage、Searchpage
提供教育小遊戲和知識小百科，達成寓教於樂

### Recordpage
提供回報紀錄，展示成列表和地圖畫面，提供志工快速的瀏覽到相關資訊；同時，保留臉書社團的性質，提供使用者能夠輸入貼文和留言，讓網頁更加豐富

### Foundation Page
提供Frogather NFT和轉帳資訊

## How to Start Up
1. 在根目錄底下執行yarn(or npm) install:all
2. 在根目錄底下執行yarn(or npm) start，或cd frontend後yarn(or npm) start，開啟前端
3. 在根目錄底下執行yarn(or npm) server，或cd backend後yarn(or npm) server，開啟後端
  - 本專案後端資料庫用於**mongodb**，在需要copy backend\\.env.defalut 的內容於 backend\\.env 中，輸入自己的mongodb url(環境變數名稱：MONGO_URL)
  - 在backend\\src\\server.js中line 34, 35將註解打開，上傳預設資料進資料庫**僅需上傳一次，上傳後請註解掉**

## File Structure
### FRONTEND
📦src  
 ┣ 📂assets => local data  
 ┃ ┣ 📜frog.json    
 ┃ ┣ ...  
 ┣ 📂axios => 前端向後端拿資料的interface(POST, GET, ...) 
 ┃ ┣ 📜addCommentLikes.js  
 ┃ ┣ 📜createRecord.js  
 ┃ ┣ 📜createRecordComment.js 
 ┃ ┣ 📜getFrog.js   
 ┃ ┣ 📜getRecordComments.js  
 ┃ ┣ 📜getRecords.js  
 ┃ ┣ 📜getReverseGeoding.js  
 ┃ ┗ 📜index.js  
 ┣ 📂components
 ┃ ┣ 📂Layers  
 ┃ ┃ ┣ 📜DrawVectorLayer.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜Layers.js  
 ┃ ┃ ┣ 📜MapboxLayer.js  
 ┃ ┃ ┣ 📜RecordVectorLayer.js  
 ┃ ┃ ┗ 📜VectorLayer.js  
 ┃ ┣ 📂Map  
 ┃ ┃ ┗ 📜Map.js  
 ┃ ┣ 📂Sources  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜vector.js  
 ┃ ┣ 📜ActionButton.jsx  
 ┃ ┣ 📜BankInfo.jsx  
 ┃ ┣ ...
 ┣ 📂containers   
 ┃ ┣ 📂Sence
 ┃ ┃ ┣ 📂Contact  
 ┃ ┃ ┃ ┗ 📜ContactPage.jsx  
 ┃ ┃ ┣ 📂Educate  
 ┃ ┃ ┃ ┣ 📜forg1.jpg
 ┃ ┃ ┃ ┣ 📜frog.jpg
 ┃ ┃ ┃ ┣ 📜frog2.jpg
 ┃ ┃ ┃ ┣ 📜frog3.jpg
 ┃ ┃ ┃ ┣ 📜frog4.jpg
 ┃ ┃ ┃ ┣ 📜Game.jsx
 ┃ ┃ ┃ ┣ 📜Problem.jsx
 ┃ ┃ ┃ ┣ 📜Result.jsx
 ┃ ┃ ┃ ┗ 📜Search.jsx  
 ┃ ┃ ┣ 📂Foundation  
 ┃ ┃ ┃ ┗ 📜FoundationPage.jsx  
 ┃ ┃ ┣ 📂Index  
 ┃ ┃ ┃ ┗ 📜IndexPage.jsx  
 ┃ ┃ ┣ 📂Record  
 ┃ ┃ ┃ ┣ 📂css  
 ┃ ┃ ┃ ┃ ┗ 📜RecordPage.css  
 ┃ ┃ ┃ ┣ 📂Modal  
 ┃ ┃ ┃ ┃ ┣ 📜CommentModal.jsx  
 ┃ ┃ ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┃ ┃ ┗ 📜UpdateRecordModal.jsx  
 ┃ ┃ ┃ ┣ 📜Lists.jsx  
 ┃ ┃ ┃ ┣ 📜MapContainer.jsx  
 ┃ ┃ ┃ ┗ 📜RecordPage.jsx  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┗ 📜Navbar.jsx  
 ┣ 📂graphql 
 ┃ ┗ 📜index.js  
 ┣ 📂hook  => Context  
 ┃ ┗ 📜MapContext.js  
 ┣ 📜App.css  
 ┣ 📜App.js  
 ┣ 📜connection.js => 連接後端  
 ┣ 📜index.css => 整個網站的CSS設定  
 ┗ 📜index.js  

### BACKEND
📦src  
 ┣ 📂controllers   
 ┃ ┣ 📜frog.js  
 ┃ ┣ ...
 ┣ 📂data => local data  
 ┃ ┗ 📜index.js  
 ┣ 📂Frog_NFT => 青蛙NFT的code和圖片（deploy 到 Sepolia 測試鏈，地址 0x35E108AF62bD185793E4a05c110b36ED1C038280）    
 ┣ 📂models => 建立DB Schema   
 ┃ ┣ 📜FrogDB.js  
 ┃ ┣ 📜Record.js  
 ┃ ┣ 📜RecordComments.js  
 ┃ ┗ 📜User.js  
 ┣ 📂public   
 ┃ ┗ 📂assets   
 ┣ 📂routes => 後端接前端的interface  
 ┃ ┣ 📜api.js => 整合這些路徑的檔案  
 ┃ ┣ 📜comments.js  
 ┃ ┣ 📜frog.js  
 ┃ ┣ 📜index.js  
 ┃ ┗ ...
 ┣ 📜.babelrc  
 ┣ 📜db.js => Create db connection  
 ┗ 📜server.js => Create server connection  