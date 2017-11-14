---

---
// builds lunr
var index = lunr(function () {
  this.field('title', {boost: 10});
  this.field('content');
  this.field('category');
  this.field('tags');
  this.ref('id');

  {% assign count = 0 %}
  {% for post in site.posts %}
  this.add({
    title: {{ post.title | jsonify }},
    category: {{ post.category | jsonify }},
    content: {{ post.content | strip_html | jsonify }},
    tags: {{ post.tags | jsonify }},
    id: {{ count }}
  });{% assign count = count | plus: 1 %}{% endfor %}
  console.log( jQuery.type(index) );


});

// builds reference data
var store = [{% for post in site.posts %}{
  "title": {{ post.title | jsonify }},
  "link": {{ post.url | jsonify }},
  "image": {{ post.image | jsonify }},
  "date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
  "category": {{ post.category | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 30 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}];

// builds search
$(document).ready(function() {
  $('#search-button').on('click', function(e) {
    e.preventDefault();
  })
  $('input#search-field').on('keyup submit', function (e) {
    e.preventDefault();

    var resultdiv = $('#search-results');
    // Get query
    var query = $(this).val();
    // Start search when query is entered
    if (query.length !== 0){
      // Show results & hide categories div
      resultdiv.show();
      $('div#categories').hide();
      // Search for it
      var result = index.search(query);
      // Show results
      resultdiv.empty();
      // Add status
      resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
      // Loop through, match, and add results
      for (var item in result) {
        var ref = result[item].ref;
        var searchitem = '<div class="result"><div class="result-body"><a href="'+store[ref].link+'" class="result-title">'+store[ref].title+'</a><p>'+store[ref].excerpt+'</p></div>';
        resultdiv.append(searchitem);
      }
    } else {
      resultdiv.hide();
      $('div#categories').show();
    }
  });
});
