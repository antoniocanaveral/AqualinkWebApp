

import React, { useState, useEffect } from "react";
import "./styles.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight, faWater, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker, Modal, Button } from "antd"; // Importar Modal y Button de antd
import PropTypes from 'prop-types';
import { initTaskScreen } from "../../../../redux/operation/actionCreator";


const NewMoon = ({ isMain }) => {
    const opacity = isMain ? 0.75 : 0.35;
    const color = "#0f95e9";
    return (
        <svg width="15" height="15" viewBox="0 0 15 15">
            <g fill={color} stroke={color} strokeWidth="0.5" opacity={opacity}>
                <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                <circle cx="7.5" cy="7.5" r="7.25" fill="none" />
            </g>
        </svg>
    );
};

const LeftHalfMoon = ({ isMain }) => {
    const opacity = isMain ? 0.75 : 0.35;
    const color = "#0f95e9";
    return (
        <svg width="15" height="15" viewBox="0 0 15 15">
            <defs>
                <clipPath id="clip-path-left">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#fff" stroke="#707070" strokeWidth="0.5" />
                </clipPath>
            </defs>
            <g opacity={opacity}>
                <g fill="#fff" stroke="#0f95e9" strokeWidth="0.5">
                    <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                    <circle cx="7.5" cy="7.5" r="7.25" fill="none" />
                </g>
                <g clipPath="url(#clip-path-left)">
                    <rect width="9" height="17" x="3" fill={color} />
                </g>
            </g>
        </svg>
    );
};

const FullMoon = ({ isMain }) => {
    const opacity = isMain ? 0.75 : 0.35;
    const color = "#0f95e9";
    return (
        <svg width="15" height="15" viewBox="0 0 15 15">
            <g fill="#fff" stroke={color} strokeWidth="0.5" opacity={opacity}>
                <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                <circle cx="7.5" cy="7.5" r="7.25" fill="none" />
            </g>
        </svg>
    );
};

const RightHalfMoon = ({ isMain }) => {
    const opacity = isMain ? 0.75 : 0.35;
    const color = "#0f95e9";
    return (
        <svg width="15" height="15" viewBox="0 0 15 15">
            <defs>
                <clipPath id="clip-path-right">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#fff" stroke="#707070" strokeWidth="0.5" />
                </clipPath>
            </defs>
            <g opacity={opacity}>
                <g fill="#fff" stroke="#0f95e9" strokeWidth="0.5">
                    <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                    <circle cx="7.5" cy="7.5" r="7.25" fill="none" />
                </g>
                <g clipPath="url(#clip-path-right)">
                    <rect width="9" height="17" x="6" fill={color} />
                </g>
            </g>
        </svg>
    );
};

const WaterDay = ({ isMain }) => {
    const opacity = 0.7;
    const color = isMain ? "red" : "#0f95e9";
    return (
        <FontAwesomeIcon icon={faWater} size="lg" style={{ color: color, opacity: opacity }} />
    );
};

const Perigee = () => {
    const opacity = 0.8;
    const color = "#0f95e9";
    return <FontAwesomeIcon icon={faMoon} size="lg" style={{ color: color, opacity: opacity }} />;
};

const Bullet = ({ parentFill, parentStroke, style }) => {
    return (
        <div className="dcFooterBullet" style={style}>
            <svg width="12" height="12" viewBox="0 0 10 10">
                <g fill={parentFill} stroke={parentStroke} strokeWidth="1" opacity="0.5">
                    <circle cx="5" cy="5" r="5" />
                    <circle cx="5" cy="5" r="4.5" fill="none" />
                </g>
            </svg>
        </div>
    );
};


const Header = () => (
    <div className="headers">
        Administrador de Tareas
    </div>
);


const Separator = ({ className = "separator" }) => (
    <div className={className}></div>
);


const getDateInfo = (date) => {
    const firstDayOfMonth = moment(date).startOf('month').isoWeekday();
    const lastDayOfMonth = moment(date).endOf('month').date();
    return {
        date: date,
        year: date.getFullYear(),
        month: { value: date.getMonth(), label: moment(date).format('MMMM') },
        lastDayOfMonth: lastDayOfMonth,
        posFirstDayOfMonth: firstDayOfMonth,
        day: { label: moment(date).format('dddd'), day: date.getDate() },
    };
};

const compareDates = (date1, date2) => {
    if (moment(date1).isSame(date2, 'day')) return 0;
    return moment(date1).isAfter(date2, 'day') ? 1 : -1;
};

const generateWeeks = (dateInfo) => {
    const weeks = [];
    const startDay = moment(dateInfo.date).startOf('month');
    const endDay = moment(dateInfo.date).endOf('month');

    let currentWeekStart = startDay.clone().startOf('isoWeek'); // Lunes
    while (currentWeekStart.isBefore(endDay) || currentWeekStart.isSame(endDay, 'day')) {
        const week = [];
        for (let i = 0; i < 7; i++) {
            const day = currentWeekStart.clone().add(i, 'days');
            week.push(day);
        }
        weeks.push(week);
        currentWeekStart.add(1, 'week');
    }

    return weeks;
};

