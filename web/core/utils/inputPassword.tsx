import {Input} from "@/core/utils/ui/input";
import {Eye, EyeOff} from "lucide-react";
import React, {useState} from "react";

interface IProps {
    name: string;
    placeholder?: string;
    error?: string;
}

const InputPassword = ({name, placeholder = "Entrez votre mot de passe", error = ""}: IProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const tooglePassword = () => setShowPassword(!showPassword);
    return (
        <div className={"relative"}>
            <Input name={name} type={showPassword ? "text" : "password"} placeholder={placeholder} required={true}
                   autoFocus error={error}/>
            <div className={"absolute top-3 right-4 cursor-pointer"}>
                {
                    showPassword ? <EyeOff className={"w-4 h-4"} onClick={tooglePassword}/> :
                        <Eye className={"w-4 h-4"} onClick={tooglePassword}/>
                }
            </div>
        </div>
    );
}

export default InputPassword
