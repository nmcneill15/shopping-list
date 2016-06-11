$(document).ready(function() {

  $("#item-add-btn").on("click", function(e) {
    e.preventDefault();
    var checkbox = "<input type='checkbox' class='checkbox'>";
    var close = "<span class='close'>X</span>";
    var item = "<span class='item-name'> " + $("#item-input").val() + " </span>";
    var newItem = "<li class='new-item'> " + checkbox + " " + item + " " + close + " </li>";
    $("#list").prepend(newItem);
    $("#item-input").val("").focus();
  });

  $("#list").on("click", "input", function(e) {
    var input = e.target;
    var completed = $(".completed").hasClass("completed");
    if(input.checked) {
      if (!completed) {
        var completedSection = "<li class='completed-section'> - Completed - </li>";
        $("#list").append(completedSection);
      }
      $(this).next().css("text-decoration", "line-through")
      .parent().addClass("completed")
      .appendTo($("#list"));
    } else if(!input.checked) {
      $(this).next().css("text-decoration", "none")
      .parent().removeClass("completed")
      .prependTo($("#list"));
      completed = $(".completed").hasClass("completed");
      if (!completed) {
        $(".completed-section").fadeOut();
      }
    }
  });

  $("#list").on("click", ".close", function() {
    $(this).parent().fadeOut(function() {
      $(this).remove();
      var completed = $(".completed").hasClass("completed");
      if (!completed) {
        $(".completed-section").fadeOut(function(){
          $(this).remove();
        });
      }
    });
  });
  $("#list").sortable({
    cancel: "li.completed, li.completed-section"
  });
});
