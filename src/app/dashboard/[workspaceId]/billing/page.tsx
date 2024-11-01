import { getPaymentInfo } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Download, Plus, X } from "lucide-react";
import React from "react";

type Props = {};

const BillingPage = async (props: Props) => {
  const payment = await getPaymentInfo();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col w-full gap-y-4 justify-start">
        <div className="bg-[#1D1D1D] flex flex-col gap-y-8 p-5 rounded-xl relative">
          <div className="flex items-center w-full gap-2 justify-between flex-wrap">
            <div>
              <h2 className="text-2xl">Current Plan</h2>
              <p className="text-[#9D9D9D]">Your current plan</p>
            </div>
            <Button
              className="flex items-center right-1 top-3 p-3"
              variant="secondary"
              size="lg"
            >
              <X color="#9D9D9D" size={30} />
              <span className="text-[#9D9D9D] ">Cancel Your Plan</span>
            </Button>
          </div>
          <div>
            <h2 className="text-2xl">
              ${payment?.data?.subscription?.plan === "PRO" ? "99" : "0"}/Month
            </h2>
            <p className="text-[#9D9D9D]">
              {payment?.data?.subscription?.plan}
            </p>
          </div>
        </div>
        <div className="bg-[#1D1D1D] flex flex-col gap-y-8 p-5 rounded-xl relative">
          <div className="flex items-center w-full gap-2 justify-between flex-wrap">
            <div>
              <h2 className="text-2xl">Payment Method</h2>
              <p className="text-[#9D9D9D]">Your current payment method</p>
            </div>
            <Button
              className="flex items-center right-1 top-3 p-3"
              variant="secondary"
              size="lg"
            >
              <Plus color="#9D9D9D" size={30} />
              <span className="text-[#9D9D9D] ">Add New</span>
            </Button>
          </div>
          <div>
            <h2 className="text-2xl">
              ${payment?.data?.subscription?.plan === "PRO" ? "99" : "0"}/Month
            </h2>
            <p className="text-[#9D9D9D]">
              {payment?.data?.subscription?.plan}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1D1D1D] flex flex-col  gap-y-8 p-5 rounded-xl relative w-full">
        <div className="flex items-center w-full gap-2 justify-between flex-wrap">
          <div>
            <h2 className="text-2xl">Payment History</h2>
            <p className="text-[#9D9D9D]">Your payment history</p>
          </div>
          <Button
            className="flex items-center right-1 top-3 p-3"
            variant="secondary"
            size="lg"
          >
            <Download color="#9D9D9D" size={30} />
            <span className="text-[#9D9D9D] ">Download PDF</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
