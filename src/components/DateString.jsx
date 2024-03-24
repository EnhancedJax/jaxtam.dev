import { parseISO, format } from 'date-fns';

export default function Date({ dateString, dateFormat }) {
    const date = parseISO(dateString) ;
    return (
        <time dateTime={dateString}>{format(date, dateFormat)}</time>
    )
}