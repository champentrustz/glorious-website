import {bebas, notoSansThai, spaceArmor} from "@/app/font";
import {gangEvents} from "@/data/eventSchedules";
import {eventDays, getEventTimeList} from "@/modules/getEventTimeList";

let times: any[] = []

const GangEventSchedule = () => {

    gangEvents.map((event: { times: any[]; }) => {
        event.times.find(time => {
            const found = times.includes(time)
            if (!found) times = [...times, time]
        })
    })

    return (

            <div className={` h-full w-[1200px] tablet:w-[1200px] s-desktop:w-full m-desktop:w-full l-desktop:w-full overflow-hidden grid grid-cols-8 gap-0.5 ${notoSansThai.className}`}>
                <div
                    className={`bg-amber-400 flex justify-center items-center text-neutral-900 ${bebas.className}`}>EVENTS
                </div>

                {
                    eventDays.map(day => (
                        <div key={`event-day-${day.day}`}
                             className={'bg-neutral-900 flex justify-center items-center text-gray-400 text-sm'}>{day.label}</div>
                    ))
                }

                {
                    times.sort().map((time, index) => (
                        getEventTimeList(time, (index % 2 === 0) ? 'bg-neutral-800' : 'bg-neutral-700', gangEvents)

                    ))
                }


            </div>
    );
};

export default GangEventSchedule;