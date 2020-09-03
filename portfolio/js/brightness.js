rangeInput = document.getElementById('range');
      container = document.getElementsByClassName('container')[0];
      home = document.getElementsByClassName('home')[0];
      topbar = document.getElementsByClassName('topbar')[0];
      about = document.getElementsByClassName('about')[0];
      services = document.getElementsByClassName('services')[0];
      containerslice = document.getElementsByClassName('container-slice')[0];
      leftslice = document.getElementsByClassName('left-slice')[0];
      rightslice = document.getElementsByClassName('right-slice')[0];
      sliced = document.getElementsByClassName('sliced')[0];

      rangeInput.addEventListener("change",function(){
        container.style.filter = "brightness(" + rangeInput.value + "%)";
        home.style.filter = "brightness(" + rangeInput.value + "%)";
        topbar.style.filter = "brightness(" + rangeInput.value + "%)";
        about.style.filter = "brightness(" + rangeInput.value + "%)";
        services.style.filter = "brightness(" + rangeInput.value + "%)";
        containerslice.style.filter = "brightness(" + rangeInput.value + "%)";
        leftslice.style.filter = "brightness(" + rangeInput.value + "%)";
        rightslice.style.filter = "brightness(" + rangeInput.value + "%)";
        sliced.style.filter = "brightness(" + rangeInput.value + "%)";
      });