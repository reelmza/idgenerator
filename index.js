const formName = document.getElementById('form_name')
const formPos = document.getElementById('form_position')
const formBranch = document.getElementById('form_branch')
const formAssociation = document.getElementById('form_org')
const formMotto = document.getElementById('form_motto')
const formOrgImage = document.getElementById('form_org_image')

const logoImage = document.getElementById('logo_image')
const logoContainer = document.getElementById('logo')

//Text update image
function update(target) {
    if (target === "name") {
        return document.getElementById('detail_name').innerHTML = formName.value
    }

    if (target === "position") {
        return document.getElementById('detail_possition').innerHTML = formPos.value
    }

    if (target === "branch") {
        return document.getElementById('detail_branch').innerHTML = formBranch.value
    }

    if (target === "association") {
        return document.getElementById('detail_association').innerHTML = formAssociation.value
    }

    if (target === "motto") {
        return document.getElementById('detail_motto').innerHTML = "MOTTO: " + formMotto.value
    }

    if (target === 'image') {
        logoContainer.style.display = null;
        if (formOrgImage.value == 0) {
            return logoImage.setAttribute('src', 'assets/stingy.png')
        }

        if (formOrgImage.value == 1) {
            document.getElementById('detail_association').innerHTML = 'LAVISH BOYS ASSOCIATION'
            document.getElementById('detail_motto').innerHTML = "MOTTO: " + "SEND YOUR AZA"
            return logoImage.setAttribute('src', 'assets/lavish.png')
        }

        if (formOrgImage.value == 2) {
            return logoContainer.style.display = 'none';
        }
    }
}

//Change theme
let theme_state = 0
const themeStyle = document.getElementById('bg')

const themeArray = ['url("assets/bg.jpg")', 'linear-gradient(135deg, #feb692 10%, #ea5455 100%)', 'linear-gradient(-145deg, #d4fc79 0%, #96e6a1 100%)', 'linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%)', 'linear-gradient( 135deg, #70F570 10%, #49C628 100%)']

document.getElementById('theme').addEventListener('click', function () {
    if (theme_state < 5) {
        themeStyle.style.background = themeArray[theme_state]
        theme_state++
        return console.log(theme_state)
    }

    theme_state = 0
    themeStyle.style.background = null
})

// User Image Function
document.getElementById('form_image').addEventListener('change', function () {
    const selectedFile = this.files[0]
    if (selectedFile) {
        const reader = new FileReader()
        reader.addEventListener('load', function () {
            document.getElementById('user_image').setAttribute('src', this.result)
        })
        return reader.readAsDataURL(selectedFile)
    }

    return console.log('Select File')
})

//Saving function
document.getElementById('save').addEventListener('click', function () {
    //Hide form
    document.querySelector('.data_form').style.display = 'none'

    //Process & Download Image
    html2canvas(document.querySelector("#id-card"), { scale: 3 }).then(canvas => {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/png");
        a.download = 'myfile.png';
        return a.click();
    });
})