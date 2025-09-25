import { Link } from "react-router-dom";
import '../Components/StartBtn.css';

const StartBtn = () => {
  return (
    <Link to="/tasks"  className="cta-btn">Try it now...</Link>
  );
};

export default StartBtn