import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router";

import { Button } from "../../components/button";

import { getFileRequest } from "../../store/files/actions";
import { HOST } from "../../store/endpoints";

import btnImg from "./assets/arrow.svg";
import "./file.sass";

export const File = () => {
    const dispatch = useDispatch();
    const { url } = useParams();
    const [files, setFiles] = useState();

    const { filesList, isError } = useSelector((state) => state.file);

    useEffect(() => dispatch(getFileRequest(url)), [dispatch, url]);

    useEffect(() => {
        if (filesList.files?.length) {
            if (filesList.files?.length > 1) {
                return window.location.replace(
                    `${HOST}\\files\\${filesList.files[0]?.url}`
                );
            }
            window.location.replace(
                `${HOST}\\files\\${filesList?.files[0]?.url}\\${filesList?.files[0]?.name}`
            );
        }
    }, [filesList]);

    useEffect(() => setFiles(filesList.files), [filesList]);

    const downloadAllFiles = () =>
        window.location.replace(`${HOST}\\files\\${files[0].url}`);

    return (
        <>
            {isError ? (
                <Redirect to="/" />
            ) : (
                <>
                    <div className="files">
                        {files?.map((file) => (
                            <a
                                key={file.id}
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
            )}
        </>
    );
};
