if (bubbles.length > 0 && Math.random() < (0.5 / bubbles.length)) {
      var bubble = randomItem(bubbles);
      buffer.push(
            {
                  "position": {
                        "x": bubble.position.x.value.base + Math.floor((Math.random() * (1000 / bubbles.length)) - (500 / bubbles.length)),
                        "y": bubble.position.y.value.base + Math.floor((Math.random() * (1000 / bubbles.length)) - (500 / bubbles.length))
                  }
            }
      );
}
