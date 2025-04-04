function detectWidthChange() {
    const threshold = 160; // The width change threshold in pixels
    const originalWidth = window.innerWidth;

    setInterval(() => {
        const currentWidth = window.innerWidth;
        if (Math.abs(originalWidth - currentWidth) > threshold) {
            location.reload();
            alert("You are probably being SCAMMED rightnow.");
            
        } 

    }, 1000);
}

window.onload = detectWidthChange();