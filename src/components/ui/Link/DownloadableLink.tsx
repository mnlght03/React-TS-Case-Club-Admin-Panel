import React from 'react';
import axios from "axios";
import {
    ReactComponent as IconDownload
} from '../../../assets/icons/icon-download.svg';
import stripUUID from "../../../util/stripUUID.ts";

function DownloadableLink({fileUrl}) {
    const downloadFile = async () => {
        try {
            const fileResponse = await axios
                .get(`${import.meta.env.VITE_API_BASE}img/${fileUrl}`, {
                    responseType: 'blob',
                    timeout: 30000,
                })

            const tmpLink = document.createElement('a');
            tmpLink.href = URL.createObjectURL(fileResponse.data);
            tmpLink.download = stripUUID(fileUrl);
            tmpLink.click();
            tmpLink.remove();
        } catch(e) {
            console.log(e);
        }
    }

    const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        await downloadFile();
    }

    return (
        <>
            <a
                className="text-blue cursor-pointer"
                href={`${import.meta.env.VITE_API_BASE}img/${fileUrl}`}
                onClick={handleDownload}
            >{stripUUID(fileUrl)}</a>
            <IconDownload
                className="inline ml-4"
                style={{
                    minWidth: '20px',
                    minHeight: '20px',
                }}
            />
        </>
    );
}

export default DownloadableLink;