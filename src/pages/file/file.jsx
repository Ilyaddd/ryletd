import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        if (filesList.length) {
            if (filesList.length > 1) {
                return window.location.replace(
                    `${HOST}\\files\\${filesList[0]?.url}`
                );
            }
            window.location.replace(
                `${HOST}\\files\\${filesList[0]?.url}\\${filesList[0]?.name}`
            );
        }
    }, [filesList]);

    useEffect(() => setFiles(filesList), [filesList]);

    const downloadAllFiles = () => {
        window.location.replace(`${HOST}\\files\\${files[0].url}`);
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

// http://localhost:5500\files\rev\Введение в реверсинг с нуля используя IDA PRO. Часть 4 _ WASM.mhtml