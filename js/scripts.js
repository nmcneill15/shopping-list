$(document).ready(function() {

  $("#item-add-btn").on("click", function(e) {
    e.preventDefault();
    var checkbox = "<input type='checkbox' class='checkbox'>";
    var close = "<span class='close'>X</span>";
    var item = "<span class='item-name'> " + $("#item-input").val() + " </span>";
    var newItem = "<li class='new-item sortable'> " + checkbox + " " + item + " " + close + " </li>";
    $("#list").prepend(newItem);
    $("#item-input").val("").focus();
  });

  $("#list").on("click", "input", function(e) {
    var input = e.target;
    if(input.checked) {
      $(this).next().css("text-decoration", "line-through")
      .parent().addClass("completed")
      .appendTo($("#list"))
      .removeClass("sortable");
    } else if(!input.checked) {
      $(this).next().css("text-decoration", "none")
      .parent().removeClass("completed")
      .prependTo($("#list"))
      .addClass("sortable");
    }
  });

  $("#list").on("click", ".close", function() {
    $(this).parent().fadeOut();
  });
  $("#list").sortable({
    cancel: "li.completed"
  });
});
