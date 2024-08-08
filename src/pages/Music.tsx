import React from 'react';
import MusicManagement from '../components/MusicManagement';
import '../pages/css/Music.css';

const MusicPage: React.FC = () => {
  return (
    <div className="music-page">
      <div className="content">
        <MusicManagement/>
      </div>
    </div>
  );
}

export default MusicPage;
