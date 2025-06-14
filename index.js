document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        const altText = img.alt.toLowerCase();
        if (altText.includes(searchValue)) {
            img.style.visibility = 'visible';
            img.style.opacity = '1';
            img.style.position = 'static';  // Place matching images normally
        } else {
            img.style.visibility = 'hidden';
            img.style.opacity = '0';
            img.style.position = 'absolute';  // Remove non-matching images from the layout
        }
    });
});


function mclaunch() {
    const selectedOption = document.getElementById("version-chooser").value;
    window.location.href = selectedOption;
}

function changeBackgroundColor() {
    var color = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "#000000";
    document.getElementById("colorPicker").value = "#000000";
    localStorage.setItem('backgroundColor', "#000000");
}

function changeTitle() {
    document.title = document.getElementById("titlechanger").value;
    localStorage.setItem('title', document.getElementById("titlechanger").value)
}



function tabPreset(preset) {
    const presets = {
        google: {
            title: 'Google',
            favicon: 'https://www.google.com/favicon.ico'
        },
        classroom: {
            title: 'Home',
            favicon: 'https://www.gstatic.com/classroom/favicon.png'
        },
        canvas: {
            title: 'Canvas',
            favicon: 'https://canvas.instructure.com/favicon.ico'
        },
        docs: {
            title: 'Google Docs',
            favicon: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico'
        },
        clever: {
            title: 'Clever | Portal',
            favicon: 'https://www.clever.com/wp-content/uploads/2023/06/cropped-Favicon-512px-32x32.png'
        }
    };
    const selectedPreset = presets[preset];
    document.querySelector("link[rel='icon']").href = selectedPreset.favicon;
    document.title = selectedPreset.title;
    localStorage.setItem("title", selectedPreset.title)
    localStorage.setItem("icon", selectedPreset.favicon)
}


function changeIcon() {
    var link = document.querySelector("link[rel~='icon']");
    var icon = document.getElementById("iconchanger").value;
    const submit = document.getElementById("submit")
    submit.addEventListener("click", () => {
        link.href = icon;
    })
}

