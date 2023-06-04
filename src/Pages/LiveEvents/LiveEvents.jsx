import React from 'react'
import styles from "./LiveEvents.module.css";
import { liveEvents } from '../../Constants/PageParts';
import Heading from '../../Components/Heading/Heading';
import BackHome from '../../Components/BackHome/BackHome';

const LiveEvents = () => {

  const {app__events, single__event, event__head, multiple__event, events__track, event__detail, get__home} = styles;

  return (
    <div className={app__events}>

      {/* Current Events - Section 1 */}

      <div className={single__event}>
        <div className={event__head}>
          <Heading head={"Current Events"} />
        </div>
        <div className={event__detail}>
          <img src={liveEvents.currentEvent.poster} alt="CEvent" />
          <p>{liveEvents.currentEvent.description}</p>
        </div>
      </div>

      {/* Current Events - Section 1 */}

      {/* Upcoming Events - Section 2 */}

      <div className={multiple__event}>
        <div className={event__head}>
          <Heading head={"Upcoming Events"} />
        </div>
        <div className={events__track}>
          {
            liveEvents.upcomingEvents.map((item) => {
              return (
                <div key={item.id} className={event__detail}>
                  <img src={item.poster} alt="UEvent" />
                  <p>{item.description}</p>
                </div>
              );
            })
          }
        </div>
      </div>

      {/* Upcoming Events - Section 2 */}

      {/* Past Events - Section 3 */}

      <div className={single__event}>
        <div className={event__head}>
          <Heading head={"Past Events"} />
        </div>
        <div className={event__detail}>
          <img src={liveEvents.pastEvents.poster} alt="PEvent" />
          <p>{liveEvents.pastEvents.description}</p>
        </div>
      </div>

      {/* Past Events - Section 3 */}

      {/* Back Home */}
      
      <div className={get__home}>
        <BackHome/>
      </div>

      {/* Back Home */}

    </div>
  );
}

export default LiveEvents