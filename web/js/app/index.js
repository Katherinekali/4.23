define([], function() {
    function init() {
        bindEvent()
    }

    function bindEvent() {
        let lists = document.querySelector(".list");
        let right = [...document.querySelectorAll(".right div")];
        let index = 0;
        lists.onclick = function(e) {
            let tar = e.target;
            if (tar.tagName === "LI") {
                lists.children[index].className = "";
                right[index].style.display = "none";
                index = tar.id;
                tar.className = "active";
                right[index].style.display = "block";
            }
        }

    }
    init()

})