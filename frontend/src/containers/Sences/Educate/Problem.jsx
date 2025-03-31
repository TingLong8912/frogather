import { ProblemCard } from 'components/ProblemCard';
import styled from 'styled-components';
import {  Button, Tooltip, message} from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const ProblemCardRow = styled.div`
  display: flex;
  justifyContent: space-between;
  gap: 2.5rem;
  padding: 8rem 4rem;
  height: 80vh;
`;

const easy = [
    {
      key: 'name',
      label: '海蟾蜍',
      value: "海蟾蜍",
    },
    {
      key: 'img',
      label: 'a',
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bufo_marinus_from_Australia.JPG/1024px-Bufo_marinus_from_Australia.JPG",
    },
    {
      key: 'descriptions',
      label: '又名美洲巨蟾蜍、甘蔗蟾蜍、蔗蟾蜍或蔗蟾，是原產於中美洲及南美洲一種熱帶地區陸生的蟾蜍，後來被引入澳洲，廣泛的分佈在澳洲大陸的東海岸和北部地區。牠們的繁殖能力很強，一次就可以產達幾千顆卵。海蟾蜍有毒腺，蝌蚪對於大部份動物也是有具有劇毒的。牠們被引入到多個國家來控制害蟲，不過由於沒有天敵反而成為了害蟲及入侵物種。國際自然保護聯盟物種存續委員會的入侵物種專家小組（ISSG）列為世界百大外來入侵種。',
      value: "又名美洲巨蟾蜍、甘蔗蟾蜍、蔗蟾蜍或蔗蟾，是原產於中美洲及南美洲一種熱帶地區陸生的蟾蜍，後來被引入澳洲，廣泛的分佈在澳洲大陸的東海岸和北部地區。牠們的繁殖能力很強，一次就可以產達幾千顆卵。海蟾蜍有毒腺，蝌蚪對於大部份動物也是有具有劇毒的。牠們被引入到多個國家來控制害蟲，不過由於沒有天敵反而成為了害蟲及入侵物種。國際自然保護聯盟物種存續委員會的入侵物種專家小組（ISSG）列為世界百大外來入侵種。",
    },
  ]
  const middle = [
    {
      key: 'name',
      label: '斑腿樹蛙',
      value: "斑腿樹蛙",
    },
    {
      key: 'img',
      label: 'b',
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Brown_Tree_Frog_%28Polypedates_megacephalus%29_%E6%96%91%E8%85%BF%E6%B3%9B%E6%A8%B9%E8%9B%99_in_Amplexus2.jpg/375px-Brown_Tree_Frog_%28Polypedates_megacephalus%29_%E6%96%91%E8%85%BF%E6%B3%9B%E6%A8%B9%E8%9B%99_in_Amplexus2.jpg",
    },
    {
      key: 'descriptions',
      label: '斑腿樹蛙（學名：Polypedates megacephalus），又稱為斑腿泛樹蛙、大頭斑樹蛙、大頭斑腿泛樹蛙等。模式標本來自香港。與布氏樹蛙相似，不易區分。中型蛙種，雄蛙約50公釐，體型略大的雌蛙可達70公釐。背腹扁平，呈淺褐色，體色可稍為改變以配合周圍環境，皮膚光滑，有零星小疣粒，背部或有交叉形花紋。大眼睛，鼓膜明顯，後肢有半蹼，趾端吸盤發達，被捕捉或受驚時會即時排尿。',
      value: "斑腿樹蛙（學名：Polypedates megacephalus），又稱為斑腿泛樹蛙、大頭斑樹蛙、大頭斑腿泛樹蛙等。模式標本來自香港。與布氏樹蛙相似，不易區分。中型蛙種，雄蛙約50公釐，體型略大的雌蛙可達70公釐。背腹扁平，呈淺褐色，體色可稍為改變以配合周圍環境，皮膚光滑，有零星小疣粒，背部或有交叉形花紋。大眼睛，鼓膜明顯，後肢有半蹼，趾端吸盤發達，被捕捉或受驚時會即時排尿。",
    },
  ]
  const difficult = [
    {
      key: 'name',
      label: '亞洲錦蛙',
      value: "亞洲錦蛙",
    },
    {
      key: 'img',
      label: 'c',
      value: "https://images.chinatimes.com/newsphoto/2020-05-22/656/20200522003151.jpg",
    },
    {
      key: 'descriptions',
      label: '又名花狹口蛙，為狹口蛙科狹口蛙屬的兩棲動物。分布範圍從緬甸，泰國，寮國，柬埔寨和越南，南部向馬來半島，印尼的蘇門答臘、婆羅洲(坤甸)， 蘇拉威西島 (錫江、帕盧 和弗洛勒斯島)和刁曼島、布吉島、蘭卡威 和新加坡。 印度東北部(西孟加拉邦西部和阿薩姆)和孟加拉國。 在中國大陸，分布於福建、廣東、廣西、海南、雲南等地。該物種的模式產地在中國。本種亦被引進至台灣。背部有黃色紋路，體長7-8厘米，壽命可達10年。',
      value: "又名花狹口蛙，為狹口蛙科狹口蛙屬的兩棲動物。分布範圍從緬甸，泰國，寮國，柬埔寨和越南，南部向馬來半島，印尼的蘇門答臘、婆羅洲(坤甸)， 蘇拉威西島 (錫江、帕盧 和弗洛勒斯島)和刁曼島、布吉島、蘭卡威 和新加坡。 印度東北部(西孟加拉邦西部和阿薩姆)和孟加拉國。 在中國大陸，分布於福建、廣東、廣西、海南、雲南等地。該物種的模式產地在中國。本種亦被引進至台灣。背部有黃色紋路，體長7-8厘米，壽命可達10年。",
    },
  ]


