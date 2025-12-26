const text = document.getElementById("text");
const body = document.body;

    function startNatal() {
        body.classList.add("active");
        text.classList.add("show");
        startSnow();
        startConfetti();
    }

   
    function startSnow() {
        for (let i = 0; i < 50; i++) {
            let snow = document.createElement("div");
            snow.className = "snow";
            snow.innerHTML = "❄";
            snow.style.left = Math.random() * window.innerWidth + "px";
            snow.style.animationDuration = (Math.random() * 3 + 2) + "s";
            snow.style.fontSize = (Math.random() * 20 + 10) + "px";
            document.body.appendChild(snow);
        }
    }

  
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confettiPieces = [];

    function startConfetti() {
        for (let i = 0; i < 200; i++) {
            confettiPieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                r: Math.random() * 6 + 4,
                d: Math.random() * 5 + 1,
                color: `hsl(${Math.random() * 360},100%,50%)`
            });
        }
        animateConfetti();
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.y += p.d;
            if (p.y > canvas.height) {
                p.y = -10;
            }
        });
        requestAnimationFrame(animateConfetti);
    }
    const audio = document.getElementById("laguNatal");

    function startNatal() {
       body.classList.add("active");
       text.classList.add("show");
       startSnow();
       startConfetti();

         audio.play(); 
        }


