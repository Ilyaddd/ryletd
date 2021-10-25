import React from "react";
import { useParams } from "react-router";

export const Custom = () => {
    const { url } = useParams();

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    </head>
    <body>
    </body>
    </html>`;

    document.querySelector("html").innerHTML = html;
    return null
};
