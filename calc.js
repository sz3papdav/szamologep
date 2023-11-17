let kijelzo = document.getElementById('kijelzo');

function muveletijelek(muveletjel) {
    kijelzo.value += muveletjel;
}

function szam(sorszam) {
    kijelzo.value += sorszam;
}

function tort() {
    if (!kijelzo.value.includes('.')) {
        kijelzo.value += '.';
    }
}

function torles() {
    kijelzo.value = '';
}

function visszatorles() {
    kijelzo.value = kijelzo.value.slice(0, -1);
}

function szamolas() {
    try {
        if (kijelzo.value.trim() === '') {
            throw 'Hiba';
        }
        kijelzo.value = eval(kijelzo.value);
    } catch (error) {
        kijelzo.value = 'Hiba!';
        setTimeout(torlesHiba, 1000);
    }
}

function torlesHiba() {
    kijelzo.value = '';
}