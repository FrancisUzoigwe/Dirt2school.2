const AdminHistory = () => {
    return (
      <>
        <div className="flex justify-center items-center w-full ">
          <div className="flex justify-between items-center w-[95%] mt-[14px]">
            <table className="w-full flex justify-between mt-2">
              <table className="block">
                <th>ID</th>
                <tr className="text-[14px] max-sm:text-[10px] font-bold">
                  01234567891011
                </tr>
                <tr className="text-[14px] max-sm:text-[10px] font-bold">
                  Kossyrisochukwu
                </tr>
              </table>
              <table className="block">
                <th>Recipient</th>
                <tr className="text-[14px] max-sm:text-[10px] font-bold">
                  Kossyrisochukwu
                </tr>
                <tr className="text-[14px] max-sm:text-[10px] font-bold">
                  Kossyrisochukwu
                </tr>
              </table>
              <table>
                <th>Email</th>
                <tr className="text-[14px] max-sm:text-[10px] font-bold">
                  kossyuzoigwe@gmail.com
                </tr>
                <tr className="text-[14px] max-sm:text-[10px] font-bold">
                  kossyuzoigwe@gmail.com
                </tr>
              </table>
              <table className="flex items-center flex-col">
                <th>Bags</th>
                <tr className="text-[14px] max-sm:text-[10px] font-bold">2</tr>
                <tr className="text-[14px] max-sm:text-[10px] font-bold">2</tr>
              </table>
              <table className="flex items-center flex-col">
                <th>Amount</th>
                <tr className="text-[14px] max-sm:text-[10px] font-bold">
                  <span className="mr-1 ">₦</span>4,000
                </tr>
                <tr className="text-[14px] max-sm:text-[10px] font-bold">
                  <span className="mr-1 ">₦</span>4,000
                </tr>
              </table>
            </table>
          </div>
        </div>
      </>
    );
  };
  
  export default AdminHistory;