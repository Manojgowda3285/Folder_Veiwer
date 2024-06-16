


export interface EventDataItem {
    eventId: number;
    eventName: string;
    eventDate: string;
    closeBy: string;
    closeByTime: string;
    noOfLeads: string;
    inventories: string;
    percentage: string;
    isUpcoming: string;
    isOnGoing: string;
    eventStartDate: string;
    eventEndDate: string;
    noOfInventories: string;
}

// Define the props type
interface EventsListProps {
    data: EventDataItem[];
    totalPages: number;
    totalEntries: number;
    openEventModal: boolean;
    setOpenEventModal: () => {};
    eventName: string;
    setEventName: (name: string) => void;
    startDate: Date;
    setStartDate: (date: Date) => void;
    endDate: Date;
    setEndDate: (date: Date) => void;
    closeByDateValue: Date;
    setCloseByDate: (date: Date) => void;
    setEditData: () => {}
    editData: {}
    eventList: string;
    query: string;
    getAllEvents: () => {}
    onLoadMoreEvents: () => void
    setFooter: () => void
    footer: boolean
    isLoading: () => void
}

const EventsList: React.FC<EventsListProps> = ({
  
}) => {

    



    
    return (
        <div>

        </div>
    );
};

export default EventsList;