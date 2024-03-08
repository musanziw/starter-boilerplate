import Topbar from "@/core/utils/Topbar";
import ResetPasswordForm from "./Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starter | Reset password",
};

const ResetPassowrd = () => {
  return (
    <div className={"relative"}>
      <Topbar />
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassowrd;
