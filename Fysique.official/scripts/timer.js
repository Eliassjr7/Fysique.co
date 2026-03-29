// Java script for Men timer; Set target date
const Mtarget = new Date("Mar 26, 2026 16:00:00").getTime();

// Update every second
const Minterval = setInterval(() => {
    const diff = Mtarget - new Date().getTime();
    
    // Calculate time remaining
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Update display
    document.getElementById("Mdays").innerText = d;
    document.getElementById("Mhours").innerText = h;
    document.getElementById("Mminutes").innerText = m;
    document.getElementById("Mseconds").innerText = s;

    // Handle expiration
    if (diff < 0) {
        clearInterval(Minterval);
        document.querySelector(".Mtimer").innerHTML = "AVAILABLE NOW, CLAIM YOURS!";
    }
}, 1000);
// Java script for women timer; Set target date
const Wtarget = new Date("Mar 26, 2026 16:00:00").getTime();

// Update every second
const Winterval = setInterval(() => {
    const diff = Wtarget - new Date().getTime();
    
    // Calculate time remaining
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Update display
    document.getElementById("Wdays").innerText = d;
    document.getElementById("Whours").innerText = h;
    document.getElementById("Wminutes").innerText = m;
    document.getElementById("Wseconds").innerText = s;

    // Handle expiration
    if (diff < 0) {
        clearInterval(Winterval);
        document.querySelector(".Wtimer").innerHTML = "AVAILABLE NOW, CLAIM YOURS!";
    }
}, 1000);