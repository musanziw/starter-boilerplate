import useStore from "@/core/hooks/useStore";
import {patch} from "@/core/_requests";
import {useMutate} from "@/core/hooks/useMutate";
import {Label} from "@/core/utils/ui/label";
import Uploader from "@/core/utils/Uploader";
import {Input} from "@/core/utils/ui/input";
import getInputError from "@/core/helpers/getInputError";
import {Button} from "@/core/utils/ui/button";
import {Loader2} from "lucide-react";
import {User} from "@/core/_models";
import Toast from "@/core/utils/Toast";

interface UpdateProfileProps {
    user: User;
}

const UpdateProfile = ({user}: UpdateProfileProps) => {
    const setUser = useStore.use.setUser();

    const modifier = function (payload: { [p: string]: FormDataEntryValue }) {
        delete payload.thumb;
        return payload;
    };

    const onSuccess = async function (data: User | null) {
        setUser(data);
        await Toast("success", "Votre profil a été mis à jour avec succès");
    };

    const {isLoading, mutate, errors} = useMutate(patch, onSuccess, `auth/profile/${user.id}`, modifier);

    return (
        <form onSubmit={mutate}>
            <div className={"flex flex-col gap-6"}>
                <div className="flex flex-col gap-4">
                    <Label htmlFor={"thumb"}>Photo de profile</Label>
                    <Uploader name={"thumb"} path={`users/${user.id}/image`} label={"Ajouter une photo de profile"}/>
                </div>
                <div className="flex flex-col gap-4">
                    <Label htmlFor={"name"}>Nom</Label>
                    <Input name={"name"} placeholder={""} type={"text"} defaultValue={user.name}/>
                </div>
                <div className="flex flex-col gap-4">
                    <Label htmlFor={"address"}>Adresse</Label>
                    <Input name={"address"} placeholder={"Votre ville"} type={"text"}
                           error={getInputError(errors, "address")} defaultValue={user.address}/>
                </div>
                <div className="flex flex-col gap-4">
                    <Label htmlFor={"phoneNumber"}>Téléphone</Label>
                    <Input name={"phoneNumber"} placeholder={"Votre numéro de téléphone"} type={"text"}
                           error={getInputError(errors, "phoneNumber")} defaultValue={user.phoneNumber}/>
                </div>
            </div>
            <Button type={"submit"} disabled={isLoading} className={"mt-5"}>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                        En cours d&apos;enregistrement...
                    </>
                ) : (
                    "Enregistrer les modifications"
                )}
            </Button>
        </form>
    );
}

export default UpdateProfile
