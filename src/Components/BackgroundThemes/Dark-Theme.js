const darkOptions = {
      "autoPlay": true,
      "background": {
        "color": { "value": "#0a0a0a" },
        "image": "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #1c2a3a 100%)",
        "position": "50% 50%",
        "size": "cover",
        "repeat": "no-repeat",
        "opacity": 1
      },

      "fullScreen": {
        "enable": true,
        "zIndex": -11
      },
      "fpsLimit": 60,
      "detectRetina": true,
      "interactivity": {
        "events": {
          "onClick": { "enable": true, "mode": "push" },
          "onHover": {
            "enable": true,
            "mode": "grab",
            "parallax": { "enable": true, "force": 40, "smooth": 15 }
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 180,
            "links": { "opacity": 0.3 }
          },
          "push": { "quantity": 2 }
        }
      },
      "particles": {
        "number": {
          "value": 120,
          "density": { "enable": true, "area": 1000 }
        },
        "color": {
          "value": ["#ffb300", "#00c9ff", "#ff61a6", "#7cfc00", "#ff6347", "#8a2be2", "#ffd700"],
          "animation": {
            "h": { "enable": true, "speed": 15, "sync": false }
          }
        },
        "links": {
          "enable": true,
          "distance": 140,
          "color": "#ffffff",
          "opacity": 0.05,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.6,
          "direction": "none",
          "outModes": { "default": "out" }
        },
        "opacity": {
          "value": 0.4,
          "animation": { "enable": true, "speed": 0.6, "minimumValue": 0.1 }
        },
        "size": {
          "value": { "min": 1, "max": 2 },
          "animation": { "enable": true, "speed": 1, "minimumValue": 1 }
        },
        "shape": { "type": "circle" }
      },
      "smooth": true
    }


    export default darkOptions;