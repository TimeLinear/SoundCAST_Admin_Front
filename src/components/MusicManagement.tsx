import React from 'react';
import '../pages/css/MusicManagement.css';

const MusicManagement: React.FC = () => {
  const musicData = [
    { name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "국적", date: "2024-07-01" },
    { name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "국적", date: "2024-07-01" },
    { name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "국적", date: "2024-07-01" },
    { name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "국적", date: "2024-07-01" },
    { name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "국적", date: "2024-07-01" },
    { name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "국적", date: "2024-07-01" },
    { name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "국적", date: "2024-07-01" },
  ];

  return (
    <div className="music-management">
    <h1>음원</h1>
      <div className="music-upload">
        <h2>음원 업로드</h2>
        <textarea placeholder="음원 업로드" />
      </div>
      <div className="music-list">
        <h2>음원 목록</h2>
        <div className="search-bar">
          <select>
            <option>음원명</option>
          </select>
          <input type="text" placeholder="검색어 입력" />
          <button>검색</button>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>음원명</th>
              <th>아티스트명</th>
              <th>장르</th>
              <th>분류기</th>
              <th>등록일</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {musicData.map((music, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{music.name}</td>
                <td>{music.artist}</td>
                <td>{music.genre}</td>
                <td>{music.category}</td>
                <td>{music.date}</td>
                <td><button>삭제</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MusicManagement;
