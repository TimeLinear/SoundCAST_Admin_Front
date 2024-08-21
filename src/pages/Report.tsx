import Pagination from "react-js-pagination";
import ReportModal from '../pages/ReportModal';
import './css/report.css';
import { useState } from "react";

const ReportPage: React.FC = () => {
    const initialReportData = [
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "8.", music: "SOJU8", reason: "유해하거나 위험한 행위l", artist: "GUN", member: "USER8", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "9.", music: "SOJU9", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER9", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "10.", music: "SOJU10", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER10", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "1.", music: "SOJU1", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER1", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "2.", music: "SOJU2", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER2", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "3", music: "SOJU3", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER3", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "4.", music: "SOJU4", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER4", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "5.", music: "SOJU5", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER5", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "6.", music: "SOJU6", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER6", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." },
        { no: "7.", music: "SOJU7", reason: "유해하거나 위험한 행위", artist: "GUN", member: "USER7", date: "2024-07-01", status: "미처리", text: "노래를 너무 못 불러요, 짜증나고 한대 쥐어박고 싶어요." }
    ];

    const [reportData, setReportData] = useState(initialReportData); // 초기 데이터 설정
    const itemsPerPage = 10;  // 한 페이지에 표시할 항목 수
    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 번호 상태
    const totalPage = Math.ceil(reportData.length / itemsPerPage);

    // 현재 페이지에 표시할 데이터 계산
    const currentItems = reportData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

     // 페이지 그룹 설정
     const pagesPerGroup = 5;
     const maxPage = Math.ceil(reportData.length / itemsPerPage);
 
     // 현재 페이지 그룹 계산
     const currentGroup = Math.ceil(currentPage / pagesPerGroup);
     const startPage = (currentGroup - 1) * pagesPerGroup + 1;
     const endPage = Math.min(startPage + pagesPerGroup - 1, maxPage);

    // 페이지 그룹 이동
    const handlePageJump = (direction: string) => {
        if (direction === 'prev') {
            setCurrentPage((prevPage) => Math.max(prevPage - pagesPerGroup, 1));
        } else if (direction === 'next') {
            setCurrentPage((prevPage) => Math.min(prevPage + pagesPerGroup, maxPage));
        }
    };


    // const handleUpdateStatus = () => {
    //     if (selectedReport) {
    //         // reportData를 업데이트하여 상태 변경 반영
    //         const updatedData = reportData.map((report) =>
    //             report.no === selectedReport.no
    //                 ? { ...report, status: "처리 완료" }
    //                 : report
    //         );

    //         setReportData(updatedData); // 상태 업데이트
    //         setSelectedReport({ ...selectedReport, status: "처리 완료" });
    //     }
    // };

    // 모달 관련 상태값
    const [selectedReport, setSelectedReport] = useState<any | null>(null);
    const [showModal, setShowModal] = useState(false);

    // 페이지 변경 처리 함수
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // 신고 항목 클릭 시 모달 오픈
    const handleShowModal = (report: any) => {
        setSelectedReport(report);
        setShowModal(true);
    };

    // 모달 닫기
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // // 처리 완료 버튼 클릭 시 status 업데이트
    // const updateReportStatus = () => {
    //     if (selectedReport) {
    //         console.log('Before Update:', selectedReport.status); // 변경 전 상태 확인
    //         setSelectedReport({
    //             ...selectedReport,
    //             status: '처리 완료'
    //         });
    //         console.log('After Update:', selectedReport.status); // 변경 후 상태 확인
    //     }
    // };

    return (
        <div className='report-page'>
            <div className='report-content'>
                <div className="report-management">
                    <h1>신고</h1>
                    <div className='report-list'>
                        <h2>신고 현황 목록</h2>
                        <div className='report-management'>
                            <div>
                                <select className="select-management">
                                    <option>전체</option>
                                    <option>미처리</option>
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
                                        <th>처리현황</th>
                                        <th>상세 보기</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((report, index) => (
                                        <tr key={index}>
                                            <td>{report.no}</td>
                                            <td>{report.music}</td>
                                            <td>{report.reason}</td>
                                            <td>{report.member}</td>
                                            <td>{report.date}</td>
                                            <td>
                                                <select /*value={selectedReport.status}*/>
                                                    <option value="미처리">미처리</option>
                                                    <option value="처리 완료">처리 완료</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button onClick={() => handleShowModal(report)}>
                                                    조회하기
                                                </button>
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
                                    totalItemsCount={reportData.length}
                                    pageRangeDisplayed={pagesPerGroup}  // 페이지 버튼 수
                                    onChange={handlePageChange}
                                    prevPageText={<span onClick={() => handlePageJump('prev')}>{"<"}</span>}
                                    nextPageText={<span onClick={() => handlePageJump('next')}>{">"}</span>}
                                    innerClass="pagination"
                                    itemClass="page-item"
                                    linkClass="page-link"
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
            // onUpdateStatus={updateReportStatus} // 상태 업데이트 함수 전달
            />
        </div>
    );
};
export default ReportPage;
