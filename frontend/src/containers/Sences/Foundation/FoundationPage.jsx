import NFTMintButton from "components/NFTMintButton";
import NFTGallery from "components/NFTGallery";
import BankInfo from "components/BankInfo";

const FoundationPage = () => {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", marginBottom: "-2vh"}}>Frogather Blind Box</h1>
      <NFTGallery />
      <NFTMintButton />
      <BankInfo />
    </div>
  );
};

export { FoundationPage }