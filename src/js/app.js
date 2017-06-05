(function() {
  var t = new Trianglify();
  var background = document.querySelector('.background');

  var height = function() {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  };

  var redraw = function() {
    background.style.opacity = 0;
    var pattern = t.generate(document.body.clientWidth, height());
    var svg = pattern.generateSVG();
    background.style.opacity = 1;
    background.innerHTML = '';
    background.appendChild(svg);
    background.style.opacity = 1;
  };

  var performance;
  window.addEventListener('resize', function() {
    clearTimeout(performance);
    performance = setTimeout(redraw, 300);
  });

  redraw();
}());
