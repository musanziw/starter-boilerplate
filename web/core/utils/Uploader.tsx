"use client";
import {useState} from "react";
import {FilePond, registerPlugin} from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {apiBaseURL} from "@/core/config/api";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface UploaderProps {
    name: string;
    path: string;
    isMultiple?: boolean;
    label?: string;
}

const Uploader = ({name, path, label, isMultiple = true}: UploaderProps) => {
    const [files, setFiles] = useState<any>([]);

    return (
        <FilePond
            className={"text-white"}
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={isMultiple}
            maxFiles={3}
            server={{
                process: {
                    url: `${apiBaseURL}${path}`,
                    withCredentials: true,
                },
            }}
            name={name}
            labelIdle={label}
        />
    );
}

export default Uploader