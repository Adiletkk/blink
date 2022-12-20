let $sred = document.querySelectorAll('.sred')
let $sorange = document.querySelectorAll('.sorange')
let $sgreen = document.querySelectorAll('.sgreen')
let $wred = document.querySelectorAll('.wred')
let $worange = document.querySelectorAll('.worange')
let $wgreen = document.querySelectorAll('.wgreen')
let $p1 = document.querySelectorAll('.rgb')
let $p2 = document.querySelectorAll('rgb')
let $p3 = document.querySelectorAll('rgb')
let $p4 = document.querySelectorAll('rgb')

let red = true
let orange = false
let green = false
let redTime
let orangeTime
let greenTime
let redInterval = setInterval(function () {
    clearInterval(greenTime)
    $sred[0].style.backgroundColor = "red"
    $sred[1].style.backgroundColor = "red"
    $wgreen[0].style.backgroundColor = "greenyellow"
    $wgreen[1].style.backgroundColor = "greenyellow"
    $sgreen[0].style.backgroundColor = "black"
    $sgreen[1].style.backgroundColor = "black"
    $wred[0].style.backgroundColor = "black"
    $wred[1].style.backgroundColor = "black"
    red = false
    orange = true
    $sred[0].innerHTML = "2"
    $sred[1].innerHTML = "2"
    redTime = setInterval(function () {
        $sred[0].textContent = $sred[0].textContent - 1
        $sred[1].textContent = $sred[0].textContent
    }, 1000)
    let orangeInterval = setTimeout(function () {
        clearInterval(redTime)
        $sred[0].style.backgroundColor = "black"
        $sred[1].style.backgroundColor = "black"
        $sorange[0].style.backgroundColor = "orange"
        $sorange[1].style.backgroundColor = "orange"
        orange = false
        green = true
        $sorange[0].innerHTML = "1"
        $sorange[1].innerHTML = "1"
        orangeTime = setInterval(function () {
            $sorange[0].textContent = $sorange[0].textContent - 1
            $sorange[1].textContent = $sorange[0].textContent
        }, 1000)
    }, 3000)
    let greenInterval = setTimeout(function () {
        if (green) {
            clearInterval(orangeTime)
            $sgreen[0].style.backgroundColor = "greenyellow"
            $sgreen[1].style.backgroundColor = "greenyellow"
            $sorange[0].style.backgroundColor = "black"
            $sorange[1].style.backgroundColor = "black"
            $wred[0].style.backgroundColor = "red"
            $wred[1].style.backgroundColor = "red"
            $wgreen[0].style.backgroundColor = "black"
            $wgreen[1].style.backgroundColor = "black"
            red = true
            green = false
            $sgreen[0].innerHTML = "2"
            $sgreen[1].innerHTML = "2"
            greenTime = setInterval(function () {
                $sgreen[0].textContent = $sgreen[0].textContent - 1
                $sgreen[1].textContent = $sgreen[0].textContent
            }, 1000)
        }
    }, 5000)
}, 8000)
let p1 = setTimeout(function () {
    if(green){
    clearInterval(redTime)
    $p1[0].style.backgroundColor = "black"
    $p1[1].style.backgroundColor = "red"
    $p2[0].style.backgroundColor = "red"
    $p2[1].style.backgroundColor = "red"
    green = true
    red = false
    $p1[0].innerHTML = "1"
    $p1[1].innerHTML = "1"
    p1 = setInterval(function () {
        $p1[0].textContent = $p2[0].textContent - 1
        $p1[1].textContent = $p2[0].textContent
    
    }, 1000)
}
}, 3000)
let p2 = setTimeout(function () {
    if(red){
    clearInterval(redTime)
    $p1[0].style.backgroundColor = "red"
    $p1[1].style.backgroundColor = "red"
    $p2[0].style.backgroundColor = "red"
    $p2[1].style.backgroundColor = "red"
    green = true
    red = false
    $p2[0].innerHTML = "1"
    $p2[1].innerHTML = "1"
    p1 = setInterval(function () {
        $p2[0].textContent = $p1[0].textContent - 1
        $p2[1].textContent = $p1[0].textContent
    
    }, 1000)
}
}, 3000)

let p3 = setTimeout(function () {
  if(green){
  clearInterval(redTime)
  $p3[0].style.backgroundColor = "black"
  $p3[1].style.backgroundColor = "red"
  $p4[0].style.backgroundColor = "red"
  $p4[1].style.backgroundColor = "red"
  green = false
  red = true
  $p3[0].innerHTML = "1"
  $p3[1].innerHTML = "1"
  p3 = setInterval(function () {
      $p3[0].textContent = $p4[0].textContent - 1
      $p3[1].textContent = $p4[0].textContent
  
  }, 1000)
}
}, 3000)
let p4 = setTimeout(function () {
  if(red){
  clearInterval(redTime)
  $p4[0].style.backgroundColor = "red"
  $p4[1].style.backgroundColor = "red"
  $p3[0].style.backgroundColor = "green"
  $p3[1].style.backgroundColor = "green"
  green = false
  red = true
  $p4[0].innerHTML = "1"
  $p4[1].innerHTML = "1"
  p4 = setInterval(function () {
      $p4[0].textContent = $p3[0].textContent - 1
      $p4[1].textContent = $p3[0].textContent
  
  }, 1000)
}
}, 3000)

// const redLight = document.getElementById('red-light');
// const yellowLight = document.getElementById('yellow-light');
// const greenLight = document.getElementById('green-light');

// function turnOnRedLight() {
//   redLight.style.backgroundColor = 'red';
//   yellowLight.style.backgroundColor = 'gray';
//   greenLight.style.backgroundColor = 'gray';
// }

// function turnOnYellowLight() {
//   redLight.style.backgroundColor = 'gray';
//   yellowLight.style.backgroundColor = 'yellow';
//   greenLight.style.backgroundColor = 'gray';
// }

// function turnOnGreenLight() {
//   redLight.style.backgroundColor = 'gray';
//   yellowLight.style.backgroundColor = 'gray';
//   greenLight.style.backgroundColor = 'green';
// }


// setInterval(turnOnRedLight, 3000);
// setInterval(turnOnYellowLight, 4000);
// setInterval(turnOnGreenLight, 5000);

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       let pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
  
//       var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 8,
//         center: pos
//       });
  
//       var marker = new google.maps.Marker({
//         position: pos,
//         map: map
//       });
//     });
//   }
  

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       console.log(position.coords.latitude, position.coords.longitude);
//     });
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }