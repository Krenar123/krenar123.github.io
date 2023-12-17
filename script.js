$(document).ready(function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    const currentTime = today.getHours();
  
  
    const getTimeOfDay = (hour) => {
      if(dayOfWeek != "Saturday" && dayOfWeek != "Sunday"){
        if(hour >= 0 && hour < 7) {
            return "Sweet dreams, drenusha ime"
        }else if(hour >= 7 && hour < 8) {
            return "Get ready for work my sunshine"
        }else if(hour >= 8 && hour < 17) {
            return 'Sorry stinki, but you have to work <span class="badge rounded-pill text-bg-danger"><i class="fa fa-briefcase" style="font-size: 19px;"></i></span>'
        }else if(hour >= 17 && hour < 20) {
            return 'Yes baby rest, you deserve it(some XoXo might do as well, Nali might call you for a coffee as well :D) <span class="badge rounded-pill text-bg-danger"><i class="fa fa-coffee" style="font-size: 19px;"></i></span>'
        }else if(hour >= 20 && hour < 23) {
            return 'Time for some more knowledge <span class="badge rounded-pill text-bg-danger"><i class="fa fa-book" style="font-size: 19px;"></i></span>'
        }else if(hour >= 23) {
            return "Sweet dreams, drenusha ime"
        }
      }else {
        if(hour >= 0 && hour < 11) {
            return "Sweet dreams, drenusha ime! Its weekend and you deserve some more sleep :D"
        }else if(hour >= 11 && hour < 14) {
            return "Eat breakfast and chill(watching reels)"
        }else if(hour >= 14 && hour < 17) {
            return 'Hope you enjoy every moment with your Mirush <span class="badge rounded-pill text-bg-danger"><i class="fa fa-heart" style="font-size: 19px;"></i></span>'
        }else if(hour >= 17 && hour < 21) {
            return 'Time for some more knowledge <span class="badge rounded-pill text-bg-danger"><i class="fa fa-book" style="font-size: 19px;"></i></span>'
        }else if(hour >= 21 && hour < 23) {
            return 'Goooossiiiip giiiirl xOxO <span class="badge rounded-pill text-bg-danger"><i class="fa fa-television" style="font-size: 19px;"></i></span>'
        }else if(hour >= 23) {
            return "Sweet dreams, drenusha ime"
        }
      }
    };

    var daySchedule = ``;
    if(dayOfWeek != "Saturday" && dayOfWeek != "Sunday"){
        daySchedule = `
            <h2 style="position: relative; top: -80px; text-align: center;">${dayOfWeek}'s Schedule</h2>
            <div class="toast" style="display: block; margin-bottom: 15px;">
                <div class="toast-header">
                    <strong class="me-auto">7am - 8am </strong>
                </div>
                <div class="toast-body">
                    Getting ready for work
                </div>
            </div>
            <div class="toast" style="display: block; margin-bottom: 15px;">
                <div class="toast-header">
                    <strong class="me-auto">8am - 5pm</strong>
                </div>
                <div class="toast-body">
                    Working
                </div>
            </div>
            <div class="toast" style="display: block; margin-bottom: 15px;">
                <div class="toast-header">
                    <strong class="me-auto">5pm - 8pm  </strong>
                </div>
                <div class="toast-body">
                    Relax & Chill
                </div>
            </div>
            <div class="toast" style="display: block; margin-bottom: 15px;">
                <div class="toast-header">
                    <strong class="me-auto">8pm - 11pm </strong>
                </div>
                <div class="toast-body">
                    Studying(can watch reels or talk to Nali from time to time)
                </div>
            </div>
            <div class="toast" style="display: block; margin-bottom: 15px;">
                <div class="toast-header">
                    <strong class="me-auto">11pm - 7am </strong>
                </div>
                <div class="toast-body">
                    Resting
                </div>
            </div>
        `;
    }else {
        daySchedule = `
            <h2 style="position: relative; top: -80px; text-align: center;">${dayOfWeek}'s Schedule</h2>
            <div class="toast" style="display: block; margin-bottom: 15px;">
                <div class="toast-header">
                    <strong class="me-auto">11am - 2pm</strong>
                </div>
                <div class="toast-body">
                    Relax & Chill
                </div>
            </div>
            <div class="toast" style="display: block; margin-bottom: 15px;">
                <div class="toast-header">
                    <strong class="me-auto">2pm - 5pm</strong>
                </div>
                <div class="toast-body">
                    Living the best moments with Nali
                </div>
            </div>
            <div class="toast" style="display: block; margin-bottom: 15px;">
                <div class="toast-header">
                    <strong class="me-auto">5pm - 9pm</strong>
                </div>
                <div class="toast-body">
                    Studying(eating lunch as well though)
                </div>
            </div>
            <div class="toast" style="display: block; margin-bottom: 15px;">
                <div class="toast-header">
                    <strong class="me-auto">9pm - 11pm</strong>
                </div>
                <div class="toast-body">
                    Relax & Chill
                </div>
            </div>
            <div class="toast" style="display: block; margin-bottom: 15px;">
                <div class="toast-header">
                    <strong class="me-auto">11pm - ...</strong>
                </div>
                <div class="toast-body">
                    Resting
                </div>
            </div>
        `;
    }

  
    const scheduleContent = `
      <p>${getTimeOfDay(currentTime)}</p>
    `;
    // Show fontawesome icons as well
  
    $("#schedule-container").html(daySchedule);
    $("#schedule-moment").html(scheduleContent);

    function updateTime() {
        // Specify the time zone for Skopje
        const skopjeTimeZone = 'Europe/Skopje';
        const now = new Date();
        const options = { timeZone: skopjeTimeZone, hour12: false };

        const formattedTime = now.toLocaleTimeString('en-US', options);
        document.getElementById('time').innerText = formattedTime;

        // Update every second
        setTimeout(updateTime, 1000);
    }
    
    function padZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    $("#".concat(dayOfWeek)).prop('checked',true);
      
    // Initial call to start the clock
    updateTime();
});
  