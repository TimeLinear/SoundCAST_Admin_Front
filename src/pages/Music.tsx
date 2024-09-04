import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Pagination from '../components/Pagination';
import '../pages/css/music.css';
import MusicUploadModal from './MusicUploadModal';
import { MusicType } from '../type/music';
import axios, { Axios } from 'axios';

const MusicPage: React.FC = () => {
    const [isAllChecked, setAllChecked] = useState(false);
    const [checkedState, setCheckedState] = useState<boolean[]>([]);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string>('전체');
    const [searchTypeFilter, setSearchTypeFilter] = useState<string>('음원명');
    const [musicData, setMusicData] = useState<MusicType[]>([]);
    const [filteredMusicData, setFilteredMusicData] = useState<MusicType[]>([]);
    const [deleteMenu, setDeleteMenu] = useState<number | null>(null);
    
    useEffect(() => {
        axios.get("http://localhost:8087/soundcastadmin/music/selectMusics")
            .then((response) => {
                console.log('API Response:', response.data);
                const musics = response.data.map((item: any) => ({
                    songPlaceNo: item.songPlaceNo, 
                    songTitle: item.songTitle,
                    songNo: item.songNo,
                    member: {
                        memberNickname: item.memberNickname,
                    },
                    genreName: item.genreName, 
                    moodName: item.moodName, 
                    songCreateDate: item.songCreateDate, 
                    songStatus: item.songStatus
                }));
                setMusicData(musics);
                setFilteredMusicData(musics);
                setCheckedState(new Array(musics.length).fill(false)); // 데이터 초기화 시 체크박스 상태도 초기화
                setAllChecked(false);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => {
            setMusicData([]);
        };
    }, []);

    const [deleteList, setDeleteList] = useState<number[]>([]);

    const deleteMenus = () => {
        if(!deleteList.length) {
            console.log("삭제 목록 없음");
            return;
        }
        axios.put("http://localhost:8087/soundcastadmin/music/deleteMusics", deleteList)
            .then(response => {
                console.log(response.data);
                
                if(response.data > 0){
                    alert("삭제 성공");
                    setFilteredMusicData(prevItems =>
                        prevItems.filter(item => !deleteList.includes(item.songNo))
                    );
                } else{
                    alert("삭제 실패");
                }

                setDeleteList([]);
                setCheckedState(new Array(filteredMusicData.length).fill(false)); // 삭제 후 체크박스 상태 초기화
                setAllChecked(false);
            })
            .catch(error => {
                console.error("Failed to delete musics", error);
            });
    }
    
    const deleteBtn = (targetSongNo:number) => {

        axios.put("http://localhost:8087/soundcastadmin/music/deleteBtn", { songNo:targetSongNo })
            .then(response => {
                console.log(response.data);
                
                if(response.data > 0){
                    alert("삭제 성공");
                    setFilteredMusicData(prevItems =>
                        prevItems.filter(item => item.songNo !== targetSongNo)
                    );
                } else{
                    alert("삭제 실패");
                }

                setDeleteMenu(null); // 삭제 후 상태 초기화
            })
            .catch(error => {
                console.error("Failed to delete music", error);
            });
    };

    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = Math.ceil(filteredMusicData.length / 10);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = () => {
        const filtered = musicData.filter(music => {
            const matchesCategory = () => {
                if (categoryFilter === '전체') {
                    return true;
                }
                if (categoryFilter === '0' && music.songPlaceNo === 0) {
                    return true;
                }
                if (categoryFilter === '1' && music.songPlaceNo === 1) {
                    return true;
                }
                return false;
            };
            
            const matchesKeyword = searchTypeFilter === '음원명'
                ? music.songTitle.includes(searchKeyword)
                : music.memberNickname.includes(searchKeyword);
    
            return matchesCategory() && matchesKeyword;
        });

        console.log(filtered);
        
        setFilteredMusicData(filtered);
        setCurrentPage(1);
        setCheckedState(new Array(filtered.length).fill(false)); // 검색 후 체크박스 상태 초기화
        setAllChecked(false);
    };

    const getMusicType = (songPlaceNo: number) => {
        switch (songPlaceNo) {
            case 0:
                return 'Official';
            case 1:
                return 'UnOfficial';
            default:
                return 'Unknown';
        }
    };

    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredMusicData.slice(indexOfFirstItem, indexOfLastItem);

    const handleAllCheck = (e:ChangeEvent<HTMLInputElement>) => {
        const newCheckedState = currentItems.map(() => !isAllChecked);
        setCheckedState(newCheckedState);
        setAllChecked(!isAllChecked);

        const currentItemsNo = [...currentItems.map((item) => item.songNo)];
        console.log(currentItemsNo);
        setDeleteList(prevSelected =>
            e.target.checked
                ? [...currentItemsNo]
                : prevSelected.filter(no => !currentItemsNo.includes(no))
        );
    };

    const handleMonoCheck = (e:ChangeEvent<HTMLInputElement>, index: number) => {
        const newCheckedState = [...checkedState];
        newCheckedState[index] = !newCheckedState[index];
        setCheckedState(newCheckedState);

        const allChecked = newCheckedState.every(Boolean);
        setAllChecked(allChecked);

        const songNo = Number(e.target.value);
        setDeleteList(prevSelected =>
            e.target.checked
                ? [...prevSelected, songNo]
                : prevSelected.filter(no => no !== songNo)
        );
        // if(e.target.checked) {
        //     setDeleteList((prev) => [...prev, Number(e.target.value)]);
        //     const newCheckedState = [...checkedState];
        //     newCheckedState[index] = !newCheckedState[index];
        //     setCheckedState(newCheckedState);
        // } else {
        //     setDeleteList((prev) => [...prev.filter((songNo) => songNo !== targetSongNo)]);
        // }
    };

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        setCheckedState(new Array(currentItems.length).fill(false));
        setAllChecked(false);
    }, [currentPage, currentItems.length]);

    return (
        <div className='music-page'>
            <div className='music-content'>
                <p className='music-title'>음원</p>
                <div className="music-management">
                    <div className="music-upload">
                        <button className='upload-modal' onClick={handleShowModal}>
                            Music Upload
                        </button>
                    </div>
                    <div className="music-list">
                        <h2>음원 목록</h2>
                        <div className="search-bar">
                            <select onChange={(e) => setCategoryFilter(e.target.value)}>
                                <option value="전체">전체</option>
                                <option value="0">Official</option>
                                <option value="1">UnOfficial</option>
                            </select>
                            <select onChange={(e) => setSearchTypeFilter(e.target.value)}>
                                <option value="음원명">음원명</option>
                                <option value="아티스트명">아티스트명</option>
                            </select>
                            <input
                                type="text"
                                placeholder="검색어 입력"
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}  // Enter 키를 누르면 검색 실행
                            />
                            <button className='music-button' onClick={handleSearch}>검색</button>
                            <button className='delete-button' onClick={deleteMenus}>선택 삭제</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            checked={isAllChecked}
                                            onChange={(e) => handleAllCheck(e)}
                                        />
                                    </th>
                                    <th>Place</th>
                                    <th>음원명</th>
                                    <th>아티스트명</th>
                                    <th>장르</th>
                                    <th>분위기</th>
                                    <th style={{ paddingLeft: 20 }}>등록일</th>
                                    <th className='detail-th'>삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((music, index) => (
                                    <tr key={music.songNo}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={checkedState[index] || false}
                                                onChange={(e) => handleMonoCheck(e, index)}
                                                value={music.songNo}
                                            />
                                        </td>
                                        <td>{getMusicType(music.songPlaceNo)}</td>
                                        <td>{music.songTitle}</td>
                                        <td>{music.memberNickname}</td>
                                        <td>{music.genreName}</td>
                                        <td>{music.moodName}</td>
                                        <td style={{ paddingLeft: 20 }}>{music.songCreateDate}</td>
                                        <td>
                                            <button 
                                                className='delete-button' 
                                                style={{ marginLeft: 40 }}
                                                onClick={() => {
                                                    deleteBtn(music.songNo);
                                                }}
                                            >
                                                삭제
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
            <MusicUploadModal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
            />
        </div>
    );
};

export default MusicPage;
