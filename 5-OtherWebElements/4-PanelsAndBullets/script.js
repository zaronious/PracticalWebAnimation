var panels = $('.panel');
var items = panels.find('li');
var panelDelay = 500;
var itemDelay = 200;
var i = panelDelay;
var j = 1200;

panels.each(function() {
  $(this)
    .delay(i)
    .animate(
      {
        top: '0px',
        opacity: 1
      },
      800
    );
  i += panelDelay;
});

items.each(function() {
  $(this)
    .delay(j)
    .animate(
      {
        left: '0px',
        opacity: 1
      },
      800
    );
  j += itemDelay;
});
