import { ThreeCircles } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-fit mx-auto">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#a62626"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
