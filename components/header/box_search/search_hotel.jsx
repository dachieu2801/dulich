import styles from "@/styles/header/box_search.module.css";
import React, { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { ConfigProvider, DatePicker, Input, Space } from "antd";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import "dayjs/locale/vi";
const { RangePicker } = DatePicker;
dayjs.locale("vi");
import LunarCalendar from "lunar-calendar";
export default function SearchHotel(props) {
  //Xu ly su kien popup goi y
  const [showSuggest, setShowSuggest] = useState(false);
  const boxSuggest = useRef(null);
  const handleClickOut = (event) => {
    if (boxSuggest.current && !boxSuggest.current.contains(event.target)) {
      setShowSuggest(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
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
    document.addEventListener("mousedown", handleClickOutSn);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSn);
    };
  }, []);

  const [dates, setDates] = useState([]);
  const [pickerOpen, setPickerOpen] = useState(false);

  const handleDateChange = (dateRange) => {
    setDates(dateRange);
    setPickerOpen(false);
  };

  const handlePickerOpen = () => {
    setPickerOpen(true);
  };

  const formatDateString = (dateString) => {
    // Parse the dateString with the format 'DD/MM/YYYY'
    const date = dayjs(dateString, "DD/MM/YYYY");
    // Format the date with the desired format 'dddd, DD/MM/YYYY' (Monday, 20/12/2022)
    return date.format("dd, DD/MM/YYYY");
  };

  const [duration, setDuration] = useState(0);
  useEffect(() => {
    if (!dates[0] || !dates[1]) {
      setDates([dayjs(), dayjs()]);
    } else {
      const diffInDays = dates[1].diff(dates[0], "day");
      setDuration(diffInDays);
    }
  }, [dates]);

  const convertToLunar = (date) => {
    const lunarDate = LunarCalendar.solarToLunar(
      date.year(),
      date.month() + 1,
      date.date()
    );
    return lunarDate.lunarDay;
  };

  const dateRender = (current) => {
    const lunarDateString = convertToLunar(current); // Convert current date to lunar date

    return (
      <div className="ant-picker-cell-inner">
        <div className="date">{current.date()}</div>
        <div className="lunar">{lunarDateString}</div>{" "}
        {/* Display lunar date */}
      </div>
    );
  };

  return (
    <div className={`${styles.box_body}`}>
      <div className={`${styles.body_item}`}>
        <div className={`${styles.item_txt}`}>
          <div className={`img_dl ${styles.img_item}`}>
            <img src="/images/header/diadiem.svg" alt="Icon" />
          </div>
          <span className={`${styles.item_txt}`}>Điểm đến</span>
        </div>
        <div className={`${styles.inp_text}`}>
          <input
            type="text"
            placeholder="Thành phố, khách sạn, điểm đến"
            onClick={(e) => {
              setShowSuggest(true);
            }}
          />
        </div>
      </div>
      <div className={`${styles.clear} ${styles.clear_none}`}></div>
      <div className={`${styles.body_dive}`} style={{ position: "relative" }}>
        <div
          className={styles.calendar}
          style={{ position: "absolute", visibility: "hidden" }}
        >
          <ConfigProvider locale={viVN}>
            <Space direction="vertical">
              <Space wrap>
                <RangePicker
                  open={pickerOpen}
                  onOpenChange={setPickerOpen}
                  onChange={handleDateChange}
                  dateRender={dateRender}
                  className={styles.rangePicker}
                />
              </Space>
            </Space>
          </ConfigProvider>
        </div>
        <div className={`${styles.item_child}`}>
          <div className={`${styles.item_txt}`}>
            <div className={`img_dl ${styles.img_item}`}>
              <img src="/images/header/ngaydi.svg" alt="Icon" />
            </div>
            <span className={`${styles.item_txt}`}>Ngày đi</span>
          </div>
          <div className={`${styles.inp_date} ${styles.date1}`}>
            <Input
              onFocus={handlePickerOpen}
              id="range-picker-input"
              value={
                dates[0]
                  ? formatDateString(dates[0].format("DD/MM/YYYY"))
                  : formatDateString(dayjs().format("DD/MM/YYYY"))
              }
              readOnly
            />
          </div>
        </div>
        <div className={`${styles.item_child} ${styles.date_child}`}>
          <p>{duration}</p>
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
          <div className={`${styles.inp_date}  ${styles.date1}`}>
            <Input
              onFocus={handlePickerOpen}
              id="range-picker-input"
              value={
                dates[1]
                  ? formatDateString(dates[1].format("DD/MM/YYYY"))
                  : formatDateString(dayjs().format("DD/MM/YYYY"))
              }
              readOnly
            />
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
        <div
          className={`${styles.inp_text}`}
          onClick={(e) => {
            setShowSn(true);
          }}
        >
          <span>
            {getRoom} Phòng, {getAdult} Người lớn, {getChildren} Trẻ em{" "}
          </span>
        </div>
      </div>
      <div className={`${styles.body_btn}`}>
        <button className={`img_dl ${styles.btn_search}`}>
          <img src="/images/header/icon_search.svg" alt="Icon" />
        </button>
      </div>

      {/* Box goi y dia diem */}
      {showSuggest ? (
        <div className={`${styles.box_suggest_lacation}`} ref={boxSuggest}>
          <div className={`${styles.box_suggest}`}>
            <div className={`${styles.box_suggest_item}`}>
              <div className={`${styles.suggest_title}`}>Tìm kiếm gần đây</div>
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
              </div>
              <div
                className={`${styles.clear}`}
                style={{ height: "1px" }}
              ></div>
              <div className={`${styles.body_item} ${styles.box_zoom}`}>
                <div className={`${styles.item_txt}`}>
                  <div className={`img_dl ${styles.img_item}`}>
                    <img src="/images/header/icon_user.svg" alt="Icon" />
                  </div>
                  <span className={`${styles.item_txt}`}>Số người</span>
                </div>
              </div>
            </div>
            <div className={`${styles.ke_sug}`}></div>
            <div className={`${styles.box_suggest_item}`}>
              <div className={`${styles.suggest_title}`}>Gợi ý</div>
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
      ) : (
        ""
      )}
      {/*Box chon so nguoi*/}
      {showSn ? (
        <div className={`${styles.box_sn}`} ref={boxSn}>
          <div className={`${styles.body_sn}`}>
            <div className={`${styles.item_sn}`}>
              <div className={`${styles.txt_sn}`}>Phòng</div>
              <div className={`${styles.sn_calc}`}>
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
              <div className={`${styles.txt_sn}`}>Người lớn</div>
              <div className={`${styles.sn_calc}`}>
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
              <div className={`${styles.txt_sn}`}>Trẻ em</div>
              <div className={`${styles.sn_calc}`}>
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
      ) : (
        ""
      )}
    </div>
  );
}
