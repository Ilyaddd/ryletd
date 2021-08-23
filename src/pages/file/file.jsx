import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { Button } from "../../components/button";

import { getFileRequest } from "../../store/files/actions";
import { HOST } from "../../store/endpoints";

import btnImg from "./assets/arrow.svg";
import "./file.sass";

export const File = () => {
    const dispatch = useDispatch();
    const { url } = useParams();
    const [files, setFiles] = useState();

    const { filesList } = useSelector((state) => state.file);

    useEffect(() => {
        dispatch(getFileRequest(url));
    }, []);

    useEffect(() => setFiles(filesList), [filesList]);

    const downloadAllFiles = () => {
        files?.map((file) => {
            window.location = `${HOST}\\files\\${file.url}\\${file.name}`;
            // window.location.replace(
            //     `${HOST}\\files\\${file.url}\\${file.name}`
            // );
        });
    };

    return (
        <>
            <div className="files">
                {files?.map((file, idx) => (
                    <a
                        key={idx.toString()}
                        className="file__item"
                        href={`${HOST}\\files\\${file.url}\\${file.name}`}
                    >
                        {file.name}
                    </a>
                ))}
            </div>

            <Button
                value="Download all"
                activeValue={btnImg}
                onClick={downloadAllFiles}
            />
        </>
    );
};
