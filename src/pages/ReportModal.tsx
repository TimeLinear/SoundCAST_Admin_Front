import React from 'react';
import Modal from 'react-modal';
import '../pages/css/report.css';

// ReportModalProps 인터페이스 정의
interface ReportModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedReport: {
    music: string;
    reason: string;
    artist: string;
    member: string;
    date: string;
    status: string;
    text: string;
  } | null;
  // onUpdateStatus: () => void; // 처리 완료 상태 업데이트 함수 추가
}

// ReportModal 컴포넌트 정의
const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onRequestClose, selectedReport, /*onUpdateStatus*/ }) => {
  console.log(selectedReport);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Report Detail Modal"
      ariaHideApp={false}
      className="modal"
      overlayClassName="overlay"
    >
      {selectedReport ? (
        <div>
          <p><strong>신고 사유</strong></p>
          <div className='reason-div'>{selectedReport.reason}</div>
          <div className="inline-container">
              <div>
                <p><strong>신고 음원 제목</strong></p>
                <div className="common-div">{selectedReport.music}</div>
              </div>
              <div>
                <p><strong>신고 아티스트</strong></p>
                <div className="common-div">{selectedReport.artist}</div>
              </div>
            </div>
            <div className="inline-container">
              <div>
                <p><strong>신고한 회원</strong></p>
                <div className="common-div">{selectedReport.member}</div>
              </div>
              <div>
                <p><strong>신고 일자</strong></p>
                <div className="common-div">{selectedReport.date}</div>
              </div>
            </div>
          <p><strong>처리 현황</strong></p>
          <div className='common-div'>{selectedReport.status}</div>
          <div>
            <p><strong>신고 내용</strong></p>
            <div className="text-div">{selectedReport.text}</div>
          </div>
          <div className='inline-container2'>
          <button className='status-button' /*onClick={onUpdateStatus}*/>처리 완료</button><button onClick={onRequestClose}>닫기</button>
          </div>
        </div>
        
      
      ) : (
        <p>선택된 보고서가 없습니다.</p>
      )}
    </Modal>
  );
};

export default ReportModal;
