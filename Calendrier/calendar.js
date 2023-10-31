


// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'dayGridMonth'
//     });
//     calendar.render();
//   });




  document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
  
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2023-09-07',
      locale:'fr',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'Formation D2WM Afpa',
          start: '2023-09-07',
          end: '2024-05-17',
          backgroundColor: '#2a3d4f',
          borderColor: 'transparent'
        },
        {
          title: 'Introduction à l\'algorithmie',
          start: '2023-09-07',
          end: '2023-09-16',
          backgroundColor: '#00aa71',
          borderColor: 'transparent'
        },
        {
          title: 'Long Event',
          start: '2023-09-17',
          end: '2023-09-22'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2023-09-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2023-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2023-09-11',
          end: '2023-09-13'
        },
        {
          title: 'Meeting',
          start: '2023-09-12T10:30:00',
          end: '2023-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2023-09-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2023-09-12T14:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2023-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'https://google.com/',
          start: '2023-09-28'
        },
      ]
    });

    // JSON des jours fériés
    fetch('joursF.json')
        .then(response => response.json())
        .then(data => {
            for (let date in data[0]) {
                let event = {
                    title: data[0][date],
                    start: date
                };
                calendar.addEvent(event);
            }
            calendar.render();
        })
  
    calendar.render();
  });