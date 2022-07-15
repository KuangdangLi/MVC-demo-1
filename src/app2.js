import "./app2.css";
import $ from "jquery"

const $tb = $('#app2 .tab-bar');
const $tc = $('#app2 .tab-content');

$tb.on('click',"li",(e)=>{
    const $li = $(e.currentTarget);
    $li.addClass("selected")
        .siblings()
        .removeClass("selected")
    const index = $li.index();
    console.log(index)

    $tc.children()
       .eq(index)
       .addClass("active")
       .siblings()
       .removeClass("active")
})

$tb.children().eq(1).trigger('click');