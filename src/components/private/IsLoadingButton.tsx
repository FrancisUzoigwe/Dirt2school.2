import { ThreeDots } from "react-loader-spinner";

const IsLoadingButton = () => {
  return (
    <div className="flex items-center justify-center px-7 h-full rounded-md  ">
      <ThreeDots
        visible={true}
        height="25"
        width="25"
        color="#0f640e"
        radius="5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default IsLoadingButton;
