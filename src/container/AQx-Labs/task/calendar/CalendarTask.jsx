import UilAngleLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import UilAngleRight from '@iconscout/react-unicons/icons/uil-angle-right';
import UilCalender from '@iconscout/react-unicons/icons/uil-calender';
import UilClock from '@iconscout/react-unicons/icons/uil-clock';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit-alt';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilSubject from '@iconscout/react-unicons/icons/uil-subject';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Col, Modal, notification, PageHeader, Row } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import EventForm from './overview/EventForm';
import { addNewEvents, calendarDeleteData } from '../../../../redux/calendar/actionCreator';
import { CalendarWrapper, EventModalStyleWrap } from './Style';
import { Main } from '../../../styled';

const Localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);
export const eventContext = React.createContext();

function CalendarTask() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Calendar',
    },
  ];
  const mapToRBCFormat = (e) => ({ ...e, start: new Date(e.start), end: new Date(e.end) });
  const dispatch = useDispatch();
  const { events } = useSelector((state) => {
    return {
      events: state.Calender.events,
      isVisible: state.Calender.eventVisible,
    };
  });

  const [state, setState] = useState({
    date: new Date(),
    selectedEvent: events[0],
    isEventModalVisible: false,
    isFormModalVisible: false,
    modalTitle: 'Update Event',
  });

  const onSelectEvent = (selectedData) => {
    console.log('Selected event data:', selectedData);  // Asegúrate de que aquí se están obteniendo datos correctos
    setState({
      ...state,
      isEventModalVisible: true,
      isFormModalVisible: false,
      selectedEvent: selectedData,  // Aquí es donde se establece el evento seleccionado
    });
  };


  const onSelectSlot = () => {
    setState({
      ...state,
      isFormModalVisible: true,
      selectedEvent: {},
      modalTitle: 'Create New',
    });
  };

  const onChange = (date) =>
    setState({
      ...state,
      date,
    });

  const onHandleVisible = () => {
    setState({
      ...state,
      isFormModalVisible: true,
      selectedEvent: {},
    });
  };
  const handleCancel = () => {
    setState({
      ...state,
      isFormModalVisible: false,
      isEventModalVisible: false,
    });
  };
  const eventStyleGetter = (event) => {
    return {
      className: event.label,
    };
  };
  const { isFormModalVisible, isEventModalVisible, selectedEvent, modalTitle } = state;

  const activateEdit = (selectedData) => {
    setState({
      ...state,
      selectedEvent: selectedData,
      modalTitle: 'Update Event',
      isEventModalVisible: false,
      isFormModalVisible: true,
    });
  };
  const deleteEvent = (id) => {
    const data = events.filter((item) => item.id !== id);
    dispatch(calendarDeleteData(data));
    setState({
      ...state,
      isEventModalVisible: false,
    });
    notification.open({
      message: 'Selected Event Deleted',
    });
  };
  const addNew = (event) => {
    const arrayData = [];
    events.map((data) => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);
    dispatch(addNewEvents([...events, { ...event, id: max + 1 }]));
    setState({
      ...state,
      isFormModalVisible: false,
    });
    notification.open({
      message: 'New Event Added',
    });
  };
  const updateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event));
    dispatch(addNewEvents(updatedEvents));
    setState({
      ...state,
      isFormModalVisible: false,
    });
    notification.open({
      message: 'Event Updated Successfully',
    });
  };

  return (
    <>
      <Main>
        <CalendarWrapper className="ninjadash-calendar-wrap">
          <Row gutter={25}>
            <Col xxl={24} xl={24} xs={24}>
              <Modal
                className="ninjadash-event-form"
                footer={null}
                type="primary"
                title={modalTitle}
                visible={isFormModalVisible}
                onCancel={handleCancel}
              >
                {selectedEvent && (
                  <eventContext.Provider value={selectedEvent}>
                    <EventForm
                      eventData={selectedEvent}
                      onHandleAddEvent={addNew}
                      onHandleUpdateEvent={updateEvent}
                    />
                  </eventContext.Provider>
                )}


              </Modal>
              <Modal
                title={selectedEvent.title}
                className={`ninjadash-event-details-modal ninjadash-event-details-modal-${selectedEvent.label}`}
                visible={isEventModalVisible}
                onCancel={handleCancel}
                footer={null}
              >
                <EventModalStyleWrap>
                  <div className="ninjadash-event-details-top">
                    <Link to="#" onClick={() => activateEdit(selectedEvent)}>
                      <UilEdit />
                    </Link>
                    <Link to="#" onClick={() => deleteEvent(selectedEvent.id)}>
                      <UilTrash />
                    </Link>
                  </div>
                  <div className="ninjadash-event-details">
                    <ul>
                      <li>
                        <UilCalender />
                        <span className="ninjadash-event-label">Date:</span>
                        <span className="ninjadash-event-text">
                          <strong>
                            {moment(selectedEvent.start).format('Do MMMM YYYY')} to{' '}
                            {moment(selectedEvent.end).format('Do MMMM YYYY')}
                          </strong>
                        </span>
                      </li>
                      <li>
                        <UilClock />
                        <span className="ninjadash-event-label">Time:</span>
                        <span className="ninjadash-event-text">
                          <strong>
                            {moment(selectedEvent.start).format('LT')} - {moment(selectedEvent.end).format('LT')}
                          </strong>
                        </span>
                      </li>
                      <li className="ninjadash-event-description">
                        <UilSubject />
                        <span className="ninjadash-event-text">
                          Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam consetetur sadipscing elitr sed
                          diam
                        </span>
                      </li>
                    </ul>
                  </div>
                </EventModalStyleWrap>
              </Modal>
              <DragAndDropCalendar
                className="ninjadasgcaled"
                selectable
                localizer={Localizer}
                events={events.map(mapToRBCFormat)}
                resizable

                components={{ toolbar: CustomToolbar }}
                defaultView="month"
                defaultDate={new Date()}
                step={60}
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSlot}
                eventPropGetter={eventStyleGetter}
              />
            </Col>
          </Row>
        </CalendarWrapper>
      </Main>
    </>
  );
}

