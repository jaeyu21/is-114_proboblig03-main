

document.addEventListener("DOMContentLoaded", function () {
  const svg = document.getElementById("jayB");
  const svgNS = "http://www.w3.org/2000/svg";

    function circleSvg(cx, cy, radius, color) {
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", cx);  
      circle.setAttribute("cy", cy);
      circle.setAttribute("r", radius);
      circle.setAttribute("fill", color);
      circle.setAttribute("stroke", "black");
      circle.setAttribute("stroke-width", "2");
      svg.appendChild(circle);
    }

  
    circleSvg(200, 200, 120, "lightblue"); 
    circleSvg(140, 162, 30, "white");       
    circleSvg(140, 162, 22, "black");       
    circleSvg(125, 162, 3, "white");          
    circleSvg(130, 152, 3, "white");        
    circleSvg(250, 162, 30, "white");       
    circleSvg(250, 162, 22, "black");       
    circleSvg(235, 162, 3, "white");        
    circleSvg(240, 152, 3, "white");        
    circleSvg(195, 250, 40, "#240000");     

    const mouth = document.createElementNS(svgNS, "path");
    mouth.setAttribute("d", "M160 250 a3,3 4 0,0 70,0");
    mouth.setAttribute("fill", "#BA3D5B");
    mouth.setAttribute("stroke", "#BA3D5B");
    mouth.setAttribute("stroke-width", "6");
    svg.appendChild(mouth)});



//cirklen

const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

    function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }


  function drawCircle(radius, mode, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(250, 250, radius, 0, Math.PI * 2, true); 
    if (mode === "solid") {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }

//knapp for å rotere cirklen  
const svgElement = document.getElementById('jayB');
svgElement.addEventListener('click', () => { 
  svgElement.classList.toggle('rotate');
});
  drawCircle(100, "solid", "lightblue");
  drawStar(250, 250, 5, 40, 25, "gold");

