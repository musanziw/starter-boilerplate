import Topbar from "@/core/utils/Topbar";
import ResetPasswordRequestForm from "./Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starter | Reset password",
};

const ResetPasswordRequest = () => {
  return (
    <div className={"relative"}>
      <Topbar />
      <ResetPasswordRequestForm />
    </div>
  );
};

export default ResetPasswordRequest;
