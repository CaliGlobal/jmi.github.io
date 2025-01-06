!function(i) {
    "use strict";
    var e = function() {};
    e.prototype.init = function() {
        if (i.isFunction(i.fn.fullCalendar)) {
            i("#calendar").fullCalendar({
                header: {
                    left: "prev,next today",
                    center: "title",
                    right: "month,basicWeek,basicDay"
                },
                editable: false, // Disable event editing
                droppable: false, // Disable dropping of external events
                eventLimit: true,
                timeFormat: 'h(:mm)t', // Show hours, minutes, and AM/PM
                
                events: [
                    {
                        id: '1',
                        title: 'Beginning of First Semester 2021-2022',
                        start: '2025-01-06T22:00:00',
                        end: '2025-01-07T23:00:00',
                        description: 'A donation drive to collect clothes and essentials for charity.'
                    },
                    {
                        id: '2',
                        title: 'Blood Donation Camp',
                        start: '2025-05-11T08:00:00',
                        end: '2025-05-11T17:00:00',
                        description: 'Join us for a blood donation camp to save lives!'
                    },
                    {
                        id: '3',
                        title: 'Community Fundraiser',
                        start: '2025-05-15T10:00:00',
                        end: '2025-05-15T18:00:00',
                        description: 'A fundraiser to support underprivileged children in the area.'
                    }
                ],
                eventClick: function(event) {
                    if (event.id) {
                        // Open the URL in a new tab
                        window.open("https://www.jmi.com/" + event.id, "_blank");
                    }
                }
            });

            console.log("Donation calendar initialized successfully.");
        } else {
            alert("Calendar plugin is not installed");
        }
    }, i.DonationPage = new e, i.DonationPage.Constructor = e
}(window.jQuery),

function(e) {
    "use strict";
    window.jQuery.DonationPage.init()
}();
