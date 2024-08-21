import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Pagination from "react-js-pagination";
import '../pages/css/Music.css';
import MusicUploadModal from './MusicUploadModal';

const MusicPage: React.FC = () => {
    const [musicData, setMusicData] = useState([
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "eu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "cu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "bu Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },

        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "doo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "Official", name: "au Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "poo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" },
        { place: "UnOfficial", name: "Du Du Do", artist: "Soo", genre: "R&B/Soul", category: "극적", date: "2024-07-01" }
    ]);

    const itemsPerPage = 10;  // 한 페이지에 표시할 항목 수
    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 번호 상태
    const [isAllChecked, setAllChecked] = useState(false);
    const [checkedState, setCheckedState] = useState<boolean[]>([]);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string>('전체');
    const [searchTypeFilter, setSearchTypeFilter] = useState<string>('음원명');
    const [filteredMusicData, setFilteredMusicData] = useState(musicData);


    // 현재 페이지에 표시할 데이터 계산
    const currentItems = filteredMusicData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // 페이지 변경 처리 함수
    const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

    // 모든 체크박스 체크/체크 해제
    const handleAllCheck = () => {
        const newCheckedState = currentItems.map(() => !isAllChecked);
        setCheckedState(newCheckedState);
        setAllChecked(!isAllChecked);
    };

    // 단일 체크박스 체크/체크 해제
    const handleMonoCheck = (index: number) => {
        const newCheckedState = [...checkedState];
        newCheckedState[index] = !newCheckedState[index];
        setCheckedState(newCheckedState);

        const allChecked = newCheckedState.every(Boolean);
        setAllChecked(allChecked);
    };

    //모달 관련 상태값
    const [showModal, setShowModal] = useState(false);

    //뮤직 항목 클릭 시 모달 오픈
    const handleShowModal = () => {
        setShowModal(true);
    };

    //모달 닫기
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDelete = (index: number) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            const itemIndex = (currentPage - 1) * itemsPerPage + index;
            const newMusicData = filteredMusicData.filter((_, i) => i !== itemIndex);
            setFilteredMusicData(newMusicData);
            setMusicData(newMusicData);
        }
    };

    // 검색 로직 구현
    const handleSearch = () => {
        const filteredData = musicData.filter(music => {
            const isCategoryMatch = categoryFilter === '전체' || music.place === categoryFilter;
            const isSearchMatch = searchTypeFilter === '음원명'
                ? music.name.toLowerCase().includes(searchKeyword.toLowerCase())
                : music.artist.toLowerCase().includes(searchKeyword.toLowerCase());
            return isCategoryMatch && isSearchMatch;
        });

        setFilteredMusicData(filteredData);
        setCurrentPage(1); // 검색 후 첫 페이지로 이동
    };

    // Enter 키로 검색 기능
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleBatchDelete = () => {
        const indexesToDelete = checkedState
            .map((checked, index) => checked ? (currentPage - 1) * itemsPerPage + index : -1)
            .filter(index => index !== -1);

        const newMusicData = filteredMusicData.filter((_, index) => !indexesToDelete.includes(index));
        setFilteredMusicData(newMusicData);
        setMusicData(newMusicData); // 원본 데이터도 업데이트
        setCheckedState(new Array(currentItems.length).fill(false));
        setAllChecked(false);
    };

    // 체크박스 상태 초기화
    useEffect(() => {
        setCheckedState(new Array(currentItems.length).fill(false));
        setAllChecked(false);
    }, [currentPage, currentItems.length]);

    return (
        <div className='music-page'>
            <div className='music-content'>
                <div className="music-management">
                    <h1>음원</h1>
                    <div className="music-upload">
                        <h2>음원 업로드</h2>
                        <button className='upload-modal' onClick={handleShowModal}>
                            Music Upload
                        </button>
                        {/* <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p>여기에 파일을 드래그 앤 드롭하거나 클릭하여 업로드하세요</p>
                        </div> */}
                    </div>
                    <div className="music-list">
                        <h2>음원 목록</h2>
                        <div className="search-bar">
                            <select onChange={(e) => setCategoryFilter(e.target.value)}>
                                <option value="전체">전체</option>
                                <option value="Official">Official</option>
                                <option value="UnOfficial">UnOfficial</option>
                            </select>
                            <select onChange={(e) => setSearchTypeFilter(e.target.value)}>
                                <option value="음원명">음원명</option>
                                <option value="아티스트명">아티스트명</option>
                            </select>
                            <input type="text"
                                placeholder="검색어 입력"
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                                onKeyDown={handleKeyDown} />
                            <button className='music-button' onClick={handleSearch}>검색</button>
                            <button className='delete-button' onClick={handleBatchDelete}>선택 삭제</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            checked={isAllChecked}
                                            onChange={() => handleAllCheck()}
                                        />
                                    </th>
                                    <th>Place</th>
                                    <th>음원명</th>
                                    <th>아티스트명</th>
                                    <th>장르</th>
                                    <th>분위기</th>
                                    <th>등록일</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((music, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={checkedState[index] || false}
                                                onChange={() => handleMonoCheck(index)}
                                            />
                                        </td>
                                        <td>{music.place}</td>
                                        <td>{music.name}</td>
                                        <td>{music.artist}</td>
                                        <td>{music.genre}</td>
                                        <td>{music.category}</td>
                                        <td>{music.date}</td>
                                        <td>
                                            <button onClick={() => handleDelete(index)}>삭제</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* react-js-pagination 사용 */}
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={itemsPerPage}
                                totalItemsCount={musicData.length}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}
                                prevPageText="<"
                                nextPageText=">"
                                innerClass="pagination"
                                itemClass="page-item"
                                linkClass="page-link"
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
}

export default MusicPage;





