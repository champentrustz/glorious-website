import {notoSansThai} from "@/app/font";

export const eventDays = [
    {
        day: 'monday',
        label: 'วันจันทร์'
    },
    {
        day: 'tuesday',
        label: 'วันอังคาร'
    },
    {
        day: 'wednesday',
        label: 'วันพุธ'
    },
    {
        day: 'thursday',
        label: 'วันพฤหัส'
    },
    {
        day: 'friday',
        label: 'วันศุกร์'
    },
    {
        day: 'saturday',
        label: 'วันเสาร์'
    },
    {
        day: 'sunday',
        label: 'วันอาทิตย์'
    },
]


export const getEventTimeList = (time: string, color: string, loopData: []) =>{
    let html: any[] = []
    let dayElement: any[] = []
    let colElement: any[] = []
    let timeElement: any[] = [
        (<div key={`time-${time}`} className={`${notoSansThai.className} text-gray-400 text-sm bg-neutral-900 flex justify-center items-center`}>{time}</div>)
    ]
    eventDays.map(day => {


        loopData.map((event: any) => {

            const searchDay = event.days.find((eventDay: string) => eventDay === day.day)
            if(searchDay !== undefined){
                const searchTime = event.times.find((eventTime: string) => eventTime === time)
                if(searchTime !== undefined){
                    colElement = [
                        ...colElement,
                        (<p key={`${searchDay}-${searchTime}-${event.event}`}>{event.label}</p>)
                    ]
                }
            }

            dayElement = [
                ...dayElement,
                colElement
            ]

            colElement = []
        })


        html = [...html,
            (<div key={`${day.day}-${time}`} className={`flex flex-col justify-center items-center ${color} ${notoSansThai.className} text-xs text-white gap-1`}>{dayElement}</div>)

        ]
        dayElement = []
    })


    return ([timeElement, html])
}