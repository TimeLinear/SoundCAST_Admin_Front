import axios from 'axios';
import Pagination from '../components/Pagination';
import ReportModal from '../pages/ReportModal';
import { ReportType } from '../type/report';
import './css/report.css';
import { useEffect, useState } from "react";

const ReportPage: React.FC = () => {

    const [reportData, setReportData] = useState<ReportType[]>([]);
    const [filteredData, setFilteredData] = useState<ReportType[]>([]); // 필터링된 데이터
    const [filterStatus, setFilterStatus] = useState<string>('전체'); // 필터 상태 관리

    useEffect(() => {
        axios.get("http://localhost:8087/soundcastadmin/report/selectReportList")
            .then((response) => {
                console.log('API Response:', response.data); // API 응답 확인
                const reports = response.data.map((item: any) => ({
                    reportNo: item.reportNo,
                    songTitle: item.songExt.songTitle,
                    member: {
                        memberNickname: item.memberExt.memberNickname,
                    },
                    reportMemberNickname: item.reportMemberNickname,
                    reportText: item.reportText,
                    reportDate: item.reportDate,
                    status: item.status,
                }));
                setReportData(reports);
                setFilteredData(reports); // 기본적으로 전체 데이터를 필터링된 데이터로 설정
            })
            .catch((error) => {
                console.log(error);
                setReportData([]); // 에러 발생 시 빈 배열로 초기화
                setFilteredData([]);
            });
        return () => {
            setReportData([]);
            setFilteredData([]);
        };
    }, []);

    useEffect(() => {
        if (filterStatus === '전체') {
            setFilteredData(reportData);
        } else if (filterStatus === '미처리') {
            setFilteredData(reportData.filter((report) => report.status === 'N'));
        }
    }, [filterStatus, reportData]);

    /* 페이지네이션 시작 */

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    /* 페이지네이션 끝 */

    // 모달 관련 상태값
    const [selectedReport, setSelectedReport] = useState<any | null>();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = (report: any) => {
        setSelectedReport(report);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='report-page'>
            <div className='report-content'>
                <div className="report-management">
                    <h1>신고</h1>
                    <div className='report-list'>
                        <h2>신고 현황 목록</h2>
                        <div className='report-management'>
                            <div>
                                <select
                                    className="select-management"
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                >
                                    <option value="전체">전체</option>
                                    <option value="미처리">미처리</option>
                                </select>
                            </div>
                            <table>
                                <thead className="thead">
                                    <tr>
                                        <th>No.</th>
                                        <th>신고 음원</th>
                                        <th>신고 사유</th>
                                        <th>신고 회원</th>
                                        <th>신고 일자</th>
                                        <th className='detail-th'>처리현황</th>
                                        <th className='detail-th'>상세 보기</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((report, index) => (
                                        <tr key={index}>
                                            <td>{report.reportNo}</td>
                                            <td>{report.songTitle}</td>
                                            <td>{report.reportText}</td>
                                            <td>{report.reportMemberNickname}</td>
                                            <td>{report.reportDate}</td>
                                            <td>
                                                <select
                                                    className='status-bar'
                                                    value={report.status === 'Y' ? '처리 완료' : '미처리'}
                                                >
                                                    <option value="미처리">미처리</option>
                                                    <option value="처리 완료">처리 완료</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button className='detail-button' onClick={() => handleShowModal(report)}>
                                                    조회하기
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReportModal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                selectedReport={selectedReport}
            />
        </div>
    );
};

export default ReportPage;
