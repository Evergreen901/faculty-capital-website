import { useRef, useState } from 'react';
import { MAX_FILE_SIZE } from '../../config/constants';

const UploadButton = ({ className, setFileData, setFileName, ...rest }) => {
    const [status, setStatus] = useState(0); // 0: none, 1: selected, 2: failed
    const inputRef = useRef();

    const fileToDataUri = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                resolve(event.target.result);
            };
            reader.readAsDataURL(file);
        });

    const fileSelected = (e) => {
        const files = e.target.files;
        if (!files.length) return;

        if (files[0].size >= MAX_FILE_SIZE) {
            console.log('Too large file.');
            setStatus(2);
            // toast.error('Too large file.');
            return;
        }

        // let extension = files[0].name.split('.')[1];
        // extension = extension?.toLowerCase();
        // if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
        //     toast.error('Unsupported file is selected.');
        //     return;
        // }
        setFileName(files[0].name);

        fileToDataUri(files[0]).then((dataUri) => {
            setFileData(dataUri);
            setStatus(1);
        });
    };

    return (
        <button
            className={`px-8 md:px-12 py-[12px] rounded-[4px] transition ${className} border-[1px] bg-white ${
                status === 1
                    ? 'bg-gradient-to-l from-cyan-500 to-blue-600 text-white'
                    : status === 2
                    ? 'text-red-500 border-red-500'
                    : ''
            }`}
            onClick={() => inputRef.current.click()}
            {...rest}
        >
            <span className="relative font-semibold">
                {status === 0 ? 'Upload File' : status === 1 ? 'File Uploaded' : 'Upload Error'}
            </span>
            <input type="file" accept="*.*" hidden ref={inputRef} onChange={fileSelected} />
        </button>
    );
};

export default UploadButton;
