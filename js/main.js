

function delInput() {
    $('#skills-btn-li').remove();
};

function skillItem() {
let item = $('#input-skills-id').val();
    console.log(item);
    $("#skills-ul").append(

    `<div id="skills-btn-li">
    <button id="skills-delete" onclick="delInput()">X</button>
    <li class="skills-list">${item}</li>
    </div>`);
    $('#input-skills-id').val("");

};

// google adding eventlistener to dynamically generated elements //

//event.preventDefault //


