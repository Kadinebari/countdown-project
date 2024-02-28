const countdown_date = new Date("Mar 7, 2024 11:30:00");
        function timer() {
            const time_now = new Date().getTime();
            const time_difference = countdown_date - time_now;
    
            const day = Math.floor(time_difference / (1000 * 60 * 60 * 24));
            const hour = Math.floor((time_difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            const min = Math.floor((time_difference % (1000 * 60 * 60)) / (1000 * 60));
            const sec = Math.floor((time_difference % (1000 * 60)) / (1000));
     
            document.getElementById("day").innerHTML = day;
            document.getElementById("hour").innerHTML = hour < 10 ? '0' + hour : hour;
            document.getElementById("minute").innerHTML = min < 10 ? '0' + min : min;
            document.getElementById("second").innerHTML = sec < 10 ? '0' + sec : sec;
          }
            setInterval(timer,1000);