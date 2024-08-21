import React, { useCallback } from 'react';
import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';
import '../pages/css/MusicUploadModal.css';


interface MusicUploadModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const MusicUploadModal: React.FC<MusicUploadModalProps> = ({ isOpen, onRequestClose }) => {

    //react-Dropzone 사용
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);  // 파일 확인용 콘솔 출력
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: true,
    });

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Music Upload Modal"
            className="modal-content"
            overlayClassName="modal-overlay"
            ariaHideApp={false}  // 경고를 무시하는 방법
        >
            <div className="modal-container">
                <div className="upload-box" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <h2>UPLOAD MEDIA</h2>
                    <p>Drag & Drop Or Browse Files</p>
                </div>
                <div className="json-output">
                    <pre>{`{
    "Title": "Soju",
    "Artist": "GUN",
    "Genre": "Rock",
    "Mood": "Sad",
    "License": "Song: Warriyo - Mortals (Feat. Laura Brehm) [NCS Release]",
    "Music Provided By": "NoCopyrightSounds",
    "Free Download/Stream": "http://ncs.io/Mortals",
    "Watch": "http://youtu.be/YJg-Y5byMMw"
}`}</pre>
                    <pre>{`{
    "Title": "Soju",
    "Artist": "GUN",
    "Genre": "Rock",
    "Mood": "Sad",
    "License": "Song: Warriyo - Mortals (Feat. Laura Brehm) [NCS Release]",
    "Music Provided By": "NoCopyrightSounds",
    "Free Download/Stream": "http://ncs.io/Mortals",
    "Watch": "http://youtu.be/YJg-Y5byMMw"
}`}</pre>

                    <pre>{`{
    "Title": "Soju",
    "Artist": "GUN",
    "Genre": "Rock",
    "Mood": "Sad",
    "License": "Song: Warriyo - Mortals (Feat. Laura Brehm) [NCS Release]",
    "Music Provided By": "NoCopyrightSounds",
    "Free Download/Stream": "http://ncs.io/Mortals",
    "Watch": "http://youtu.be/YJg-Y5byMMw"
}`}</pre>

                    <pre>{`{
    "Title": "Soju",
    "Artist": "GUN",
    "Genre": "Rock",
    "Mood": "Sad",
    "License": "Song: Warriyo - Mortals (Feat. Laura Brehm) [NCS Release]",
    "Music Provided By": "NoCopyrightSounds",
    "Free Download/Stream": "http://ncs.io/Mortals",
    "Watch": "http://youtu.be/YJg-Y5byMMw"
}`}</pre>
                </div>
                <button className="upload-button" onClick={onRequestClose}>UPLOAD</button>
            </div>
        </Modal>
    );
};

export default MusicUploadModal;

