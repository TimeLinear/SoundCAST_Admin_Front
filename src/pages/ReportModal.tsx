import React from 'react';
import Modal from 'react-modal';
import '../pages/css/report.css';

// ReportModalProps 인터페이스 정의
interface ReportModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedReport: {
    reportNo: number, // 신고 번호 => Report
    songTitle: string, // 신고된 음원 제목 => SongExt => Song
    member : {
        memberNickname: string
    },//  신고 받은 음원의 닉네임=> MemberExt => Member
    reportMemberNickname : string, // 신고한 회원의 닉네임 => Report
    reportText: string, // 신고 내용 => Report
    reportDate: string, // 신고 날짜 => Report
    status: string // 신고 처리 여부 => Report
  };
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
          <div className='reason-div'>{selectedReport.reportText}</div>
          <div className="inline-container">
              <div>
                <p><strong>신고 음원 제목</strong></p>
                <div className="common-div">{selectedReport.songTitle}</div>
              </div>
              <div>
                <p><strong>신고 아티스트</strong></p>
                <div className="common-div">{selectedReport.member.memberNickname}</div>
              </div>
            </div>
            <div className="inline-container">
              <div>
                <p><strong>신고한 회원</strong></p>
                <div className="common-div">{selectedReport.reportMemberNickname}</div>
              </div>
              <div>
                <p><strong>신고 일자</strong></p>
                <div className="common-div">{selectedReport.reportDate}</div>
              </div>
            </div>
          <p><strong>처리 현황</strong></p>
          <div className='common-div'>{selectedReport.status}</div>
          <div>
            <p><strong>신고 내용</strong></p>
            <div className="text-div">{selectedReport.reportText}</div>
          </div>
          <div className='inline-container2'>
          <button className='status-button'>처리 완료</button><button onClick={onRequestClose}>닫기</button>
          </div>
        </div>
        
      
      ) : (
        <p>선택된 보고서가 없습니다.</p>
      )}
    </Modal>
  );
};

export default ReportModal;
