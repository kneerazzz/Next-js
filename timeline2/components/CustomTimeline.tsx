import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function CustomTimeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className='text-red-500 vertical-timeline-element--title'
                >
                First element
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='text-green-600 vertical-timeline-element--title'
            >
                Second Element
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}