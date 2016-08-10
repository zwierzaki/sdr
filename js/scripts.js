'use strict';

// load pet list
var petListSource = $('#pet-list').html();
var petListTemplate = Handlebars.compile(petListSource);
$('#pets .container').append(petListTemplate(data));

var $searchBar = $('header .search input[type="search"]');
var $searchDropdown = $('header .search .dropdown');

$searchBar.on('focus', function() {
  $searchDropdown.show();

}).on('keyup', function(e) {
  // if (e.which == 32) // space
  //   filterPets();

  // if (e.which == 13) // enter
  //   filterPets();

  filterPets();
});

function filterPets() {
  // reset ranks
  $('#pets .card').attr('data-rank', 0);

  var queryArray = $searchBar.val().split(' ');
  var maxRank = 0;

  for (var i = 0; i < queryArray.length; i++) {
    if (queryArray[i].length >= 3) {
      $('#pets .card[data-tags*="' + queryArray[i] + '"').attr('data-rank', function() {
        var newRank = Number($(this).attr('data-rank')) + 1;
        if (newRank > maxRank)
          maxRank = newRank;
        return newRank;
      });
    }
  };

  $('#pets .card').each(function(index) {
    if ($(this).attr('data-rank') == maxRank) {
      $(this).show();
    } else {
      $(this).hide();
    }
  })
};

$searchDropdown.on('click', '.examples li', function(e) {
  var exampleText = $(e.currentTarget).text();
  $searchBar.val(exampleText).trigger('keyup');
  $searchDropdown.hide();
});

$(document).on('click', function(e) {
  var search = $('header .search');

  if (!search.is(e.target) && search.has(e.target).length == 0) {
    $searchDropdown.hide();
  }
});
