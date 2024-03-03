import styles from '@/styles/header/box_search.module.css';
import React, { useEffect, useRef, useState } from "react";
import { ConfigProvider, DatePicker, Space } from 'antd';
import { Calendar, DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import viLocale from 'date-fns/locale/vi';
import { format } from 'date-fns';
import LunarCalendar from 'lunar-calendar';
export default function SearchCTX(props) {
    //Xu ly chon ngay di - ngay ve
    const currentDate = new Date();
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState(null);
    const [showDatePicker1, setShowDatePicker1] = useState(false);
    const [showDatePicker2, setShowDatePicker2] = useState(false);
    const [numberOfDays, setNumberOfDays] = useState(0); // State để lưu số ngày giữa ngày bắt đầu và ngày kết thúc
    const containerRef = useRef(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
        if (!endDate || date > endDate) {
            setEndDate(date);
        }
        setShowDatePicker1(false);
        setShowDatePicker2(true);
        calculateNumberOfDays(date, endDate);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        setShowDatePicker1(false);
        setShowDatePicker2(false);
        calculateNumberOfDays(startDate, date);
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setShowDatePicker1(false);
            setShowDatePicker2(false);
        }
    };

    const calculateNumberOfDays = (start, end) => {
        if (start && end) {
            const days = differenceInDays(end, start);
            setNumberOfDays(days);
        } else {
            setNumberOfDays(0);
        }
    };
    const customFormatWeekDay = (nameOfDay) => {
        // Chuyển đổi "Thứ Hai", "Thứ Ba",..., "Chủ Nhật" thành "T2", "T3",..., "CN"
        if (nameOfDay === "Chủ Nhật") {
            return "CN";
        } else {
            const days = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
            return days.indexOf(nameOfDay) >= 0 ? `T${days.indexOf(nameOfDay) + 2}` : nameOfDay;
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    //End xu ly ngay di - ngay ve

    //Xu ly su kien popup goi y
    const [showSuggest, setShowSuggest] = useState(false);
    const boxSuggest = useRef(null);
    const handleClickOut = (event) => {
        if (boxSuggest.current && !boxSuggest.current.contains(event.target)) {
            setShowSuggest(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOut);
        return () => {
            document.removeEventListener('mousedown', handleClickOut);
        };
    }, []);
    //End xu ky su kien popup goi y

    //Xu ly su kien popup chon so nguoi
    const [getRoom, setRoom] = useState(1);
    const [getAdult, setAult] = useState(1);
    const [getChildren, setchildren] = useState(0);
    const [showSn, setShowSn] = useState(false);
    const boxSn = useRef(null);
    const handleClickOutSn = (event) => {
        if (boxSn.current && !boxSn.current.contains(event.target)) {
            setShowSn(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutSn);
        return () => {
            document.removeEventListener('mousedown', handleClickOutSn);
        };
    }, []);

    //
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(), // Use null if you don't want to have endDate
            key: 'selection'
        }
    ])
    const CustomWeekday = ({ day }) => {
        return <div title={format(day, 'EEEE', { locale: viLocale })}>{format(day, 'EEE', { locale: viLocale })}</div>;
    };
    const getLunarDate = (date) => {
        const lunarDate = LunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
        return `${lunarDate.day}/${lunarDate.month}`;
    };

    console.log('date:', date)
    return (
        <div className={`${styles.box_body}`}>
            {/* <DateRange
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                showSelectionPreview={true}
                className="date"
                locale={viLocale}
                weekdayDisplayFormat="EEEEEE"
                weekdayDisplay={CustomWeekday}
                direction="horizontal"
                months={2}
                renderDayContents={(day) => (
                    <div>
                        <span>{day.format('D')}</span>
                        <br />
                        <span>{getLunarDate(day.toDate())}</span>
                    </div>
                )}
            /> */}
            <div className={`${styles.body_item}`}>
                <div className={`${styles.item_txt}`}>
                    <div className={`img_dl ${styles.img_item}`}>
                        <img src="/images/header/diadiem.svg" alt="Icon" />
                    </div>
                    <span className={`${styles.item_txt}`}>Điểm đến</span>
                </div>
                <div className={`${styles.inp_text}`}>
                    <input type="text" placeholder="Thành phố, khách sạn, điểm đến" onClick={(e) => { setShowSuggest(true) }} />
                </div>
            </div>
            <div className={`${styles.clear}`}></div>
            <div className={`${styles.body_dive}`} ref={containerRef}>
                <div className={`${styles.item_child}`}>
                    <div className={`${styles.item_txt}`}>
                        <div className={`img_dl ${styles.img_item}`}>
                            <img src="/images/header/ngaydi.svg" alt="Icon" />
                        </div>
                        <span className={`${styles.item_txt}`}>Ngày đi</span>
                    </div>
                    <div className={`${styles.inp_date}`}>
                        {/* <DatePicker
                            selected={startDate}
                            onChange={handleStartDateChange}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            minDate={currentDate}
                            locale={vn}
                            monthsShown={2}
                            placeholderText="Ngày bắt đầu"
                            formatWeekDay={customFormatWeekDay}
                            dateFormat="eee, dd 'tháng' M"
                            showPopperArrow={false}
                            onFocus={() => {
                                setShowDatePicker1(true);
                                setShowDatePicker2(false);
                            }}
                            open={showDatePicker1}
                        /> */}
                    </div>
                </div>
                <div className={`${styles.item_child} ${styles.date_child}`}>
                    <p>{numberOfDays}</p>
                    <div className={`img_dl ${styles.img_date}`}>
                        <img src="/images/header/icon_day.svg" alt="Icon" />
                    </div>
                </div>
                <div className={`${styles.item_child}`}>
                    <div className={`${styles.item_txt}`}>
                        <div className={`img_dl ${styles.img_item}`}>
                            <img src="/images/header/ngayve.svg" alt="Icon" />
                        </div>
                        <span className={`${styles.item_txt}`}>Ngày về</span>
                    </div>
                    <div className={`${styles.inp_date}`}>
                        {/* <DatePicker
                            selected={endDate}
                            onChange={handleEndDateChange}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            locale={vn}
                            monthsShown={2}
                            placeholderText="Ngày kết thúc"
                            formatWeekDay={customFormatWeekDay}
                            dateFormat="eee, dd 'tháng' M"
                            showPopperArrow={false}
                            onFocus={() => {
                                setShowDatePicker1(false);
                                setShowDatePicker2(true);
                            }}
                            open={showDatePicker2}
                        /> */}
                    </div>
                </div>
            </div>
            <div className={`${styles.clear}`}></div>
            <div className={`${styles.body_item}`}>
                <div className={`${styles.item_txt}`}>
                    <div className={`img_dl ${styles.img_item}`}>
                        <img src="/images/header/icon_user.svg" alt="Icon" />
                    </div>
                    <span className={`${styles.item_txt}`}>Số người</span>
                </div>
                <div className={`${styles.inp_text}`} onClick={(e) => { setShowSn(true) }}>
                    <span>{getRoom} Phòng, {getAdult} Người lớn, {getChildren} Trẻ em </span>
                </div>
            </div>
            <div className={`${styles.body_btn}`}>
                <button className={`img_dl ${styles.btn_search}`}>
                    <img src="/images/header/icon_search.svg" alt="Icon" />
                </button>
            </div>

            {/* Box goi y dia diem */}
            {
                showSuggest ? (
                    <div className={`${styles.box_suggest_lacation}`} ref={boxSuggest}>
                        <div className={`${styles.box_suggest}`}>
                            <div className={`${styles.box_suggest_item}`}>
                                <div className={`${styles.suggest_title}`}>
                                    Tìm kiếm gần đây
                                </div>
                                <div className={`${styles.list_suggest}`}>
                                    <div className={`${styles.item_suggest}`}>
                                        <div className={`img_dl ${styles.img_suggest}`}>
                                            <img src="/images/header/hotel.svg" alt="Icon" />
                                        </div>
                                        <div className={`${styles.txt_suggest}`}>
                                            <p>Phú Quốc</p>
                                            <span>12 tháng 7 - 16 tháng 7, 1 Phòng, 2 khách</span>
                                        </div>
                                    </div>
                                    <div className={`${styles.item_suggest}`}>
                                        <div className={`img_dl ${styles.img_suggest}`}>
                                            <img src="/images/header/diadiem.svg" alt="Icon" />
                                        </div>
                                        <div className={`${styles.txt_suggest}`}>
                                            <p>Phú Quốc</p>
                                            <span>12 tháng 7 - 16 tháng 7, 1 Phòng, 2 khách</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.ke_sug}`}></div>
                            <div className={`${styles.box_suggest_item}`}>
                                <div className={`${styles.suggest_title}`}>
                                    Gợi ý
                                </div>
                                <div className={`${styles.list_suggest}`}>
                                    <div className={`${styles.item_suggest}`}>
                                        <div className={`img_dl ${styles.img_suggest}`}>
                                            <img src="/images/header/hotel.svg" alt="Icon" />
                                        </div>
                                        <div className={`${styles.txt_suggest}`}>
                                            <p>Phú Quốc</p>
                                            <span>12 khách sạn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
            }
            {/*Box chon so nguoi*/}
            {
                showSn ? (
                    <div className={`${styles.box_sn}`} ref={boxSn}>
                        <div className={`${styles.body_sn}`}>
                            <div className={`${styles.item_sn}`}>
                                <div className={`${styles.txt_sn}`}>
                                    Phòng
                                </div>
                                <div className={`${styles.sn_calc}`} >
                                    <button className={`img_dl ${styles.btn_tru}`}>
                                        <img src="/images/header/icon_tru.svg" alt="Icon" />
                                    </button>
                                    <span>{getRoom}</span>
                                    <button className={`img_dl ${styles.btn_cong}`}>
                                        <img src="/images/header/icon_cong.svg" alt="Icon" />
                                    </button>
                                </div>
                            </div>
                            <div className={`${styles.item_sn}`}>
                                <div className={`${styles.txt_sn}`}>
                                    Người lớn
                                </div>
                                <div className={`${styles.sn_calc}`} >
                                    <button className={`img_dl ${styles.btn_tru}`}>
                                        <img src="/images/header/icon_tru.svg" alt="Icon" />
                                    </button>
                                    <span>{getRoom}</span>
                                    <button className={`img_dl ${styles.btn_cong}`}>
                                        <img src="/images/header/icon_cong.svg" alt="Icon" />
                                    </button>
                                </div>
                            </div>
                            <div className={`${styles.item_sn}`}>
                                <div className={`${styles.txt_sn}`}>
                                    Trẻ em
                                </div>
                                <div className={`${styles.sn_calc}`} >
                                    <button className={`img_dl ${styles.btn_tru}`}>
                                        <img src="/images/header/icon_tru.svg" alt="Icon" />
                                    </button>
                                    <span>{getRoom}</span>
                                    <button className={`img_dl ${styles.btn_cong}`}>
                                        <img src="/images/header/icon_cong.svg" alt="Icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
            }

        </div>
    )
}