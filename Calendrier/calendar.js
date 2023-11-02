
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
          groupId: '999',
          title: 'Start',
          start: '2023-09-07T09:00:00'
        },
        {
          title: 'Introduction à l\'algorithmie',
          start: '2023-09-11',
          end: '2023-09-16',
          backgroundColor: '#00aa71',
          borderColor: 'transparent'
        },
        {
          title: 'Algo PHP',
          start: '2023-09-18',
          end: '2023-09-23'
        },
        {
          title: 'HTML-CSS',
          start: '2023-09-25',
          end: '2023-10-21',
          backgroundColor: '#ea6024',
          borderColor: 'transparent'
        },
        {
          title: 'Javascript',
          start: '2023-10-23',
          end: '2023-11-04',
          backgroundColor: '#f7df1e',
          borderColor: 'transparent'
        },
        {
          groupId: '999',
          title: 'Distanciel',
          url: 'https://metis.afpa.fr/login/index.php',
          start: '2023-11-03T08:00:00'
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