export class CustomToolbar extends Toolbar {
  componentDidMount() {
    const toolbarLink = document.querySelectorAll('.calendar-header__right a');

    for (let i = 0, { length } = toolbarLink; i < length; i++) {

      toolbarLink[i].onclick = function () {
        const activatedLink = document.querySelector('.calendar-header__right a.active');
        if (activatedLink) activatedLink.classList.remove('active');
        this.classList.add('active');
      };
    }
  }

  render() {
    return (
      <div className="calendar-header">
        <div className="calendar-header__left">
          <button type="button" className="btn-today" onClick={() => this.navigate('TODAY')}>
            today
          </button>
          <div className="calender-head__navigation">
            <button className="btn-navigate" type="button" onClick={() => this.navigate('PREV')} aria-label="Previous">
              <UilAngleLeft />
            </button>
            <span className="date-label">{this.props.label}</span>
            <button className="btn-navigate" type="button" onClick={() => this.navigate('NEXT')} aria-label="Next">
              <UilAngleRight />
            </button>
          </div>
        </div>
        <div className="calendar-header__right">
          <ul>
            <li>
              <Link className="active" to="#" onClick={this.view.bind(null, 'month')}>
                Month
              </Link>
            </li>
            <li>
              <Link to="#" onClick={this.view.bind(null, 'week')}>
                Week
              </Link>
            </li>
            <li>
              <Link to="#" onClick={this.view.bind(null, 'day')}>
                Day
              </Link>
            </li>
          </ul>
          <Link to="#" onClick={this.view.bind(null, 'agenda')} className="schedule-list">
            <UilListUl />
            Schedule
          </Link>
        </div>
      </div>
    );
  }
}

export default CalendarTask;
