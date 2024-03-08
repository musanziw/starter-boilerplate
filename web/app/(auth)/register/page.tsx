import Topbar from "@/core/utils/Topbar";
import type { Metadata } from "next";
import { Form } from "./Form";

export const metadata: Metadata = {
  title: "Fikiri | Register",
};

export default function Register() {
  return (
    <div className={"relative"}>
      <Topbar />
      <Form />
    </div>
  );
}
