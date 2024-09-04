import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';
import '../pages/css/MusicUploadModal.css';

interface MusicUploadModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const MusicUploadModal: React.FC<MusicUploadModalProps> = ({ isOpen, onRequestClose }) => {
    const [fileContents, setFileContents] = useState<string[]>([]);

    // react-dropzone 사용
    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    // 파일 내용이 JSON 형식이라고 가정하고 파싱
                    const parsedContent = JSON.parse(reader.result as string);
                    // JSON을 문자열로 변환하여 저장
                    const formattedContent = JSON.stringify(parsedContent, null, 2);
                    setFileContents((prevContents) => [...prevContents, formattedContent]);
                } catch (error) {
                    // JSON 파싱에 실패한 경우 원본 텍스트 그대로 저장
                    setFileContents((prevContents) => [...prevContents, reader.result as string]);
                }
            };
            reader.readAsText(file);
        });
    }, []);

    // 업로드 버튼 클릭 시 호출
    const handleUpload = () => {
        // 여기서 실제 업로드 작업을 수행 (필요한 경우)
        
        // 업로드 후 데이터 초기화
        resetModal();
    };

    // 모달 닫기와 데이터 초기화를 함께 수행하는 함수
    const handleCloseModal = () => {
        resetModal();
    };

    // 파일 내용 초기화 및 모달 닫기
    const resetModal = () => {
        setFileContents([]);
        onRequestClose();
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: true,
    });

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}  // 모달 닫기 (데이터 초기화)
            contentLabel="Music Upload Modal"
            className="modal-content"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
        >
            <div className="modal-container">
                <div className="upload-box" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <h2>UPLOAD MEDIA</h2>
                    <p>Drag & Drop Or Browse Files</p>
                </div>
                <div className="json-output">
                    {fileContents.map((content, index) => (
                        <pre key={index}>{content}</pre>
                    ))}
                </div>
                <button className="upload-button" onClick={handleUpload}>UPLOAD</button>
            </div>
        </Modal>
    );
};

export default MusicUploadModal;
