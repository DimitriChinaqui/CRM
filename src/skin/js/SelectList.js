$(document).ready(function () {
  $("#AddAllToCart").click(function(){
    window.CRM.cart.addPerson(listPeople,function(data){
      $(listPeople).each(function(index,data){
        personButton = $("a[data-personid='" + data + "']");
        $(personButton).addClass("RemoveFromPeopleCart");
        $(personButton).removeClass("AddToPeopleCart");
        $('span i:nth-child(2)',personButton).addClass("fa-remove ");
        $('span i:nth-child(2)',personButton).removeClass("fa-cart-plus ");
      });
    });
  });
  
   $("#RemoveAllFromCart").click(function(){
    window.CRM.cart.removePerson(listPeople,function(data){
      $(listPeople).each(function(index,data){
        personButton = $("a[data-personid='" + data + "']");
        $(personButton).addClass("AddToPeopleCart");
        $(personButton).removeClass("RemoveFromPeopleCart");
        $('span i:nth-child(2)',personButton).removeClass("fa-remove");
        $('span i:nth-child(2)',personButton).addClass("fa-cart-plus");
      });
    });
  });
});