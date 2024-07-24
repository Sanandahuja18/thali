const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}



/*For the Dropdown*/
function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function (dd) {
        if (dd !== dropdown) {
            dd.classList.remove('show');
        }
    });
    dropdown.classList.toggle('show');
}

function handleNoSelection(dropdownId, checkbox, btnId) {
    var checkboxes = document.querySelectorAll('#' + dropdownId + ' input[type="checkbox"]');
    checkboxes.forEach(function (cb) {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
    checkbox.checked = true; // Ensure the "No" checkbox remains checked
    updateButtonText(dropdownId, btnId);
}

function handleSelection(dropdownId, checkbox, btnId) {
    var noCheckbox = document.querySelector('#' + dropdownId + ' input[type="checkbox"][value="No"]');
    if (checkbox.checked && noCheckbox) {
        noCheckbox.checked = false;
    }
    updateButtonText(dropdownId, btnId);
}

function updateButtonText(dropdownId, btnId) {
    var checkboxes = document.querySelectorAll('#' + dropdownId + ' input[type="checkbox"]');
    var selected = [];
    checkboxes.forEach(function (cb) {
        if (cb.checked) {
            selected.push(cb.value);
        }
    });
    var button = document.getElementById(btnId);
    if (selected.length > 0) {
        button.textContent = selected.join(', ');
    } else {
        button.textContent = 'Select Options';
    }
}

window.onclick = function (event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!openDropdown.contains(event.target) && !event.target.matches('.dropdown-btn')) {
            openDropdown.classList.remove('show');
        }
    }
}