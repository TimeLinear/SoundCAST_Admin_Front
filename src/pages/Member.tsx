import { ChangeEvent, KeyboardEvent, MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from 'react';
import './css/member.css';
import Pagination from '../components/Pagination';
import axios from '../utils/CustomAxios';
import { MemberType } from '../type/member';

export default function Member(){

    const [memberListItems, setMemberListItems] = useState<MemberType[]>([]);

    useEffect(()=>{
        axios.get("http://localhost:8087/soundcastadmin/member/selectMembers")
        .then((response) => {
            setMemberListItems(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        return() => {
            //컴포넌트가 소멸될때 실행할 코드
            setMemberListItems([]);
        }
    },[])

    // const [searchKeyword, onChangeKeyword] = useInput<SearchKeyword>({
    //     type: '닉네임',
    //     searchTerm: ''
    // });

    const searchMenus = () => {
        const searchTerm = searchKeyword || "defaultSearchTerm"; // 빈 문자열 대신 기본값 설정
        const url = `http://localhost:8087/soundcastadmin/member/searchMembers/type/${selectBoxState}/searchTerm/${searchTerm}`;

        axios.
            get(url).
            then( response => {
                console.log(response.data);
                setMemberListItems(response.data);
            });
    }

    const deleteMenus = () => {
        axios.put("http://localhost:8087/soundcast/member/deleteMembers", deleteList).
        then(response => {
            console.log(response.data);
            
            if(response.data > 0){
                alert("삭제 성공");
                // 화면에 바로 반영하기 위해 필터링된 목록으로 상태 업데이트
                setMemberListItems(prevItems =>
                    prevItems.filter(item => !deleteList.includes(item.memberNo))
                );
            } else{
                alert("삭제 실패");
            }

            // 삭제 후 삭제 리스트 초기화
            setDeleteList([]);
        })
        .catch(error => {
            console.error("Failed to delete members", error);
        });
    }

    const [dropShow ,setDropShow] = useState(false);
    const [animateDropdown, setAnimateDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null); // 드롭다운 버튼에 대한 참조 추가
    
    const [searchKeyword, setSearchKeyword] = useState("");
    const [deleteList, setDeleteList] = useState<number[]>([]);

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const memberNo = Number(e.target.value);
        setDeleteList(prevSelected =>
            e.target.checked
                ? [...prevSelected, memberNo]
                : prevSelected.filter(no => no !== memberNo)
        );
    };

    const handleSearchKeyword = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);
        console.log(searchKeyword);
    }

    // Enter 키를 눌렀을 때 검색을 실행하는 함수
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchMenus();
        }
    }

    const dropChange = (e:ReactMouseEvent) => {
        e.stopPropagation();  // 이벤트 전파를 막음
        if (!dropShow) {
            setDropShow(true);
            setTimeout(() => setAnimateDropdown(true), 10); // 애니메이션 시작
        } else {
            setAnimateDropdown(false);
            setDropShow(false);
        }
    }

    const [selectBoxState, setSelectBoxState] = useState('닉네임');

    const selectBoxSelect = (e:ReactMouseEvent) => { /* 클릭시 해당 div묶음의 value가 state로 되게 지정*/
        e.stopPropagation();
        const {value} = e.currentTarget as HTMLButtonElement;
        setSelectBoxState(value); 
        dropChange(e);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => { // 이벤트 타입을 MouseEvent로 설정
            if (
              dropdownRef.current && 
              !dropdownRef.current.contains(event.target as Node) &&
              buttonRef.current && 
              !buttonRef.current.contains(event.target as Node)
            ) {
                setDropShow(false);
                setAnimateDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef, buttonRef]);

    const selectBoxItems = [
        { key : "no", name : "No"},
        { key : "nickname", name : "닉네임"},
        { key : "email", name : "이메일"}
    ]
    
    /* 페이지네이션 시작 */
    // 한 페이지당 항목 수
    const itemsPerPage = 10;
    
    const [currentPage, setCurrentPage] = useState<number>(1); /* 현재 페이지, Pagination.tsx로 넘김 */
    const totalPages: number = Math.ceil(memberListItems.length / itemsPerPage ); /* 페이지 (버튼) 수, Pagination.tsx로 넘김 */

    const handlePageChange = (pageNumber: number) => { /* pageNumber는 Pagination.tsx에서 기술 , Pagination.tsx로 넘김 */
    setCurrentPage(pageNumber); /* 현재 페이지의 state를 Pagination.tsx에서 받아온 pageNumber로 변경,
    currentPage의 state값에 따라서 동적으로 화면상에 표기할 currentItems(memberListItems의 현재페이지의 첫번째부터 마지막 아이템들을 표시)가
    실시간으로 바뀐다. */

    // 페이지 변경 시 데이터 가져오기 또는 화면 갱신 로직 추가
    };

    // 현재 페이지의 항목을 계산
    const indexOfLastItem = currentPage * itemsPerPage; // 현재 페이지에서 가장 마지막 리스트 아이템의 인덱스 + 1
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 현제 페이지에서 가장 첫번째 리스트 아이템의 인덱스
    const currentItems = memberListItems.slice(indexOfFirstItem, indexOfLastItem); 
    // 현재 페이지에서 표시해야할 리스트 아이템들 [{no: "11", profileImg: "/images/mimikyu.png", artist: "Gun" , email: "parkyo@gmail.com"}]

    /* 페이지네이션 끝 */

    return (
        <div className='member-page'>
            <div className='member-title-and-contentbox'>
                <p className='member-title'>회원</p>
                <div className='member-content-box'>
                    <div className='member-content'>

                        { /* 누를 시 나오는 커스텀 드롭다운 */
                            (dropShow &&
                            
                                <div className={`member-custom-selectbox-dropdown ${animateDropdown ? 'show' : ''}`}
                                ref={dropdownRef}>

                                    {selectBoxItems.map((item) => (

                                        <button
                                        className={`member-${item.key}-button ${
                                        selectBoxState === item.name ? "selected2" : ""
                                        }`}
                                        name='type' value={item.name}
                                        onClick={selectBoxSelect}
                                        >                           
                                            <p className={`member-${item.key}`}>{item.name}</p>
                                        </button>

                                    ))}
                                </div>
                            )
                        }

                        <div className='member-bar-box'>

                            <div
                                className={`member-custom-selectbox ${dropShow ? 'selected3' : ''}`}
                                onClick={dropChange}
                                ref={buttonRef} // 버튼 참조 추가
                            >
                                <p className='member-selectbox-name'>{selectBoxState}</p>
                                <p className='member-selectbox-icon'>{dropShow ? '▲' : '▼'}</p>
                            </div>

                            <input className='member-input' placeholder='검색어 입력'
                                name='searchTerm'
                                onChange={handleSearchKeyword}
                                onKeyDown={handleKeyDown} // Enter 키 감지 핸들러 추가
                            />

                            <button className='member-search-button'
                             onClick={() => searchMenus()}>
                                <p className='member-search-button-name'>검색</p>
                            </button>
                        </div>

                        <div className='member-list-box'>
                            <div className='member-list-form member-list-common-css'>
                                <div className='member-list-form-1'>선택</div>
                                <div className='member-list-form-2'>No</div>
                                <div className='member-list-form-3'>회원 사진</div>
                                <div className='member-list-form-4'>닉네임</div>
                                <div className='member-list-form-5'>이메일</div>
                            </div>
                            <ul className='member-unordered-list'>
                                {currentItems.map((item) => (
                                    <li key={item.memberNo} /* 고유한 key prop 추가 */
                                        className={`member-list-${item.memberNo} member-list-common-css`}>
                                        <div className='member-list-form-1'>
                                            <input type="checkbox" value={item.memberNo}
                                              onChange={handleCheckboxChange}/>
                                        </div>
                                        <div className='member-list-form-2'>{item.memberNo}</div>
                                        <div className='member-list-form-3'>
                                            <img src={`http://localhost:8087/soundcast/resource/${item.profileImage.profileImagePath}`} /></div>
                                        <div className='member-list-form-4'>{item.memberNickname}</div>
                                        <div className='member-list-form-5'><p>{item.memberEmail}</p></div>
                                    </li>
                                ))}

                            </ul>
                        </div>

                        <div className='member-paging-and-button'>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                            <button className='member-delete-button'
                             onClick={deleteMenus} /*style={{height:'60px', width:'100px'}}*/>
                                <p className='member-delete-p'>회원삭제</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}