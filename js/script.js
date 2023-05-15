<script>
$(".img").on(
  {mousemove:function(event){
            $(".zoom-img").css({
              "clip-path": "circle(50px at "+ event.offsetX +"px "+ event.offsetY +"px)"
              }).removeClass('no');
         }
  }
  );
  

$(".img").hover(function(){
  
},function(){
  $(".zoom-img").addClass('no');
});
</script>


<script>

const circle = document.querySelector(".circle");
document.addEventListener("mousemove", (e) => {
const mouseX = e.clientX;

const mouseY = e.clientY;

    circle.style.left = mouseX + 'px';

    circle.style.top = mouseY + 'px';

});

</script>