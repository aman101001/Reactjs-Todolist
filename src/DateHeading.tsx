import { useState } from "react"


function getDate(): string {
    const today: Date = new Date();
    const month: string = today.toLocaleString('default', { month: 'long' });
    const date: string = String(today.getDate());
    const year: string = String(today.getFullYear());
    return `${month} ${date}, ${year}`;
}
function DateHeading() {
    const [date] = useState<string>(getDate());
    return (
        <div className="p-2 mt-20" >
            <p className="text-3xl text-white font-medium text-center [word-spacing:2px]">{date}</p>
        </div >
    )
}

export default DateHeading