const Problem = () => {
    const [ hashtagTypes, setHashtagTypes ] = useState([]);
    const navigate = useNavigate();
    const [flipped, setFlipped] = useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const location = useLocation();
    const problemtype = location.state && location.state.hashtagTypes ? location.state.hashtagTypes : [];

    const handleHashtage = (index) => {
        if (hashtagTypes.includes(index)) {
            setHashtagTypes(hashtagTypes.filter(item => item !== index));
          } 
        else {
            setHashtagTypes([index]);
          }
    };
    const backClick = () => {
        navigate('/game');
    };
    
    const ansClick = async () => {
        setFlipped(!flipped);
    };
    
    const submitClick = () => {
      if (!isButtonClicked && hashtagTypes.length === 1) {
        setFlipped(false);
        setIsButtonClicked(true);
      }
      else if (hashtagTypes.length === 0) {
            message.error("請選擇一個答案");
      }
    };
    const handleproblem = () => {
        let problemtext = null; 
        if (problemtype.includes(1)) {
            problemtext = easy
          } 
        else if (problemtype.includes(2)) {
            problemtext = middle
          } 
        else {
            problemtext = difficult
          }
        return problemtext;
    };
      
    const problemtext = handleproblem();
    return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", marginBottom: '-20vh'}}>以下何者為外來種?</h1>
            <ProblemCardRow>
                <ProblemCard
                className={(hashtagTypes.includes(1))? "active": ""}
                onClick={() => handleHashtage(1)}
                photo={problemtext.find(item => item.key === 'img').value}
                problemtext={problemtext.find(item => item.key === 'name').value}
                answertext={problemtext.find(item => item.key === 'descriptions').value}
                flipped={flipped}
                ans={true}
                />
                <ProblemCard
                className={(hashtagTypes.includes(2))? "active": ""}
                onClick={() => handleHashtage(2)}
                photo={require("./forg1.jpg")}
                problemtext={"巴氏小雨蛙"}
                answertext={"又名粗皮姬蛙，為狹口蛙科姬蛙屬的兩棲動物，體型屬小型，雄蛙體長約2公分，雌蛙約2至2.5公分左右，叫聲與鴨相像，外表特徵有皮膚上有許多的小疣粒，看起來十分粗糙，背部有塊深色鑲淺色邊的花紋。身體兩側都有一行黑色斑點，和背部大塊花斑平行。吻端尖圓，身體略呈現三角形。後腿有暗色橫紋。"}
                flipped={flipped}
                ans={false}
                />
                <ProblemCard
                className={(hashtagTypes.includes(3))? "active": ""}
                onClick={() => handleHashtage(3)}
                photo={require("./frog2.jpg")}
                problemtext={"盤古蟾蜍"}
                answertext={"又名台灣蟾蜍、癩蝦蟆，為特有種，廣泛分布於全省各地，海拔高度可達3000m。經常出現在陸地較開闊的地方，繁殖期時才會遷移到溪流或靜水池。雄蟾沒有鳴囊不會發出叫聲，只有在被其他雄蟾誤抱時，才會發出「勾、勾、勾」釋放叫聲。而在遭受攻擊時，常會本能地鼓起胸部撐起四肢，裝出雄壯威武的模樣，並發出聲音，這是牠們的防衛姿勢。如果恐嚇無效，牠們會馬上爬走或者攤在地上裝死，最後才會從耳後腺噴出毒液。"}
                flipped={flipped}
                ans={false}
                />
            </ProblemCardRow>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "0 50vh"}}>
                <Tooltip title="點擊提交答案" >
                    <Button type="primary"  onClick={submitClick} style={{width: "64px", height: "30px"}}>
                        提交
                    </Button>
                </Tooltip>
                <Tooltip title={flipped ? '點擊查看解答' : '點擊查看題目'} >
                    <Button type="primary" onClick={ansClick} style={{width: "64px", height: "30px"}}>
                    {flipped ? '解答' : '題目'}
                    </Button>
                </Tooltip>
                <Tooltip title="點擊退出遊戲" >
                    <Button type="primary" onClick={backClick} style={{width: "64px", height: "30px"}}>
                        退出
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
  };
  
  export { Problem }