document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    // Hard-coded event data
    const events = [
        {
            title: 'Donation',
            start: '2025-05-01T22:00:00',
            end: '2025-05-10T23:00:00',
            description: 'A donation event to help those in need.',
        },
        {
            title: 'Test',
            start: '2025-05-11T22:00:00',
            end: '2025-05-15T23:00:00',
            description: 'A testing event for showcasing features.',
        }
    ];

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: events,
        eventTimeFormat: {
            hour: '2-digit',
            minute: '2-digit',
            meridiem: true
        },
        eventClick: function(info) {
            // Action when an event is clicked
            alert(`Event: ${info.event.title}\nDescription: ${info.event.extendedProps.description}\nStart: ${info.event.start}\nEnd: ${info.event.end}`);
        }
    });

    calendar.render();
});