const getDateFromStr = (str) => {
    return moment(str, "YYYY-MM-DD").toDate();
};


const TasksScreen = ({ selectedPoolId }) => {
    const dispatch = useDispatch();

    const {
        loading,
        error,
        types,
        screens,
        lastItem,
        campaign,
        lunarCalendars,
        lunarPerigee,
        waterDays,
        loaded,
    } = useSelector((state) => state.operation || {});

    const [dateInfo, setDateInfo] = useState(null);

    const [isDateModalVisible, setIsDateModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        if (selectedPoolId) {
            dispatch(initTaskScreen(selectedPoolId));
        }
    }, [dispatch, selectedPoolId]);

    useEffect(() => {
        if (campaign && campaign.StartDate) {
            setDateInfo(getDateInfo(new Date(campaign.StartDate)));
        } else {
            setDateInfo(null); // Manejar el caso donde no hay campaña activa
        }
    }, [campaign]);


    const handleDateClick = (day) => {
        setSelectedDate(day);
        setIsDateModalVisible(true);
    };

    const handleDateModalClose = () => {
        setIsDateModalVisible(false);
        setSelectedDate(null);
    };

    const weeks = dateInfo ? generateWeeks(dateInfo) : [];


    const renderTasksByDate = (day) => {
        const theDate = day.toDate();
        let tasks = screens.filter(item => {
            const plannedDate = getDateFromStr(item.SM_PlannedDate);
            return (
                theDate.getDate() === plannedDate.getDate() &&
                theDate.getMonth() === plannedDate.getMonth() &&
                theDate.getFullYear() === plannedDate.getFullYear()
            );
        });

        tasks = tasks.map(task => {
            const opType = types.find(op => op.id === task.SM_OperationType_ID.id);
            return {
                ...task,
                Color: opType ? opType.Color : "#000000",
                Name: opType ? opType.Name : "Sin Tipo",
                SM_TextColor: opType ? opType.SM_TextColor : "#FFFFFF",
            };
        });

        return tasks.map((t) => (
            <Bullet
                key={t.SM_CampaignItem_ID}
                parentFill={t.Color}
                parentStroke={t.Color}
                style={{ cursor: 'default' }} // Cambiar el cursor si ya no es clickable
            />
        ));
    };

    const isInCampaign = (day) => {
        const activeCampaign = campaign;
        if (activeCampaign && activeCampaign.StartDate && lastItem && lastItem.SM_PlannedDate) {
            const start = getDateFromStr(activeCampaign.StartDate);
            const lastDate = getDateFromStr(lastItem.SM_PlannedDate);
            const theDate = day.toDate();
            return theDate >= start && theDate <= lastDate;
        } else {
            return false;
        }
    };


    const getTasksForDate = (day) => {
        const theDate = day.toDate();
        let tasks = screens.filter(item => {
            const plannedDate = getDateFromStr(item.SM_PlannedDate);
            return (
                theDate.getDate() === plannedDate.getDate() &&
                theDate.getMonth() === plannedDate.getMonth() &&
                theDate.getFullYear() === plannedDate.getFullYear()
            );
        });

        tasks = tasks.map(task => {
            const opType = types.find(op => op.id === task.SM_OperationType_ID.id);
            return {
                ...task,
                Color: opType ? opType.Color : "#000000",
                Name: opType ? opType.Name : "Sin Tipo",
                SM_TextColor: opType ? opType.SM_TextColor : "#FFFFFF",
            };
        });

        return tasks;
    };


    const moon = (lunarCalendar, isMain) => {
        if (lunarCalendar.SM_LunarStage.id === 'SM_LunarStage_Full') {
            return <FullMoon isMain={isMain} />;
        }
        if (lunarCalendar.SM_LunarStage.id === 'SM_LunarStage_New') {
            return <NewMoon isMain={isMain} />;
        }
        if (lunarCalendar.SM_LunarStage.id === 'SM_LunarStage_CRESCENT') {
            return <LeftHalfMoon isMain={isMain} />;
        }
        if (lunarCalendar.SM_LunarStage.id === 'SM_LunarStage_WANING') {
            return <RightHalfMoon isMain={isMain} />;
        }
        return <></>;
    };


    const renderMoon = (day) => {
        const theDate = day.toDate();
        let previewLc = null;
        for (let lc of lunarCalendars) {
            let lcDate = getDateFromStr(lc.StartDate);
            let comparation = compareDates(lcDate, theDate);
            if (comparation === 0) {
                return moon(lc, true);
            } else if (comparation === -1) {
                previewLc = lc;
            } else if (comparation === 1) {
                break;
            }
        }
        if (previewLc != null) {
            return moon(previewLc, false);
        }
        return <></>;
    };


    const renderWaterDay = (day) => {
        const theDate = day.toDate();
        for (let lc of waterDays) {
            let lcDate = getDateFromStr(lc.StartDate);
            let comparation = compareDates(lcDate, theDate);
            if (comparation === 0) {
                return <WaterDay isMain={lc.SM_IsMaximum} />;
            } else if (comparation === 1) {
                break;
            }
        }
        return <></>;
    };


    const renderPerigees = (day) => {
        const theDate = day.toDate();
        for (let lc of lunarPerigee) {
            let lcDate = getDateFromStr(lc.StartDate);
            let comparation = compareDates(lcDate, theDate);
            if (comparation === 0) {
                return <Perigee />;
            } else if (comparation === 1) {
                break;
            }
        }
        return <></>;
    };


    const renderCalendar = () => {
        if (!dateInfo) {
            return <></>;
        }

        return (
            <div className="csBody">
                {weeks.map((week, idx) => (
                    <div key={idx} className="dayCardsRow">
                        {week.map((day, innerIdx) => {
                            const dayNumber = day.date();
                            const isToday =
                                day.isSame(moment(), 'day');

                            return (
                                <div key={innerIdx} className="dayCard">
                                    <div
                                        className={
                                            isToday
                                                ? "selectedDayCard"
                                                : "dayCard"
                                        }
                                        onClick={() => handleDateClick(day)} // Agregar onClick aquí
                                        style={{ cursor: 'pointer' }} // Cambiar el cursor para indicar que es clickable
                                    >
                                        <div className="dcHeader">
                                            <div className="dcHeaderRow">
                                                <div className="dcHeaderColumn">{renderWaterDay(day)}</div>
                                                <div className="dcHeaderColumn">{renderMoon(day)}</div>
                                                <div className="dcHeaderColumn">{renderPerigees(day)}</div>
                                            </div>
                                        </div>

                                        <div className="dcBody">
                                            <span
                                                className={
                                                    isInCampaign(day)
                                                        ? "dcBodytext"
                                                        : "dcBodyOutsidetext"
                                                }
                                            >
                                                {dayNumber}
                                            </span>
                                        </div>

                                        <div className="dcFooter">
                                            <div className="dcFooterBulletsContainer">
                                                {renderTasksByDate(day)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        );
    };


    const renderBadgesSection = () => {
        if (!types) {
            return <></>;
        }
        return (
            <div className="badgesSection">
                {types.map((ot, idx) => {
                    return (
                        <div key={idx} className="badge1" style={{ backgroundColor: ot.Color }}>
                            <span className="badgeText1" style={{ color: ot.SM_TextColor }}>
                                {ot.Name}
                            </span>
                        </div>
                    );
                })}
            </div>
        );
    };


    const renderLunarCalendar = () => {
        return (
            <div className="lunarCalendarBox">
                <div className="lunarCalendarRow">
                    <div className="lunarCalendarColumn">
                        <NewMoon isMain={true} />
                        <span className="lunarCalendarText">Nueva</span>
                    </div>
                    <div className="lunarCalendarColumn">
                        <RightHalfMoon isMain={true} />
                        <span className="lunarCalendarText">Creciente</span>
                    </div>
                    <div className="lunarCalendarColumn">
                        <FullMoon isMain={true} />
                        <span className="lunarCalendarText">Llena</span>
                    </div>
                    <div className="lunarCalendarColumn">
                        <LeftHalfMoon isMain={true} />
                        <span className="lunarCalendarText">Menguante</span>
                    </div>
                </div>
                <div className="lunarCalendarRow">
                    <div className="lunarCalendarColumn">
                        <Perigee />
                        <span className="lunarCalendarText">Perigeo Lunar</span>
                    </div>
                    <div className="lunarCalendarColumn">
                        <WaterDay isMain={false} />
                        <span className="lunarCalendarText">Aguaje</span>
                    </div>
                    <div className="lunarCalendarColumn">
                        <WaterDay isMain={true} />
                        <span className="lunarCalendarText">Aguaje (Máximo)</span>
                    </div>
                </div>
            </div>
        );
    };


    const renderDaysLabels = () => {
        const daysOfWeek = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];
        return (
            <div className="csDaysLabels">
                {daysOfWeek.map((day, idx) => (
                    <span key={idx} className="csDayLabel">
                        {day}
                    </span>
                ))}
            </div>
        );
    };


    const renderMonthSelector = () => {
        if (!dateInfo || !campaign) {
            return <></>;
        }
        return (
            <div className="csHeader">
                <div className="monthSelectorRow">
                    {renderPrevMonth()}
                    <span className="csHeaderText">
                        {moment(dateInfo.date).format('MMMM')} {dateInfo.year}
                    </span>
                    {renderNextMonth()}
                </div>
            </div>
        );
    };


    const renderNextMonth = () => {
        const lastDate = lastItem && lastItem.SM_PlannedDate
            ? getDateFromStr(lastItem.SM_PlannedDate)
            : null;
        const disabled =
            !lastDate ||
            (lastDate.getMonth() === moment(dateInfo.date).month() &&
                lastDate.getFullYear() === moment(dateInfo.date).year());
        return (
            <button
                onClick={() => {
                    setDateInfo(getDateInfo(moment(dateInfo.date).add(1, 'month').toDate()));
                }}
                disabled={disabled}
                className={`iconContainer ${disabled ? 'iconDisabled' : 'icon'}`}
                style={{ border: 'none', background: 'none', cursor: disabled ? 'not-allowed' : 'pointer' }}
            >
                <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    size={18}
                />
            </button>
        );
    };


    const renderPrevMonth = () => {
        const activeCampaign = campaign;
        if (activeCampaign) {
            const start = getDateFromStr(activeCampaign.StartDate);
            const disabled =
                moment(start).month() === moment(dateInfo.date).month() &&
                moment(start).year() === moment(dateInfo.date).year();
            return (
                <button
                    onClick={() => {
                        setDateInfo(getDateInfo(moment(dateInfo.date).subtract(1, 'month').toDate()));
                    }}
                    disabled={disabled}
                    className={`iconContainer ${disabled ? 'iconDisabled' : 'icon'}`}
                    style={{ border: 'none', background: 'none', cursor: disabled ? 'not-allowed' : 'pointer' }}
                >
                    <FontAwesomeIcon
                        icon={faAngleDoubleLeft}
                        size={18}
                    />
                </button>
            );
        } else {
            return <></>;
        }
    };


    const renderErrorMsg = () => {
        return (
            <div className="errorContainer">
                <span className="errorText">No se pudo cargar la pantalla</span>
            </div>
        );
    };


    const renderContent = () => {
        if (!selectedPoolId) {
            return (
                <div className="centeredContainer">
                    <span className="selectionText">Seleccione una piscina</span>
                </div>
            );
        } else if (loading) {
            return (
                <div className="centeredContainer">
                    <div className="spinner"></div>
                </div>
            );
        } else if (!loading && !error && dateInfo) {
            return (
                <div className="bodyContainer">
                    <div >
                        {renderBadgesSection()}
                        {renderLunarCalendar()}
                    </div>
                    <Separator />

                    <div className="calendarSection">
                        {renderMonthSelector()}
                        <Separator />
                        {renderDaysLabels()}
                        {renderCalendar()}
                    </div>
                    <div className="separator" style={{ height: '130px' }}></div>

                    {/* Nuevo Modal para detalles de la fecha */}
                    <Modal
                        title={`Detalles del ${selectedDate ? moment(selectedDate.toDate()).format('DD/MM/YYYY') : ''}`}
                        visible={isDateModalVisible}
                        onCancel={handleDateModalClose}
                        footer={[
                            <Button key="close" onClick={handleDateModalClose}>
                                Cerrar
                            </Button>
                        ]}
                    >
                        {selectedDate && (
                            <div>
                                <h3>Tareas para este día:</h3>
                                <div className="tasksList">
                                    {getTasksForDate(selectedDate).length > 0 ? (
                                        getTasksForDate(selectedDate).map((task, index) => (
                                            <div 
                                                key={index} 
                                                className="taskItem" 
                                                style={{ 
                                                    color: task.SM_TextColor, 
                                                    backgroundColor: task.Color, 
                                                    padding: '5px', 
                                                    marginBottom: '5px', 
                                                    borderRadius: '4px' 
                                                }}
                                            >
                                                {task.Name}
                                            </div>
                                        ))
                                    ) : (
                                        <p>No hay tareas para este día.</p>
                                    )}
                                </div>
                                {/* Opcional: Agregar más detalles como fase lunar, días de agua, etc. */}
                                <h3>Fase Lunar:</h3>
                                {renderMoon(selectedDate)}
                                <h3>Días de Agua:</h3>
                                {renderWaterDay(selectedDate)}
                                <h3>Perigeo Lunar:</h3>
                                {renderPerigees(selectedDate)}
                            </div>
                        )}
                    </Modal>
                </div>
            );
        } else {
            return (
                <div className="centeredContainer">
                    {renderErrorMsg()}
                </div>
            );
        }
    };

    return (
        <div className="container">
            <Header />
            {renderContent()}
        </div>
    );
};

TasksScreen.propTypes = {
    selectedPoolId: PropTypes.string.isRequired, // Asegúrate de que sea el tipo correcto
};

export default TasksScreen;