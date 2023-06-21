import Image from "next/image";
import WfImage from "../../public/images/WF.jpg";

const Dashboard = () => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>img タグで表示した場合</p>
      <img src="/images/WF.jpg" />
      <p>Image コンポーネントで表示した場合</p>
      <Image src={WfImage} alt="water finger" />
      <p>事前にエリアが確保されます。</p>
    </div>
  );
};

export default Dashboard;
