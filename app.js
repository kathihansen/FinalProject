// Top navigation to hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    // hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // navMenu.style.display = "flex";
    // navMenu.classList.toggle("hidden");

}
window.addEventListener("resize", () => {
    if (window.innerWidth >= 600) {
        navMenu.classList.remove("active")
    }
})


// Wizard level one/two
let questionNew = document.getElementById('w1')
let questionNewBuild = document.getElementById('w1a')
let questionNewAnalyze = document.getElementById('w1b')
let questionUser = document.getElementById('w2')
let questionUserMigrate = document.getElementById('w2a')
let questionUserBuild = document.getElementById('w2b')
let questionUserAnalyze = document.getElementById('w2c')


// Wizard new user
questionNew.addEventListener('click', () => {
    if (questionNewBuild.style.visibility == 'visible') {
        questionNewBuild.style.visibility = 'hidden'
    } else if (questionNewBuild.style.visibility == '') {
        questionNewBuild.style.visibility = 'visible'
    } else if (questionNewBuild.style.visibility == 'hidden') {
        questionNewBuild.style.visibility = 'visible'
    }

    if (questionNewAnalyze.style.visibility == 'visible') {
        questionNewAnalyze.style.visibility = 'hidden'
    } else if (questionNewAnalyze.style.visibility == '') {
        questionNewAnalyze.style.visibility = 'visible'
    } else if (questionNewAnalyze.style.visibility == 'hidden') {
        questionNewAnalyze.style.visibility = 'visible'
    }
    // alert('before:backgroundImage = ' + questionNew.style.backgroundImage)

    if (questionNew.style.backgroundImage == 'url("./images/arrow-right.png")') {
        questionNew.style.backgroundImage = 'url("./images/arrow-down.png")'
    } else if (questionNew.style.backgroundImage == '') {
        questionNew.style.backgroundImage = 'url("./images/arrow-down.png")'
    } else if (questionNew.style.backgroundImage == 'url("./images/arrow-down.png")') {
        questionNew.style.backgroundImage = 'url("./images/arrow-right.png")'
    }
    // alert('after:backgroundImage = ' + questionNew.style.backgroundImage)

})

// Wizard existing user
questionUser.addEventListener('click', () => {
    if (questionUserMigrate.style.visibility == 'visible') {
        questionUserMigrate.style.visibility = 'hidden'
    } else if (questionUserMigrate.style.visibility == '') {
        questionUserMigrate.style.visibility = 'visible'
    } else if (questionUserMigrate.style.visibility == 'hidden') {
        questionUserMigrate.style.visibility = 'visible'
    }
    if (questionUserBuild.style.visibility == 'visible') {
        questionUserBuild.style.visibility = 'hidden'
    } else if (questionUserBuild.style.visibility == '') {
        questionUserBuild.style.visibility = 'visible'
    } else if (questionUserBuild.style.visibility == 'hidden') {
        questionUserBuild.style.visibility = 'visible'
    }

    if (questionUserAnalyze.style.visibility == 'visible') {
        questionUserAnalyze.style.visibility = 'hidden'
    } else if (questionUserAnalyze.style.visibility == '') {
        questionUserAnalyze.style.visibility = 'visible'
    } else if (questionUserAnalyze.style.visibility == 'hidden') {
        questionUserAnalyze.style.visibility = 'visible'
    }
    if (questionUser.style.backgroundImage == 'url("./images/arrow-right.png")') {
        questionUser.style.backgroundImage = 'url("./images/arrow-down.png")'
    } else if (questionUser.style.backgroundImage == '') {
        questionUser.style.backgroundImage = 'url("./images/arrow-down.png")'
    } else if (questionUser.style.backgroundImage == 'url("/images/arrow-down.png")') {
        questionUser.style.backgroundImage = 'url("./images/arrow-right.png")'
    }
})

// Wizard level 3
let questionNewBuildModel = document.getElementById('w11')
let questionNewBuildAnalyze = document.getElementById('w12')
let questionUserMigrateHigher = document.getElementById('w21')
let questionUserBuildMDE = document.getElementById('w22')
let questionUserAnalyzeOffload = document.getElementById('w23')
let wizard1 = document.getElementById('wizard1')
    // let back11 = document.querySelector('.back11')

questionNewBuild.addEventListener('click', () => {
    wizard1.style.display = 'none'
    questionNewBuildModel.style.display = 'block'
    back.style.display = 'block'
})

questionNewAnalyze.addEventListener('click', () => {
    wizard1.style.display = 'none'
    questionNewBuildAnalyze.style.display = 'block'
    back.style.display = 'block'
})

questionUserMigrate.addEventListener('click', () => {
    wizard1.style.display = 'none'
    questionUserMigrateHigher.style.display = 'block'
    back.style.display = 'block'
})

questionUserBuild.addEventListener('click', () => {
    wizard1.style.display = 'none'
    questionUserBuildMDE.style.display = 'block'
    back.style.display = 'block'
})

questionUserAnalyze.addEventListener('click', () => {
    wizard1.style.display = 'none'
    questionUserAnalyzeOffload.style.display = 'block'
    back.style.display = 'block'
})

// Back button level 3
back.addEventListener('click', () => {
    questionNewBuildModel.style.display = 'none'
    questionNewBuildAnalyze.style.display = 'none'
    questionUserMigrateHigher.style.display = 'none'
    questionUserBuildMDE.style.display = 'none'
    questionUserAnalyzeOffload.style.display = 'none'
    back.style.display = 'none'
    wizard1.style.display = 'block'
})